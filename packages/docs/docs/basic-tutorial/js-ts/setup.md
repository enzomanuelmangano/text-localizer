---
sidebar_position: 1
---

# Setup

This setup is for projects where you only want to use the Text Localizer core. This may make sense if:

- You want to experiment with [TextLocalizer](/docs/api-reference/text-localizer);
- You want to use TextLocalizer in a NodeJS project;
- You use a front-end framework and want to use it to handle translations (Note that if you use [React](/docs/basic-tutorial/react/setup) or [React Native](/docs/basic-tutorial/react-native), there are portings already implemented to make your life easier).

For simplicity's sake I'll assume npm is used as the package manager, but Yarn is also fine.
In addition, the tutorial will be made taking into account Typescript, however you can also use Text Localizer in Javascript projects.

If you are familiar with creating TS projects or if you already have an initialized project where you want to use the TextLocalizer you can skip this section.

Before you start, make sure you have npm installed.
[You can install Node from here.](https://nodejs.org/en/download/)

:::info
Before proceeding, note that the code you'll see in this section has already been implemented in the **examples/bare** folder of the GitHub repo. [Click here to find out more](https://github.com/enzomanuelmangano/text-localizer/tree/main/examples/bare).
:::

## Initialize Project

To get started, create an empty folder and launch from the terminal:

```shell
npm init -y
```

Now you can install text-localizer by simply running it from the command line:

```shell
npm install text-localizer
```

The project will have the following structure:

```
.
├── _node_modules
├── package-lock.json
└── package.json
```

Since we will initialize text-localizer with Typescript, you need to install it as a dev dependency.

```shell
npm install typescript --save-dev
```

Finally, to complete the Typescript configuration, you need to create the tsconfig.json file. You can initialize this file simply from tsc (typescript compiler) like this:

```shell
tsc --init
```

Three additional parameters must be specified in the tsconfig.json file:

- [**outDir**](https://www.typescriptlang.org/tsconfig#outDir): the folder where the compiled javascript files are located;
- [**resolveJsonModule**](https://www.typescriptlang.org/tsconfig#resolveJsonModule): must be set to true since we are going to use json files in the project;
- [**target**](https://www.typescriptlang.org/tsconfig#target): must be specified ESNext to support the latest javascript features.

```json title="tsconfig.json"
{
  "compilerOptions": {
    "outDir": "dist",
    "resolveJsonModule": true, // since in this tutorial we are going to use .json extension
    ...,
    "target": "ESNext",
    ...,
  }
}
```

The setup is almost ready, only a few steps to go:

- create a folder called **src** in the root directory;
- create a file called **index.ts** in the **src** directory;
- compile the typescript file into a javascript file and run it.

To perform the last step, you need to run the following commands:

```shell
tsc && node dist/index.js
```

Finally, the structure of the project will be as follows:

```
.
├── package-lock.json
├── tsconfig.json
├── _node_modules
├── _dist
│   └── index.js
├── _src
│   └── index.ts
└── package.json
```

To simplify the execution of the previous script `(tsc && node dist/index.js)` you can create a custom script in the package.json like this:

```json
{
  "name": "example",
  ...,
  "scripts": {
    ...,
    "tsc": "tsc",
    "start": "npm run tsc && node dist/index.js"
  },
  ...,
}
```

In this way it will be possible to compile the main file by simply launching:

```shell
npm run start
```

Is everything working? We can finally start creating the translation files.
