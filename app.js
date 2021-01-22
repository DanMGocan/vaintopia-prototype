const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(logger("developer"));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    let time = new Date();
    res.send(`<p>Hello! Your visit has been registered at ${time.toLocaleString()}!</p>`)
})

/* App init. */
app.listen(PORT, () => {
    console.log(`Server initiated on PORT ${PORT} and ${NODE_ENV} environment`);
});