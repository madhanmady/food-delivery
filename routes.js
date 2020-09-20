const fs = require("fs");
const express = require("express");
const router = express.Router();

router.get("/", (req, response) => {
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

router.get("/index.html", (req, response) => {
  fs.readFile("./index.html", "utf-8", (err, html) => {
    if (err) {
      response
        .status(500)
        .send("Something went wrong, Please try again later.");
    } else {
      response.send(html);
    }
    response.end();
  });
});

router.get("/contact.html", (req, response) => {
  fs.readFile("./contact.html", "utf-8", (err, html) => {
    if (err) {
      response
        .status(500)
        .send("Something went wrong, Please try again later.");
    } else {
      response.send(html);
    }
    response.end();
  });
});

router.get("/donate.html", (req, response) => {
  fs.readFile("./donate.html", "utf-8", (err, html) => {
    if (err) {
      response
        .status(500)
        .send("Something went wrong, Please try again later.");
    } else {
      response.send(html);
    }
    response.end();
  });
});

router.get("/submit", function (req, response) {
  console.log("Query : ", req.query);

  response.send("Success");
  response.end();
});

module.exports = router;
