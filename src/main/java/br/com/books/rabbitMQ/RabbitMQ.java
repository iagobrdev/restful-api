package br.com.books.rabbitMQ;

import java.io.IOException;

import com.rabbitmq.client.AMQP;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.Consumer;
import com.rabbitmq.client.DefaultConsumer;
import com.rabbitmq.client.Envelope;

public class RabbitMQ {
	
	public void sendMessage() {
		
		ConnectionFactory factory = new ConnectionFactory();
		factory.setUsername("guest");
		factory.setPassword("guest");
		factory.setHost("localhost");
		
		try (Connection connection = factory.newConnection()) {
			  Channel channel = connection.createChannel();
			  channel.queueDeclare("nomeDaFila", false, false, false, null);
			  String mensagem = "Olá Mundo!";
			  channel.basicPublish("", "nomeDaFila", null, mensagem.getBytes("UTF-8"));
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void startConsumer() {
		ConnectionFactory factory = new ConnectionFactory();
		factory.setUsername("guest");
		factory.setPassword("guest");
		factory.setHost("localhost");
		try (Connection connection = factory.newConnection()) {
		  Channel channel = connection.createChannel();
		  channel.queueDeclare("nomeDaFila", false, false, false, null);
		  System.out.println("Ouvindo...");
		  Consumer consumer = new DefaultConsumer(channel) {
		    @Override
		    public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
			      String mensagem = new String(body, "UTF-8");
			      System.out.println("Mensagem recebida: " + mensagem);
		    }
		  };
		  channel.basicConsume("nomeDaFila", true, consumer);
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
}
