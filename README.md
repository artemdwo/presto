# pRESTo

A set of tests for [JSONPlaceholder](https://jsonplaceholder.typicode.com) with Mocha, Chai and SuperTest

**JSONPlaceholder** is a fake Online REST API for Testing and Prototyping 

# Purpose
An example of RESTful API testing with a common set of JS tools.

# Application-under-test
[JSONPlaceholder](https://jsonplaceholder.typicode.com) details are listed in **Resources** and **Routes** sections on https://jsonplaceholder.typicode.com

# Toolset
Generally, the toolset is a combination of the most common and proven tools in JavaScript world to test API.

## Runner
**Mocha** - JavaScript test framework (https://mochajs.org)

## HTTP Client
**SuperTest** - is a high-level abstraction for testing HTTP (https://github.com/visionmedia/supertest)

## Assertions
**Chai** - JavaScript assertion library (http://www.chaijs.com)

# How-To's
## Install
1. Clone the repository
2. Change directory to the repository root

    `$ cd /wherever/the/repo/presto`

3. Run NPM to install all necessary dependencies

    `$ npm i`
    
    or

    `$ npm install`

## Run
To execute the tests run the following command: `$ npm test`