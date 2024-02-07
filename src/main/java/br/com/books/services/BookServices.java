package br.com.books.services;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.books.controllers.BookController;
import br.com.books.data.vo.v1.BookVO;
import br.com.books.exceptions.RequiredObjectIsNullException;
import br.com.books.exceptions.ResourceNotFoundException;
import br.com.books.mapper.DozerMapper;
import br.com.books.model.Book;
import br.com.books.repositories.BookRepository;


@Service
public class BookServices {
	
	private Logger logger = Logger.getLogger(BookServices.class.getName());
	
	@Autowired
	BookRepository repository;
	
	public List<BookVO> findAll() {
		
		logger.info("Finding all book!");
		
		var books = DozerMapper.parseListObjects(repository.findAll(), BookVO.class);
		
		books.stream().forEach(p -> {
			try {
				p.add(linkTo(methodOn(BookController.class).findById(p.getKey())).withSelfRel());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});
		
		return books;
	}
	
	public BookVO findById(Long id) {
		
		logger.info("Finding one Book!");
		
		var entity = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No recordes found for this ID!"));
			
		var vo =  DozerMapper.parseObject(entity, BookVO.class);
		
		try {
			vo.add(linkTo(methodOn(BookController.class).findById(id)).withSelfRel());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return vo;
	}
	
	public BookVO create(BookVO book) {

		if(book == null) throw new RequiredObjectIsNullException();
		
		logger.info("Creating one Book!");
		
		var entity = DozerMapper.parseObject(book, Book.class);
		
		var vo = DozerMapper.parseObject(repository.save(entity), BookVO.class);
		
		try {
			vo.add(linkTo(methodOn(BookController.class).findById(vo.getKey())).withSelfRel());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return vo;
	}
	
	public BookVO update(BookVO book) {

		if(book == null) throw new RequiredObjectIsNullException();
		
		logger.info("Updating one Book!");
		
		var entity = repository.findById(book.getKey()).orElseThrow(() -> new ResourceNotFoundException("No recordes found for this ID!"));
		
		entity.setAuthor(book.getAuthor());
		entity.setLaunch_date(book.getLaunch_date());
		entity.setPrice(book.getPrice());
		entity.setTitle(book.getTitle());
		
		var vo = DozerMapper.parseObject(repository.save(entity), BookVO.class);
		
		try {
			vo.add(linkTo(methodOn(BookController.class).findById(vo.getKey())).withSelfRel());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return vo;	
	}
	
	public void delete(Long id) {

		logger.info("Deleting one Book!");
		
		var entity = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No recordes found for this ID!"));
		
		repository.delete(entity);
	}
}
