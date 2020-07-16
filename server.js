const express = require("express");
const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port);