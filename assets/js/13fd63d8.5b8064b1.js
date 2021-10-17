"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[703],{218:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=r(7896),o=r(1461),a=(r(2784),r(876)),i=["components"],c={sidebar_position:6},s="Storage",l={unversionedId:"basic-tutorial/react/storage",id:"basic-tutorial/react/storage",isDocsHomePage:!1,title:"Storage",description:"If your translations lives on the backend, you can pass optionally the Storage params in the TranslationsProvider:",source:"@site/docs/basic-tutorial/react/storage.md",sourceDirName:"basic-tutorial/react",slug:"/basic-tutorial/react/storage",permalink:"/text-localizer/docs/basic-tutorial/react/storage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/basic-tutorial/react/storage.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/text-localizer/docs/basic-tutorial/react/usage"},next:{title:"React Native",permalink:"/text-localizer/docs/basic-tutorial/react-native"}},u=[],p={toc:u};function f(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storage"},"Storage"),(0,a.kt)("p",null,"If your translations lives on the backend, you can pass ",(0,a.kt)("strong",{parentName:"p"},"optionally")," the ",(0,a.kt)("a",{parentName:"p",href:"/docs/basic-tutorial/js-ts/more/cached-translations"},"Storage params")," in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/react/translations-provider"},"TranslationsProvider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\nimport { TranslationsProvider } from 'react-text-localizer';\nimport { translationsContext } from './l10n';\n\nReactDOM.render(\n  <React.StrictMode>\n    <TranslationsProvider\n      context={translationsContext}\n      language=\"uk\"\n      storage={localStorage}\n    >\n      <App />\n    </TranslationsProvider>\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n")))}f.isMDXComponent=!0},876:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(2784);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);