(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),s=n(4),a=n.n(s),u=(n(13),n(2)),c=n(5),l=n(6),o=n(8),h=n(7),d=(n(14),n(15),n(0)),f=function(t){return Object(d.jsxs)("div",{className:"filtration-panel",children:[Object(d.jsx)("input",{type:"text",placeholder:"String or Number",onChange:t.inputHandler}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",onClick:t.checkboxHandler}),"Aa"]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"string-length-filter-button",onClick:t.stringLengthFilterButtonHandler,children:"String Length Filter"}),Object(d.jsx)("button",{className:"substring-filter-button",onClick:t.substringFilterButtonHandler,children:"Substring Filter"})]})},b=function(t){var e=t.trim(),n=/^[0-9]+$/.test(e),r=/^[A-Za-z\u0410-\u042f\u0430-\u044f]+$/.test(e);if(n||r)return{isNumber:n,isString:r};alert("Please, write valid filter.")},j=function(t,e){var n=+t;return e.filter((function(t){return t.length>n}))},g=function(t,e,n){if(!n){var r=t.toLowerCase();return e.filter((function(t){return t.toLowerCase().includes(r)}))}return e.filter((function(e){return e.includes(t)}))},v=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={list:[],currentList:[],doesCaseSensitive:!1,filterValue:""},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://thingproxy.freeboard.io/fetch/http://www.mrsoft.by/data.json").then((function(t){return t.json()})).then((function(e){return t.setState({list:Object(u.a)(e.data),currentList:Object(u.a)(e.data)})}))}},{key:"inputHandler",value:function(t){this.setState({filterValue:t.currentTarget.value})}},{key:"checkboxHandler",value:function(t){this.setState({doesCaseSensitive:t.currentTarget.checked})}},{key:"stringLengthFilterButtonHandler",value:function(){var t;(null===(t=b(this.state.filterValue))||void 0===t?void 0:t.isNumber)&&this.setState({currentList:Object(u.a)(j(this.state.filterValue,this.state.list))})}},{key:"substringFilterButtonHandler",value:function(){var t;(null===(t=b(this.state.filterValue))||void 0===t?void 0:t.isString)&&this.setState({currentList:Object(u.a)(g(this.state.filterValue,this.state.list,this.state.doesCaseSensitive))})}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("div",{className:"list-scope",children:Object(d.jsx)("ul",{children:this.state.currentList.length?this.state.currentList.map((function(t,e){return Object(d.jsx)("li",{children:t},e)})):""})}),Object(d.jsx)(f,{checkboxHandler:function(e){return t.checkboxHandler(e)},inputHandler:function(e){return t.inputHandler(e)},stringLengthFilterButtonHandler:function(){return t.stringLengthFilterButtonHandler()},substringFilterButtonHandler:function(){return t.substringFilterButtonHandler()}})]})}}]),n}(r.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),i(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.a333ba40.chunk.js.map