var g=Object.defineProperty,C=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(t,e,s)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))k.call(e,s)&&d(t,s,e[s]);if(_)for(var s of _(e))x.call(e,s)&&d(t,s,e[s]);return t},p=(t,e)=>C(t,T(e));import{_ as f,r,o as w,g as $,b as a,a as o,t as h,w as v,n as V,e as B,d as N,c as S}from"./main.503448c0.js";const j={data(){return{form:{name:""}}},methods:{async submit(){await this.store.post("http://phmoney_local.kainotomo.localhost/phmoney/teams",this.form),await this.store.loadUser(),this.$router.push({name:"dashboard"})}}},D={class:"p-6"},F=o("h3",null,"Team Details",-1),L=o("p",null,"Create a new team to collaborate with others on projects.",-1),U={class:"flex items-center mt-2"},q=["src","alt"],z={class:"ml-4 leading-tight"},E={class:"text-sm text-gray-700"},M={class:"flex flex-wrap gap-2"},O=o("span",{class:"material-icons-outlined"}," save ",-1);function A(t,e,s,l,m,i){const c=r("form-label"),b=r("form-input"),y=r("form-button");return w(),$("div",D,[F,L,a(c,{value:"Team Owner"}),o("div",U,[o("img",{class:"object-cover w-12 h-12 rounded-full",src:t.store.user.profile_photo_url,alt:t.store.user.name},null,8,q),o("div",z,[o("div",null,h(t.store.user.name),1),o("div",E,h(t.store.user.email),1)])]),o("form",{onSubmit:e[1]||(e[1]=B((...n)=>i.submit&&i.submit(...n),["prevent"]))},[o("div",M,[a(c,{for:"name",value:"Team Name"}),a(b,{id:"name",type:"text",class:"block w-full mt-1",modelValue:m.form.name,"onUpdate:modelValue":e[0]||(e[0]=n=>m.form.name=n),autofocus:"",required:""},null,8,["modelValue"])]),a(y,{class:V(["mt-4",{"opacity-25":t.store.processing}]),disabled:t.store.processing,title:"Save"},{default:v(()=>[O]),_:1},8,["class","disabled"])],32)])}var G=f(j,[["render",A],["__file","/var/www/html/src/components/teams/TeamsCreate.vue"]]);const H={class:"bg-white shadow mt-4 prose max-w-none"},I={async created(){await this.store.get("http://phmoney_local.kainotomo.localhost/phmoney/user/profile")}},J=N(p(u({},I),{name:"TeamsCreate",setup(t){return(e,s)=>{const l=r("FormLayout");return w(),S(l,{title:"Create Team"},{default:v(()=>[o("div",H,[a(G)])]),_:1})}}}));var Q=f(J,[["__file","/var/www/html/src/views/teams/TeamsCreate.vue"]]);export{Q as default};
