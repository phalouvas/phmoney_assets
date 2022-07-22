import{_ as p,r as c,o as a,g as m,a as o,t as r,l as i,m as d,b as n,d as y,c as l,w as h,i as _}from"./main.503448c0.js";const f={},w={class:"p-6"},C={class:"text-center"},v=o("thead",null,[o("th",null,"Customer"),o("th",null,"Profit"),o("th",null,"Markup"),o("th",null,"Description"),o("th",null,"Sales"),o("th",null,"Expense")],-1),B=o("th",null,"Total",-1),S={colspan:"2"};function k(t,u){const e=c("amount-financial");return a(),m("div",w,[o("h2",C,r(t.store.props.company)+" "+r(t.store.props.title)+" From "+r(t.store.convert_date(t.store.props.date_start))+" to "+r(t.store.convert_date(t.store.props.date_end)),1),o("table",null,[v,o("tbody",null,[(a(!0),m(i,null,d(t.store.props.invoices,s=>(a(),m("tr",{key:s.guid},[o("td",null,r(s.name),1),o("td",null,[n(e,{amount:s.profits,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("td",null,r(s.markup)+"%",1),o("td",null,[n(e,{amount:s.sales,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("td",null,[n(e,{amount:s.expenses,commodity:t.store.props.currency},null,8,["amount","commodity"])])]))),128))]),o("tfoot",null,[B,o("th",S,[n(e,{amount:t.store.props.totals.profits,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[n(e,{amount:t.store.props.totals.sales,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[n(e,{amount:t.store.props.totals.expenses,commodity:t.store.props.currency},null,8,["amount","commodity"])])])])])}var R=p(f,[["render",k],["__file","/var/www/html/src/components/reports/ReportsBusinessCustomerSummary.vue"]]);const g={class:"bg-white shadow mt-4 prose max-w-none"},b=y({name:"ReportsBusinessCustomerSummary",setup(t){return(u,e)=>{const s=c("ReportLayout");return a(),l(s,{title:"Customer Summary",extra_params:{},show_accounts:!1},{default:h(()=>[o("div",g,[u.store.props.currency&&!u.store.processing?(a(),l(R,{key:0})):_("v-if",!0)])]),_:1})}}});var N=p(b,[["__file","/var/www/html/src/views/reports/ReportsBusinessCustomerSummary.vue"]]);export{N as default};
