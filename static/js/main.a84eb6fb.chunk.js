(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),s=n(1),l=n(2),u=n(3),i=n(5),d=n(4),m=(n(14),n(15),n(8)),p=n.n(m),f=(n(16),function(e){var t=e.todos,n=e.selectUser;return a.a.createElement("div",{className:"TodoList"},a.a.createElement("h2",null,"Todos:"),a.a.createElement("div",{className:"TodoList__list-container"},a.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return a.a.createElement("li",{key:e.id,className:p()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed})},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",readOnly:!0,checked:e.completed}),a.a.createElement("p",null,e.title)),a.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return n(e.userId)}},"User\xa0",e.userId))})))))}),h="https://mate-api.herokuapp.com",v=function(e){return fetch("".concat(h,"/users/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))},_=(n(17),function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={currentUser:{}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;v(this.props.userId).then((function(t){e.setState({currentUser:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.userId!==this.props.userId&&v(this.props.userId).then((function(e){t.setState({currentUser:e})}))}},{key:"render",value:function(){var e=this.state.currentUser;return a.a.createElement("div",{className:"CurrentUser"},a.a.createElement("h2",{className:"CurrentUser__title"},a.a.createElement("span",null,"Selected user:",e.name)),a.a.createElement("h3",{className:"CurrentUser__name"},e.name),a.a.createElement("p",{className:"CurrentUser__email"},e.email),a.a.createElement("p",{className:"CurrentUser__phone"},e.phone),a.a.createElement("button",{type:"button",onClick:this.props.clearUser,className:"TodoList__user-button--selected button"},"Clear"))}}]),n}(a.a.Component)),E=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],selectedUserId:0,todosFromServer:[]},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e.filterHandler=function(t){var n=t.target.value;e.setState((function(e){return{todos:Object(s.a)(e.todosFromServer).filter((function(e){var t=e.title;return t&&t.includes(n)}))}}))},e.selectHandler=function(t){switch(t.target.value){case"active":e.setState((function(e){return{todos:Object(s.a)(e.todosFromServer).filter((function(e){return!e.completed}))}}));break;case"completed":e.setState((function(e){return{todos:Object(s.a)(e.todosFromServer).filter((function(e){return e.completed}))}}));break;default:e.setState((function(e){return{todos:Object(s.a)(e.todosFromServer)}}))}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(h,"/todos")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(t){e.setState({todos:t,todosFromServer:Object(s.a)(t)})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("input",{placeholder:"filter",onChange:this.filterHandler}),a.a.createElement("select",{onChange:this.selectHandler},a.a.createElement("option",{value:"all"},"All"),a.a.createElement("option",{value:"active"},"Active"),a.a.createElement("option",{value:"completed"},"Completed"))),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App__sidebar"},a.a.createElement(f,{todos:t,selectUser:this.selectUser})),a.a.createElement("div",{className:"App__content"},a.a.createElement("div",{className:"App__content-container"},n?a.a.createElement(_,{userId:n,clearUser:this.clearUser}):"No user selected"))))}}]),n}(a.a.Component);o.a.render(a.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a84eb6fb.chunk.js.map