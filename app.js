require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");
const signUpRouter = require("./routes/signUpRouter");
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/sign-up", signUpRouter);
app.get("/", (req, res) => res.send("Members Only"));




app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`listening for requests on port ${PORT}`);
});