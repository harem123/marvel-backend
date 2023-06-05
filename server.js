const url = require('url');
const express = require("express");
const bodyParser = require('body-parser')
const v1Router = require('./src/routes/routerIndex.js')
const cors = require('cors');
const helmet = require('helmet')
require('dotenv').config();

const app = express();
app.use(helmet())
app.use(cors());
app.use(bodyParser.json({ limit: '300kb' }));
app.use(bodyParser.urlencoded({ limit: '300kb', extended: true }));

app.use("/api/v1", v1Router)

const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
// exports server for testing
module.exports = app; 