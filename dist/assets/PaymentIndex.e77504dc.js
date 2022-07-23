import{_ as F,r as a,o as n,g as r,a as o,k as f,p as y,b as i,w as g,F as h,m as v,t as u,i as b,c as p,n as D,f as P,d as U}from"./main.f659eac9.js";const N={async created(){await this.load(1),this.transfer_account=this.store.props.transfer_accounts[0],this.invoice_account=this.store.props.i_accounts[0],this.bill_account=this.store.props.b_accounts[0]},data(){return{form:{item_guid:null,post_account_guid:null,transfer_account_guid:null,post_date:this.moment().format("YYYY-MM-DD"),credit:0,debit:0,num:null,memo:null},filter:{page:1,search:null,invoice_type:null},transfer_account:null,invoice_account:null,bill_account:null,selected:null}},methods:{async load(t){this.filter.page=t,await this.store.get("/phmoney/business/payment",this.filter)},clear(){this.filter={page:1,search:null,invoice_type:null},this.load(1)},async submit(){this.form.item_guid=this.selected.guid,this.form.post_account_guid=this.store.getInvoiceType(this.selected)==="Invoice"?this.invoice_account.guid:this.bill_account.guid,this.form.transfer_account_guid=this.transfer_account.guid,await this.store.post("/phmoney/business/payment",this.form),this.load(1)},select_item(t){this.selected=t,parseFloat(t.amount)>0?(this.form.credit=t.amount,this.form.debit=0):(this.form.credit=0,this.form.debit=-t.amount)},owner(t){if(t.customer)return t.customer.name;if(t.vendor)return t.vendor.name;if(t.employee)return t.employee.username;if(t.job){if(t.job.customer)return t.job.customer.name;if(t.job.vendor)return t.job.vendor.name}}}},S={class:"p-6 overflow-x-auto"},T={class:"flex flex-wrap gap-2"},j=P(' @change="load(1)"> '),B=o("option",{disabled:"",value:null},"Filter by type",-1),A=o("option",null,"Invoice",-1),q=o("option",null,"Bill",-1),M=o("option",null,"Voucher",-1),Y=[j,B,A,q,M],L=o("span",{class:"material-icons-outlined"}," search ",-1),O=o("span",{class:"material-icons-outlined"}," search_off ",-1),x={key:0},z=o("option",{disabled:"",value:null},"Select post account",-1),E=["value"],R=o("option",{disabled:"",value:null},"Select post account",-1),G=["value"],H={key:0},J=o("thead",null,[o("tr",null,[o("th",null,"Num"),o("th",null,"Opened"),o("th",null,"Due"),o("th",null,"Company"),o("th",null,"Posted"),o("th",null,"Type"),o("th",null,"Debit"),o("th",null,"Credit"),o("th")])],-1),K={key:0},Q={key:1},W={key:2},X={key:1},Z={key:3},$={key:1},ee={key:4},oe={key:1},te={key:5},ne={key:1},se={class:"flex"},le={key:0,class:"text-red-gray hover:text-gray-300"},re=o("span",{class:"material-icons-outlined"},"radio_button_checked",-1),ie=[re],ue=["onClick"],ae=o("span",{class:"material-icons-outlined"},"radio_button_unchecked",-1),de=[ae],ce={class:"flex flex-wrap gap-2"},me=o("option",{disabled:"",value:null},"Select post account",-1),pe=["value"],_e={class:"flex gap-2 items-center justify-end mt-4"},fe=o("span",{class:"material-icons-outlined"}," save ",-1);function ye(t,l,C,k,s,d){const c=a("form-input"),V=a("form-button"),w=a("form-secondary-button"),_=a("AmountFinancial"),I=a("Pagination"),m=a("form-label");return n(),r("div",S,[o("div",T,[f(o("select",{"onUpdate:modelValue":l[0]||(l[0]=e=>s.filter.invoice_type=e),name:"invoice_type",id:"invoice_type",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},Y,512),[[y,s.filter.invoice_type]]),i(c,{id:"search",name:"search",type:"text",modelValue:s.filter.search,"onUpdate:modelValue":l[1]||(l[1]=e=>s.filter.search=e),placeholder:"Search..."},null,8,["modelValue"]),i(V,{title:"Search by Invoice ID, or Company Name, or Due Date, or Date Opened, or Billing ID, or Invoice Notes, or Invoice Owner",onClick:l[2]||(l[2]=e=>d.load(1))},{default:g(()=>[L]),_:1}),i(w,{title:"Clear",onClick:d.clear},{default:g(()=>[O]),_:1},8,["onClick"]),this.selected?(n(),r("div",x,[t.store.getInvoiceType(this.selected)==="Invoice"?f((n(),r("select",{key:0,id:"invoice_account","onUpdate:modelValue":l[3]||(l[3]=e=>s.invoice_account=e),onChange:l[4]||(l[4]=e=>t.calculate(t.split)),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[z,(n(!0),r(h,null,v(t.store.props.i_accounts,e=>(n(),r("option",{key:e.guid,value:e},u(e.name),9,E))),128))],544)),[[y,s.invoice_account]]):f((n(),r("select",{key:1,id:"bill_account","onUpdate:modelValue":l[5]||(l[5]=e=>s.bill_account=e),onChange:l[6]||(l[6]=e=>t.calculate(t.split)),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[R,(n(!0),r(h,null,v(t.store.props.b_accounts,e=>(n(),r("option",{key:e.guid,value:e},u(e.name),9,G))),128))],544)),[[y,s.bill_account]])])):b("",!0)]),t.store.props.items?(n(),r("table",H,[J,o("tbody",null,[(n(!0),r(h,null,v(t.store.props.items.data,e=>(n(),r("tr",{key:e.guid},[o("td",null,u(e.id),1),o("td",null,u(e.date_opened),1),e.due_date!==null?(n(),r("td",K,u(t.store.convert_date(e.due_date.timespec_val)),1)):(n(),r("td",Q)),o("td",null,u(d.owner(e)),1),o("td",null,u(e.date_posted),1),o("td",null,u(t.store.getInvoiceType(e)),1),t.store.getInvoiceType(e)==="Invoice"?(n(),r("td",W,[parseFloat(e.amount)>0?(n(),p(_,{key:0,amount:parseFloat(e.amount),commodity:s.invoice_account.commodity},null,8,["amount","commodity"])):(n(),r("span",X,"-"))])):(n(),r("td",Z,[parseFloat(e.amount)>0?(n(),p(_,{key:0,amount:parseFloat(e.amount),commodity:s.bill_account.commodity},null,8,["amount","commodity"])):(n(),r("span",$,"-"))])),t.store.getInvoiceType(e)==="Invoice"?(n(),r("td",ee,[parseFloat(e.amount)<0?(n(),p(_,{key:0,amount:parseFloat(-e.amount),commodity:s.invoice_account.commodity},null,8,["amount","commodity"])):(n(),r("span",oe,"-"))])):(n(),r("td",te,[parseFloat(e.amount)<0?(n(),p(_,{key:0,amount:parseFloat(-e.amount),commodity:s.bill_account.commodity},null,8,["amount","commodity"])):(n(),r("span",ne,"-"))])),o("td",null,[o("div",se,[s.selected!==null&&s.selected.guid===e.guid?(n(),r("div",le,ie)):(n(),r("div",{key:1,class:"text-red-gray hover:text-gray-300 hover:cursor-pointer",onClick:ge=>d.select_item(e)},de,8,ue))])])]))),128))]),o("tfoot",null,[t.store.props.items.total>t.store.props.items.per_page?(n(),p(I,{key:0,current:t.store.props.items.current_page,total:t.store.props.items.total,"per-page":t.store.props.items.per_page,onPageChanged:d.load},null,8,["current","total","per-page","onPageChanged"])):b("",!0)])])):b("",!0),o("div",ce,[o("div",null,[i(m,{for:"post_date",value:"Date"}),i(c,{id:"post_date",type:"date",modelValue:s.form.post_date,"onUpdate:modelValue":l[7]||(l[7]=e=>s.form.post_date=e),required:""},null,8,["modelValue"])]),o("div",null,[i(m,{for:"credit",value:"Payment"}),i(c,{id:"credit",type:"number",modelValue:s.form.credit,"onUpdate:modelValue":l[8]||(l[8]=e=>s.form.credit=e),min:"0",required:""},null,8,["modelValue"])]),o("div",null,[i(m,{for:"debit",value:"Refund"}),i(c,{id:"debit",type:"number",modelValue:s.form.debit,"onUpdate:modelValue":l[9]||(l[9]=e=>s.form.debit=e),min:"0",required:""},null,8,["modelValue"])]),o("div",null,[i(m,{for:"num",value:"Num"}),i(c,{id:"num",type:"text",modelValue:s.form.num,"onUpdate:modelValue":l[10]||(l[10]=e=>s.form.num=e)},null,8,["modelValue"])]),o("div",null,[i(m,{for:"memo",value:"Memo"}),i(c,{id:"memo",type:"text",modelValue:s.form.memo,"onUpdate:modelValue":l[11]||(l[11]=e=>s.form.memo=e)},null,8,["modelValue"])]),o("div",null,[i(m,{for:"transfer_account",value:"Transfer Account"}),f(o("select",{id:"transfer_account",required:"","onUpdate:modelValue":l[12]||(l[12]=e=>s.invoice_account=e),onChange:l[13]||(l[13]=e=>t.calculate(t.split)),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[me,(n(!0),r(h,null,v(t.store.props.transfer_accounts,e=>(n(),r("option",{key:e.guid,value:e},u(e.name),9,pe))),128))],544),[[y,s.invoice_account]])])]),o("div",_e,[i(V,{class:D({"opacity-25":s.form.processing||s.selected===null}),disabled:s.form.processing||s.selected===null,title:"Save",onClick:d.submit},{default:g(()=>[fe]),_:1},8,["class","disabled","onClick"])])])}var he=F(N,[["render",ye]]);const ve={class:"bg-white shadow mt-4 prose max-w-none"},ke=U({name:"PaymentIndex",setup(t){return(l,C)=>{const k=a("AppLayout");return n(),p(k,{title:"Process Payment"},{default:g(()=>[o("div",ve,[i(he)])]),_:1})}}});export{ke as default};
