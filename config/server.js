const express = require('express');
const connectDB = require('./db');
const bookRoute = require("../routes/books");
const cors = require('cors');
const bodyParser = require("body-parser");
const { port } = require('./config');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/books", bookRoute);

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(port, () => console.log(`Server running on port ${port}`));