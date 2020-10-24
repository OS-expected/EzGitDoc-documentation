(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"imageSize",(function(){return b})),n.d(t,"default",(function(){return u}));var i=n(2),a=n(6),o=(n(0),n(82)),r=n(81),c={id:"doc3",title:"Quickstart",slug:"/docs/quick-start"},s={unversionedId:"doc3",id:"doc3",isDocsHomePage:!1,title:"Quickstart",description:"export const imageSize = 280;",source:"@site/docs\\quickStart.md",slug:"/docs/quick-start",permalink:"/EzGitDoc-documentation/docs/quick-start",editUrl:"https://github.com/trolit/EzGitDoc-documentation/edit/main/docs/quickStart.md",version:"current",sidebar:"docs",previous:{title:"Demonstration",permalink:"/EzGitDoc-documentation/docs/demonstration"},next:{title:"Examples",permalink:"/EzGitDoc-documentation/docs/examples"}},l=[{value:"1. UI",id:"1-ui",children:[{value:"1.1. Themes",id:"11-themes",children:[]},{value:"1.2. Sidebar",id:"12-sidebar",children:[]},{value:"1.3. Create",id:"13-create",children:[]},{value:"1.4. Update",id:"14-update",children:[]},{value:"1.5. Errors",id:"15-errors",children:[]}]},{value:"2. Working space",id:"2-working-space",children:[{value:"2.1. Swapping elements",id:"21-swapping-elements",children:[]},{value:"2.2. Getting output",id:"22-getting-output",children:[]}]}],b=280,d={rightToc:l,imageSize:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-ui"},"1. UI"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/1.png"),alt:"Quick start - 01",height:b})),Object(o.b)("p",{align:"justify"},"EzGitDoc interface is split into two sections. Elements that can be created on the page are listed in the sidebar. Area that takes the most space(white rectangle) also named ",Object(o.b)("strong",null,"working space"),", is a place where all rendered elements are stored during the process of making prototype."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Clicking one of the elements from sidebar or using exact key combination triggers modal in which you will need to pass some information in order to create chosen element."))),Object(o.b)("h3",{id:"11-themes"},"1.1. Themes"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/1.1.png"),alt:"Quick start - 1.1",height:b})),Object(o.b)("p",{align:"justify"},"Since version ",Object(o.b)("a",{href:"https://trolit.github.io/EzGitDoc-documentation/changelog#v175-16102020",target:"_blank"},"1.7.5")," release, you can personalize EzGitDoc look with some predefined themes including dark and light ones. To access theme picking modal, use droplet icon positioned in the left top corner of the sidebar. Image above demonstrates light doc theme. You can also create your own theme that will fullfil your expectations."),Object(o.b)("h3",{id:"12-sidebar"},"1.2. Sidebar"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/2.png"),alt:"Quick start - 2",height:b})),Object(o.b)("p",{align:"justify"},"Sidebar besides holding all references to elements that can be created within EzGitDoc, has some useful tools that have been marked on the image above and explained below."),Object(o.b)("h4",{id:"1-reset"},"[1]"," RESET"),Object(o.b)("p",{align:"justify"},"RESET button allows you to remove all created elements and clear working space. This operation cannot be undone and needs to be confirmed, so don't worry if you click it by mistake :)"),Object(o.b)("h4",{id:"2-docs"},"[2]"," DOCS"),Object(o.b)("p",{align:"justify"},"Clicking on DOCS button results in opening new tab in browser with EzGitDoc documentation."),Object(o.b)("h4",{id:"3-full-page-preview"},"[3]"," FULL PAGE PREVIEW"),Object(o.b)("p",{align:"justify"},"Click on EYE icon to get full working space preview and hide sidebar."),Object(o.b)("h4",{id:"4-scroll-to-the-top"},"[4]"," SCROLL TO THE TOP"),Object(o.b)("p",{align:"justify"},"If you click on DOUBLE UP ARROW icon, you will be moved to the top line of working space."),Object(o.b)("h4",{id:"5-scroll-to-the-bottom"},"[5]"," SCROLL TO THE BOTTOM"),Object(o.b)("p",{align:"justify"},"If you click on DOUBLE DOWN ARROW icon, you will be moved to the bottom line of working space."),Object(o.b)("h4",{id:"6-references"},"[6]"," REFERENCES"),Object(o.b)("p",{align:"justify"},"Tool added in EzGitDoc ",Object(o.b)("a",{href:"https://trolit.github.io/EzGitDoc-documentation/changelog#v174-10102020",target:"_blank"},"update 1.7.4")," renders in modal references(anchors) to all elements created in EzGitDoc designer. It was made with purpose for biggers projects to quickly travel/move between elements. Clicked target is also highlighted for readability."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/3.png"),alt:"Quick start - 3",height:b})),Object(o.b)("p",{align:"justify"},"From version ",Object(o.b)("a",{href:"https://trolit.github.io/EzGitDoc-documentation/changelog#v176-23102020",target:"_blank"},"1.7.6"),", references tool got extended with function that allows to change chosen element's position using pushpin placed next to that element. Mentioned way of placing elements can be used for e.g. as an alternative to drag and drop for bigger projects."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/3.1.png"),alt:"Quick start - 3.1",height:b})),Object(o.b)("h4",{id:"7-settings"},"[7]"," SETTINGS"),Object(o.b)("p",{align:"justify"},"Click on GEAR icon to open modal with all EzGitDoc settings that can be personalized."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/4.png"),alt:"Quick start - 4",height:b})),Object(o.b)("h3",{id:"13-create"},"1.3. Create"),Object(o.b)("p",{align:"justify"},"Process of creating element in EzGitDoc is simple. When certain element is activated from sidebar or triggered by shortkey combination you will see window(modal) on the right side with available options. Amount of data needed to fill in depends on element's type. Screen below shows window for creating image element."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/5.png"),alt:"Quick start - 5",height:b})),Object(o.b)("h3",{id:"14-update"},"1.4. Update"),Object(o.b)("p",{align:"justify"},"To update element, click on the button placed next to the element on it's left side (marked on the image below)."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/6.png"),alt:"Quick start - 6",height:b})),Object(o.b)("p",{align:"justify"},"Update window layout depends on element that is updated and implementend options. Almost every EzGitDoc element's content can be updated(besides few exceptions). For table element of type ",Object(o.b)("strong",null,"image / kbd / linked kbd")," you can only change all images resolutions at once. Below is shown update window for table of type text."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/7.png"),alt:"Quick start - 7",height:b})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you plan on making more than one change it's worth to use update button frequently because if you click outside of the modal(update window) it disappears. Uncommited changes won't be saved and when you toggle update on the same element again, modal will be rerendered from it's last saved state. "))),Object(o.b)("h3",{id:"15-errors"},"1.5. Errors"),Object(o.b)("p",{align:"justify"},"Before elements are created, required fields are validated. If given value is incompatible, empty or unexpected, notification will appear in the left top corner with details why element wasn't created. Element won't be created until errors are fixed. Example:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/8.png"),alt:"Quick start - 8",height:b})),Object(o.b)("h2",{id:"2-working-space"},"2. Working space"),Object(o.b)("h3",{id:"21-swapping-elements"},"2.1. Swapping elements"),Object(o.b)("p",{align:"justify"},"If you want to swap elements positions, you can do this in two ways. First one relies on clicking with mouse button on the element you wish to move and dragging it until reaching desired position."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/9.gif"),alt:"Quick start - 9"})),Object(o.b)("p",{align:"justify"},"Second available option to perform is by using references section. Near each element there is pushpin icon. Click it, pass element's new position and confirm action. That way is more convenient for medium to big projects."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/9.1.gif"),alt:"Quick start - 9.1",height:"330px"})),Object(o.b)("h3",{id:"22-getting-output"},"2.2. Getting output"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:Object(r.a)("img/quickStart/10.png"),alt:"Quick start - 07",height:b})),Object(o.b)("p",{align:"justify"},"In order to be able to generate output for *.md file, you need to have at least one element created. If you do, you will notice button in the right top corner of the page called ",Object(o.b)("code",null,"GENERATE CODE"),". It will generate scheme output on click, showing results in modal like in the example above. You can copy output instantly into clipboard or save it for later."))}u.isMDXComponent=!0},80:function(e,t,n){"use strict";var i=n(0),a=n(20);t.a=function(){var e=Object(i.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},81:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var i=n(80),a=n(83);function o(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,c=void 0!==r&&r,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=i,g=d["".concat(r,".").concat(p)]||d[p]||u[p]||o;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);