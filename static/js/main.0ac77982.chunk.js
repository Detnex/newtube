(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(42)},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),s=n.n(r),c=(n(30),n(31),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=n(22),d=n.n(h),p=n(23),f=n.n(p),g=function(e){var t=e.name,n=e.src,a=e.id,r=e.username;return o.a.createElement("div",{className:"tc dib pa2 ma2 bw2 shadow-3 h-25 w-25"},o.a.createElement(f.a,{url:n,controls:!0,width:"100%",height:"100%",onStart:function(){fetch("http://localhost:3001/vplay",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({vplay:n})}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}}),o.a.createElement("div",{className:"Times f4 lh-copy i"},t," ",o.a.createElement("br",null),a," ",o.a.createElement("br",null),r))},v=function(e){var t=e.videos;return o.a.createElement("div",null,t.map(function(e,n){return o.a.createElement(g,{key:n,id:t[n].id,name:t[n].name,src:t[n].src,username:t[n].username})}))},b=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid light-grey",height:"700px"}},e.children)},E=(n(40),function(e){e.searchfield;var t=e.searchChange,n=e.savedata,a=e.data,r=[];r=a.sort().filter(function(e,t){return a.indexOf(e)===t});return o.a.createElement("div",{className:"pa2 autocomplete"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue w-50",type:"search",placeholder:"search videos",onChange:t}),o.a.createElement("ul",null,r.map(function(e){return o.a.createElement("li",{onClick:function(){return e.item}},e)})),o.a.createElement("button",{className:"pa3 ba b--blue bg-lightest-green ma3",onClick:n},"Search"))}),w=[{id:1,name:"bonfire",username:"Bonfire",src:"https://www.youtube.com/watch?v=YE7VzlLtp-4"},{id:2,name:"sky",username:"Sky",src:"../Videos/sky.mp4"},{id:3,name:"BUNNY",username:"Big bug",src:"../Videos/bunny.mp4"},{id:4,name:"cactus",username:"Cactus",src:"../Videos/cactus.mp4"},{id:5,name:"snow",username:"Snow",src:"../Videos/snow.mp4"},{id:6,name:"desert",username:"Desert",src:"../Videos/desert.mp4"},{id:7,name:"forest",username:"Forest",src:"../Videos/forest.mp4"},{id:8,name:"land",username:"Land",src:"../Videos/land.mp4"},{id:9,name:"seaface",username:"Seaface",src:"../Videos/seaface.mp4"},{id:10,name:"sky",username:"Sky",src:"../Videos/sky.mp4"},{id:11,name:"snow",username:"Snow",src:"../Videos/snow.mp4"}],y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onSaveData=function(t){e.setState({data:e.state.searchfield}),fetch("http://localhost:3001/search",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({search:e.state.searchfield})}).then(function(e){return e.json()}).then(function(e){return console.log(e)}),e.setState({ispage:!1})},e.change=function(t){e.setState({ispage:!0})},e.state={videos:[],searchfield:"",data:"",ispage:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({videos:w})}},{key:"render",value:function(){var e=this,t=this.props.a,n=this.state.videos.filter(function(t){return t.name.toLowerCase().includes(e.state.data.toLowerCase())});return 0===this.state.videos.length?o.a.createElement("h1",{className:"tc"},"Loading"):o.a.createElement("div",{className:"tc"}," ",this.state.ispage?o.a.createElement(E,{searchChange:this.onSearchChange,savedata:this.onSaveData,data:t}):o.a.createElement("div",null,o.a.createElement("button",{onClick:this.change,className:"f6 link dim ph3 pv2 mb2 white bg-blue"},"SEARCH"),o.a.createElement(b,null,o.a.createElement(v,{videos:n}))))}}]),t}(a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.logout,a=[];return fetch("http://localhost:3001/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})}).then(function(e){return e.json()}).then(function(e){e&&fetch("http://localhost:3001/data",{}).then(function(e){return e.json()}).then(function(e){return e.forEach(function(e){a.push(e)})})}),console.log(a),o.a.createElement("div",null,o.a.createElement("div",{className:"ph3 tr mt5 "},o.a.createElement("button",{className:"f6 link dim ph3 pv2 mb2 white bg-hot-pink",onClick:n},"Logout")),o.a.createElement("h1",null,"Welcome ".concat(t.toUpperCase()," ")),o.a.createElement("div",null,o.a.createElement(y,{a:a})))}}]),t}(a.Component),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).logout=function(t){e.setState({isLoggedIn:!0}),fetch("http://localhost:3001/home",{}).then(function(e){return e.json()})},e.state={name:"",isLoggedIn:!0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=function(t){e.setState({name:t.profileObj.givenName,isLoggedIn:!1})};return o.a.createElement("div",null,this.state.isLoggedIn?o.a.createElement("div",{className:"container1"},o.a.createElement("h1",null,"Welcome to timble App"),o.a.createElement(d.a,{clientId:"817702232444-fbc6gtnuttmmf19to516thccsrnragfq.apps.googleusercontent.com",buttonText:"Login",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"}),o.a.createElement("h1",null,"You need to Login first")):o.a.createElement("div",null,o.a.createElement(j,{name:this.state.name,logout:this.logout})))}}]),t}(a.Component);var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(41);s.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.0ac77982.chunk.js.map