const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./api')

const app = express()

app.use(bodyParser.json());

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGODB_URL

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use('/', api);

app.listen(5000, () => console.log('Server started on port 5000'))