require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const app = express();
const path = require("node:path");
const signUpRouter = require("./routes/signUpRouter");
const joinClubRouter = require("./routes/joinClubRouter");
require("./config/passport");
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
     }
}));
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.use("/join-club", joinClubRouter);
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