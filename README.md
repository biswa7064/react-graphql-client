# React GraphQL Client

A React project showcasing the implementation of GraphQL with Jest and React Testing Library for comprehensive testing.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Testing](#testing)
- [Acknowledgments](#acknowledgments)

## Introduction

This project demonstrates the integration of GraphQL in a React application. It includes examples of using Jest and React Testing Library for testing components and GraphQL queries.

## Features

- GraphQL integration in a React application.
- Comprehensive testing with Jest and React Testing Library.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (version >= 16.14.0)
- npm (version >= 9.8.1)
- react (version ^18.2.0)
- graphql (version ^16.6.0)
- @apollo/client (version ^3.7.7)
- cross-fetch (version ^4.0.0)
- jest (version ^29.7.0)
- vite (version ^4.1.0)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/biswa7064/react-graphql-client.git
```

2. Switch to the directory

```bash
cd react-graphql-client
```


3. Install all the dependencies

```bash
npm install / yarn
```

4. Run the application

```bash
npm run dev / yarn dev
```

## Testing

1. Configure Jest
   
- [Configure Jest](https://jestjs.io/docs/next/configuration)

2. Run the test cases

   ```bash
   npm run test/yarn test
   ```
3. Run test cases with coverage if you have globally done the setup for jest

    1. Coverage for specific file
       
       ```bash
       jest path-name --coverage
       ```
    2. Coverage for all files
       
       ```bash
       jest --coverage
       ```
   

## Acknowledgments

- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
