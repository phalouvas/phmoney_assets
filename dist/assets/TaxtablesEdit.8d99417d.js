var w=Object.defineProperty,$=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var u=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_=(e,t)=>{for(var s in t||(t={}))k.call(t,s)&&u(e,s,t[s]);if(c)for(var s of c(t))T.call(t,s)&&u(e,s,t[s]);return e},b=(e,t)=>$(e,g(t));import{_ as C,r as a,o as l,g as V,a as o,b as i,w as m,n as E,e as B,d as N,c as f,i as F}from"./main.f659eac9.js";const L={data(){return{form:{name:this.store.props.taxtable.name,taxtableentry:{account:this.store.props.taxtableentry.account,amount_num:this.store.props.taxtableentry.amount_num,amount_denom:this.store.props.taxtableentry.amount_denom,type:this.store.props.taxtableentry.type}}}},methods:{async submit(){await this.store.post(`/phmoney/business/taxtables/update/${this.$route.params.taxtable_pk}`,this.form),this.$router.back()}}},S={class:"p-3 border"},j=o("div",{class:"font-bold text-lg"},"Tax Table",-1),q=o("div",{class:"font-semibold text-md"},"Identification",-1),z={class:"flex flex-wrap gap-2"},I={class:"flex gap-2 items-center justify-end mt-4"},M=o("span",{class:"material-icons-outlined"},"view_list",-1),U=o("span",{class:"material-icons-outlined"}," save ",-1);function A(e,t,s,p,n,d){const x=a("form-label"),h=a("form-input"),y=a("form-secondary-button"),v=a("form-button");return l(),V("form",{onSubmit:t[2]||(t[2]=B((...r)=>d.submit&&d.submit(...r),["prevent"])),class:"p-6"},[o("div",S,[j,q,o("div",z,[o("div",null,[i(x,{for:"name",value:"Name*"}),i(h,{id:"name",type:"text",modelValue:n.form.name,"onUpdate:modelValue":t[0]||(t[0]=r=>n.form.name=r),required:""},null,8,["modelValue"])])])]),o("div",I,[i(y,{onClick:t[1]||(t[1]=r=>e.$router.push({name:"business.taxtables.entrys.index",params:{taxtable:e.store.props.taxtable.pk}})),title:"Tax Table Entries"},{default:m(()=>[M]),_:1}),i(v,{class:E({"opacity-25":n.form.processing}),disabled:n.form.processing,title:"Save"},{default:m(()=>[U]),_:1},8,["class","disabled"])])],32)}var D=C(L,[["render",A]]);const G={class:"bg-white shadow mt-4 prose max-w-none"},H={async created(){await this.store.get(`/phmoney/business/taxtables/edit/${this.$route.params.taxtable_pk}`)}},O=N(b(_({},H),{name:"TaxtablesEdit",setup(e){return(t,s)=>{const p=a("FormLayout");return l(),f(p,{title:`Edit Tax Table - ${t.store.props.taxtable?t.store.props.taxtable.name:"..."}`},{default:m(()=>[o("div",G,[t.store.processing?F("",!0):(l(),f(D,{key:0}))])]),_:1},8,["title"])}}}));export{O as default};
