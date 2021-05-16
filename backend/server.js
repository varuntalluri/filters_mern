require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db.js");
const errorHandler = require("./middleware/errorHandler.js");

connectDB();
const app = express();

//middleware
app.use(express.json());

//routes

app.use("/api/v1/products", require("./routes/productRoutes"));

// Error handler

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
