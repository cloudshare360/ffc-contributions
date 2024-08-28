
# AWS SAM Node.js Lambda CRUD Application

## Overview
This is a simple AWS Lambda application with CRUD operations using Node.js and AWS SAM. Each Lambda function is separated into its own file, and the project is configured for deployment using AWS SAM. Additionally, Express is used for local testing.

## Project Structure
```
aws-sam-nodejs-crud/
│
├── src/
│   ├── handlers/
│   │   ├── createItem.js
│   │   ├── readItem.js
│   │   ├── updateItem.js
│   │   ├── deleteItem.js
│   ├── models/
│   │   ├── items.js
├── template.yaml
├── package.json
├── README.md
└── localTest.js
```

## Setup Instructions

### Prerequisites
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS SAM CLI](https://aws.amazon.com/serverless/sam/)
- [Node.js](https://nodejs.org/) (v14 or above)
- [Docker](https://www.docker.com/) (for local testing with SAM)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aws-sam-nodejs-crud
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Deploying to AWS
1. Build the project using AWS SAM:
   ```bash
   sam build
   ```

2. Deploy the application:
   ```bash
   sam deploy --guided
   ```

   Follow the prompts to configure the deployment.

### Local Testing
1. To test locally with Express, run:
   ```bash
   node localTest.js
   ```

2. The application will be available at `http://localhost:3000`.

   Endpoints:
   - `POST /items`: Create an item
   - `GET /items/:id`: Read an item
   - `PUT /items/:id`: Update an item
   - `DELETE /items/:id`: Delete an item

## Lambda Handlers

Each Lambda handler corresponds to a CRUD operation:
- `createItem.js`: Create an item.
- `readItem.js`: Read an item.
- `updateItem.js`: Update an item.
- `deleteItem.js`: Delete an item.

## Express Local Test
The `localTest.js` file sets up an Express server to simulate API Gateway locally for testing purposes.
