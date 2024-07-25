const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

const examplesRouter = require('./routes/example')

app.use('/examples', examplesRouter);
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAST_URI;

mongoose.connect(uri, {
    dbName: "",
    user: "",
    pass: "",
    host: "",
    port: port,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;

try {
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully")
    });
    
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
    
} catch(error) {
    console.log(error)
}


