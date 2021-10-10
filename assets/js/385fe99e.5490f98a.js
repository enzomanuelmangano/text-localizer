"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62],{4093:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7896),a=n(1461),o=(n(2784),n(876)),i=["components"],c={sidebar_position:1},l="createTranslationsContext",s={unversionedId:"api-reference/react/create-translations-context",id:"api-reference/react/create-translations-context",isDocsHomePage:!1,title:"createTranslationsContext",description:"createTranslationsContext is a utility function that aims to create a javascript object containing three pieces of information:",source:"@site/docs/api-reference/react/create-translations-context.md",sourceDirName:"api-reference/react",slug:"/api-reference/react/create-translations-context",permalink:"/text-localizer/docs/api-reference/react/create-translations-context",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api-reference/react/create-translations-context.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Text Localizer",permalink:"/text-localizer/docs/api-reference/text-localizer"},next:{title:"TranslationsProvider",permalink:"/text-localizer/docs/api-reference/react/translations-provider"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"createtranslationscontext"},"createTranslationsContext"),(0,o.kt)("p",null,"createTranslationsContext is a utility function that aims to create a javascript object containing three pieces of information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"A React Context;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"The initial value of the React Context;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"An instance of the TextLocalizer."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const translationsContext = createTranslationsContext(\n  new TextLocalizer({\n    it: fetchItTranslations,\n    en: import('./l10n/en'),\n    us: import('./l10n/us.json'),\n  })\n);\n")),(0,o.kt)("p",null,"This object is essential when using the react-text-localizer package (and therefore also the react-native-text-localizer package) as it is used by all the components of the package."))}f.isMDXComponent=!0},876:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);