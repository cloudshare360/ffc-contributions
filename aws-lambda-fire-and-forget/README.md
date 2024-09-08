# AWS Lambda Fire-and-Forget Invocation with SAM

## Overview
This project demonstrates a fire-and-forget invocation between two AWS Lambda functions using the AWS Serverless Application Model (SAM). The first Lambda triggers the second Lambda without waiting for a response.

## Prerequisites
- AWS CLI installed and configured.
- AWS SAM CLI installed.
- Node.js installed.

## Project Structure
- `template.yaml`: AWS SAM template defining two Lambda functions.
- `firstLambda.js`: The first Lambda, which invokes the second Lambda.
- `secondLambda.js`: The second Lambda, invoked asynchronously.
- `events/event.json`: Sample event for testing locally.

## Deploying the Application
1. Build the application:
    ```bash
    sam clean
    sam validate
    sam build
    ```

2. Deploy the application:
    ```bash
    sam deploy --guided
    ```

3. During the guided deployment, provide a stack name and choose an AWS region.

Here are sample events you can use to test both the Lambdas.

### 1. Sample Event for **First Lambda**
This event simulates a request to the `FirstLambda`, which will asynchronously trigger the `SecondLambda`. Save this as `events/firstLambdaEvent.json`.

```json
{
  "body": {
    "message": "Trigger the second Lambda"
  }
}
```

### 2. Sample Event for **Second Lambda**
This event simulates a request to the `SecondLambda` directly. Save this as `events/secondLambdaEvent.json`.

```json
{
  "body": {
    "message": "Hello from the Second Lambda"
  }
}
```

### How to Test Locally

To invoke the Lambdas locally using AWS SAM with these sample events:

1. **Test First Lambda** (which will invoke the second Lambda asynchronously):
   ```bash
   sam local invoke FirstLambda --event events/event.json
   sam local invoke FirstLambda --event events/firstLambdaEvent.json
   ```

2. **Test Second Lambda** directly:
   ```bash
   sam local invoke SecondLambda --event events/secondLambdaEvent.json
   ```

This will trigger the respective Lambda functions with the appropriate event data.

Let me know if you need further help!
