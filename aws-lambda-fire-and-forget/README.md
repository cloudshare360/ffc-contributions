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
    sam build
    ```

2. Deploy the application:
    ```bash
    sam deploy --guided
    ```

3. During the guided deployment, provide a stack name and choose an AWS region.

## Testing the Application Locally
To invoke the first Lambda locally:
```bash
sam local invoke FirstLambda --event events/event.json
```

## Permissions
The `FirstLambda` has permissions to invoke the `SecondLambda` as defined in the `template.yaml`.

## License
This project is licensed under the MIT License.
