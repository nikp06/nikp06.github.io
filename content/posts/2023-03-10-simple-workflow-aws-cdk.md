+++
title = "Building a Step Function with Error Handling in AWS with Python CDK"
date = "2023-03-10T20:33:14+01:00"
author = "Niklas Petersen"
cover = "img/2023-03-10-simple-workflow-aws-cdk/cover.png"
description = "Learn how to automate cloud infrastructure through code using the AWS Cloud Development Kit (CDK) and Python. In this tutorial, you'll create and deploy several AWS resources, including a step function with error handling, an S3 bucket, an EventBridge trigger, an SNS topic and a Lambda function for a simple and robust workflow. This infrastructure-as-code setup can be a game-changer for small and complex use cases alike."
tags = ["CDK", "IaC", "Python", "DevOps", "MLOps"]
keywords = ["CDK", "IaC", "Python", "DevOps", "MLOps", "Infrastructure as Code", "AWS"]
showFullContent = false
readingTime = true
hideComments = false
+++

The automation of cloud infrastructure through code (also called Infrastructure as Code or IaC) can be a real game-changer for your use cases, however small and simple they might be. IaC let's you write code to define and manage your infrastructure, version control it, and deploy it as needed in a robust and repeatable way. One of the popular IaC frameworks is the AWS Cloud Development Kit (CDK), which allows developers to define infrastructure using familiar programming languages such as Python, TypeScript, and Java.

In this blog post, I will show you how to create AWS resources using Python CDK as an IaC framework. I will use CDK to define a simple workflow that demonstrates the creation of several AWS resources:
- An S3 bucket with an event trigger
- A Step Function that will be triggered by the S3 bucket
- An SNS topic for error notifications
- A Lambda function that will fail (for the sake of the example)

The resources are created to perform the following tasks: when a file with a .txt extension is uploaded to an S3 bucket, a Step Function execution is triggered, which invokes a Lambda function. This Lambda function simply throws an error to demonstrate error handling. If the Lambda function fails, the step function handles a post to our created topic, which is subscribed to our email address, where we receive the error message.

<!-- Image of the tech stack and the step function -->

This kind set up is a great starting point to build more complex use cases and it has proven to be super useful and effective several times for me already. Maybe it helps you too!

## Getting Started

To follow along with this tutorial, you will need to have the following:

- An AWS account
- Python 3.7 or later
- AWS CLI installed and configured
- AWS CDK installed and bootstrapped in your AWS account

This tutorial also assumes basic familiarity with AWS and CDK.
However, it should be sufficient to refresh your memory with these two resources:
- [Getting started with CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)
- [Build your first CDK app](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)

Furthermore, I won't go into detail about how to set up your `app.py` file, which serves as the entry point for your CDK commands. If you want to follow along with the exact same example your can check out [my GitHub repository](https://github.com/nikp06/aws-cdk-simple-workflow).

Let's get started.

<!-- ### What is AWS CDK?
AWS Cloud Development Kit (CDK) is an open-source software development framework to define cloud infrastructure in code and provision it through AWS CloudFormation. With AWS CDK, you can define your cloud resources using familiar programming languages such as TypeScript, Python, and Java. AWS CDK provisions the infrastructure through CloudFormation, so you can use all the CloudFormation features to manage your infrastructure, including creating, updating, and deleting stacks. -->

## Project Overview

In this tutorial, we will define our AWS resources, which we will later deploy, in the `aws-stack.py` file, which is located in the `root/aws` directory (the file and foldernames could of course be different for your project).

```bash
.
├── README.md
├── app.py
├── aws
│   ├── __init__.py
│   └── aws_stack.py
├── cdk.json
├── lambda
│   └── test_failure.py
├── requirements-dev.txt
├── requirements.txt
└── source.bat
```

## Defining the AWS Resources with Python CDK

To define our resources, we first need to import the necessary modules in the `aws-stack.py` file:

```python
from aws_cdk import (
    Stack,
    RemovalPolicy,
    CfnParameter,
    aws_s3 as s3,
    aws_events as events,
    aws_events_targets as targets,
    aws_lambda as lam,
    aws_sns as sns,
    aws_sns_subscriptions as sns_subs,
    aws_stepfunctions as sfn,
    aws_stepfunctions_tasks as tasks
)
from constructs import Construct
```

Next, we define our CdkStack class in the same file as before:

```python
class CdkStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
```

### Configuring the S3 Bucket with Trigger

In our CdkStack class we will define and create an S3 bucket with an event trigger that will trigger a Step Function execution when a file with the `.txt`-extension is uploaded to the bucket.

```python
# defining the s3 bucket
bucket = s3.Bucket(
    self,
    "CdkBucket",
    bucket_name="cdk-simple-workflow-bucket",
    removal_policy=RemovalPolicy.DESTROY, # so it is destroyed when we delete the stack or change the name of the bucket
    auto_delete_objects=True, # same
    event_bridge_enabled=True, # so we can put a trigger for the step function on the bucket
    block_public_access=s3.BlockPublicAccess.BLOCK_ALL
)

# defining the rule that triggers the step function
trigger_rule = events.Rule(
    self,
    "CdkNewObject",
    rule_name="CdkNewObject",
    event_pattern=events.EventPattern(
        source=["aws.s3"],
        resources=[bucket.bucket_arn],
        detail_type=["Object Created"],
        detail={
            "object": {
                "key": [{"suffix": ".txt"}]
            }
        }
    )
)
```

Here, we first create an S3 bucket named `cdk-simple-workflow-bucket` with `RemovalPolicy.DESTROY`, which means that the bucket will be destroyed when we delete the stack or change the name of the bucket. We also enable `event_bridge_enabled` so that we can put a trigger for the Step Function on the bucket.

### A Dummy Lambda Function

In this example, a lambda function that is simply raising an error is serving as a placeholder for the actual processing that could be done for your particular use case. With CDK we make use of `aws_lambda.Function` to define the lambda resource, which takes the lambda code from another Python file.
```python
# a simple lambda that fails / placeholder for the actual processing workload
# code is in lambda/test_failure.py
test_failure_lambda = lam.Function(
    self,
    f"CdkFailureLambda",
    function_name=f"CdkFailureLambda",
    runtime=lam.Runtime.PYTHON_3_9,
    code=lam.Code.from_asset("lambda", exclude=["**", "!test_failure.py"]),
    handler="test_failure.lambda_handler"
)
```
The code for the lambda function is also written in Python in this example and resides in a file called `test_failure.py`, which needs to be placed in the folder `root/lambda`.
```python
#!/usr/bin/python3.9
def lambda_handler(event, context):
    # here only an error is raised, normally a processing workflow could take place here
    # e.g. the file is downloaded from s3, then processed and a return value is given based on the content
    region = event["region"]
    time = event["time"]
    bucket = event["detail"]["bucket"]["name"]
    file = event["detail"]["object"]["key"]
    raise RuntimeError(f"Hey, something went wrong with your step function... Please check the latest execution! Details: File {file} was uploaded to bucket {bucket} in region {region} at {time}.")
```

### Configuring SNS for Error Notification

We also want to have a mechanism in place for handling *unforeseen* errors, that might occur during the life time of our step function and we do not always want to be looking at our AWS console all the time. It's much more convenient to receive a message (e.g. an email) IF something goes wrong. For this we create an sns topic and add an email subscription with our own address which is supposed to receive the notifications.
```python
# an sns topic where failures messages from lambda are posted to
slack_topic = sns.Topic(
    self,
    "CdkFailureTopic",
    topic_name="CdkFailureTopic",
    display_name="Topic for Sfn Error Notification"
)

# a resource to receive the parameter passed from the command line when we cdk deploy (don't want this hard-coded here)
email_address = CfnParameter(
    self,
    "Email",
    type="String",
    description="The Email address where error messages are sent to."
)

# subscribing the email to the sns topic
slack_topic.add_subscription(
    topic_subscription=sns_subs.EmailSubscription(email_address=email_address.value_as_string)
)
```

### The actual Step Function and Definition
Great, almost done here. We're missing the integral part for our simple workflow - the actual step function and its definition.

```python
# predefinining what happens, when step function reaches failure state
publish_message = tasks.SnsPublish(
    self,
    "CdkPublishMessage",
    topic=slack_topic,
    message=sfn.TaskInput.from_json_path_at("$.Cause") # filter for cause path of the error given by the lambda
)

# the normal job that the state machine is supposed to do (normally a lambda that processes some data)
submit_job = tasks.LambdaInvoke(
    self,
    "CdkSubmitJob",
    lambda_function=test_failure_lambda
)

# the workflow that the state machine is supposed to follow (the job can either result in success or failure and in case of failure we want to publish a notification)
definition = (submit_job
    .add_catch(publish_message.next(sfn.Fail(self, "TaskFailed")))
)

# the state machine aka step function itself
step_function = sfn.StateMachine(
    self,
    "CdkStateMachine",
    state_machine_name="CdkStateMachine",
    definition=definition,
)

# adding the trigger to the state machine so that it when an object with the .txt extension is created in the bucket
trigger_rule.add_target(targets.SfnStateMachine(step_function))
```

## Deployment
Now, if you have your AWS account, credentials and CDK all set up correctly, you should be ready to deploy the stack to your account using the usual `cdk synth` and `cdk deploy` commands. This will prompt us for the email address to use for the SNS subscription (see the `CfnParameter`-resource), and then deploy our stack to AWS.

<!-- IMAGE OF THE STEP FUNCTION -->

## Testing the Infrastructure
To test our newly created infrastructure, we can upload a file with the `.txt` extension to our S3 bucket using the AWS Management Console or the AWS CLI:

```bash
touch test.txt
aws s3 cp test.txt s3://cdk-simple-workflow-bucket
```

This should trigger our step function, which will invoke our Lambda function. Since our Lambda function is simply throwing an error in this example, our SNS topic should receive a notification with the error message, which should be sent to the email address we specified during deployment.

## Conclusion
In this blog post, we have seen how to use the AWS Cloud Development Kit (CDK) to create AWS resources as code using Python. We have created a simple but super effective and useful workflow that uses an S3 bucket trigger to invoke a step function, which in turn invokes a Lambda function. We have also seen how to use SNS to receive notifications in case of Lambda function failures.

Using the CDK allows us to define our infrastructure as code, which provides several benefits such as version control, automated testing, and simplified deployment. By using Python, we can leverage the rich ecosystem of Python libraries and tools to build and manage our AWS infrastructure.