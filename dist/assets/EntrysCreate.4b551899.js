var y=Object.defineProperty,u=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var i=(o,e,t)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,c=(o,e)=>{for(var t in e||(e={}))l.call(e,t)&&i(o,t,e[t]);if(n)for(var t of n(e))v.call(e,t)&&i(o,t,e[t]);return o},p=(o,e)=>u(o,d(e));import{E as _,a as h,b as E}from"./EntrysEditVoucher.b57751ef.js";import{d as f,r as g,o as s,c as r,w as k,a as w,i as a}from"./main.f659eac9.js";const C={class:"bg-white shadow mt-4 prose max-w-none"},I={async created(){await this.store.get(`/phmoney/business/invoices/${this.$route.params.invoice_pk}/entrys/create`)}},$=f(p(c({},I),{name:"EntrysCreate",setup(o){return(e,t)=>{const m=g("FormLayout");return s(),r(m,{title:`Create ${e.store.props.invoice?e.store.getInvoiceType()+" Entry":"..."}`},{default:k(()=>[w("div",C,[e.store.getInvoiceType()==="Invoice"?(s(),r(_,{key:0})):a("",!0),e.store.getInvoiceType()==="Bill"?(s(),r(h,{key:1})):a("",!0),e.store.getInvoiceType()==="Voucher"?(s(),r(E,{key:2})):a("",!0)])]),_:1},8,["title"])}}}));export{$ as default};
