---
title: Node.js serverless
img: /node-serverless.webp
tags:
  - javascript
  - nodejs
  - serverless
published: true
---

Unleash the potential of the Serverless Framework in Node.js with this insightful article. Explore how to build, deploy, and manage serverless applications effortlessly. Learn about the framework's key features, deployment options, and integration with popular cloud providers. Streamline your development workflow and harness the power of serverless architecture in Node.js.

<!--more-->

In this example we will use the [Serverless framework](https://www.serverless.com), a multiprovider framework that simplifies the construction and deployment process, and in particular we will use the [Lambda](https: // aws. amazon.com/lambda) service from AWS.

We obviously start by installing the CLI

```bash
npm install serverless -g
```

and then in a folder of our liking we start the application's boilerplate using the command

```bash
serverless create -t aws-nodejs
```

which will initialize the folder with:

- `.npmignore`
- `serverless.yml` containing the configuration that the framework uses to create the service. The file has three sections:
  - `provider`: Declare provider-specific configurations
  - `functions`: in which all the functions of which the service is composed are specified
  - `resources`: where all the resources used by the functions are listed
- `handler.js` contains the function that will be deployed

In general, the handler is composed of a stateless function of the type

```javascript
const handlerFunction = (event, context, callback) => {
  ...
  callback(error, result);
};
module.exports = handlerFunction;
```

where is it

- `event` represents the type of event that triggered the function
- `context` contains information about the environment on which the function will run
- `callback` is the function that takes care of returning a response or an error based on the request received

After implementing all the logic of our application we will need to record everything inside the `serverless.yml` file

```yaml
service: my-application

provider:
  name: aws
  runtime: nodejs14.17.4
  stage: dev
  region: us-east-1

functions:
  app:
    handler: index.handler
    events:
      - http: ...
```

At this point it is possible to release everything using the command

```bash
sls deploy -v
```

or by implementing an npm command

```json
  ...
 "scripts": {
    "deploy": "sls deploy -v"
  },
  ...
```

## Tips

1. To speed up the release if only one function is modified, the command can be used

```bash
sls deploy function -f myFuncName
```

which is much faster than the simple `deploy` command.

2. To remotely debug the code, you can tap into the application logs using the command

```bash
serverless logs -f myFuncName -t
```

3. To test the code locally, you can use a plugin ([serverless-offline](https://github.com/dherault/serverless-offline)) that allows you to emulate Lambda and API Gateway services offline. Just add the dependency to the project (under development dependencies) and add it to the `plugins` section within the` serverless.yml` file.

To start everything, the command will suffice

```bash
sls offline
```
