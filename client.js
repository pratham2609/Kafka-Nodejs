const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "kafka-test",
    brokers: ["localhost:9092"],
});