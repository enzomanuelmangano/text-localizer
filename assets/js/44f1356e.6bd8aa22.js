"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[151],{9532:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7896),r=n(1461),o=(n(2784),n(876)),l=["components"],i={sidebar_position:1},s="Text Localizer",c={unversionedId:"api-reference/text-localizer",id:"api-reference/text-localizer",isDocsHomePage:!1,title:"Text Localizer",description:"The Text Localizer is undoubtedly the main core of the packages. Its task is to enclose and coordinate translations with each other.",source:"@site/docs/api-reference/text-localizer.md",sourceDirName:"api-reference",slug:"/api-reference/text-localizer",permalink:"/text-localizer/docs/api-reference/text-localizer",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api-reference/text-localizer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"React Native",permalink:"/text-localizer/docs/basic-tutorial/react-native"},next:{title:"createTranslationsContext",permalink:"/text-localizer/docs/api-reference/react/create-translations-context"}},u=[{value:"Methods",id:"methods",children:[]},{value:"setOptions",id:"setoptions",children:[]},{value:"formatTranslation",id:"formattranslation",children:[]},{value:"currentLanguage",id:"currentlanguage",children:[]},{value:"translations",id:"translations",children:[]},{value:"languages",id:"languages",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-localizer"},"Text Localizer"),(0,o.kt)("p",null,"The Text Localizer is undoubtedly the main core of the packages. Its task is to enclose and coordinate translations with each other.\nIn concrete terms, it is implemented as a class that accepts as constructor parameters a Typescript Record with the possible languages as keys and the translations associated with the languages as values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const localizer = new TextLocalizer({\n  it: import('./l10n/it.json'),\n  uk: import('./l10n/uk'),\n  us: fetchUsTranslations,\n});\n\nawait localizer.setOptions({\n  language: 'uk',\n});\n")),(0,o.kt)("p",null,"A notable strength of the Text Localizer is that translations can be provided in many different ways.\nIn fact, translations can be enclosed in files of type ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic-tutorial/js-ts/setup"},"js, ts or json"),"."),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"setoptions"},"setOptions"),(0,o.kt)("p",null,"Must be called to set the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"language: defines the language for which translations must be loaded;"),(0,o.kt)("li",{parentName:"ul"},"fallback?: defines the language to use if an error happens;"),(0,o.kt)("li",{parentName:"ul"},"storage?: defines the storage to be used in order to cache remote translations;"),(0,o.kt)("li",{parentName:"ul"},"storageKey?: defines translations cache key (default: ",(0,o.kt)("em",{parentName:"li"},"@TEXT_LOCALIZER_STORAGE_KEY"),");"),(0,o.kt)("li",{parentName:"ul"},"cacheDurationMs?: defines the translations cache duration in milliseconds (default: ",(0,o.kt)("em",{parentName:"li"},"ONE_DAY_MS = 86400000")," )")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"storage")," shall extend the following interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IStorage {\n  setItem(key: string, value: string): void | Promise<void>;\n  getItem(key: string): null | string | Promise<string>;\n}\n")),(0,o.kt)("h3",{id:"formattranslation"},"formatTranslation"),(0,o.kt)("p",null,"Allows formatting of defined strings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// translations.help = "Do you need some help about {{ topic }}?"\nconsole.log(\n  localizer.formatTranslation(translations.help, { topic: \'Text Localizer\' })\n);\n// "Do you need some help about Text Localizer?"\n')),(0,o.kt)("h3",{id:"currentlanguage"},"currentLanguage"),(0,o.kt)("p",null,"Returns the last language set by the ",(0,o.kt)("a",{parentName:"p",href:"#setoptions"},"setOptions")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(localizer.currentLanguage); // eg: uk\n")),(0,o.kt)("h3",{id:"translations"},"translations"),(0,o.kt)("p",null,"Returns all translations related to the ",(0,o.kt)("a",{parentName:"p",href:"#currentlanguage"},"currentLanguage"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(localizer.translations);\n// eg: if the currentLanguage === "us"\n// {\n//   "welcome": "Welcome on the Text Localizer Docs",\n//   "help": "Do you need some help about {{ topic }}?",\n//   "question": "Which is your favorite cat?"\n// }\n')),(0,o.kt)("h3",{id:"languages"},"languages"),(0,o.kt)("p",null,"Returns all supported languages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(localizer.languages); // uk | it | us ...\n")))}d.isMDXComponent=!0},876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);