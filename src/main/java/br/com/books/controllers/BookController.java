package br.com.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.books.data.vo.v1.BookVO;
import br.com.books.services.BookServices;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/book/v1")
@Tag(name = "Book", description = "Endpoints for Managing Book")
public class BookController {

	@Autowired
	private BookServices service;
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	@Operation(summary = "Finds All Book", description = "Finds All Book", 
		tags = {"Book"},
		responses = {
			@ApiResponse(description = "Sucess", responseCode = "200", 
					content = {
							@Content(
									mediaType = "application/json",
									array = @ArraySchema(schema = @Schema(implementation = BookVO.class))
							)
					}),
			@ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
			@ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
			@ApiResponse(description = "Forbiden", responseCode = "403", content = @Content),
			@ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
			@ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
		}
	)
	public ResponseEntity<PagedModel<EntityModel<BookVO>>> findAll(
		@RequestParam(value = "page", defaultValue = "0") Integer page,
		@RequestParam(value = "limit", defaultValue = "12") Integer limit
	) {
		
		Pageable pageable = PageRequest.of(page, limit);
		return ResponseEntity.ok(service.findAll(pageable));
	}
	
	@GetMapping(value = "/findBookByAuthor/{author}", 
				produces = MediaType.APPLICATION_JSON_VALUE)
	@Operation(summary = "Finds Book by Name", description = "Finds Book by Name", 
		tags = {"Book"},
		responses = {
			@ApiResponse(description = "Sucess", responseCode = "200", 
					content = {
							@Content(
									mediaType = "application/json",
									array = @ArraySchema(schema = @Schema(implementation = BookVO.class))
							)
					}),
			@ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
			@ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
			@ApiResponse(description = "Forbiden", responseCode = "403", content = @Content),
			@ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
			@ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
		}
	)
	public ResponseEntity<PagedModel<EntityModel<BookVO>>> findBooksByAuthor(
		@PathVariable(value = "author") String author,
		@RequestParam(value = "page", defaultValue = "0") Integer page,
		@RequestParam(value = "limit", defaultValue = "12") Integer limit
	) {
		
		Pageable pageable = PageRequest.of(page, limit);
		return ResponseEntity.ok(service.findBooksByAuthor(author, pageable));
	}
	
	@CrossOrigin("http://localhost:8080")
	@GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Operation(summary = "Finds a Book", description = "Finds a Book", 
		tags = {"Book"},
		responses = {
			@ApiResponse(description = "Sucess", responseCode = "200", 
					content = 
							@Content(schema = @Schema(implementation = BookVO.class))
					),
			@ApiResponse(description = "No Content", responseCode = "204", content = @Content),
			@ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
			@ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
			@ApiResponse(description = "Forbiden", responseCode = "403", content = @Content),
			@ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
			@ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
		}
	)
	public BookVO findById(@PathVariable(value = "id") Long id) throws Exception{
		
		return service.findById(id);
	}
	
	@CrossOrigin("http://localhost:8080")
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@Operation(summary = "Add a Book", description = "Add a Book", 
		tags = {"Book"},
		responses = {
			@ApiResponse(description = "Sucess", responseCode = "200", 
					content = 
							@Content(schema = @Schema(implementation = BookVO.class))
					),
			@ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
			@ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
			@ApiResponse(description = "Forbiden", responseCode = "403", content = @Content),
			@ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
			@ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
		}
	)
	public BookVO create(@RequestBody BookVO Book) throws Exception{
		
		return service.create(Book);
	}
	
	@PutMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@Operation(summary = "Update a Book", description = "Update a Book", 
		tags = {"Book"},
		responses = {
			@ApiResponse(description = "Sucess", responseCode = "200", 
					content = 
							@Content(schema = @Schema(implementation = BookVO.class))
					),
			@ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
			@ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
			@ApiResponse(description = "Forbiden", responseCode = "403", content = @Content),
			@ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
			@ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
		}
	)
	public BookVO update(@RequestBody BookVO Book) throws Exception{
		
		return service.update(Book);
	}
	
	@CrossOrigin("http://localhost:8080")
	@PatchMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Operation(summary = "Disable a specific Book by your ID", description = "Disable a specific Book by your ID", 
		tags = {"Book"},
		responses = {
			@ApiResponse(description = "Sucess", responseCode = "200", 
					content = 
							@Content(schema = @Schema(implementation = BookVO.class))
					),
			@ApiResponse(description = "No Content", responseCode = "204", content = @Content),
			@ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
			@ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
			@ApiResponse(description = "Forbiden", responseCode = "403", content = @Content),
			@ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
			@ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
		}
	)
	public BookVO disableBook(@PathVariable(value = "id") Long id) throws Exception{
		
		return service.disableBook(id);
	}
	
	@DeleteMapping(value = "/{id}")
	@Operation(summary = "Delete a Book", description = "Delete a Book", 
		tags = {"Book"},
		responses = {
			@ApiResponse(description = "Sucess", responseCode = "204", content = @Content),
			@ApiResponse(description = "No Content", responseCode = "204", content = @Content),
			@ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
			@ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
			@ApiResponse(description = "Forbiden", responseCode = "403", content = @Content),
			@ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
			@ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
		}
	)
	public ResponseEntity<?> delete(@PathVariable(value = "id") Long id) {
		
		service.delete(id);
		
		return ResponseEntity.noContent().build();
	}
}
