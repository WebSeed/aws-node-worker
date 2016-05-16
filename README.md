# AWS Node Worker

A Node.js worker setup that processes messages from SQS message queue.

Uses CloudFormation to create:

- Request queue using SQS
- Workers using EC2s on ASG
- Deploy application to all EC2s using: (http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html)

## Tasks

- [ ] Create EC2s with ASG using CloudFormation

## References

http://docs.aws.amazon.com/autoscaling/latest/userguide/as-using-sqs-queue.html
