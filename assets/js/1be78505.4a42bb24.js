"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,366],{442:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(2784),r=a(876),o=a(4246),l=a(3042),i=a(6277),c=a(9417),s=a(8920),d=a(2537),m=a(3505),u=a(7896),p=function(e){return n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},b=a(8385),h=a(1461),f=a(3714),E=a(8949),v=a(9866),g="menuLinkText_349w",C=["items"],k=["item"],_=["item","onItemClick","activePath"],Z=["item","onItemClick","activePath"],N=function e(t,a){return"link"===t.type?(0,c.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},S=(0,n.memo)((function(e){var t=e.items,a=(0,h.Z)(e,C);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,u.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,h.Z)(e,k);return"category"===t.type?0===t.items.length?null:n.createElement(T,(0,u.Z)({item:t},a)):n.createElement(M,(0,u.Z)({item:t},a))}function T(e){var t,a=e.item,r=e.onItemClick,o=e.activePath,l=(0,h.Z)(e,_),s=a.items,d=a.label,m=a.collapsible,p=N(a,o),b=(0,c.uR)({initialState:function(){return!!m&&(!p&&a.collapsed)}}),f=b.collapsed,E=b.setCollapsed,v=b.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,o=(0,c.D9)(t);(0,n.useEffect)((function(){t&&!o&&a&&r(!1)}),[t,o,a])}({isActive:p,collapsed:f,setCollapsed:E}),n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":f})},n.createElement("a",(0,u.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&p},t[g]=!m,t)),onClick:m?function(e){e.preventDefault(),v()}:void 0,href:m?"#":void 0},l),d),n.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.createElement(S,{items:s,tabIndex:f?-1:0,onItemClick:r,activePath:o})))}function M(e){var t=e.item,a=e.onItemClick,r=e.activePath,o=(0,h.Z)(e,Z),l=t.href,s=t.label,d=N(t,r);return n.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},n.createElement(f.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:l},(0,E.Z)(l)&&{onClick:a},o),(0,E.Z)(l)?s:n.createElement("span",null,s,n.createElement(v.Z,null))))}var w="sidebar_AUih",y="sidebarWithHideableNavbar_13bV",x="sidebarHidden_d9AY",F="sidebarLogo_f7Rp",P="menu_16eN",A="menuWithAnnouncementBar_283y",B="collapseSidebarButton_253t",L="collapseSidebarButtonIcon_Gq9h";function H(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",B),onClick:t},n.createElement(p,{className:L}))}function D(e){var t,a,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,u=function(){var e=(0,c.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,d.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),p=(0,c.LU)(),b=p.navbar.hideOnScroll,h=p.hideableSidebar,f=(0,c.nT)().isClosed;return n.createElement("div",{className:(0,i.Z)(w,(t={},t[y]=b,t[x]=s,t))},b&&n.createElement(m.Z,{tabIndex:-1,className:F}),n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",P,(a={},a[A]=!f&&u,a))},n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:o,activePath:r}))),h&&n.createElement(H,{onClick:l}))}var R=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:a,activePath:r,onItemClick:function(){return t()}}))};function z(e){return n.createElement(c.Cv,{component:R,props:e})}var W=n.memo(D),Y=n.memo(z);function q(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(W,e),r&&n.createElement(Y,e))}var U=a(4971),K=a(7366),V=a(4517),j="backToTopButton_3spa",G="backToTopButtonShow_3rus";function O(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var X=function(){var e,t=(0,V.TH)(),a=O(),r=a.smoothScrollTop,o=a.cancelScrollToTop,l=(0,n.useState)(!1),c=l[0],s=l[1];return(0,d.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||o(),a<300)s(!1);else if(n){var r=document.documentElement.scrollHeight;a+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),n.createElement("button",{className:(0,i.Z)("clean-btn",j,(e={},e[G]=c,e)),type:"button",onClick:function(){return r()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},J={docPage:"docPage_2hm3",docMainContainer:"docMainContainer_luF8",docSidebarContainer:"docSidebarContainer_mF8j",docMainContainerEnhanced:"docMainContainerEnhanced_1KzL",docSidebarContainerHidden:"docSidebarContainerHidden_2DZs",collapsedDocSidebar:"collapsedDocSidebar_3YtF",expandSidebarButtonIcon:"expandSidebarButtonIcon_2vqf",docItemWrapperEnhanced:"docItemWrapperEnhanced_1BzV"},Q=a(7378);function $(e){var t,a,o,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,u=d.pluginId,h=d.version,f=s.sidebar,E=f?d.docsSidebars[f]:void 0,v=(0,n.useState)(!1),g=v[0],C=v[1],k=(0,n.useState)(!1),_=k[0],Z=k[1],N=(0,n.useCallback)((function(){_&&Z(!1),C(!g)}),[_]);return n.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,c.os)(u,h)}},n.createElement("div",{className:J.docPage},n.createElement(X,null),E&&n.createElement("aside",{className:(0,i.Z)(J.docSidebarContainer,(t={},t[J.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J.docSidebarContainer)&&g&&Z(!0)}},n.createElement(q,{key:f,sidebar:E,path:s.path,onCollapse:N,isHidden:_}),_&&n.createElement("div",{className:J.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},n.createElement(p,{className:J.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(J.docMainContainer,(a={},a[J.docMainContainerEnhanced]=g||!E,a))},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,(o={},o[J.docItemWrapperEnhanced]=g,o))},n.createElement(r.Zo,{components:U.Z},m)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,V.LX)(r.pathname,e)}));return l?n.createElement(n.Fragment,null,n.createElement(Q.Z,null,n.createElement("html",{className:a.className})),n.createElement($,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a}))):n.createElement(K.default,e)}},7366:function(e,t,a){a.r(t);var n=a(2784),r=a(3042),o=a(8385);t.default=function(){return n.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);