# AWS Node Worker

A Node.js worker setup that processes messages from SQS message queue.

Uses CloudFormation to create:

- Request queue using SQS
- Workers using EC2s on ASG
- Deploy application from S3 to all EC2s (Docker?) (http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html)

## Docker

```bash
docker build -t node-worker .

docker ps

docker logs <container-id>

docker run -it node-worker /bin/bash
docker run -p 49160:8000 -d node-worker

// -d runs the container in detached mode
// -p flag redirects a public port to a private port inside the container
docker run -P -d node-worker

docker kill $(docker ps -q)

docker exec -it $(docker ps -q) /bin/bash

docker inspect $(docker ps -q) | grep IPAddress

docker-machine ip

curl -i $(docker-machine ip):32770

docker run -d --name worker -p 8080 --link redis:redis worker

# BUILD
docker build -t worker -f worker/Dockerfile .
docker build -t queue -f queue/Dockerfile .
docker build -t load-balancer -f load-balancer/Dockerfile .

# RUN
docker run -d -P --name worker0 worker
docker run -d --name queue queue
docker run -d --name load-balancer load-balancer

# IMAGES
docker images

docker ps -a -q --filter="name=<contanerName>"






# TODO replace 3000 with 80!
docker run -d --name queue -p 6379:6379 queue
docker run -d --name worker -p 8080 --link queue:queue worker
docker run -d --name load-balancer -p 3000:3000 --link worker:worker load-balancer


# STOP ALL
docker stop $(docker ps -a -q)




docker-compose build
docker-compose up

# Delete all containers
docker rm $(docker ps -a -q)

# Delete all images
docker rmi $(docker images -q)

```

## Tasks

- [ ] Create EC2s with ASG using CloudFormation

## References

http://docs.aws.amazon.com/autoscaling/latest/userguide/as-using-sqs-queue.html

## Notes

Use Immutable Infrastructure (AMI / Docker container)

### Create stack with parameters
```
aws cloudformation create-stack --stack-name NodeWorkerStack --template-body file:///Users/will.bamford/Code/aws-node-worker/ops/stack.json --parameters ParameterKey=OperatorEmail,ParameterValue=w.bamford@gmail.com ParameterKey=KeyName,ParameterValue=aws-node-worker
```

### Validate the template
```
aws cloudformation validate-template --template-body file:///Users/will.bamford/Code/aws-node-worker/ops/stack.json
```
