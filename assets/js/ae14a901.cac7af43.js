"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[140],{6620:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(7896),r=n(1461),i=(n(2784),n(876)),o=["components"],s={sidebar_position:3},c="React Native",l={unversionedId:"basic-tutorial/react-native",id:"basic-tutorial/react-native",isDocsHomePage:!1,title:"React Native",description:"This section shows the project setup mode in React Native. As you might expect, many sections are shared between React Native and React.",source:"@site/docs/basic-tutorial/react-native.md",sourceDirName:"basic-tutorial",slug:"/basic-tutorial/react-native",permalink:"/text-localizer/docs/basic-tutorial/react-native",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/basic-tutorial/react-native.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/text-localizer/docs/basic-tutorial/react/storage"},next:{title:"Text Localizer",permalink:"/text-localizer/docs/api-reference/text-localizer"}},p=[{value:"Setup",id:"setup",children:[{value:"Install React Native Text Localizer",id:"install-react-native-text-localizer",children:[]}]},{value:"Strings",id:"strings",children:[]},{value:"Context Definition",id:"context-definition",children:[]},{value:"Usage",id:"usage",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-native"},"React Native"),(0,i.kt)("p",null,"This section shows the project setup mode in React Native. As you might expect, many sections are shared between React Native and React."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before proceeding, note that the code you'll see in this section has already been implemented in the ",(0,i.kt)("strong",{parentName:"p"},"examples/react-native")," folder of the GitHub repo. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enzomanuelmangano/text-localizer/tree/main/examples/react-native"},"Click here to find out more"),"."))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The tutorial assumes that the React Native environment is already configured. ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"If it isn't, you can configure the environment by following the official documentation.")))),(0,i.kt)("p",null,"Initialize a React Native Project with Typescript by launching the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx react-native init AwesomeTSProject --template react-native-template-typescript\n")),(0,i.kt)("h3",{id:"install-react-native-text-localizer"},"Install React Native Text Localizer"),(0,i.kt)("p",null,"In order to install text-localizer in react-native, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react-native-text-localizer\n")),(0,i.kt)("p",null,"If you're on iOS, make sure also to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd ios && pod install\n")),(0,i.kt)("h2",{id:"strings"},"Strings"),(0,i.kt)("p",null,"Before proceeding with the usage of react-native-text-localizer, it's necessary to create the translation files."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/basic-tutorial/react/strings"},"This section is identical for React and React Native.")),(0,i.kt)("h2",{id:"context-definition"},"Context Definition"),(0,i.kt)("p",null,"Once the translation files have been created, it's essential to create a React Context that allows access to all of them."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/basic-tutorial/react/context-definition"},"This section is identical for React and React Native.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To be able to use react-native-text-localizer it is needed to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initialize the ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/react/translations-provider"},"TranslationsProvider")," by wrapping the whole app;"),(0,i.kt)("li",{parentName:"ul"},"setup the ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/react/hooks/use-translations-state"},"useTranslationsState")," hook to understand the state of the translations;"),(0,i.kt)("li",{parentName:"ul"},"setup the ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/react/hooks/use-translations"},"useTranslations")," hook to access the translations.")),(0,i.kt)("p",null,"Below is the code, which is mainly an adaptation of the code used for ",(0,i.kt)("a",{parentName:"p",href:"/docs/basic-tutorial/react/setup"},"React"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import React from 'react';\nimport { StyleSheet, Text, View } from 'react-native';\nimport {\n  TranslationsProvider,\n  useTranslations,\n  useTranslationsState,\n} from 'react-native-text-localizer';\nimport { translationsContext } from './l10n';\n\nconst MainScreen: React.FC = () => {\n  const { welcome } = useTranslations(translationsContext);\n  const { isLoading } = useTranslationsState(translationsContext);\n\n  if (isLoading) {\n    return null;\n  }\n\n  return (\n    <View style={styles.container}>\n      <Text>{welcome}</Text>\n    </View>\n  );\n};\n\nconst App = () => {\n  return (\n    <TranslationsProvider context={translationsContext} language={'us'}>\n      <MainScreen />\n    </TranslationsProvider>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n\nexport default App;\n")))}d.isMDXComponent=!0},876:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);