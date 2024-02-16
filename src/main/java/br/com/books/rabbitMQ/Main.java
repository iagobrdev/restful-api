package br.com.books.rabbitMQ;

public class Main {

	public static void main(String args[]) {
		
		try {
			RabbitMQ rabbit = new RabbitMQ();
			rabbit.startConsumer();
			Thread.sleep(2000);
			rabbit.sendMessage();
			System.out.println("teste");
		}
		catch(Exception e) {}
	}
}
