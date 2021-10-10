---
sidebar_position: 2
---

# Installation

TextLocalizer can be installed on any Javascript/Typescript project. To install it, simply open the terminal in your project's folder and install the library using **yarn**:

```shell
yarn add text-localizer
```

or with **npm**:

```shell
npm install text-localizer
```

## Portings

If you're using **React** or **React Native** you can always install text-localizer in the way mentioned above, but there are portings already made that can help you manage TextLocalizer in your project without extra work.

### React

The **react-text-localizer** package simply wraps TextLocalizer in a [**React Context Provider**](https://reactjs.org/docs/context.html) and provides some supporting hooks. In order to install it run on your terminal:

```shell
yarn add react-text-localizer
```

or with **npm**:

```shell
npm install react-text-localizer
```

### React Native

The React Native solution exports the entire react-text-localizer and adds the getCurrentLanguage method.
**getCurrentLanguage** allows you to know the language set by the user on the iOS/Android Platforms.

**In order to do this, it uses Native Modules. Therefore this package works only for React Native projects initialized with react-native-cli. If you're using Expo you can still use one of the two approaches presented above.**

Then you can install the package from the terminal with **yarn**:

```shell
yarn add react-native-text-localizer
```

or with **npm**:

```shell
npm install react-native-text-localizer
```
