const express = require("express");
const { getRoute, postRoute } = require("../controller/get.controller.js");

const router = express.Router();

router.get("/getRoute", getRoute);
router.post("/post", postRoute);

module.exports = router;
