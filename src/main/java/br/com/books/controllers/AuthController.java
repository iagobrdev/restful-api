package br.com.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.books.data.vo.v1.security.AccountCredentialsVO;
import br.com.books.services.AuthServices;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Authentication Endpoint")
@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	AuthServices authServices;
	
	@SuppressWarnings("rawtypes")
	@Operation(summary = "Authenticates a user and returns a token!")
	@PostMapping(value = "/signin")
	public ResponseEntity signin(@RequestBody AccountCredentialsVO data) {
		
		if(checkIfParamsIsNotNull(data)) 
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid client request!");

		var token = authServices.signin(data);
		
		if(token == null) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid client request!");
		} else {
			return token;
		}
	}
	
	private boolean checkIfParamsIsNotNull(AccountCredentialsVO data) {
		return data == null || data.getUserName() == null || data.getUserName().isBlank() ||
			   data.getPassword() == null || data.getPassword().isBlank();
	}
}
