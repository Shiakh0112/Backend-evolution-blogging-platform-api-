const Author = require("../models/authorModel");

const createAuthor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newAuthor = new Author({ name, email });
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ error: "Error creating author" });
  }
};

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: "Error fetching authors" });
  }
};

module.exports = { createAuthor, getAuthors };
