package br.com.books.integrationtests.swagger;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.*;

import java.time.Duration;

import org.awaitility.Awaitility;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import br.com.books.configs.TestConfigs;
import br.com.books.integrationtests.testcontainer.AbstractIntegrationTest;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class SwaggerIntegrationTest extends AbstractIntegrationTest{

	/*
	@Test
	void shouldDisplaySwaggerUiPage() {
	    Awaitility.await().atMost(Duration.ofSeconds(30))
	            .pollInterval(Duration.ofSeconds(1))
	            .until(() -> {
	                try {
	                    given()
	                        .basePath("/swagger-ui/index.html")
	                        .port(TestConfigs.SERVER_PORT)
	                        .when()
	                            .get()
	                        .then()
	                            .statusCode(200)
	                            .extract()
	                            .body()
	                            .asString();
	                    return true; 
	                } catch (Exception e) {
	                    return false;
	                }
	            });

	    var content = given()
	                        .basePath("/swagger-ui/index.html")
	                        .port(TestConfigs.SERVER_PORT)
	                        .when()
	                            .get()
	                        .then()
	                            .statusCode(200)
	                        .extract()
	                            .body()
	                            .asString();
	    assertTrue(content.contains("Swagger UI"));
	}
*/
}
