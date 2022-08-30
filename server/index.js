const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')

// import routes here

dotenv.config();

const app = express();

// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('*', (req, res) => {
    res.status(400).send('Page Not Found');
})

app.listen(process.env.PORT, () => {
    console.log(`server listening to ${process.env.PORT}`)
})