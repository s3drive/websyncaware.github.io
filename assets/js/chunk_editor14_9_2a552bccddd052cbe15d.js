(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{556:function(e,t,r){"use strict";r.r(t),r(808),CodeMirror.__mode="elm",t.default=CodeMirror},808:function(e,t,r){!function(e){"use strict";e.defineMode("elm",(function(){function e(e,t,r){return t(r),r(e,t)}var t=/[a-z]/,r=/[A-Z]/,n=/[a-zA-Z0-9_]/,i=/[0-9]/,o=/[0-9A-Fa-f]/,u=/[-&*+.\\/<>=?^|:]/,f=/[(),[\]{}]/,a=/[ \v\f]/;function s(){return function(m,x){if(m.eatWhile(a))return null;var h=m.next();if(f.test(h))return"{"===h&&m.eat("-")?e(m,x,function e(t){return 0==t?s():function(r,n){for(;!r.eol();){var i=r.next();if("{"==i&&r.eat("-"))++t;else if("-"==i&&r.eat("}")&&0==--t)return n(s()),"comment"}return n(e(t)),"comment"}}(1)):"["===h&&m.match("glsl|")?e(m,x,d):"builtin";if("'"===h)return e(m,x,p);if('"'===h)return m.eat('"')?m.eat('"')?e(m,x,l):"string":e(m,x,c);if(r.test(h))return m.eatWhile(n),"variable-2";if(t.test(h)){var k=1===m.pos;return m.eatWhile(n),k?"def":"variable"}if(i.test(h)){if("0"===h){if(m.eat(/[xX]/))return m.eatWhile(o),"number"}else m.eatWhile(i);return m.eat(".")&&m.eatWhile(i),m.eat(/[eE]/)&&(m.eat(/[-+]/),m.eatWhile(i)),"number"}return u.test(h)?"-"===h&&m.eat("-")?(m.skipToEnd(),"comment"):(m.eatWhile(u),"keyword"):"_"===h?"keyword":"error"}}function l(e,t){for(;!e.eol();){if('"'===e.next()&&e.eat('"')&&e.eat('"'))return t(s()),"string"}return"string"}function c(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function p(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function d(e,t){for(;!e.eol();){if("|"===e.next()&&e.eat("]"))return t(s()),"string"}return"string"}var m={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};return{startState:function(){return{f:s()}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return m.hasOwnProperty(n)?"keyword":r}}})),e.defineMIME("text/x-elm","elm")}(r(358))}}]);