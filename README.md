# John The Scone's Components (Work in Progress)

<span style="color:red;">Not working just yet. Still busy with getting configs right. Container app having issues resolving Input</span>

John The Scone's Components is a React component library built with Module Federation, allowing you to easily share UI components across multiple applications.

## Description

John The Scone's Components is a React component library that provides a collection of reusable UI components. It is built using Module Federation, a feature of webpack, which enables seamless integration of components across multiple applications. With John The Scone's Components, you can quickly and efficiently share UI components between different projects, leading to improved development efficiency and code reuse.

## Dependencies

-   Styled Components
-   Material-UI
-   Material Icons
-   Formik
-   Jest
-   Storybook

## Installation

To install John The Scone's Components and its dependencies, run:

```bash
npm install
```

## Test

Tests for John The Scone's Components are written using Jest, a delightful JavaScript testing framework. To run tests, use:

```bash
npm run test
```

### AAA (Arrange, Act, Assert) Pattern

The AAA pattern, also known as Arrange, Act, Assert, is a structured approach to writing unit tests. It helps maintain clarity and readability by dividing each test case into three distinct stages:

1. **Arrange**: Set up the preconditions and inputs for the test. This involves creating objects, initializing variables, and preparing the environment.

2. **Act**: Perform the actual action or behavior that you're testing. This could involve calling a function, executing a method, or interacting with the system under test.

3. **Assert**: Verify that the behavior of the system under test matches your expectations. Check the output, state changes, or any relevant outcomes to ensure that the system behaves as intended.

By following the AAA pattern, tests become more understandable, maintainable, and easier to debug. Each stage serves a clear purpose, making it evident what the test is doing and what it's verifying.

## Start

To start dev server for John The Scone's Components, run:

```bash
npm run start
```

You can also use Storybook:

```bash
npm run storybook
```

## Build

To build John The Scone's Components, run:

```bash
npm run build
```
