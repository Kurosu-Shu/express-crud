const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routers/index');

app.use(express.urlencoded({ extended: true }));
app.use(router);

const dbUri = "mongodb+srv://kurosu:Kurosukurosu@cluster0.0hz6j2f.mongodb.net/crud";

mongoose
    .connect(dbUri)
    .then(
        app.listen(8000, () => {
            console.log("server is listening on port 8000");
        })
    ).catch((error) => console.log(error));

