# Blogging Platform API

This is a simple blogging platform API built with Node.js, Express, and MongoDB. The API supports basic CRUD operations for managing blog posts and authors, and it stores data using MongoDB for authors. This project also uses a simple file-based approach to store blog posts.

---

## Features:
- **Create, Read, Update, Delete Posts**: Manage blog posts.
- **Create, Read Authors**: Add new authors and fetch existing authors.

{
  "name": "Jane Smith",
  "email": "jane.smith@example.com"
}

- **URL**: `http://localhost:3000/authors`
- **Get Posts by Author**: Retrieve blog posts written by a specific author.

---

## **API Endpoints**

### 1. **Create a New Post**
- **Method**: `POST`
- **URL**: `http://localhost:3000/posts`
- **Body (JSON)**:
  ```json
  {
    "title": "My First Blog Post",
    "content": "This is the content of the first post.",
    "author": "John Doe"
  }


# How to Set Up and Run


    1. Clone the Repository

    --git clone <repository-url>


    2. Navigate to the Project Directory

     --cd blogging-platform-api


    3. Install Dependencies

      --npm install


    4. Start the Server

      --npm start
    The server will be available at http://localhost:3000.




