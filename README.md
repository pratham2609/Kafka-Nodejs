# Kafka Test App in Node.js

This is a small test application demonstrating the usage of Apache Kafka with Node.js.

## Introduction

This application is designed to showcase how to produce and consume messages using Apache Kafka in a Node.js environment. It serves as a basic example for developers who want to integrate Kafka into their Node.js applications.

## Features

- Kafka Admin: Creates topics.
- Kafka Producer: Sends messages to a Kafka topic.
- Kafka Consumer: Reads messages from a Kafka topic.

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [Apache Kafka](https://kafka.apache.org/) (running instance)

## Installation

1. Clone the repository:
   
   ```sh
   git clone https://github.com/your-username/kafka-test-app.git
   cd kafka-test-app
   
2. Start Zookeeper Container and expose PORT `2181`:

   ```sh
   docker run -p 2181:2181 zookeeper

3. Run Kafka Locally using docker, Replace PRIVATE_IP with your IP address:

   ```sh
   docker run -p 9092:9092 \
   -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
   -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
   -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
   confluentinc/cp-kafka

## Running Locally

- Run Multiple Consumers:
  
  ```sh
  node consumer.js <GROUP_NAME>
  
Replace `<GROUP_NAME>` with your actual consumer group name when running the consumer script.

- Create Producer:
  
  ```sh
  node producer.js

```sh
> tony south
> tony north

