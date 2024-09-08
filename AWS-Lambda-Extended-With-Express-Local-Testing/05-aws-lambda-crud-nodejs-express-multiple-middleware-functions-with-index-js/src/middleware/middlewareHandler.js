// middlewareHandler.js
exports.middlewareHandler = (middlewares, mainHandler) => {
    return async (event, context) => {
        const executeMiddleware = async (index) => {
            if (index < middlewares.length) {
                await middlewares[index](event, context, () => executeMiddleware(index + 1));
            } else {
                await mainHandler(event, context);
            }
        };
        await executeMiddleware(0);
    };
};

exports.authMiddleware = async (event, context, next) => {
    const token = event.headers.Authorization;
    if (token === "valid-token") {
        await next(); // Proceed if the token is valid
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Unauthorized" }),
        };
    }
};

// In index.js
exports.createItem = middlewareHandler([authMiddleware, middlewareOne, middlewareTwo], createItemHandler);
