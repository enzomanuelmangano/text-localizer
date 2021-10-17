---
sidebar_position: 1
---

# Setup

This section shows the project setup mode in React. As the react-text-localizer package depends heavily on text-localizer itself, many sections are shared.

:::info
Before proceeding, note that the code you'll see in this section has already been implemented in the **examples/react** folder of the GitHub repo. [Click here to find out more](https://github.com/enzomanuelmangano/text-localizer/tree/main/examples/react).
:::

In order to follow this tutorial you will need to:

- Have [NodeJS](https://nodejs.org/en/download/) installed;
- Have [create-react-app](https://github.com/facebook/create-react-app) installed.

[You can install Node from here.](https://nodejs.org/en/download/)

You can install create-react-app by launching it from terminal:

```shell
npm install -g create-react-app
```

## Initialize Project

We'll use create-react-app to initialize the React project with Typescript. In order to do it, simply run the following command:

```shell
npx create-react-app my-app --template=typescript
```

With create-react-app you will already have a great template to start the React project.

Go to the **my-app** folder and check if everything is set correctly by launching:

```shell
npm run start
```

### Install React Text Localizer

In order to use the TextLocalizer features, simply run:

```shell
npm install react-text-localizer
```
