// middleware.js
exports.middlewareOne = async (event, context, next) => {
    console.log('Middleware One executed');
    // Perform some action (e.g., validation, logging)
    await next(); // Call next() to pass control to the next middleware
};

exports.middlewareTwo = async (event, context, next) => {
    console.log('Middleware Two executed');
    // Perform another action
    await next(); // Call next() to pass control to the next middleware
};
