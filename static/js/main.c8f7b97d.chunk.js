(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),i=n(1),s=n(2),c=n(4),u=n(3),m=(n(14),n(6)),d=[{id:1,name:"Dumplings"},{id:2,name:"Carrot"},{id:3,name:"Eggs"},{id:4,name:"Ice cream"},{id:5,name:"Apple"},{id:6,name:"Bread"},{id:7,name:"Fish"},{id:8,name:"Honey"},{id:9,name:"Jam"},{id:10,name:"Garlic"}],h=n(5),g=n.n(h),f=(g.a.shape({id:g.a.number.isRequired,name:g.a.string.isRequired}),function(e){var t=e.good;return r.a.createElement("li",{key:t.id},t.name)}),p=function(e){var t=e.name,n=e.handler;return r.a.createElement("button",{type:"button",className:"button",onClick:n},t)},v=function(e){var t=e.onFilterLength,n=e.selectedLength;return r.a.createElement("select",{name:"filterLength",value:n,onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"))},b=function(e){var t=e.goods,n=e.onReverse,a=e.onSortAlphabetically,o=e.onReset,l=e.onSortByLength,i=e.onFilterLength,s=e.selectedLength;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"buttons"},r.a.createElement(p,{name:"Reverse",handler:n}),r.a.createElement(p,{name:"Sort alphabetically",handler:a}),r.a.createElement(p,{name:"Reset",handler:o}),r.a.createElement(p,{name:"Sort by length",handler:l}),r.a.createElement(v,{onFilterLength:i,selectedLength:s})),r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(f,{key:e.id,good:e})}))))},E=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).reverse=function(){e.setState((function(e){return{mutatedGoods:e.mutatedGoods.reverse()}}))},e.sortAlphabetically=function(){e.setState((function(e){return{mutatedGoods:e.mutatedGoods.sort((function(e,t){return e.name.localeCompare(t.name)}))}}))},e.reset=function(){e.setState({mutatedGoods:Object(m.a)(e.goods)})},e.sortByLength=function(){e.setState((function(e){return{mutatedGoods:e.mutatedGoods.sort((function(e,t){return e.name.replace(" ","").length-t.name.replace(" ","").length}))}}))},e.filterLength=function(t){e.setState((function(n){return{mutatedGoods:0!==n.mutatedGoods.length?n.mutatedGoods.filter((function(e){return e.name.length>=t})):e.goods.filter((function(e){return e.name.length>=t})),selectedLength:t}}))},e.goods=Object(m.a)(d),e.state={mutatedGoods:Object(m.a)(d),selectedLength:1},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(b,{goods:this.state.mutatedGoods,onReverse:this.reverse,onSortAlphabetically:this.sortAlphabetically,onReset:this.reset,onSortByLength:this.sortByLength,onFilterLength:this.filterLength,selectedLength:this.state.selectedLength})}}]),n}(r.a.Component),y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1},e.makeVisible=function(){e.setState({isVisible:!0})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.isVisible;return r.a.createElement("div",{className:"App"},e?r.a.createElement(E,null):r.a.createElement("button",{type:"button",onClick:this.makeVisible},"Start"))}}]),n}(r.a.Component);l.a.render(r.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c8f7b97d.chunk.js.map