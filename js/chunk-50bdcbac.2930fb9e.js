(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50bdcbac"],{"1dde":function(e,t,a){var s=a("d039"),o=a("b622"),r=a("2d00"),l=o("species");e.exports=function(e){return r>=51||!s((function(){var t=[],a=t.constructor={};return a[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"499c":function(e,t,a){"use strict";a.r(t);a("b0c0");var s=a("7a23"),o={class:"py-4"},r=Object(s["g"])("h2",{class:"text-center"},"填寫購買人資料",-1),l={class:"formGroup mb-3"},c=Object(s["g"])("label",{for:"email",class:"form-label"},"email",-1),n={class:"formGroup mb-3"},i=Object(s["g"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),u={class:"formGroup mb-3"},d=Object(s["g"])("label",{for:"tel",class:"form-label"},"收件人手機號碼",-1),b={class:"formGroup mb-3"},m=Object(s["g"])("label",{for:"address",class:"form-label"},"收件人地址",-1),f={class:"formGroup mb-3"},p=Object(s["g"])("label",{for:"message",class:"form-label"},"備註",-1),g=Object(s["g"])("div",{class:"fromGroup d-flex justify-content-center"},[Object(s["g"])("button",{type:"submit",class:"btn btn-primary"},"送出資料")],-1);function j(e,t,a,j,O,h){var v=Object(s["x"])("Field"),y=Object(s["x"])("Error-Message"),M=Object(s["x"])("Form"),x=Object(s["x"])("submitModal");return Object(s["s"])(),Object(s["d"])(s["a"],null,[Object(s["g"])("div",o,[r,Object(s["g"])(M,{class:"containerForm py-2",onSubmit:h.submitData},{default:Object(s["F"])((function(e){var a=e.errors;return[Object(s["g"])("div",l,[c,Object(s["g"])(v,{type:"email",name:"email",id:"email",class:["form-control",{"is-invalid":a["email"]}],rules:"required|email",modelValue:O.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return O.user.email=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(s["g"])(y,{name:"email",class:"invalid-feedback"})]),Object(s["g"])("div",n,[i,Object(s["g"])(v,{type:"text",name:"收件人姓名",id:"name",class:["form-control",{"is-invalid":a["收件人姓名"]}],rules:"required",modelValue:O.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return O.user.name=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(s["g"])(y,{name:"收件人姓名",class:"invalid-feedback"})]),Object(s["g"])("div",u,[d,Object(s["g"])(v,{type:"tel",name:"收件人手機號碼",id:"tel",class:["form-control",{"is-invalid":a["收件人手機號碼"]}],rules:h.isPhone,modelValue:O.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return O.user.tel=e}),modelModifiers:{trim:!0}},null,8,["class","rules","modelValue"]),Object(s["g"])(y,{name:"收件人手機號碼",class:"invalid-feedback"})]),Object(s["g"])("div",b,[m,Object(s["g"])(v,{type:"text",name:"收件人地址",id:"address",class:["form-control",{"is-invalid":a["收件人地址"]}],rules:"required",modelValue:O.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return O.user.address=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(s["g"])(y,{name:"收件人地址",class:"invalid-feedback"})]),Object(s["g"])("div",f,[p,Object(s["g"])(v,{type:"text",name:"備註",id:"message",class:"form-control",as:"textarea",modelValue:O.message,"onUpdate:modelValue":t[5]||(t[5]=function(e){return O.message=e}),modelModifiers:{trim:!0}},null,8,["modelValue"])]),g]})),_:1},8,["onSubmit"])]),Object(s["g"])(x,{ref:"submitModal",user:O.user,message:O.message},null,8,["user","message"])],64)}var O={class:"modal fade",ref:"submitModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},h={class:"modal-dialog modal-dialog-scrollable"},v={class:"modal-content"},y={class:"modal-header bg-dark"},M=Object(s["g"])("h5",{class:"modal-title text-white",id:"exampleModalLabel"},"訂單確認",-1),x={class:"modal-body"},k=Object(s["g"])("p",null,"訂單內容：",-1),V={class:"orderContent"},w={class:"total"},A={class:"modal-footer"},D={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},C=Object(s["f"])("送出訂單");function G(e,t,a,o,r,l){return Object(s["s"])(),Object(s["d"])("div",O,[Object(s["g"])("div",h,[Object(s["g"])("div",v,[Object(s["g"])("div",y,[M,Object(s["g"])("button",{type:"button",class:"btn-close btn-close-white",onClick:t[1]||(t[1]=function(){return l.closeModal&&l.closeModal.apply(l,arguments)})})]),Object(s["g"])("div",x,[Object(s["g"])("p",null,"收件人姓名："+Object(s["A"])(a.user.name),1),Object(s["g"])("p",null,"收件人email："+Object(s["A"])(a.user.email),1),Object(s["g"])("p",null,"收件人電話："+Object(s["A"])(a.user.tel),1),Object(s["g"])("p",null,"收件人地址："+Object(s["A"])(a.user.address),1),Object(s["g"])("p",null,"留言："+Object(s["A"])(a.message),1),k,Object(s["g"])("div",V,[(Object(s["s"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(r.cartData.carts,(function(e){return Object(s["s"])(),Object(s["d"])("p",{key:e.id},Object(s["A"])(e.product.title)+" x "+Object(s["A"])(e.qty),1)})),128)),Object(s["g"])("p",w,"總金額："+Object(s["A"])(r.cartData.final_total),1)])]),Object(s["g"])("div",A,[Object(s["g"])("button",{type:"button",class:"btn btn-secondary",onClick:t[2]||(t[2]=function(){return l.closeModal&&l.closeModal.apply(l,arguments)})},"取消"),Object(s["g"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(){return l.submitOrder&&l.submitOrder.apply(l,arguments)})},[r.submitLoading?(Object(s["s"])(),Object(s["d"])("span",D)):Object(s["e"])("",!0),C])])])])],512)}a("99af");var L=a("7b17"),$=a("1940"),F=a.n($),U={data:function(){return{submitModal:{},cartData:{},submitLoading:!1}},props:["user","message"],methods:{openModal:function(){this.submitModal.show()},closeModal:function(){this.submitModal.hide()},getCartData:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jun0527","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cartData=t.data.data)})).catch((function(e){console.dir(e)}))},submitOrder:function(){var e=this;this.submitLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jun0527","/order"),a={data:{user:this.user,message:this.message}};this.$http.post(t,a).then((function(t){t.data.success?(F()("訂單送出成功！"),e.submitLoading=!1,e.$router.push("/products"),e.closeModal()):(F()("訂單送出失敗！"),e.closeModal())})).catch((function(e){console.dir(e)}))}},mounted:function(){this.submitModal=new L["a"](this.$refs.submitModal,{backdrop:"static",keyboard:!1}),this.getCartData()}};U.render=G;var q=U,S={data:function(){return{user:{name:"",email:"",tel:"",address:""},message:""}},components:{submitModal:q},methods:{isPhone:function(e){if(!e)return"收件人手機號碼 為必填";var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"收件人手機號碼 須為正確的手機號碼"},submitData:function(){this.$refs.submitModal.openModal()}}};S.render=j;t["default"]=S},8418:function(e,t,a){"use strict";var s=a("c04e"),o=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var l=s(t);l in e?o.f(e,l,r(0,a)):e[l]=a}},"99af":function(e,t,a){"use strict";var s=a("23e7"),o=a("d039"),r=a("e8b5"),l=a("861d"),c=a("7b0b"),n=a("50c4"),i=a("8418"),u=a("65f0"),d=a("1dde"),b=a("b622"),m=a("2d00"),f=b("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",j=m>=51||!o((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),O=d("concat"),h=function(e){if(!l(e))return!1;var t=e[f];return void 0!==t?!!t:r(e)},v=!j||!O;s({target:"Array",proto:!0,forced:v},{concat:function(e){var t,a,s,o,r,l=c(this),d=u(l,0),b=0;for(t=-1,s=arguments.length;t<s;t++)if(r=-1===t?l:arguments[t],h(r)){if(o=n(r.length),b+o>p)throw TypeError(g);for(a=0;a<o;a++,b++)a in r&&i(d,b,r[a])}else{if(b>=p)throw TypeError(g);i(d,b++,r)}return d.length=b,d}})},b0c0:function(e,t,a){var s=a("83ab"),o=a("9bf2").f,r=Function.prototype,l=r.toString,c=/^\s*function ([^ (]*)/,n="name";s&&!(n in r)&&o(r,n,{configurable:!0,get:function(){try{return l.call(this).match(c)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-50bdcbac.2930fb9e.js.map