package br.com.books.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "books")
public class Book implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, length = 100)
	private String author;
	
	@Column(nullable = false)
	@Temporal(TemporalType.DATE)
	private Date launch_date;
	
	@Column(nullable = false)
	private Double price;
	
	@Column(nullable = false, length = 255)
	private String title;
	
	@Column(nullable = false)
	private Boolean enabled;
	
	public Book() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Date getLaunch_date() {
		return launch_date;
	}

	public void setLaunch_date(Date launch_date) {
		this.launch_date = launch_date;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Book(Long id, String author, Date launch_date, Double price, String title, Boolean enabled) {
		this.id = id;
		this.author = author;
		this.launch_date = launch_date;
		this.price = price;
		this.title = title;
		this.enabled = enabled;
	}

	@Override
	public int hashCode() {
		return Objects.hash(author, enabled, id, launch_date, price, title);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		return Objects.equals(author, other.author) && Objects.equals(enabled, other.enabled)
				&& Objects.equals(id, other.id) && Objects.equals(launch_date, other.launch_date)
				&& Objects.equals(price, other.price) && Objects.equals(title, other.title);
	}
}
