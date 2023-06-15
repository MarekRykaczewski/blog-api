const express = require('express')
require('dotenv').config();

const app = express()

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGODB_URL

app.listen(5000, () => console.log('Server started on port 5000'))