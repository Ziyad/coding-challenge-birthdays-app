# coding-challenge-birthdays-app

### Approach

I have tried to respect the recommended time constraints for this exercise

The approach I have taken when constructing this app is as follows:

#### Model

I have developed a persistent model for birthdays using MongoDB and Mongoose
A "Birthday" object consists of two attributes, a name (string) and a birthday (date)

#### API

To interact with the model I have developed a REST API using the Express.js framework. The API is separated into a router module and a controller module.

#### Web App

I have developed part of a web app (unfinished) using the AngularJS framwork in conjunction with the Material Design UI framework. I have included some of their components, mainly the list.

Currently it will only display items. But there are serverside APIs availabile to modify and remove entries from the DB

#### Logging

The winston library is used to record info and errors


### Deploying

To run the app you will require
```
- Node.js
- MongoDB
```

You will be required to create the application a user account within MongoDB
```
~$ mongo setup/mongo-user.js
```

We will also need the Node dependencies
```
~$ npm install
```

Once you have created the DB user, you can start up the server app using
```
~$ node .
```

You can visit the client webpage at
```
http://localhost:8080/
```
and experiment with the API at
```
http://localhost:8080/api/birthdays/
```

There are some postman scripts in the test directory to provide examples of API usage
