"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[670],{1392:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(7896),a=n(1461),o=(n(2784),n(876)),i=["components"],s={sidebar_position:2},l="Handle Translations",c={unversionedId:"basic-tutorial/js-ts/handle-translations",id:"basic-tutorial/js-ts/handle-translations",isDocsHomePage:!1,title:"Handle Translations",description:"Managing translations is now very simple. In order to do this, it is sufficient to initialise the Text Localizer by passing the Translation Record as input.",source:"@site/docs/basic-tutorial/js-ts/handle-translations.md",sourceDirName:"basic-tutorial/js-ts",slug:"/basic-tutorial/js-ts/handle-translations",permalink:"/docs/basic-tutorial/js-ts/handle-translations",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/basic-tutorial/js-ts/handle-translations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/basic-tutorial/js-ts/setup"},next:{title:"Generated Types",permalink:"/docs/basic-tutorial/js-ts/generated-types"}},u=[],p={toc:u};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"handle-translations"},"Handle Translations"),(0,o.kt)("p",null,"Managing translations is now very simple. In order to do this, it is sufficient to initialise the Text Localizer by passing the Translation Record as input.\nOnce this has been done, it is necessary to set the reference language. Given that the translations are passed as ",(0,o.kt)("em",{parentName:"p"},"Javascript Promises"),", it is necessary to set the language using the asynchronous function ",(0,o.kt)("strong",{parentName:"p"},"setOptions"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { TextLocalizer } from 'text-localizer';\nimport { fetchItTranslations } from './l10n/it';\n\n(async () => {\n  const localizer = new TextLocalizer({\n    us: import('./l10n/us.json'),\n    en: import('./l10n/en'),\n    it: fetchItTranslations,\n  });\n\n  await localizer.setOptions({\n    language: 'en',\n  });\n\n  const translations = localizer.translations;\n\n  console.log(translations.question); // \"Which is your favourite cat?\"\n\n  console.log(\n    localizer.formatTranslation(translations.help, { topic: 'Text Localizer' })\n  );\n})();\n")),(0,o.kt)("p",null,"The strings can then be easily accessed via textLocalizer.translations.\nIf the string is specified as ",(0,o.kt)("em",{parentName:"p"},"formatted")," then the ",(0,o.kt)("em",{parentName:"p"},"formatTranslation")," function defined in the TextLocalizer class must be used.\nThe function accepts two parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The string to be formatted;"),(0,o.kt)("li",{parentName:"ul"},"An object having as keys the keys of the formatted string and as values, the values to be replaced.")))}f.isMDXComponent=!0},876:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(2784);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);