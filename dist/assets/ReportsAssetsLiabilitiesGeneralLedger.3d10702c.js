import{_ as p,r as _,o as a,g as s,a as t,t as e,F as u,m,b as r,d as h,c as i,w as y,i as b}from"./main.f659eac9.js";const f={},g={class:"p-6"},k={class:"text-center"},v=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Date"),t("th",null,"Num"),t("th",null,"Description"),t("th",null,"Memo"),t("th",null,"Debit"),t("th",null,"Credit"),t("th",null,"Balance")])])],-1),L=["split"],w={colspan:"6"},B=["split"],C={key:0},D={key:1},N={key:2},R={key:3},F={colspan:"6"};function G(c,d){const l=_("amount-financial");return a(),s("div",g,[t("h2",k,e(c.store.props.company)+" "+e(c.store.props.title)+" From "+e(c.store.convert_date(c.store.props.date_start))+" to "+e(c.store.convert_date(c.store.props.date_end)),1),v,(a(!0),s(u,null,m(c.store.props.items,o=>(a(),s("div",{class:"border-b",key:o.account.guid,split:o},[t("table",null,[t("thead",null,[t("tr",null,[t("td",w,e(o.account.code)+" "+e(o.account.name)+" Balance b/f ",1),t("td",null,[r(l,{amount:o.balance_bf,commodity:o.account.commodity},null,8,["amount","commodity"])])])]),t("tbody",null,[(a(!0),s(u,null,m(o.splits,n=>(a(),s("tr",{key:n.guid,split:n},[t("td",null,e(n.post_date),1),t("td",null,e(n.num),1),t("td",null,e(n.description),1),t("td",null,e(n.memo),1),n.debit?(a(),s("td",C,[r(l,{amount:n.debit,commodity:o.account.commodity},null,8,["amount","commodity"])])):(a(),s("td",D)),n.credit?(a(),s("td",N,[r(l,{amount:n.credit,commodity:o.account.commodity},null,8,["amount","commodity"])])):(a(),s("td",R)),t("td",null,[r(l,{amount:n.balance,commodity:o.account.commodity},null,8,["amount","commodity"])])],8,B))),128))]),t("tfoot",null,[t("tr",null,[t("th",F," Total for "+e(o.account.code)+" "+e(o.account.name),1),t("th",null,[r(l,{amount:o.total,commodity:o.account.commodity},null,8,["amount","commodity"])])])])])],8,L))),128))])}var V=p(f,[["render",G]]);const A={class:"bg-white shadow mt-4 prose max-w-none"},j=h({name:"ReportsAssetsLiabilitiesGeneralLedger",setup(c){return(d,l)=>{const o=_("ReportLayout");return a(),i(o,{title:"General Ledger",show_export_csv:!0,show_export_json:!0},{default:y(()=>[t("div",A,[d.store.props.currency&&!d.store.processing?(a(),i(V,{key:0})):b("",!0)])]),_:1})}}});export{j as default};
