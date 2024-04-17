const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB } = require("../config");
const dotenv = require("dotenv");
const booksRoute = require("../routes/booksRoute");

const app = express();
const PORT = 3001 || process.env.PORT;

// middlewares
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/books", booksRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running in port ${PORT}`);
})