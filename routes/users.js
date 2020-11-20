const express = require("express");
const router = express.Router();
const connection = require("../config");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM user WHERE id = ?", [id], (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.post("/", (req, res) => {
  connection.query(
    "INSERT INTO user (login, password, email) VALUES (?,?,?)",
    [login, password, email],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error saving a member");
      } else {
        res.status(200).send("New member created");
      }
    }
  );
});

module.exports = router;
