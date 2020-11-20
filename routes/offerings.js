const express = require("express");
const router = express.Router();
const connection = require("../config");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM gift", (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get("/gods/:idGod/users/:idUser", (req, res) => {
  const { idGod, idUser } = req.params;
  connection.query(
    "SELECT go.name, go.description, go.picture, g.request FROM gift as g JOIN god as go ON go.id = g.god_id WHERE g.god_id = ? AND g.user_id = ?",
    [idGod, idUser],
    (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
