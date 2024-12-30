// Create web server
// 1. import express
// 2. create an instance of the express server
// 3. create a route for GET /comments
// 4. create a route for POST /comments
// 5. create a route for DELETE /comments
// 6. create a route for PUT /comments
// 7. listen on port 3000

const express = require('express');
const app = express();
const comments = require('./comments');
const bodyParser = require('body');