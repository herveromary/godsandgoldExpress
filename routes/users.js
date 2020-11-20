const express = require("express");
const router = express.Router();
const connection = require("../config");

var cors = require("cors");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get("/by_id/:id", (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM user WHERE id = ?", [id], (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get("/by_name/:name", cors(), (req, res) => {
  const name = req.params.name;
  connection.query(
    "SELECT * FROM user WHERE login = ?",
    [name],
    (err, results) => {
      if (err) {
        console.log(err);
        console.log(results);
        res.sendStatus(500);
      } else {
        res.status(200).json(results[0]);
      }
    }
  );
});

router.post("/", cors(), (req, res) => {
  const { login, password, email } = req.body;
  connection.query(
    "INSERT INTO user (login, password, email) VALUES (?,?,?)",
    [login, password, email],
    (err, results) => {
      if (err) {
        res.status(500).send("Error saving a member");
      } else {
        res.status(200).send("New member created");
      }
    }
  );
});

module.exports = router;
