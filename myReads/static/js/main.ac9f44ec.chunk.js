(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),r=a.n(c),s=a(30),l=a(5),i=a(6),u=a(8),m=a(7),h=a(9),d=a(12),b="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:f},k=function(){return fetch("".concat(b,"/books"),{headers:p}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},v=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(d.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},y=(a(21),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,a=e.selectOption,n=t.imageLinks?t.imageLinks.thumbnail:"",c=t.authors?t.authors:"",r=t.shelf?t.shelf:"none";return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(n,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(e){a(t,e.target.value)},defaultValue:r},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},t.title),o.a.createElement("div",{className:"book-authors"},c))}}]),t}(n.Component)),O=a(29),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",searchedBookList:[]},a.getSearchedBookList=function(e){e?v(e).then(function(e){a.setState({searchedBookList:e})}):a.setState({searchedBookList:[]})},a.updateQuery=function(e){a.setState({query:e}),a.getSearchedBookList(e)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.query,n=t.searchedBookList,c=this.props,r=c.bookList,s=c.selectOption,l=n.error?[]:n;return console.log(n),o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(O.a,{to:"/",className:"close-search"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by book title",value:a,onChange:function(t){return e.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},l.map(function(e){return r.map(function(t){return t.id===e.id?e.shelf=t.shelf:""}),o.a.createElement("li",{key:e.id},o.a.createElement(y,{book:e,selectOption:s}))}))))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.bookList,a=e.selectOption;return console.log(t),o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"My Reads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.filter(function(e){return"currentlyReading"===e.shelf}).map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(y,{book:e,selectOption:a}))})))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.filter(function(e){return"wantToRead"===e.shelf}).map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(y,{book:e,selectOption:a}))})))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.filter(function(e){return"read"===e.shelf}).map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(y,{book:e,selectOption:a}))})))))),o.a.createElement("div",{className:"open-search"},o.a.createElement(O.a,{to:"/search"},o.a.createElement("button",null,"Add a book"))))}}]),t}(n.Component),j=a(31),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={bookList:[]},a.selectOption=function(e,t){E(e,t),k().then(function(e){a.setState({bookList:e})})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;k().then(function(t){e.setState({bookList:t})})}},{key:"render",value:function(){var e=this,t=this.state.bookList;return o.a.createElement("div",{className:"app"},o.a.createElement(j.a,{exact:!0,path:"/",render:function(){return o.a.createElement(g,{bookList:t,selectOption:e.selectOption})}}),o.a.createElement(j.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(N,{selectOption:e.selectOption,bookList:t})}}))}}]),t}(o.a.Component);a(26);r.a.render(o.a.createElement(s.a,null,o.a.createElement(L,null)),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.ac9f44ec.chunk.js.map