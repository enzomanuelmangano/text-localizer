"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[199],{79:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7896),a=r(1461),o=(r(2784),r(876)),i=["components"],c={sidebar_position:1},u="getPlatformLanguage",l={unversionedId:"api-reference/react-native/get-platform-language",id:"api-reference/react-native/get-platform-language",isDocsHomePage:!1,title:"getPlatformLanguage",description:"getPlatformLanguage is a method for knowing the current language set by the user on the device.",source:"@site/docs/api-reference/react-native/get-platform-language.md",sourceDirName:"api-reference/react-native",slug:"/api-reference/react-native/get-platform-language",permalink:"/text-localizer/docs/api-reference/react-native/get-platform-language",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api-reference/react-native/get-platform-language.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useTranslationsState",permalink:"/text-localizer/docs/api-reference/react/hooks/use-translations-state"},next:{title:"usePlatformLanguage",permalink:"/text-localizer/docs/api-reference/react-native/hooks/use-platform-language"}},p=[],s={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getplatformlanguage"},"getPlatformLanguage"),(0,o.kt)("p",null,"getPlatformLanguage is a method for knowing the current language set by the user on the device.\nThe output conforms to the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO-639 two-letter code with ISO-3166 two-letter country code"))," standard."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"getPlatformLanguage().then((languageCode) => {\n  console.log(languageCode); // en-GB | en-US | fr-FR | de-DE ...\n});\n")))}f.isMDXComponent=!0},876:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),g=a,m=f["".concat(u,".").concat(g)]||f[g]||s[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);