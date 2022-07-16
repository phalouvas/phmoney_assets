import{_ as V,r as m,o as a,g as n,a as r,b as s,k as u,s as y,p,l as f,m as _,t as c,w as b,n as g,e as U}from"./main.b8a63217.js";const k={data(){var i,d;return{form:{id:this.store.props.customer.id,name:this.store.props.customer.name,active:this.store.props.customer.active,addr_name:this.store.props.customer.addr_name,addr_addr1:this.store.props.customer.addr_addr1,addr_addr2:this.store.props.customer.addr_addr2,addr_addr3:this.store.props.customer.addr_addr3,addr_addr4:this.store.props.customer.addr_addr4,addr_phone:this.store.props.customer.addr_phone,addr_fax:this.store.props.customer.addr_fax,addr_email:this.store.props.customer.addr_email,notes:this.store.props.customer.notes,shipaddr_name:this.store.props.customer.shipaddr_name,shipaddr_addr1:this.store.props.customer.shipaddr_addr1,shipaddr_addr2:this.store.props.customer.shipaddr_addr2,shipaddr_addr3:this.store.props.customer.shipaddr_addr3,shipaddr_addr4:this.store.props.customer.shipaddr_addr4,shipaddr_phone:this.store.props.customer.shipaddr_phone,shipaddr_fax:this.store.props.customer.shipaddr_fax,shipaddr_email:this.store.props.customer.shipaddr_email,currency:this.store.props.customer.currency,discount_num:(i=this.store.props.customer.discount_num)!=null?i:0,discount_denom:this.store.props.customer.discount_denom,credit_num:(d=this.store.props.customer.credit_num)!=null?d:0,credit_denom:this.store.props.customer.credit_denom,terms:this.store.props.customer.terms,tax_included:this.store.props.customer.tax_included,tax_override:this.store.props.customer.tax_override,taxtable:this.store.props.customer.taxtable},discount:this.store.props.customer.discount_num/this.store.props.customer.discount_denom,credit:this.store.props.customer.credit_num/this.store.props.customer.credit_denom}},methods:{async submit(){let i=this.store.props.currencies.find(d=>d.guid===this.form.currency);this.form.discount_num=this.discount*i.fraction,this.form.discount_denom=i.fraction,this.form.credit_num=this.credit*i.fraction,this.form.credit_denom=i.fraction,this.$route.name==="business.customers.create"?await this.store.post("http://phmoney_app.kainotomo.localhost/phmoney/business/customers/store",this.form):await this.store.post(`http://phmoney_app.kainotomo.localhost/phmoney/business/customers/update/${this.$route.params.customer_pk}`,this.form),this.$router.back()}}},w={class:"p-3 border"},A=r("div",{class:"font-bold text-lg"},"Customer",-1),C=r("div",{class:"font-semibold text-md"},"Identification",-1),N={class:"flex flex-wrap gap-2"},S=r("div",{class:"font-semibold text-md"},"Billing Address",-1),B={class:"flex flex-wrap gap-2"},E=r("div",{class:"font-semibold text-md"},"Notes",-1),T={class:"flex flex-wrap gap-2"},q={class:"p-3 mt-6 border"},I=r("div",{class:"font-bold text-lg"},"Billing Information",-1),D={class:"flex flex-wrap gap-2"},F=["value"],M=["value"],L=r("option",{value:"3"},"- Use Global -",-1),P=r("option",{value:"1"},"Yes",-1),j=r("option",{value:"2"},"No",-1),z=[L,P,j],G=["value"],Y={class:"p-3 mt-6 border"},H=r("div",{class:"font-bold text-lg"},"Shipping Address",-1),J=r("div",{class:"font-semibold text-md"},"Shipping Information",-1),K={class:"flex flex-wrap gap-2"},O={class:"flex gap-2 items-center justify-end mt-4"},Q=r("span",{class:"material-icons-outlined"}," save ",-1);function R(i,d,W,X,o,h){const t=m("form-label"),l=m("form-input"),v=m("form-checkbox"),x=m("form-button");return a(),n("form",{onSubmit:d[26]||(d[26]=U((...e)=>h.submit&&h.submit(...e),["prevent"])),class:"p-6"},[r("div",w,[A,C,r("div",N,[r("div",null,[s(t,{for:"id",value:"Number"}),s(l,{id:"id",type:"text",modelValue:o.form.id,"onUpdate:modelValue":d[0]||(d[0]=e=>o.form.id=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"name",value:"Name*"}),s(l,{id:"name",type:"text",modelValue:o.form.name,"onUpdate:modelValue":d[1]||(d[1]=e=>o.form.name=e),required:""},null,8,["modelValue"])]),r("div",null,[s(t,{for:"active",value:"Active"}),s(v,{id:"active",checked:o.form.active,"onUpdate:checked":d[2]||(d[2]=e=>o.form.active=e)},null,8,["checked"])])]),S,r("div",B,[r("div",null,[s(t,{for:"addr_name",value:"Name"}),s(l,{id:"addr_name",type:"text",modelValue:o.form.addr_name,"onUpdate:modelValue":d[3]||(d[3]=e=>o.form.addr_name=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_addr1",value:"Address 1"}),s(l,{id:"addr_addr1",type:"text",modelValue:o.form.addr_addr1,"onUpdate:modelValue":d[4]||(d[4]=e=>o.form.addr_addr1=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_addr2",value:"Address 2"}),s(l,{id:"addr_addr2",type:"text",modelValue:o.form.addr_addr2,"onUpdate:modelValue":d[5]||(d[5]=e=>o.form.addr_addr2=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_addr3",value:"Address 3"}),s(l,{id:"addr_addr3",type:"text",modelValue:o.form.addr_addr3,"onUpdate:modelValue":d[6]||(d[6]=e=>o.form.addr_addr3=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_addr4",value:"Address 4"}),s(l,{id:"addr_addr4",type:"text",modelValue:o.form.addr_addr4,"onUpdate:modelValue":d[7]||(d[7]=e=>o.form.addr_addr4=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_phone",value:"Phone"}),s(l,{id:"addr_phone",type:"text",modelValue:o.form.addr_phone,"onUpdate:modelValue":d[8]||(d[8]=e=>o.form.addr_phone=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_fax",value:"Fax"}),s(l,{id:"addr_fax",type:"text",modelValue:o.form.addr_fax,"onUpdate:modelValue":d[9]||(d[9]=e=>o.form.addr_fax=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"addr_email",value:"Email"}),s(l,{id:"addr_email",type:"text",modelValue:o.form.addr_email,"onUpdate:modelValue":d[10]||(d[10]=e=>o.form.addr_email=e)},null,8,["modelValue"])])]),E,r("div",T,[r("div",null,[u(r("textarea",{"onUpdate:modelValue":d[11]||(d[11]=e=>o.form.notes=e),class:"mt-1 p-3 w-full border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm",id:"notes",name:"notes"},null,512),[[y,o.form.notes]])])])]),r("div",q,[I,r("div",D,[r("div",null,[s(t,{for:"currency",value:"Currency"}),u(r("select",{id:"currency","onUpdate:modelValue":d[12]||(d[12]=e=>o.form.currency=e),required:"",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),n(f,null,_(i.store.props.currencies,e=>(a(),n("option",{key:e.guid,value:e.guid},c(e.fullname),9,F))),128))],512),[[p,o.form.currency]])]),r("div",null,[s(t,{for:"terms",value:"Terms"}),u(r("select",{id:"terms","onUpdate:modelValue":d[13]||(d[13]=e=>o.form.terms=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),n(f,null,_(i.store.props.billterms,e=>(a(),n("option",{key:e.guid,value:e.guid},c(e.name),9,M))),128))],512),[[p,o.form.terms]])]),r("div",null,[s(t,{for:"discount",value:"Discount"}),s(l,{id:"discount",type:"number",modelValue:o.discount,"onUpdate:modelValue":d[14]||(d[14]=e=>o.discount=e),min:"0",required:""},null,8,["modelValue"])]),r("div",null,[s(t,{for:"credit",value:"Credit Limit"}),s(l,{id:"credit",type:"number",modelValue:o.credit,"onUpdate:modelValue":d[15]||(d[15]=e=>o.credit=e),step:"0.01",min:"0",required:""},null,8,["modelValue"])]),r("div",null,[s(t,{for:"tax_included",value:"Tax Included"}),u(r("select",{id:"tax_included","onUpdate:modelValue":d[16]||(d[16]=e=>o.form.tax_included=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},z,512),[[p,o.form.tax_included]])]),r("div",null,[s(t,{for:"taxtable",value:"Tax Table"}),u(r("select",{id:"terms","onUpdate:modelValue":d[17]||(d[17]=e=>o.form.taxtable=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),n(f,null,_(i.store.props.taxtables,e=>(a(),n("option",{key:e.guid,value:e.guid},c(e.name),9,G))),128))],512),[[p,o.form.taxtable]])])])]),r("div",Y,[H,J,r("div",K,[r("div",null,[s(t,{for:"shipaddr_name",value:"Name"}),s(l,{id:"shipaddr_name",type:"text",modelValue:o.form.shipaddr_name,"onUpdate:modelValue":d[18]||(d[18]=e=>o.form.shipaddr_name=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_addr1",value:"Address 1"}),s(l,{id:"shipaddr_addr1",type:"text",modelValue:o.form.shipaddr_addr1,"onUpdate:modelValue":d[19]||(d[19]=e=>o.form.shipaddr_addr1=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_addr2",value:"Address 2"}),s(l,{id:"shipaddr_addr2",type:"text",modelValue:o.form.shipaddr_addr2,"onUpdate:modelValue":d[20]||(d[20]=e=>o.form.shipaddr_addr2=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_addr3",value:"Address 3"}),s(l,{id:"shipaddr_addr3",type:"text",modelValue:o.form.shipaddr_addr3,"onUpdate:modelValue":d[21]||(d[21]=e=>o.form.shipaddr_addr3=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_addr4",value:"Address 4"}),s(l,{id:"shipaddr_addr4",type:"text",modelValue:o.form.shipaddr_addr4,"onUpdate:modelValue":d[22]||(d[22]=e=>o.form.shipaddr_addr4=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_phone",value:"Phone"}),s(l,{id:"shipaddr_phone",type:"text",modelValue:o.form.shipaddr_phone,"onUpdate:modelValue":d[23]||(d[23]=e=>o.form.shipaddr_phone=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_fax",value:"Fax"}),s(l,{id:"shipaddr_fax",type:"text",modelValue:o.form.shipaddr_fax,"onUpdate:modelValue":d[24]||(d[24]=e=>o.form.shipaddr_fax=e)},null,8,["modelValue"])]),r("div",null,[s(t,{for:"shipaddr_email",value:"Email"}),s(l,{id:"shipaddr_email",type:"text",modelValue:o.form.shipaddr_email,"onUpdate:modelValue":d[25]||(d[25]=e=>o.form.shipaddr_email=e)},null,8,["modelValue"])])])]),r("div",O,[s(x,{class:g({"opacity-25":o.form.processing}),disabled:o.form.processing,title:"Save"},{default:b(()=>[Q]),_:1},8,["class","disabled"])])],32)}var $=V(k,[["render",R],["__file","/home/phalo/kainotomo/phmoney/phmoney_assets/src/components/business/customers/CustomersEdit.vue"]]);export{$ as C};