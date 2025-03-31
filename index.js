const express = require('express')
const router = require('./router/url')
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/URLShortner")

const app = express();
app.use(express.json());
const PORT = 8001;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server has started at PORT: ${PORT}`);
});