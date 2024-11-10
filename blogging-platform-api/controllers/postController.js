const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../db.json");

const getPosts = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  res.json(data.posts);
};

const getPostById = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const post = data.posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
};

const createPost = (req, res) => {
  const { title, content, author } = req.body;
  const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const newPost = { id: Date.now(), title, content, author };
  data.posts.push(newPost);
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  res.status(201).json(newPost);
};

const updatePost = (req, res) => {
  const { title, content } = req.body;
  const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const postIndex = data.posts.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (postIndex === -1)
    return res.status(404).json({ error: "Post not found" });
  data.posts[postIndex] = { ...data.posts[postIndex], title, content };
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  res.json(data.posts[postIndex]);
};

const deletePost = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const updatedPosts = data.posts.filter(
    (p) => p.id !== parseInt(req.params.id)
  );
  fs.writeFileSync(dbPath, JSON.stringify({ posts: updatedPosts }, null, 2));
  res.json({ message: "Post deleted" });
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
