var w=Object.defineProperty,B=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var y=(e,s,n)=>s in e?w(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,_=(e,s)=>{for(var n in s||(s={}))D.call(s,n)&&y(e,n,s[n]);if(c)for(var n of c(s))$.call(s,n)&&y(e,n,s[n]);return e},h=(e,s)=>B(e,E(s));import{_ as v,r as p,o as m,g as u,b as r,a as o,t as l,i as g,l as R,m as k,w as i,f as C,d as L,c as f,k as S,p as V}from"./main.ffef03e2.js";const N={},T={class:"p-6"},b={class:"text-center"},F={key:0},M=o("thead",null,[o("th",null,"Date"),o("th",null,"Due Date"),o("th",null,"Reference"),o("th",null,"Type"),o("th",null,"Description"),o("th",null,"Sale"),o("th",null,"Tax"),o("th",null,"Debits"),o("th",null,"Credits"),o("th",null,"Balance")],-1),P=o("th",null,"Period Totals",-1),U=o("th",{colspan:"4"},null,-1);function j(e,s){const n=p("button-bar"),d=p("RouterLink"),a=p("amount-financial");return m(),u("div",T,[r(n,{onSettings:s[0]||(s[0]=t=>e.savingSettings=!0)}),o("h2",b,l(e.store.props.company)+" "+l(e.store.props.title)+" From "+l(e.store.convert_date(e.store.props.date_start))+" to "+l(e.store.convert_date(e.store.props.date_end)),1),e.store.report_settings.params.employee!==null?(m(),u("h3",F,l(e.store.report_settings.params.employee.username),1)):g("v-if",!0),o("table",null,[M,o("tbody",null,[(m(!0),u(R,null,k(e.store.props.bills,t=>(m(),u("tr",{key:t.guid},[o("td",null,l(e.store.convert_date(t.date_opened)),1),o("td",null,l(t.due_date),1),o("td",null,[r(d,{to:{name:"business.invoices.entrys.index",params:{invoice_pk:t.pk}}},{default:i(()=>[C(l(t.id),1)]),_:2},1032,["to"])]),o("td",null,l(t.type),1),o("td",null,l(t.notes),1),o("td",null,[r(a,{amount:t.sale,commodity:t.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:t.tax,commodity:t.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:t.debits,commodity:t.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:t.credits,commodity:t.commodity},null,8,["amount","commodity"])]),o("td",null,[r(a,{amount:t.balance,commodity:t.commodity},null,8,["amount","commodity"])])]))),128))]),o("tfoot",null,[P,U,o("th",null,[r(a,{amount:e.store.props.totals.sale,commodity:e.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:e.store.props.totals.tax,commodity:e.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:e.store.props.totals.debits,commodity:e.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:e.store.props.totals.credits,commodity:e.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[r(a,{amount:e.store.props.totals.balance,commodity:e.store.props.currency},null,8,["amount","commodity"])])])])])}var q=v(N,[["render",j],["__file","/var/www/html/src/components/reports/ReportsBusinessEmployeeReport.vue"]]);const z={class:"flex gap-2"},A=["value"],G={class:"bg-white shadow mt-4 prose max-w-none"},H={data(){return{extra_params:{employee:null}}}},I=L(h(_({},H),{name:"ReportsBusinessEmployeeReport",setup(e){return(s,n)=>{const d=p("form-label"),a=p("ReportLayout");return m(),f(a,{title:"Employee Report",extra_params:s.extra_params,show_accounts:!1},{settings:i(()=>[o("div",z,[o("div",null,[r(d,{for:"employee",value:"Employee"}),S(o("select",{id:"employee","onUpdate:modelValue":n[0]||(n[0]=t=>s.store.report_settings.params.employee=t),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(m(!0),u(R,null,k(s.store.props.employees,t=>(m(),u("option",{key:t.pk,value:t},l(t.username),9,A))),128))],512),[[V,s.store.report_settings.params.employee]])])])]),default:i(()=>[o("div",G,[s.store.props.currency&&!s.store.processing?(m(),f(q,{key:0})):g("v-if",!0)])]),_:1},8,["extra_params"])}}}));var O=v(I,[["__file","/var/www/html/src/views/reports/ReportsBusinessEmployeeReport.vue"]]);export{O as default};