webpackJsonp([1],{11:function(n,e){var a=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n<nav>\n  <div class='icon'><span>🐍</span></div>\n  <ul>","</ul>\n</nav>"],["\n<nav>\n  <div class='icon'><span>🐍</span></div>\n  <ul>","</ul>\n</nav>"]);n.exports=function(n,e){return n(a,e.stories.map(function(n){return'\n    <li>\n      <a  class="'+(e.story===n?"selected":"")+'"\n          href="/'+n+'/1"> '+("job"===n?"jobs":n)+" </a>\n    </li>\n    "}).concat("\n    <li class='about'>\n      <a  class=\""+("about"===e.story?"selected":"")+'"\n          href="/about"> about </a>\n    </li>\n  '))}}});