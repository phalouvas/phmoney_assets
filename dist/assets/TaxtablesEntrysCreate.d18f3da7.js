var _=Object.defineProperty,i=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var o=(a,e,t)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,r=(a,e)=>{for(var t in e||(e={}))h.call(e,t)&&o(a,t,e[t]);if(s)for(var t of s(e))y.call(e,t)&&o(a,t,e[t]);return a},n=(a,e)=>i(a,l(e));import{_ as d,d as u,r as x,o as c,c as m,w as b,a as f,i as C}from"./main.ab09678c.js";import{T as k}from"./TaxtablesEntrysEdit.d4b2313e.js";const w={class:"bg-white shadow mt-4 prose max-w-none"},T={async created(){await this.store.get(`http://phmoney_app.kainotomo.localhost/phmoney/business/taxtables/${this.$route.params.taxtable_pk}/taxtableentrys/create`)}},v=u(n(r({},T),{name:"TaxtablesEntrysCreate",setup(a){return(e,t)=>{const p=x("FormLayout");return c(),m(p,{title:"Create Tax Table Entry"},{default:b(()=>[f("div",w,[e.store.processing?C("v-if",!0):(c(),m(k,{key:0}))])]),_:1})}}}));var $=d(v,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/business/taxtables/entrys/TaxtablesEntrysCreate.vue"]]);export{$ as default};