const express = require("express");
const https = require("https");
const fs = require("fs");
const bodyParser = require('body-parser');
const enableHttps = false;
const app = express();
app.use(bodyParser.json());
app.use("/", express.static("./dist"));
app.listen(80,
() => console.log("HTTP Server running on port 80"));
if (enableHttps) {
https.createServer(ssloptions, app).listen(443,
() => console.log("HTTPS Server running on port 443"));
} else {
console.log("HTTPS disabled")
}

