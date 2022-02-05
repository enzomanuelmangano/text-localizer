"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[192],{2645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7896),a=n(1461),i=(n(2784),n(876)),s=["components"],o={sidebar_position:2},l="Strings",c={unversionedId:"basic-tutorial/js-ts/strings",id:"basic-tutorial/js-ts/strings",isDocsHomePage:!1,title:"Strings",description:"Before translations can be used in the project, it is necessary to create the files where these translations will be stored. Using Text Localizer there are several ways of saving translation files depending on the need.",source:"@site/docs/basic-tutorial/js-ts/strings.md",sourceDirName:"basic-tutorial/js-ts",slug:"/basic-tutorial/js-ts/strings",permalink:"/text-localizer/docs/basic-tutorial/js-ts/strings",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/basic-tutorial/js-ts/strings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/text-localizer/docs/basic-tutorial/js-ts/setup"},next:{title:"Usage",permalink:"/text-localizer/docs/basic-tutorial/js-ts/usage"}},u=[{value:"Folder Structure",id:"folder-structure",children:[]},{value:"JSON",id:"json",children:[]},{value:"Javascript or Typescript",id:"javascript-or-typescript",children:[{value:"What if your strings lives on the backend?",id:"what-if-your-strings-lives-on-the-backend",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"strings"},"Strings"),(0,i.kt)("p",null,"Before translations can be used in the project, it is necessary to create the files where these translations will be stored. Using Text Localizer there are several ways of saving translation files depending on the need."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In this section, all possible solutions are implemented, but in a normal project, they don't all have to be used."))),(0,i.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("p",null,"In order to continue the previous tutorial, create a folder called ",(0,i.kt)("em",{parentName:"p"},'"l10n"')," where the translation files will be stored (there is no particular constraint on the name of the folder).\nAlso, create three separate files in the new l10n folder:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"us.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"uk.ts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"it.ts"))),(0,i.kt)("p",null,"These are the files that will be referenced in the rest of the project, but there is no limit to the amount of files you can add."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 _node_modules\n\u251c\u2500\u2500 _dist\n\u2502   \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 _src\n\u2502   \u251c\u2500\u2500 _l10n\n\u2502   \u2502   \u2514\u2500\u2500 us.json\n\u2502   \u2502   \u2514\u2500\u2500 gb.ts\n\u2502   \u2502   \u2514\u2500\u2500 it.ts\n\u2502   \u2514\u2500\u2500 index.ts\n\u2514\u2500\u2500 package.json\n")),(0,i.kt)("h2",{id:"json"},"JSON"),(0,i.kt)("p",null,"The use of JSON files to store translations is certainly the most common and the simplest."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/l10n/us.json"',title:'"src/l10n/us.json"'},'{\n  "welcome": "Welcome on the Text Localizer Docs",\n  "help": "Do you need some help about {{ topic }}?",\n  "question": "Which is your favorite cat?"\n}\n')),(0,i.kt)("p",null,"Note: ",(0,i.kt)("em",{parentName:"p"},'"help"')," contains a formatted string, that can be easily managed with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/text-localizer#formattranslation"},"formatTranslation")," function."),(0,i.kt)("h2",{id:"javascript-or-typescript"},"Javascript or Typescript"),(0,i.kt)("p",null,"Although the Json is by far the most widely used solution in javascript for saving translation files, there are many use cases where using a JS or TS file can be just as useful."),(0,i.kt)("p",null,"For example, in cases where only a few strings differ, using a typescript file can be extremely useful."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/l10n/gb.ts"',title:'"src/l10n/gb.ts"'},"import us from './us.json';\n\nexport default {\n  ...us,\n  question: 'Which is your favourite cat?',\n};\n")),(0,i.kt)("h3",{id:"what-if-your-strings-lives-on-the-backend"},"What if your strings lives on the backend?"),(0,i.kt)("p",null,"With Text Localizer, it is simply a matter of creating a ",(0,i.kt)("em",{parentName:"p"},"js/ts")," file and exporting the function with which the translations for that country are fetched."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/l10n/it.ts"',title:'"src/l10n/it.ts"'},"// In this example fetchItTranslations simply returns a plain object.\n// The point is that it could be any asynchronous function\n// where maybe using axios, apollo or any other client.\nconst fetchItTranslations = async () => ({\n  welcome: 'Benvenuto sulla documentazione di Text Localizer',\n  help: 'Hai bisogno di aiuto riguardo {{ topic }}?',\n  question: 'Qual \xe8 il tuo gatto preferito?',\n});\n\nexport { fetchItTranslations };\n")))}d.isMDXComponent=!0},876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);