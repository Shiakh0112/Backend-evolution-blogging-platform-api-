const express = require("express");
const connectDB = require("./models/db"); // Import the connectDB function
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const postRoutes = require("./routes/postRoutes");
const authorRoutes = require("./routes/authorRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/posts", postRoutes);
app.use("/authors", authorRoutes);

app.get("/", (req, res) => res.send("Welcome to the Blogging Platform API"));

// Error Handler Middleware
app.use(errorHandler);

// Connect to MongoDB
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
