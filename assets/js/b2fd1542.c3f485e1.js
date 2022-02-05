"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[309],{662:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7896),a=n(1461),o=(n(2784),n(876)),s=["components"],i={sidebar_position:2},c="useTranslationsState",l={unversionedId:"api-reference/react/hooks/use-translations-state",id:"api-reference/react/hooks/use-translations-state",isDocsHomePage:!1,title:"useTranslationsState",description:"useTranslationsState is a hook that takes the translationsContext as input and allows access to the TranslationsContext State.",source:"@site/docs/api-reference/react/hooks/use-translations-state.md",sourceDirName:"api-reference/react/hooks",slug:"/api-reference/react/hooks/use-translations-state",permalink:"/text-localizer/docs/api-reference/react/hooks/use-translations-state",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api-reference/react/hooks/use-translations-state.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useTranslations",permalink:"/text-localizer/docs/api-reference/react/hooks/use-translations"},next:{title:"getPlatformLanguage",permalink:"/text-localizer/docs/api-reference/react-native/get-platform-language"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usetranslationsstate"},"useTranslationsState"),(0,o.kt)("p",null,"useTranslationsState is a hook that takes the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/react/create-translations-context"},"translationsContext")," as input and allows access to the TranslationsContext State."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n  const { isLoading } = useTranslationsState(translationsContext);\n\n  if (isLoading) return null;\n\n  return (\n    <div className="App">\n        {...}\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"Here is all the information you can access with this hook:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"isLoading"),": indicates whether the translation strings are loading;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"error"),": indicates whether an error has occurred and what type of error;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"languages"),": indicates which languages are supported;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"currentLanguage"),": indicates the language currently set.")))}f.isMDXComponent=!0},876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);