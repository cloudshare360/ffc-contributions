// index.js (Entry point)
const { middlewareHandler } = require('./middlewareHandler');
const { createItemHandler } = require('./createItem');
const { getAllItemsHandler } = require('./getAllItems');
const { middlewareOne, middlewareTwo } = require('./middleware');

exports.createItem = middlewareHandler([middlewareOne, middlewareTwo], createItemHandler);
exports.getAllItems = middlewareHandler([middlewareOne, middlewareTwo], getAllItemsHandler);

// In index.js
// Extending Middleware with Authentication authMiddleware
exports.createItem = middlewareHandler([authMiddleware, middlewareOne, middlewareTwo], createItemHandler);