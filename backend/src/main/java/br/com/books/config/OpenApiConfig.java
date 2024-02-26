package br.com.books.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class OpenApiConfig {
	
	//configurações do Swagger
	@Bean
	public OpenAPI customOpenAPI() {
		return new OpenAPI()
				.info(new Info()
						.title("Books RESTful Api")
						.version("v1")
						.description("API developed for my portfolio.")
						/*.termsOfService("http://localhost:8080")
						.license(
								new License()
								.name("Apache 2.0")
								.url("http://localhost:8080")
								)*/
						);
	}
	
}
