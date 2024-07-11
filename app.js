const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port =5500
const bodyParser = require("body-parser"); 
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDnpmB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


const studentRouter = require('./routes/students');
app.use('/students', studentRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
