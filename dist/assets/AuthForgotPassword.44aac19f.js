var w=Object.defineProperty,b=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(s,e,o)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,i=(s,e)=>{for(var o in e||(e={}))h.call(e,o)&&n(s,o,e[o]);if(m)for(var o of m(e))g.call(e,o)&&n(s,o,e[o]);return s},d=(s,e)=>b(s,y(e));import{d as k,r,o as u,c as v,w as p,g as V,t as C,i as N,a as t,b as l,n as B,e as A,f as E}from"./main.6bdfe4fe.js";import{A as F}from"./AuthLayout.ed1efd07.js";const L=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),P={key:0,class:"mb-4 font-medium text-sm text-sky-600"},S={class:"flex items-center justify-end mt-4"},j=E(" Email Password Reset Link "),q={data(){return{form:{email:""}}},methods:{async submit(){await this.store.post("/phmoney/forgot-password",this.form)}}},J=k(d(i({},q),{name:"AuthForgotPassword",setup(s){return(e,o)=>{const f=r("form-label"),c=r("form-input"),_=r("form-button");return u(),v(F,null,{default:p(()=>[L,e.store.props.message?(u(),V("div",P,C(e.store.props.message),1)):N("",!0),t("form",{onSubmit:o[1]||(o[1]=A((...a)=>e.submit&&e.submit(...a),["prevent"]))},[t("div",null,[l(f,{for:"email",value:"Email"}),l(c,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":o[0]||(o[0]=a=>e.form.email=a),required:"",autofocus:""},null,8,["modelValue"])]),t("div",S,[l(_,{class:B({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:p(()=>[j]),_:1},8,["class","disabled"])])],32)]),_:1})}}}));export{J as default};