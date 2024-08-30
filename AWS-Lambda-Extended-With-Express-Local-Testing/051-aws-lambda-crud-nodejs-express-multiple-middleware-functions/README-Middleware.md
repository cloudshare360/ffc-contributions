When using Node.js with AWS Lambda to implement CRUD operations, you can handle multiple middleware functions similarly to how you would in an Express.js application. Since AWS Lambda doesn't have built-in support for middleware, you'll need to implement your own middleware handling mechanism.

Here’s how you can do it:

### 1. **Define Middleware Functions**

Create your middleware functions. Middleware functions typically receive the `event`, `context`, and `next` (a function to call the next middleware) as arguments.

```javascript
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
```

### 2. **Create a Middleware Handler Function**

Create a handler function that will process the middleware functions sequentially before reaching your main handler.

```javascript
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
```

### 3. **Implement CRUD Operations**

Create your CRUD operation handlers. These handlers will be the final functions executed after all middleware has been processed.

```javascript
// createItem.js
exports.createItemHandler = async (event, context) => {
    const item = JSON.parse(event.body);
    item.id = Date.now();
    // Simulate saving to a database
    return {
        statusCode: 201,
        body: JSON.stringify(item),
    };
};

// getAllItems.js
exports.getAllItemsHandler = async (event, context) => {
    const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" }
    ];
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
};
```

### 4. **Combine Middleware and Handlers**

Use the `middlewareHandler` function to combine your middleware functions and the main handler.

```javascript
// index.js (Entry point)
const { middlewareHandler } = require('./middlewareHandler');
const { createItemHandler } = require('./createItem');
const { getAllItemsHandler } = require('./getAllItems');
const { middlewareOne, middlewareTwo } = require('./middleware');

exports.createItem = middlewareHandler([middlewareOne, middlewareTwo], createItemHandler);
exports.getAllItems = middlewareHandler([middlewareOne, middlewareTwo], getAllItemsHandler);
```

### 5. **Deploy the Application Using AWS SAM**

Create a `template.yaml` for deploying your Lambda functions using AWS SAM.

```yaml
Resources:
  CreateItemFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.createItem
      Runtime: nodejs18.x
      Events:
        CreateItem:
          Type: Api
          Properties:
            Path: /items
            Method: POST

  GetAllItemsFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.getAllItems
      Runtime: nodejs18.x
      Events:
        GetAllItems:
          Type: Api
          Properties:
            Path: /items
            Method: GET
```

### 6. **Deploy the Application**

Deploy the application using AWS SAM:

```bash
sam build
sam deploy --guided
```

### 7. **Testing Your Application**

You can test your Lambda functions by sending HTTP requests to the endpoints created by API Gateway. The middleware will be executed in the order they are defined before the main handler processes the request.

### 8. **Extending Middleware**

You can add more middleware functions to the `middlewareHandler` array. Each middleware will execute sequentially, and you can control the flow by choosing whether or not to call `next()`.

### Example: Extending Middleware with Authentication

You could add an authentication middleware like this:

```javascript
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
```

With this setup, the `authMiddleware` will run first, and if it doesn't return a response (i.e., the token is valid), the request will continue through the rest of the middleware and the final handler.

This approach allows you to modularize your logic and apply common functionality across multiple Lambda functions.