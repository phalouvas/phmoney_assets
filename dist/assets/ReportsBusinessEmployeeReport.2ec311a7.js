var w=Object.defineProperty,R=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(t,n,s)=>n in t?w(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,_=(t,n)=>{for(var s in n||(n={}))B.call(n,s)&&y(t,s,n[s]);if(i)for(var s of i(n))C.call(n,s)&&y(t,s,n[s]);return t},h=(t,n)=>R(t,D(n));import{_ as L,r as d,o as m,g as u,b as r,a as o,t as l,i as g,F as v,m as k,w as c,f as S,d as V,c as f,k as $,p as E}from"./main.769fda87.js";const N={},T={class:"p-6"},b={class:"text-center"},F={key:0},M=o("thead",null,[o("th",null,"Date"),o("th",null,"Due Date"),o("th",null,"Reference"),o("th",null,"Type"),o("th",null,"Description"),o("th",null,"Sale"),o("th",null,"Tax"),o("th",null,"Debits"),o("th",null,"Credits"),o("th",null,"Balance")],-1),P=o("th",null,"Period Totals",-1),U=o("th",{colspan:"4"},null,-1);function j(t,n){const s=d("button-bar"),p=d("RouterLink"),a=d("amount-financial");return m(),u("div",T,[r(s,{onSettings:n[0]||(n[0]=e=>t.savingSettings=!0)}),o("h2",b,l(t.store.props.company)+" "+l(t.store.props.title)+" From "+l(t.store.convert_date(t.store.props.date_start))+" to "+l(t.store.convert_date(t.store.props.date_end)),1),t.store.report_settings.params.employee!==null?(m(),u("h3",F,l(t.store.report_settings.params.employee.username),1)):g("",!0),o("table",null,[M,o("tbody",null,[(m(!0),u(v,null,k(t.store.props.bills,e=>(m(),u("tr",{key:e.guid},[o("td",null,l(t.store.convert_date(e.date_opened)),1),o("td",null,l(e.due_date),1),o("td",null,[r(p,{to:{name:"business.invoices.entrys.index",params:{invoice_pk:e.pk}}},{default:c(()=>[S(l(e.id),1)]),_:2},1032,["to"])]),o("td",null,l(e.type),1),o("td",null,l(e.notes),1),o("td",null,[r(a,{amount:e.sale,commodity:e.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:e.tax,commodity:e.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:e.debits,commodity:e.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:e.credits,commodity:e.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:e.balance,commodity:e.commodity},null,8,["amount","commodity"])])]))),128))]),o("tfoot",null,[P,U,o("th",null,[r(a,{amount:t.store.props.totals.sale,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:t.store.props.totals.tax,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:t.store.props.totals.debits,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:t.store.props.totals.credits,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:t.store.props.totals.balance,commodity:t.store.props.currency},null,8,["amount","commodity"])])])])])}var q=L(N,[["render",j]]);const z={class:"flex gap-2"},A=["value"],G={class:"bg-white shadow mt-4 prose max-w-none"},H={data(){return{extra_params:{employee:null}}}},K=V(h(_({},H),{setup(t){return(n,s)=>{const p=d("form-label"),a=d("ReportLayout");return m(),f(a,{title:"Employee Report",extra_params:n.extra_params,show_accounts:!1},{settings:c(()=>[o("div",z,[o("div",null,[r(p,{for:"employee",value:"Employee"}),$(o("select",{id:"employee","onUpdate:modelValue":s[0]||(s[0]=e=>n.store.report_settings.params.employee=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(m(!0),u(v,null,k(n.store.props.employees,e=>(m(),u("option",{key:e.pk,value:e},l(e.username),9,A))),128))],512),[[E,n.store.report_settings.params.employee]])])])]),default:c(()=>[o("div",G,[n.store.props.currency&&!n.store.processing?(m(),f(q,{key:0})):g("",!0)])]),_:1},8,["extra_params"])}}}));export{K as default};