"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[494],{8837:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(7896),a=n(1461),o=(n(2784),n(876)),i=["components"],s={sidebar_position:3},l="Usage",c={unversionedId:"basic-tutorial/js-ts/usage",id:"basic-tutorial/js-ts/usage",isDocsHomePage:!1,title:"Usage",description:"Managing translations is now very simple. In order to do this, it is sufficient to initialize the Text Localizer by passing the Translation Record as input.",source:"@site/docs/basic-tutorial/js-ts/usage.md",sourceDirName:"basic-tutorial/js-ts",slug:"/basic-tutorial/js-ts/usage",permalink:"/text-localizer/docs/basic-tutorial/js-ts/usage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/basic-tutorial/js-ts/usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Strings",permalink:"/text-localizer/docs/basic-tutorial/js-ts/strings"},next:{title:"Generated Types",permalink:"/text-localizer/docs/basic-tutorial/js-ts/more/generated-types"}},u=[{value:"How does the usage differ from other translation packages?",id:"how-does-the-usage-differ-from-other-translation-packages",children:[]}],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Managing translations is now very simple. In order to do this, it is sufficient to initialize the Text Localizer by passing the Translation Record as input.\nOnce this has been done, it's necessary to set the reference language. Given that the translations are passed as ",(0,o.kt)("em",{parentName:"p"},"Javascript Promises"),", it is necessary to set the language using the asynchronous function ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/text-localizer#setoptions"},(0,o.kt)("strong",{parentName:"a"},"setOptions")),"."),(0,o.kt)("p",null,"Regarding the tutorial, the index.ts will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"import { TextLocalizer } from 'text-localizer';\nimport { fetchItTranslations } from './l10n/it';\n\n(async () => {\n  const localizer = new TextLocalizer({\n    us: () => import('./l10n/us.json'),\n    gb: () => import('./l10n/gb'),\n    it: fetchItTranslations,\n  });\n\n  await localizer.setOptions({\n    language: 'gb',\n  });\n\n  const translations = localizer.translations;\n\n  console.log(translations.question); // \"Which is your favourite cat?\"\n\n  console.log(\n    localizer.formatTranslation(translations.help, { topic: 'Text Localizer' })\n  );\n})();\n")),(0,o.kt)("p",null,"The strings can then be easily accessed via textLocalizer.translations.\nIf the string is specified as ",(0,o.kt)("em",{parentName:"p"},"formatted")," then the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/text-localizer#formattranslation"},"formatTranslation")," function defined in the TextLocalizer class must be used.\nThe function accepts two parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The string to be formatted;"),(0,o.kt)("li",{parentName:"ul"},"An object having as keys the keys of the formatted string and as values, the values to be replaced.")),(0,o.kt)("h2",{id:"how-does-the-usage-differ-from-other-translation-packages"},"How does the usage differ from other translation packages?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It has compile time support for translation strings: for instance you must follow the keys mentioned in the translation files otherwise the Typescript Compiler will complain;"),(0,o.kt)("li",{parentName:"ul"},"Dynamic imports support;"),(0,o.kt)("li",{parentName:"ul"},"It accepts translations as asynchronous functions in the constructor. This means that the translations could be either on an external server or locally."),(0,o.kt)("li",{parentName:"ul"},"Magical autocomplete and intellisense.")),(0,o.kt)("p",null,"There are cases where these features may not be enough. In that case, with a few additional configurations, you can use the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/basic-tutorial/js-ts/more/generated-types"},"Generated Types"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/basic-tutorial/js-ts/more/cached-translations"},"Cached Translations"),".")))}f.isMDXComponent=!0},876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);