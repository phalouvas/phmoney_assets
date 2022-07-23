var V=Object.defineProperty,k=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(t,e,a)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))T.call(e,a)&&_(t,a,e[a]);if(f)for(var a of f(e))B.call(e,a)&&_(t,a,e[a]);return t},y=(t,e)=>k(t,C(e));import{_ as F,r as u,o as l,g as m,a as o,b as r,k as x,p as h,F as N,m as S,t as U,w as g,n as q,e as L,d as A,c as v,i as D}from"./main.f659eac9.js";const E={data(){var t;return{form:{name:this.store.props.taxtable.name,taxtableentry:{account:null,amount_num:0,amount_denom:100,type:this.store.props.type.value}},account:(t=this.store.props.taxtableentry.tax_account)!=null?t:null,amount:this.store.props.taxtableentry.length>0?this.store.props.taxtableentry.amount_num/this.store.props.taxtableentry.amount_denom:null}},methods:{async submit(){let t=100;this.form.taxtableentry.type==2&&(t=1e5),this.form.taxtableentry.amount_num=this.amount*t,this.form.taxtableentry.amount_denom=t,await this.store.post("/phmoney/business/taxtables/store",this.form),this.$router.back()}}},I={class:"p-3 border"},M=o("div",{class:"font-bold text-lg"},"Tax Table",-1),j=o("div",{class:"font-semibold text-md"},"Identification",-1),z={class:"flex flex-wrap gap-2"},P=o("div",{class:"font-semibold text-md"}," Tax Table Entry ",-1),G={class:"flex flex-wrap gap-2"},H=o("option",{value:"1"},"Percent %",-1),J=o("option",{value:"2"},"Value \u20AC",-1),K=[H,J],O=["value"],Q={class:"flex gap-2 items-center justify-end mt-4"},R=o("span",{class:"material-icons-outlined"}," save ",-1);function W(t,e,a,d,n,c){const i=u("form-label"),p=u("form-input"),w=u("form-button");return l(),m("div",null,[o("form",{onSubmit:e[4]||(e[4]=L((...s)=>c.submit&&c.submit(...s),["prevent"])),class:"p-6"},[o("div",I,[M,j,o("div",z,[o("div",null,[r(i,{for:"name",value:"Name*"}),r(p,{id:"name",type:"text",modelValue:n.form.name,"onUpdate:modelValue":e[0]||(e[0]=s=>n.form.name=s),required:""},null,8,["modelValue"])])]),P,o("div",G,[o("div",null,[r(i,{for:"type",value:"Tax Included"}),x(o("select",{"onUpdate:modelValue":e[1]||(e[1]=s=>n.form.taxtableentry.type=s),name:"type",id:"type",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},K,512),[[h,n.form.taxtableentry.type]])]),o("div",null,[r(i,{for:"amount",value:"Value*"}),r(p,{id:"amount",type:"number",modelValue:n.amount,"onUpdate:modelValue":e[2]||(e[2]=s=>n.amount=s),min:"0",required:""},null,8,["modelValue"])]),o("div",null,[r(i,{for:"account",value:"Account"}),x(o("select",{id:"account","onUpdate:modelValue":e[3]||(e[3]=s=>n.form.taxtableentry.account=s),required:"",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(l(!0),m(N,null,S(t.store.props.accounts,s=>(l(),m("option",{key:s.guid,value:s.guid},U(s.name),9,O))),128))],512),[[h,n.form.taxtableentry.account]])])])]),o("div",Q,[r(w,{class:q({"opacity-25":n.form.processing}),disabled:n.form.processing,title:"Save"},{default:g(()=>[R]),_:1},8,["class","disabled"])])],32)])}var X=F(E,[["render",W]]);const Y={class:"bg-white shadow mt-4 prose max-w-none"},Z={async created(){await this.store.get("/phmoney/business/taxtables/create")}},te=A(y(b({},Z),{name:"TaxtablesCreate",setup(t){return(e,a)=>{const d=u("FormLayout");return l(),v(d,{title:"Create Tax Table"},{default:g(()=>[o("div",Y,[e.store.processing?D("",!0):(l(),v(X,{key:0}))])]),_:1})}}}));export{te as default};
