(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),i=a.n(o),c=(a(19),a(3)),l=a(4),s=a(7),m=a(5),u=a(8);a(20),a(21);function d(e){var t=e.onClick,a=e.label;return r.a.createElement("div",{className:"header-box"},r.a.createElement("button",{className:"toggle-button",type:"button",onClick:t},a," >"))}a(22);function E(e){var t=e.content;return r.a.createElement("div",{className:"content-box"},t)}a(23);var h=a(2),p=a(11),f=a(6);function v(){return r.a.createElement("div",{className:"footer-box"},r.a.createElement("div",{className:"footer-item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/wei-liang-yan-ab0299185/"},r.a.createElement(h.a,{icon:p.b,size:"2x",style:{color:"white"}}))),r.a.createElement("div",{className:"footer-item"},r.a.createElement("a",{href:"https://www.github.com/uberSaiyan"},r.a.createElement(h.a,{icon:p.a,size:"2x",style:{color:"white"}}))),r.a.createElement("div",{className:"footer-item"},r.a.createElement("a",{href:"mailto:yanwl.note@gmail.com"},r.a.createElement(h.a,{icon:f.a,size:"2x",style:{color:"white"}}))))}a(29);function g(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"profile-pic",src:"https://image.shutterstock.com/z/stock-vector-work-in-progress-sign-270781412.jpg",alt:"profile-pic"}),r.a.createElement("h1",{className:"name-text"},"Yan Wei Liang"),r.a.createElement("p",{className:"info-text"},"Computer Science Undergraduate"),r.a.createElement("p",{className:"info-text"},"Passionate about software"))}a(30);function b(e){var t=e.children,a=e.start,n=e.end,o=e.color,i=t.substring(0,a),c=t.substring(a,n+1),l=t.substring(n+1);return r.a.createElement("div",null,r.a.createElement("span",null,i),r.a.createElement("span",{style:{color:o}},c),r.a.createElement("span",null,l))}var w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={isPlaying:!0,index:0,text:"",words:[],input:"",start:0,end:0,timerOn:!1,timerStart:0,timerEnd:0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e="The quick brown fox jumps over the lazy dog.",t=e.split(" "),a=t[0].length;this.setState({text:e,words:t,end:a})}},{key:"componentDidUpdate",value:function(){this.state.input.trimLeft().includes(" ")&&this.checkCorrect()}},{key:"checkCorrect",value:function(){var e=this.state,t=e.index,a=e.words,n=e.input,r=e.end;n.trimRight()===a[t]&&(t===a.length-1?this.setState({isPlaying:!1,input:"",timerEnd:Date.now()}):this.setState({index:t+1,input:"",start:r+1,end:r+1+a[t+1].length}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isPlaying,n=t.text,o=t.words,i=t.input,c=t.start,l=t.end,s=t.timerOn,m=t.timerStart,u=t.timerEnd;return r.a.createElement("div",{className:"game-box"},r.a.createElement("div",{className:"reset-button-box"},r.a.createElement("button",{className:"reset-button",type:"button",onClick:function(){return e.setState({isPlaying:!0,index:0,text:n,words:o,input:"",start:0,end:o[0].length,timerOn:!1,timerStart:0,timerEnd:0})}},r.a.createElement(h.a,{icon:f.b}))),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"text"},r.a.createElement(b,{start:c,end:l,color:"red"},n)),r.a.createElement("div",{className:"input-box"},r.a.createElement("input",{type:"text",value:i,onChange:function(t){s?e.setState({input:t.target.value}):e.setState({timerOn:!0,timerStart:Date.now(),input:t.target.value})}}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"text"},n),r.a.createElement("div",{className:"stats-text-box"},r.a.createElement("span",null,"Time taken:"," ",(u-m)/1e3," seconds"),r.a.createElement("span",null,"Word count:"," ",o.length),r.a.createElement("span",null,"Words per minute:"," ",Math.floor(60/((u-m)/1e3)*o.length)))))}}]),t}(r.a.Component);function x(){return r.a.createElement(w,null)}var S={SERIOUS:0,FUN:1};Object.freeze(S);var y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={mood:S.SERIOUS},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"toggleMood",value:function(){this.state.mood===S.SERIOUS?this.setState({mood:S.FUN}):this.setState({mood:S.SERIOUS})}},{key:"render",value:function(){var e=this,t=this.state.mood,a=t===S.SERIOUS?r.a.createElement(g,null):r.a.createElement(x,null),n=t===S.SERIOUS?"Playground":"About";return r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"header"},r.a.createElement(d,{onClick:function(){return e.toggleMood()},label:n})),r.a.createElement("div",{className:"content"},r.a.createElement(E,{content:a})),r.a.createElement("div",{className:"footer"},r.a.createElement(v,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(31);i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.e1ff96c5.chunk.js.map