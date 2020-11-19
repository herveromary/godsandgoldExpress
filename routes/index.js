const express = require("express");
const router = express.Router();

const gods = require("./gods");
const users = require("./users");

router.use("/gods", gods);
router.use("/users", users);

module.exports = router;
