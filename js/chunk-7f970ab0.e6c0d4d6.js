(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f970ab0"],{"057f":function(t,e,n){var r=n("fc6a"),c=n("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?a(t):c(r(t))}},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),o=n("2d00"),i=c("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"658f":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var r=n("7a23"),c={key:0,class:"loading"},o=Object(r["g"])("div",{class:"loadIcon spinner-border",role:"status"},[Object(r["g"])("span",{class:"visually-hidden"},"Loading...")],-1),i=Object(r["g"])("h2",{class:"text-center mt-4"},"產品介紹",-1),a={class:"row justify-content-center px-5 py-4"},s={class:"content col-6 px-5 d-flex flex-column justify-content-between"},u={class:"mb-3"},f={class:"fs-6 text-decoration-line-through mb-1"},d={class:"fs-3"},l={class:"fs-6 mx-1"},b={class:"d-flex justify-content-between align-items-end"},p={class:"qtyArea d-flex align-items-center"},g=Object(r["g"])("p",{class:"mb-0 fs-4"},"購買數量：",-1),h=Object(r["g"])("span",{class:"material-icons fs-1 pt-2"},"arrow_left",-1),y={class:"fs-4 productQty"},v=Object(r["g"])("span",{class:"material-icons fs-1 pt-2"},"arrow_right",-1),m={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},O=Object(r["f"])(" 加入購物車 ");function j(t,e,n,j,w,S){return Object(r["s"])(),Object(r["d"])(r["a"],null,[w.getProductLoading?(Object(r["s"])(),Object(r["d"])("div",c,[o])):Object(r["e"])("",!0),i,Object(r["g"])("div",a,[Object(r["g"])("div",{class:"imgArea rounded col-4 px-4",style:{"background-image":"url(".concat(w.product.imageUrl,")")}},null,4),Object(r["g"])("div",s,[Object(r["g"])("div",null,[Object(r["g"])("h3",u,Object(r["A"])(w.product.title),1),Object(r["g"])("p",null,Object(r["A"])(w.product.description),1)]),Object(r["g"])("div",null,[Object(r["g"])("p",f,"原價：NT$ "+Object(r["A"])(w.product.origin_price),1),Object(r["g"])("p",d,[Object(r["f"])("特價：NT$ "+Object(r["A"])(w.product.price)+" ",1),Object(r["g"])("span",l,"(每"+Object(r["A"])(w.product.unit)+")",1)]),Object(r["g"])("div",b,[Object(r["g"])("div",p,[g,Object(r["g"])("button",{class:"px-0 mb-1",type:"button",disabled:1===w.tempQty,onClick:e[1]||(e[1]=function(t){return S.changeQty("reduce")})},[h],8,["disabled"]),Object(r["g"])("span",y,Object(r["A"])(w.tempQty),1),Object(r["g"])("button",{class:"px-0 mb-1",type:"button",onClick:e[2]||(e[2]=function(t){return S.changeQty("add")})},[v])]),Object(r["g"])("button",{type:"button",class:"btn btn-danger py-2",onClick:e[3]||(e[3]=function(){return S.addCart&&S.addCart.apply(S,arguments)})},[w.cartLoading===n.id?(Object(r["s"])(),Object(r["d"])("span",m)):Object(r["e"])("",!0),O])])])])])],64)}n("99af");var w=n("1940"),S=n.n(w),x={data:function(){return{product:{},tempQty:1,emitter:"",cartLoading:"",getProductLoading:!0}},props:["id"],methods:{getProductData:function(){var t=this;this.getProductLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jun0527","/product/").concat(this.id);this.$http.get(e).then((function(e){e.data.success&&(t.product=e.data.product,t.getProductLoading=!1)})).catch((function(t){console.dir(t)}))},changeQty:function(t){if("reduce"===t){if(1===this.tempQty)return;this.tempQty-=1}else this.tempQty+=1},addCart:function(){var t=this;this.cartLoading=this.product.id;var e={data:{product_id:this.product.id,qty:this.tempQty}},n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jun0527","/cart");this.$http.post(n,e).then((function(e){e.data.success?(S()("加入購物車成功，可以至購物車分頁查看！"),t.tempQty=1,t.cartLoading=""):(S()("加入購物車失敗，請稍後再嘗試！"),t.cartLoading="")})).catch((function(t){console.dir(t)}))}},created:function(){this.getProductData()}};x.render=j;e["default"]=x},"746f":function(t,e,n){var r=n("428f"),c=n("5135"),o=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});c(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),c=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?c.f(t,i,o(0,n)):t[i]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),c=n("d039"),o=n("e8b5"),i=n("861d"),a=n("7b0b"),s=n("50c4"),u=n("8418"),f=n("65f0"),d=n("1dde"),l=n("b622"),b=n("2d00"),p=l("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",y=b>=51||!c((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=d("concat"),m=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},O=!y||!v;r({target:"Array",proto:!0,forced:O},{concat:function(t){var e,n,r,c,o,i=a(this),d=f(i,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?i:arguments[e],m(o)){if(c=s(o.length),l+c>g)throw TypeError(h);for(n=0;n<c;n++,l++)n in o&&u(d,l,o[n])}else{if(l>=g)throw TypeError(h);u(d,l++,o)}return d.length=l,d}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),o=n("d066"),i=n("c430"),a=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),d=n("5135"),l=n("e8b5"),b=n("861d"),p=n("825a"),g=n("7b0b"),h=n("fc6a"),y=n("c04e"),v=n("5c6c"),m=n("7c73"),O=n("df75"),j=n("241c"),w=n("057f"),S=n("7418"),x=n("06cf"),P=n("9bf2"),Q=n("d1e7"),k=n("9112"),L=n("6eeb"),A=n("5692"),C=n("f772"),N=n("d012"),E=n("90e3"),T=n("b622"),$=n("e538"),J=n("746f"),_=n("d44e"),D=n("69f3"),q=n("b727").forEach,F=C("hidden"),I="Symbol",B="prototype",M=T("toPrimitive"),U=D.set,W=D.getterFor(I),z=Object[B],G=c.Symbol,H=o("JSON","stringify"),K=x.f,R=P.f,V=w.f,X=Q.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),nt=A("wks"),rt=c.QObject,ct=!rt||!rt[B]||!rt[B].findChild,ot=a&&f((function(){return 7!=m(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(z,e);r&&delete z[e],R(t,e,n),r&&t!==z&&R(z,e,r)}:R,it=function(t,e){var n=Y[t]=m(G[B]);return U(n,{type:I,tag:t,description:e}),a||(n.description=e),n},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},st=function(t,e,n){t===z&&st(Z,e,n),p(t);var r=y(e,!0);return p(n),d(Y,r)?(n.enumerable?(d(t,F)&&t[F][r]&&(t[F][r]=!1),n=m(n,{enumerable:v(0,!1)})):(d(t,F)||R(t,F,v(1,{})),t[F][r]=!0),ot(t,r,n)):R(t,r,n)},ut=function(t,e){p(t);var n=h(e),r=O(n).concat(pt(n));return q(r,(function(e){a&&!dt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},dt=function(t){var e=y(t,!0),n=X.call(this,e);return!(this===z&&d(Y,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(Y,e)||d(this,F)&&this[F][e])||n)},lt=function(t,e){var n=h(t),r=y(e,!0);if(n!==z||!d(Y,r)||d(Z,r)){var c=K(n,r);return!c||!d(Y,r)||d(n,F)&&n[F][r]||(c.enumerable=!0),c}},bt=function(t){var e=V(h(t)),n=[];return q(e,(function(t){d(Y,t)||d(N,t)||n.push(t)})),n},pt=function(t){var e=t===z,n=V(e?Z:h(t)),r=[];return q(n,(function(t){!d(Y,t)||e&&!d(z,t)||r.push(Y[t])})),r};if(s||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===z&&n.call(Z,t),d(this,F)&&d(this[F],e)&&(this[F][e]=!1),ot(this,e,v(1,t))};return a&&ct&&ot(z,e,{configurable:!0,set:n}),it(e,t)},L(G[B],"toString",(function(){return W(this).tag})),L(G,"withoutSetter",(function(t){return it(E(t),t)})),Q.f=dt,P.f=st,x.f=lt,j.f=w.f=bt,S.f=pt,$.f=function(t){return it(T(t),t)},a&&(R(G[B],"description",{configurable:!0,get:function(){return W(this).description}}),i||L(z,"propertyIsEnumerable",dt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:G}),q(O(nt),(function(t){J(t)})),r({target:I,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=G(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!a},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(g(t))}}),H){var gt=!s||f((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,c=[t],o=1;while(arguments.length>o)c.push(arguments[o++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return l(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),c[1]=e,H.apply(null,c)}})}G[B][M]||k(G[B],M,G[B].valueOf),_(G,I),N[F]=!0},e01a:function(t,e,n){"use strict";var r=n("23e7"),c=n("83ab"),o=n("da84"),i=n("5135"),a=n("861d"),s=n("9bf2").f,u=n("e893"),f=o.Symbol;if(c&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var d={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new f(t):void 0===t?f():f(t);return""===t&&(d[e]=!0),e};u(l,f);var b=l.prototype=f.prototype;b.constructor=l;var p=b.toString,g="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(i(d,t))return"";var n=g?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:l})}},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-7f970ab0.e6c0d4d6.js.map