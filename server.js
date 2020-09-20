// imports
const express = require("express");
const http = require("http");
const routes = require("./routes");
const user = require("./userInfo");
const { MongoClient } = require("mongodb");

const app = express();
const server = http.createServer(app);
const fs = require("fs");
const client = new MongoClient(user.uri);

// Redirects
app.use("/", routes);
app.use(express.static("css"));
app.use(express.static("scripts"));
app.use(express.static("images"));

app.use("/css", express.static("css"));
app.use("/scripts", express.static("scripts"));
app.use("/images", express.static("images"));

server.listen(3000, () => {
  console.log("Server created at http://localhost:3000");
});

connectDb();

async function connectDb() {
  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }

  async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
  }
}
