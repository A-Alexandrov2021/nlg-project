# NLG-Project

Writing philosophical monologues (based on Seneca) 
It is planned to create a similar service based on the model trained on Socrates Dialogues (Plato)

Implementation: Angular-Node.js-Tensorflow.js-NLP Models. 
Service App is deployed on production HTTP Server with Node.js ( optional on DOCKER container )


This project was generated with [Angular CLI] (NODE.js v.14.17.0)

You can test the running of service application in browser on the local address http://localhost:80/ by deploying from the DOCKER container or production HTTP Server (s. repository file  server.js)

Required steps for deploying the application to your local machine:

1. Install DOCKER (https://www.docker.com/products/docker-desktop/)


2. To set up the  environment, we first install Node.js from here (https://nodejs.org/en/download/) and Angular with others packages. 

Please open the command line and type (You can use the Node Package Manager (NPM) to install packages):

npm install -g @angular/cli

npm install @tensorflow/tfjs --save

npm install jquery --save

npm install bootstrap --save

npm install --save-dev express@4.16.3

npm install --save-dev connect-history-api-fallback@1.5.0

npm install --save-dev https@1.0.0

npm install --global yarn

# Building the Application for Production:

ng build --prod

This command builds an optimized version of the application without the additions that support the development tools. The output from the build process is placed in the dist/ folder. In addition to the JavaScript files, there is an index.html file that has been copied from the nlg-project/src folder and modified to use the newly built files.

# Starting the Production HTTP Server:

node server.js

Once the server has started, open a new browser window and navigate to http://localhost:80

# Creating the Docker Container

Building the Docker Image:

docker build . -t nlg-project -f Dockerfile

# Listing the Containers

docker ps

# Starting and Stopping the Container

docker stop 'ContaineName'

or

docker stop 'ContainerImageID'

# Running the Application

Once the image has been created, create and start a new container using the command shown as below:

docker run -p 80:80 -p 443:443 nlg-project

Open a new browser window and navigate to http://localhost:80


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
