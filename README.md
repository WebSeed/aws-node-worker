# AWS Node Worker

A Node.js worker setup that processes messages from SQS message queue.

Uses CloudFormation to create:

- Request queue using SQS
- Workers using EC2s on ASG
- Deploy application from S3 to all EC2s (Docker?) (http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html)

## Tasks

- [ ] Create EC2s with ASG using CloudFormation

## References

http://docs.aws.amazon.com/autoscaling/latest/userguide/as-using-sqs-queue.html

## Notes

Use Immutable Infrastructure (AMI / Docker container)

```
aws cloudformation create-stack --stack-name NodeWorkerStack --template-body file:///Users/will.bamford/Code/aws-node-worker/ops/stack.json --parameters ParameterKey=OperatorEmail,ParameterValue=w.bamford@gmail.com ParameterKey=KeyName,ParameterValue=default
```
