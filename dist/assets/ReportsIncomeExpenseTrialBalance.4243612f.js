import{_ as p,r as i,o as s,g as c,a as e,t as r,l as u,m as d,q as _,b as a,d as h,c as m,w as y,i as f}from"./main.503448c0.js";const v={},w={class:"p-6"},B={class:"text-center"},b={class:"overflow-x-auto"},g=e("thead",null,[e("th",null,"Name"),e("th",null,"Code"),e("th",null,"Debit"),e("th",null,"Credit")],-1),R=e("th",null,null,-1);function C(o,l){const n=i("amount-financial");return s(),c("div",w,[e("h2",B,r(o.store.props.company)+" "+r(o.store.props.title)+" "+r(o.store.convert_date(o.store.props.date_end)),1),e("div",b,[e("table",null,[g,e("tbody",null,[(s(!0),c(u,null,d(o.store.props.items,t=>(s(),c("tr",{key:t.guid},[e("td",{style:_(`padding-left: ${t.level}rem`)},r(t.name_simple),5),e("td",null,r(t.code),1),e("td",null,[a(n,{amount:t.debit,commodity:t.commodity},null,8,["amount","commodity"])]),e("td",null,[a(n,{amount:t.credit,commodity:t.commodity},null,8,["amount","commodity"])])]))),128)),e("tr",null,[R,e("th",null,[a(n,{amount:o.store.props.total_debit,commodity:o.store.props.currency},null,8,["amount","commodity"])]),e("th",null,[a(n,{amount:o.store.props.total_credit,commodity:o.store.props.currency},null,8,["amount","commodity"])])])])])])])}var E=p(v,[["render",C],["__file","/var/www/html/src/components/reports/ReportsIncomeExpenseTrialBalance.vue"]]);const T={class:"bg-white shadow mt-4 prose max-w-none"},k=h({name:"ReportsIncomeExpenseTrialBalance",setup(o){return(l,n)=>{const t=i("ReportLayout");return s(),m(t,{title:"Trial Balance",extra_params:{},show_export_csv:!0,show_export_json:!0},{default:y(()=>[e("div",T,[l.store.props.currency&&!l.store.processing?(s(),m(E,{key:0})):f("v-if",!0)])]),_:1})}}});var I=p(k,[["__file","/var/www/html/src/views/reports/ReportsIncomeExpenseTrialBalance.vue"]]);export{I as default};
