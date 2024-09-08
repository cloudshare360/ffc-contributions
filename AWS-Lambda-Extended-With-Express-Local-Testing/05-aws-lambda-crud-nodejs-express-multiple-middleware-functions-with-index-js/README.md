
# AWS Lambda CRUD Node.js Application

## Overview
This project demonstrates a CRUD application using AWS Lambda, where each operation has a dedicated handler and incorporates middleware functionality similar to Express.js.

## Project Structure
```
aws-lambda-crud-nodejs/
│
├── src/
│   ├── handlers/
│   │   ├── createItem.js
│   │   ├── readItem.js
│   │   ├── updateItem.js
│   │   ├── deleteItem.js
│   ├── middleware/
│   │   ├── loggingMiddleware.js
├── template.yaml
├── package.json
├── README.md
```

## Setup Instructions

### Prerequisites
- AWS CLI installed and configured.
- AWS SAM CLI installed.
- Node.js installed.


### Local Testing with Express
To test the application locally using Express:
1. Run the local test server:
   ```bash
   node localTest.js
   ```
2. The server will start on `http://localhost:3000`, and you can use the same curl commands listed above to interact with your local server.

### Local Testing
Run the following commands to start testing locally:
```bash
# Install dependencies
npm install

# Start local SAM API
sam local start-api
```

### Testing with Curl on Windows
Use the following curl commands to test each CRUD operation:
- **Create Item**:
  ```cmd
  curl -X POST "http://localhost:3000/items" -H "Content-Type: application/json" -d "{\"name\": \"New Item\", \"description\": \"A new item description.\"}"
  ```
- **Read Item** (replace `<item-id>` with actual ID):
  ```cmd
  curl -X GET "http://localhost:3000/items/<item-id>"
  ```
- **Update Item** (replace `<item-id>` with actual ID):
  ```cmd
  curl -X PUT "http://localhost:3000/items/<item-id>" -H "Content-Type: application/json" -d "{\"name\": \"Updated Item\", \"description\": \"Updated item description.\"}"
  ```
- **Delete Item** (replace `<item-id>` with actual ID):
  ```cmd
  curl -X DELETE "http://localhost:3000/items/<item-id>"
  ```

## Deployment
Deploy your application to AWS with:
```bash
sam build
sam deploy --guided
```

### Contact
For any further queries, please refer to the AWS documentation or this project's support resources.
