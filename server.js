// imports
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const fs = require("fs");

// Redirects
app.use(express.static("css"));
app.use(express.static("scripts"));
app.use(express.static("images"));
app.use("/css", express.static("css"));
app.use("/scripts", express.static("scripts"));
app.use("/images", express.static("images"));

app.get("/", function (req, response) {
  fs.readFile("./index.html", "utf-8", (err, html) => {
    if (err) {
      response
        .status(500)
        .send("Something went wrong, Please try again later.");
    }
    response.send(html);
    response.end();
  });
});

app.get("/index.html", function (req, response) {
  fs.readFile("./index.html", "utf-8", (err, html) => {
    if (err) {
      response
        .status(500)
        .send("Something went wrong, Please try again later.");
    }
    response.send(html);
    response.end();
  });
});

app.get("/contact.html", function (req, response) {
  fs.readFile("./contact.html", "utf-8", (err, html) => {
    if (err) {
      response
        .status(500)
        .send("Something went wrong, Please try again later.");
    }
    response.send(html);
    response.end();
  });
});

app.get("/donate.html", function (req, response) {
  fs.readFile("./donate.html", "utf-8", (err, html) => {
    if (err) {
      response
        .status(500)
        .send("Something went wrong, Please try again later.");
    }
    response.send(html);
    response.end();
  });
});

server.listen(3000, () => {
  console.log("Server created at http://localhost:3000");
});
