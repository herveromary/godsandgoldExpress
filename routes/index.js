const express = require("express");
const router = express.Router();

const gods = require("./gods");
const users = require("./users");
const offerings = require("./offerings");

router.use("/gods", gods);
router.use("/users", users);
router.use("/offerings", offerings);

module.exports = router;
