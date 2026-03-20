require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;






app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`listening for requests on port ${PORT}`);
});