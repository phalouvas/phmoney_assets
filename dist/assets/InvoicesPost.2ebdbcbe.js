var P=Object.defineProperty,q=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var _=(s,e,r)=>e in s?P(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,v=(s,e)=>{for(var r in e||(e={}))B.call(e,r)&&_(s,r,e[r]);if(f)for(var r of f(e))F.call(e,r)&&_(s,r,e[r]);return s},g=(s,e)=>q(s,x(e));import{_ as L,x as y,r as l,o as u,g as a,a as n,b as i,n as b,k,p as h,F as V,m as w,t as S,w as U,e as N,d as A,c as D,i as M}from"./main.6838e74f.js";const T={data(){return{form:{date_posted:y.convert_date(),date_due:y.convert_date(this.store.props.date_due),description:null,account_guid:null,accumulate:!0}}},methods:{async submit(){await this.store.post(`/phmoney/business/invoices/post/${this.$route.params.invoice_pk}`,this.form),this.$router.back()}}},j={class:"p-3 border"},z={class:"flex flex-wrap gap-2"},E=n("option",{disabled:"",value:null},"- Select receivable account -",-1),G=["value"],H=n("option",{disabled:"",value:null},"- Select payable account -",-1),J=["value"],K={class:"flex gap-2 items-center justify-end mt-4"},O=n("span",{class:"material-icons-outlined"}," save ",-1);function Q(s,e,r,m,t,p){const d=l("form-label"),c=l("form-input"),C=l("form-checkbox"),I=l("form-button");return u(),a("form",{onSubmit:e[6]||(e[6]=N((...o)=>p.submit&&p.submit(...o),["prevent"])),class:"p-6"},[n("div",j,[n("div",z,[n("div",null,[i(d,{for:"date_posted",value:"Post Date"}),i(c,{id:"date_posted",type:"date",modelValue:t.form.date_posted,"onUpdate:modelValue":e[0]||(e[0]=o=>t.form.date_posted=o),required:""},null,8,["modelValue"])]),n("div",null,[i(d,{for:"date_due",value:"Due Date"}),i(c,{id:"date_due",type:"date",modelValue:t.form.date_due,"onUpdate:modelValue":e[1]||(e[1]=o=>t.form.date_due=o),class:b({"opacity-60":s.store.props.invoice.terms}),disabled:s.store.props.invoice.terms,required:""},null,8,["modelValue","class","disabled"])]),n("div",null,[i(d,{for:"description",value:"Description"}),i(c,{id:"description",type:"text",modelValue:t.form.description,"onUpdate:modelValue":e[2]||(e[2]=o=>t.form.description=o)},null,8,["modelValue"])]),n("div",null,[i(d,{for:"account",value:"Post to Account"}),s.store.getInvoiceType()==="Invoice"?k((u(),a("select",{key:0,id:"account","onUpdate:modelValue":e[3]||(e[3]=o=>t.form.account_guid=o),required:"",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[E,(u(!0),a(V,null,w(s.store.props.i_accounts,o=>(u(),a("option",{key:o.guid,value:o.guid},S(o.name),9,G))),128))],512)),[[h,t.form.account_guid]]):k((u(),a("select",{key:1,id:"account","onUpdate:modelValue":e[4]||(e[4]=o=>t.form.account_guid=o),required:"",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[H,(u(!0),a(V,null,w(s.store.props.b_accounts,o=>(u(),a("option",{key:o.guid,value:o.guid},S(o.name),9,J))),128))],512)),[[h,t.form.account_guid]])]),n("div",null,[i(d,{for:"accumulate",value:"Accumulate Splits?"}),i(C,{id:"accumulate",checked:t.form.accumulate,"onUpdate:checked":e[5]||(e[5]=o=>t.form.accumulate=o)},null,8,["checked"])])])]),n("div",K,[i(I,{class:b({"opacity-25":t.form.processing||!t.form.account_guid}),disabled:t.form.processing||!t.form.account_guid,title:"Save"},{default:U(()=>[O]),_:1},8,["class","disabled"])])],32)}var R=L(T,[["render",Q]]);const W={class:"bg-white shadow mt-4 prose max-w-none"},X={async created(){await this.store.get(`/phmoney/business/invoices/post/${this.$route.params.invoice_pk}`)}},$=A(g(v({},X),{name:"InvoicesPost",setup(s){return(e,r)=>{const m=l("FormLayout");return u(),D(m,{title:`Post ${e.store.props.invoice?e.store.getInvoiceType()+" - "+e.store.props.invoice.id:"..."}`},{default:U(()=>[n("div",W,[e.store.processing?M("",!0):(u(),D(R,{key:0}))])]),_:1},8,["title"])}}}));export{$ as default};