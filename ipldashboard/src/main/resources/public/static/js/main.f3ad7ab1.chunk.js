(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(4)),j=c(2),m=c(8),h=c.n(m),l=c(10),d=c(11),o=c(20),u=c(0),b=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(u.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"vs",children:" vs "}),Object(u.jsx)("h1",{children:Object(u.jsx)(i.b,{to:n,children:a})}),Object(u.jsxs)("h2",{className:"match-date",children:[" ",c.date," "]}),Object(u.jsxs)("h3",{className:"match-venue",children:[" at ",c.venue]}),Object(u.jsxs)("h3",{className:"match-result",children:[" ",c.matchWinner," won by ",c.resultMargin," ",c.result," "]})]}),Object(u.jsxs)("div",{className:"additional-detail",children:[Object(u.jsx)("h3",{children:"First Inning"}),Object(u.jsx)("p",{children:c.team1}),Object(u.jsx)("h3",{children:"Second Inning"}),Object(u.jsx)("p",{children:c.team2}),Object(u.jsx)("h3",{children:"Man of the match"}),Object(u.jsx)("p",{children:c.playerOfMatch}),Object(u.jsx)("h3",{children:"Umpire"}),Object(u.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})},O=(c(34),c(35),function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=t.team1===c?t.team2:t.team1,n="/teams/".concat(a),s=c===t.matchWinner;return Object(u.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(u.jsxs)("h3",{children:["vs ",Object(u.jsx)(i.b,{to:n,children:a})]}),Object(u.jsxs)("p",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result," "]})]})}),x=(c(36),function(){var e=Object(a.useState)({matches:[]}),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(j.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c&&c.teamName?Object(u.jsxs)("div",{className:"TeamPage",children:[Object(u.jsxs)("div",{className:"team-name-section",children:[Object(u.jsx)("h1",{className:"team-name",children:c.teamName}),Object(u.jsx)("h3",{children:"Latest Matches"})]}),Object(u.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(u.jsx)(o.PieChart,{data:[{title:"Losees",value:c.totalMatches-c.totalWins,color:"#a34d5d"},{title:"Wins",value:c.totalWins,color:"#4da375"}]})]}),Object(u.jsx)("div",{className:"match-detail-section",children:Object(u.jsx)(b,{teamName:c.teamName,match:c.matches[0]})}),c.matches.slice(1).map((function(e){return Object(u.jsx)(O,{match:e,teamName:c.teamName},e.id)})),Object(u.jsx)("div",{className:"more-link",children:Object(u.jsx)(i.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More "})})]}):Object(u.jsx)("h1",{children:" Team not found"})}),f=(c(37),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(u.jsx)("ol",{className:"years-list",children:c.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:[" ",e," "]})},e)}))})}),v=(c(38),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(j.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(r,"/matches/?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(u.jsxs)("div",{className:"MatchPage",children:[Object(u.jsxs)("div",{className:"year-selector",children:[Object(u.jsx)("h3",{children:"Select Year"}),Object(u.jsx)(f,{teamName:r})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),c.map((function(e){return Object(u.jsx)(b,{teamName:r,match:e},e.id)}))]})]})}),p=(c(39),c(40),function(e){var t=e.teamName;return Object(u.jsx)("div",{className:"TeamTile",children:Object(u.jsx)(i.b,{to:"/teams/".concat(t),children:t})})}),N=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{className:"HomePage",children:[Object(u.jsx)("div",{className:"header-section",children:Object(u.jsx)("h1",{className:"app-name",children:"Java Brains IPL Dashboard"})}),Object(u.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(u.jsx)(p,{teamName:e.teamName},e.id)}))})]})};var g=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/teams/:teamName/matches/:year",children:Object(u.jsx)(v,{})}),Object(u.jsx)(j.a,{path:"/teams/:teamName",children:Object(u.jsx)(x,{})}),Object(u.jsx)(j.a,{path:"/",children:Object(u.jsx)(N,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.f3ad7ab1.chunk.js.map