import{_ as u,r as m,o as r,g as c,a as o,t as s,F as p,m as i,q as _,b as a,d as h,c as d,w as y,i as f}from"./main.f659eac9.js";const v={},w={class:"p-6"},b={class:"text-center"},g={class:"overflow-x-auto"},B=o("thead",null,[o("th",null,"Name"),o("th",null,"Code"),o("th",null,"Debit"),o("th",null,"Credit")],-1),C=o("th",null,null,-1);function k(t,l){const n=m("amount-financial");return r(),c("div",w,[o("h2",b,s(t.store.props.company)+" "+s(t.store.props.title)+" "+s(t.store.convert_date(t.store.props.date_end)),1),o("div",g,[o("table",null,[B,o("tbody",null,[(r(!0),c(p,null,i(t.store.props.items,e=>(r(),c("tr",{key:e.guid},[o("td",{style:_(`padding-left: ${e.level}rem`)},s(e.name_simple),5),o("td",null,s(e.code),1),o("td",null,[a(n,{amount:e.debit,commodity:e.commodity},null,8,["amount","commodity"])]),o("td",null,[a(n,{amount:e.credit,commodity:e.commodity},null,8,["amount","commodity"])])]))),128)),o("tr",null,[C,o("th",null,[a(n,{amount:t.store.props.total_debit,commodity:t.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[a(n,{amount:t.store.props.total_credit,commodity:t.store.props.currency},null,8,["amount","commodity"])])])])])])])}var N=u(v,[["render",k]]);const R={class:"bg-white shadow mt-4 prose max-w-none"},L=h({name:"ReportsIncomeExpenseTrialBalance",setup(t){return(l,n)=>{const e=m("ReportLayout");return r(),d(e,{title:"Trial Balance",extra_params:{},show_export_csv:!0,show_export_json:!0},{default:y(()=>[o("div",R,[l.store.props.currency&&!l.store.processing?(r(),d(N,{key:0})):f("",!0)])]),_:1})}}});export{L as default};
