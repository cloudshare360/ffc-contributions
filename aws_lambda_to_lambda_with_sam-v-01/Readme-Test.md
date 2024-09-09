{
  "invocationType": "RequestResponse",
  "functionName": "aws-sam-lambda-lambda-app-one-Lambda2Function-IqRL2Fx2gh6z"
}

sam local invoke FirstLambda --event events/firstLambdaEvent.json
sam local invoke SecondLambda --event events/secondLambdaEvent.json


sam clean 
sam build 
sam local invoke FirstLambda --event events/event.json
sam delete aws-lambda-fire-and-forget-app

sam deploy --guided --s3-bucket aws-lambda-fire-and-forget-app-one-s3-bucket

sam deploy --s3-bucket aws-sam-deploy-s3-bucket

sam deploy --guided --s3-bucket aws-sam-deploy-s3-bucket