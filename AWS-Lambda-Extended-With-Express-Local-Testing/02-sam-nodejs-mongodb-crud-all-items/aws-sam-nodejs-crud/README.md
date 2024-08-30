
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



## Using Docker Compose for MongoDB and Mongo-Express

1. **Start MongoDB and Mongo-Express**:
   - Run the following command in the directory containing `docker-compose.yaml`:
     ```bash
     docker-compose up -d
     ```
   - This will start MongoDB on port 27017 and Mongo-Express on port 8081.

2. **Access Mongo-Express**:
   - Open a web browser and navigate to `http://localhost:8081`.
   - Log in using the MongoDB credentials (configured in the Docker Compose file).

3. **Stop and Remove Containers**:
   - To stop and remove the Docker containers, run:
     ```bash
     docker-compose down
     ```

Ensure Docker is installed on your system to use these features.


### MongoDB Setup
To utilize MongoDB with this project, ensure you have MongoDB installed and running locally or use a cloud-hosted instance.

1. **Install MongoDB**: Follow the instructions at [MongoDB's official site](https://www.mongodb.com/try/download/community).
2. **Configure Connection String**: Modify the connection string in `src/models/items.js` if not using the default local MongoDB instance.
3. **Database and Collection**: The default database is `myDatabase` and the collection is `items`. Ensure these exist or are created on initial run.


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
- `GET /items`: Display all items


Each Lambda handler corresponds to a CRUD operation:
- `createItem.js`: Create an item.
- `readItem.js`: Read an item.
- `updateItem.js`: Update an item.
- `deleteItem.js`: Delete an item.

## Express Local Test
The `localTest.js` file sets up an Express server to simulate API Gateway locally for testing purposes.

## Testing with Postman
Import the provided Postman collection (`AWS_Lambda_CRUD_MongoDB.postman_collection.json`) into Postman for testing the API endpoints:

1. **Open Postman**: Launch the Postman application.
2. **Import Collection**: Click on 'Import' and select the collection JSON file.
3. **Set Environment Variables**: Configure the `url` variable to point to your deployed API endpoint or your local Express server.
4. **Test Endpoints**: Send requests to create, read, update, and delete items.

Make sure to update the `itemId` variable after creating an item to test the read, update, and delete operations.
