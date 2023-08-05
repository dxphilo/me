---
title: Getting started with TypeScript 

subtitle: Getting started with TypeScript

description: Getting started with TypeScript

alt: Getting started with TypeScript

excerpt: Getting started with TypeScript

imgurl: https://images.pexels.com/photos/2130475/pexels-photo-2130475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

tags: ["TypeScript" ]

attribution: Photo by Steve Johnson from Pexels
createdAt: 8-05-2023
---

## TypeScript - An Introduction

TypeScript is a superset of the JavaScript language. It provides similar conveniences to what other languages like Flow provide within JavaScript. TypeScript is progressively becoming the de facto standard for building modern, robust applications.

By design, TypeScript empowers us to include type annotations and enforce their adherence in our JavaScript code, a feature that is not natively available in standard JavaScript. This ability to specify and validate data types enhances the reliability and maintainability of our code, enabling us to catch type-related errors early in the development process and build more robust and error-resistant applications.

### Why TypeScript?

Let’s consider a JavaScript function that accepts a list with a length of two elements. The first position of the list holds the first name, and the second position contains the last name. The purpose of our function is to concatenate these two elements and return the full name.

Take a look at the function below.

```typescript
function concatenateNames(namesList: string[]) {
  // Extract the first name and last name from the list
  const firstName = namesList[0];
  const lastName = namesList[1];

  // Concatenate the first name and last name with a space in between
  const fullName = `${firstName} ${lastName}`;

  // Return the full name
  return fullName;
}

// Example usage:
const namesArray = ["John","Doe"];

const fullNames = concatenateNames(namesArray);
console.log(fullNames); // Outputs => "John Doe"

```

## Type Mismatch Issue

What will happen when we pass in an object instead of a list as the function parameters when calling the function?

Notice we get undefined undefined, JavaScript doesn’t care and will just work on anything despite the type we provide it. One solution is to add an extract check before processing the data.

```
function concatenateNames(namesList: string[]) {
  // Check if the input list has exactly two elements
  if (namesList.length !== 2) {
    throw new Error("Input list must contain exactly two elements: first name and last name.");
  }

  // Extract the first name and last name from the list
  const firstName = namesList[0];
  const lastName = namesList[1];

  // Concatenate the first name and last name with a space in between
  const fullName = `${firstName} ${lastName}`;

  // Return the full name
  return fullName;
}
```

This will address our immediate requirements, but it won’t completely resolve all potential issues. Consider the scenario where a list of integers is provided as function parameters. In such cases, we need to include an additional check to ensure that only valid strings are accepted and not any other data type.

To tackle this, we can leverage TypeScript’s powerful type system to explicitly specify the types of function parameters as strings. This way, TypeScript will automatically detect any attempts to pass incompatible data types and provide compile-time errors, helping us catch these issues early on during development.

## Setting Up TypeScript Project

Prerequisites:

- Have [NodeJs](https://nodejs.org) installed at least v.16.

To begin with our TypeScript application, let’s create a directory named ts_beginner where we will host our project.

Using the terminal, navigate to this directory, and then execute the following command to initialize a Nodejs project:

```
npm init

```

Then install TypeScript from the npm registry into our Node.js project:

```
npm install typescript --save-dev

```

Let’s create an src directory inside our project, and within this directory, we'll create a file named index.ts. The src directory is commonly used to store the source code files of our TypeScript project.

To point the main property in the package.json file to the TypeScript file (index.ts) in the src directory, you should modify the main property as follows:

```
{
  "name": "ts_beginner",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.1.6"
  }
}

```

To initialize the TypeScript project and create the tsconfig.json file, simply run the following command:

```
npx tsc -init

```

The tsconfig.json file enables us to configure and customize TypeScript for our project. It allows us to specify compiler options, such as the target ECMAScript version, module format, output directory, and more. After creating the file, you can fine-tune TypeScript's behavior according to your specific project requirements.

## TypeScript Code - Type Safety

Now that we have set up TypeScript for our project, we can begin writing TypeScript code. Let’s open the index.ts file and rewrite the initial JavaScript function in TypeScript.

```
function concatenateNames(namesList: string[]): string {
  // Extract the first name and last name from the list
  const firstName = namesList[0];
  const lastName = namesList[1];

  // Concatenate the first name and last name with a space in between
  const fullName = `${firstName} ${lastName}`;

  // Return the full name
  return fullName;
}
```

Notice how we have passed the types for the function parameters. You’ll notice that we have also defined the return type for the function.

If we attempt to return a value that does not match the declared return type, TypeScript will catch the error during compile time, assisting us in adjusting the function’s behavior. This level of type safety is tremendously helpful in preventing bugs and enhancing the correctness of our code.

Now, let’s experiment by calling the function with some data that does not match the types we specified earlier.



```
const namesObject = {
  firstname: 'John',
  lastname: 'Doe'
};

const fullNames = concatenateNames(namesObject);
console.log(fullNames);

```

TypeScript will throw us the error shown down below.


```
Argument of type '{ firstname: string; lastname: string; }' is not assignable to parameter of type 'string[]'.
  Type '{ firstname: string; lastname: string; }' is missing the following properties from type 'string[]': length, pop, push, concat, and 26 more.ts(2345)


```

Remember that when using TypeScript, you will eventually transpile your TypeScript code to JavaScript to run it in Node.js or a web browser. We will do so by running

```
npx tsc

```

To gain practical experience and deepen your understanding of TypeScript, I highly recommend exploring Type Challenges created by the talented Anthony Fu. This resource offers an incredible opportunity to learn TypeScript rapidly while reinforcing your learning through hands-on coding challenges.

## Conclusion

By explicitly specifying the types of function parameters and return values, TypeScript provides strict type checking during development. This ensures that our functions handle data of the expected types and return values consistent with their declared types.

If we accidentally attempt to return a value that doesn’t conform to the specified return type, TypeScript will raise a compile-time error, alerting us to the issue before it causes any runtime problems.

It would mean a lot if you share this piece with others. If you have any question, suggestion or want to chat reach out on X at [@amjohnphilip](https://twitter.com/amjohnphilip)
