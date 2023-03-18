const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "user",
  password: "pass",
  database: "postgres",
});

client.connect();

client.query('CREATE DATABASE "lead"', (err, res) => {
  console.log(err, res);
  client.end();
});
