var p=Object.defineProperty,_=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var r=(o,e,t)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,a=(o,e)=>{for(var t in e||(e={}))d.call(e,t)&&r(o,t,e[t]);if(s)for(var t of s(e))h.call(e,t)&&r(o,t,e[t]);return o},i=(o,e)=>_(o,c(e));import{_ as u,d as f,r as B,o as m,c as l,w as b,a as y,i as k}from"./main.ab09678c.js";import{B as w}from"./BilltermsEdit.9e8fe564.js";const v={class:"bg-white shadow mt-4 prose max-w-none"},E={async created(){await this.store.get(`http://phmoney_app.kainotomo.localhost/phmoney/business/billterms/edit/${this.$route.params.billterm_pk}`)}},$=f(i(a({},E),{name:"BilltermsEdit",setup(o){return(e,t)=>{const n=B("FormLayout");return m(),l(n,{title:`Edit Bill Term - ${e.store.props.billterm?e.store.props.billterm.name:"..."}`},{default:b(()=>[y("div",v,[e.store.processing?k("v-if",!0):(m(),l(w,{key:0}))])]),_:1},8,["title"])}}}));var F=u($,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/business/billterms/BilltermsEdit.vue"]]);export{F as default};