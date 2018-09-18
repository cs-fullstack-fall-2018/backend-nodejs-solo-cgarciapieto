const express = require("express");
const bodyParser = require("body-parser");

const index = express();

index.use(bodyParser.json());


