require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

app.use(express.urlencoded({ extended: true }));





app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`listening for requests on port ${PORT}`);
});