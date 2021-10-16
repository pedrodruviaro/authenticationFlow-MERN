const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// routes
const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");

const app = express();
const uri = process.env.MONGO_URI;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);
app.use(notesRoutes);

mongoose
    .connect(uri)
    .then(() => app.listen(5000, () => console.log(`Server up and running!`)))
    .catch((err) => {
        console.error(err);
        return;
    });
