# E-commerce Backend


## Description

This is an e-commerce backend application built with Node.js, Express.js, Sequelize ORM, and MySQL database. The application provides API endpoints to manage products, categories, and tags for an e-commerce website.

## My Task

Your task is to modify the provided starter code and build the back end for an e-commerce site. You will configure an Express.js API with Sequelize and a MySQL database. Additionally, you need to create a walkthrough video demonstrating the application's functionality and meeting the acceptance criteria.

# Table of Contents
- Installation
- Usage
- API Endpoints
- Credits
- License


# Installation
To install the application, follow the steps below:

- Clone the repository to your local machine
- Open a terminal in the project root directory and run npm install to install the dependencies
- Create a .env file in the root directory and set the following environment variables:
    - DB_NAME=ecommerce_db
    - DB_USER=your_mysql_username
    - DB_PASSWORD=your_mysql_password
    - DB_HOST=localhost
    - DB_PORT=3306
- Open MySQL Workbench and run the db/schema.sql script to create the database
- (Optional) Run the db/seeds.sql script to populate the database with some initial data


# Usage
To start the application, run npm start or node server.js in the terminal. The server will start listening on port 3001 by default. You can then use an API testing tool like Insomnia or Postman to test the API endpoints.

# API Endpoints
The following API endpoints are available:

# Products

- GET /api/products: Get all products
- GET /api/products/:id: Get a single product by ID
- POST /api/products: Create a new product
- PUT /api/products/:id: Update a product by ID
- DELETE /api/products/:id: Delete a product by ID

# Categories
- GET /api/categories: Get all categories
- GET /api/categories/:id: Get a single category by ID
- POST /api/categories: Create a new category
- PUT /api/categories/:id: Update a category by ID
- DELETE /api/categories/:id: Delete a category by ID

# Tags
- GET /api/tags: Get all tags
- GET /api/tags/:id: Get a single tag by ID
- POST /api/tags: Create a new tag
- PUT /api/tags/:id: Update a tag by ID
- DELETE /api/tags/:id: Delete a tag by ID


# Credits
This project was created by Eduardo Enriquez & my tutor Alexis Gonzales.

# License
This project is licensed under the MIT License.