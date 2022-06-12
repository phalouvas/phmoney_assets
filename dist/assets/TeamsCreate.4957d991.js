var g=Object.defineProperty,y=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,_=(t,e)=>{for(var s in e||(e={}))x.call(e,s)&&u(t,s,e[s]);if(d)for(var s of d(e))T.call(e,s)&&u(t,s,e[s]);return t},p=(t,e)=>y(t,C(e));import{_ as V,r,o as h,g as $,b as a,a as o,t as f,w as b,n as k,e as B,d as N,c as S}from"./main.d009b879.js";const j={data(){return{form:{name:""}}},methods:{async submit(){await this.store.post("/phmoney/teams",this.form),await this.store.loadUser(),this.$router.push({name:"dashboard"})}}},D={class:"p-6"},F=o("h3",null,"Team Details",-1),L=o("p",null,"Create a new team to collaborate with others on projects.",-1),U={class:"flex items-center mt-2"},q=["src","alt"],z={class:"ml-4 leading-tight"},E={class:"text-sm text-gray-700"},M={class:"flex flex-wrap gap-2"},O=o("span",{class:"material-icons-outlined"}," save ",-1);function A(t,e,s,l,i,m){const c=r("form-label"),v=r("form-input"),w=r("form-button");return h(),$("div",D,[F,L,a(c,{value:"Team Owner"}),o("div",U,[o("img",{class:"object-cover w-12 h-12 rounded-full",src:t.store.user.profile_photo_url,alt:t.store.user.name},null,8,q),o("div",z,[o("div",null,f(t.store.user.name),1),o("div",E,f(t.store.user.email),1)])]),o("form",{onSubmit:e[1]||(e[1]=B((...n)=>m.submit&&m.submit(...n),["prevent"]))},[o("div",M,[a(c,{for:"name",value:"Team Name"}),a(v,{id:"name",type:"text",class:"block w-full mt-1",modelValue:i.form.name,"onUpdate:modelValue":e[0]||(e[0]=n=>i.form.name=n),autofocus:"",required:""},null,8,["modelValue"])]),a(w,{class:k(["mt-4",{"opacity-25":t.store.processing}]),disabled:t.store.processing,title:"Save"},{default:b(()=>[O]),_:1},8,["class","disabled"])],32)])}var G=V(j,[["render",A]]);const H={class:"bg-white shadow mt-4 prose max-w-none"},I={async created(){await this.store.get("/phmoney/user/profile")}},P=N(p(_({},I),{name:"TeamsCreate",setup(t){return(e,s)=>{const l=r("FormLayout");return h(),S(l,{title:"Create Team"},{default:b(()=>[o("div",H,[a(G)])]),_:1})}}}));export{P as default};