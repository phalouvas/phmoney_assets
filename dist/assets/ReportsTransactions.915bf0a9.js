var C=Object.defineProperty,D=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var h=(t,o,s)=>o in t?C(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,f=(t,o)=>{for(var s in o||(o={}))U.call(o,s)&&h(t,s,o[s]);if(_)for(var s of _(o))A.call(o,s)&&h(t,s,o[s]);return t},g=(t,o)=>D(t,N(o));import{_ as R,r as c,o as m,g as u,a as e,t as l,k as d,v as p,F as k,m as v,b as n,d as T,c as y,w as b,i as B}from"./main.f659eac9.js";const $={},F={class:"p-6"},L={class:"text-center"},V={class:"w-full table-fixed"},M=e("th",{class:"text-right"},"Amount",-1),S={colspan:"4"},j={class:"text-right"},E={class:"text-right"},G={class:"w-full table-fixed"},P=e("th",{class:"text-left"},"Grand Total",-1),q={class:"text-right"};function z(t,o){const s=c("amount-financial");return m(),u("div",F,[e("h2",L,l(t.store.props.company)+" "+l(t.store.props.title)+" For Period Covering "+l(t.store.convert_date(t.store.props.date_start))+" to "+l(t.store.convert_date(t.store.props.date_end)),1),e("table",V,[e("thead",null,[e("th",null,[d(e("span",null,"Account Name",512),[[p,t.store.report_settings.params.date]])]),e("th",null,[d(e("span",null,"Account Code",512),[[p,t.store.report_settings.params.date]])]),e("th",null,[d(e("span",null,"Date",512),[[p,t.store.report_settings.params.date]])]),e("th",null,[d(e("span",null,"Num",512),[[p,t.store.report_settings.params.num]])]),e("th",null,[d(e("span",null,"Description",512),[[p,t.store.report_settings.params.description]])]),e("th",null,[d(e("span",null,"Memo",512),[[p,t.store.report_settings.params.memo]])]),M])]),(m(!0),u(k,null,v(t.store.props.rows,a=>(m(),u("table",{class:"w-full table-fixed",key:a.guid},[e("thead",null,[e("tr",null,[e("th",S,"Total for "+l(a.code)+" "+l(a.name),1),e("th",j,[n(s,{amount:a.total,commodity:a.commodity},null,8,["amount","commodity"])])])]),e("tbody",null,[(m(!0),u(k,null,v(a.rows,r=>(m(),u("tr",{key:r.split_guid},[e("td",null,[d(e("span",null,l(r.name),513),[[p,t.store.report_settings.params.name]])]),e("td",null,[d(e("span",null,l(r.code),513),[[p,t.store.report_settings.params.code]])]),e("td",null,[d(e("span",null,l(t.store.convert_date(r.post_date)),513),[[p,t.store.report_settings.params.date]])]),e("td",null,[d(e("span",null,l(r.num),513),[[p,t.store.report_settings.params.num]])]),e("td",null,[d(e("span",null,l(r.description),513),[[p,t.store.report_settings.params.description]])]),e("td",null,[d(e("span",null,l(r.memo),513),[[p,t.store.report_settings.params.memo]])]),e("td",E,[n(s,{amount:r.amount,commodity:a.commodity},null,8,["amount","commodity"])])]))),128))])]))),128)),e("table",G,[e("tbody",null,[e("tr",null,[P,e("th",q,[n(s,{amount:t.store.props.total,commodity:t.store.props.currency},null,8,["amount","commodity"])])])])])])}var H=R($,[["render",z]]);const I=e("div",{class:"font-bold"},"Display",-1),J={class:"flex gap-2"},K={class:"bg-white shadow mt-4 prose max-w-none"},O={data(){return{extra_params:{name:!0,code:!0,date:!0,num:!0,description:!0,memo:!0}}}},X=T(g(f({},O),{name:"ReportsTransactions",setup(t){return(o,s)=>{const a=c("form-label"),r=c("form-checkbox"),w=c("ReportLayout");return m(),y(w,{title:"Transactions Report",extra_params:o.extra_params,show_export_csv:!0,show_export_json:!0},{settings:b(()=>[I,e("div",J,[e("div",null,[n(a,{for:"filter_name",value:"Account Name"}),n(r,{id:"filter_name",checked:o.store.report_settings.params.name,"onUpdate:checked":s[0]||(s[0]=i=>o.store.report_settings.params.name=i)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_code",value:"Account Code"}),n(r,{id:"filter_code",checked:o.store.report_settings.params.code,"onUpdate:checked":s[1]||(s[1]=i=>o.store.report_settings.params.code=i)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_date",value:"Date"}),n(r,{id:"filter_date",checked:o.store.report_settings.params.date,"onUpdate:checked":s[2]||(s[2]=i=>o.store.report_settings.params.date=i)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_num",value:"Num"}),n(r,{id:"filter_num",checked:o.store.report_settings.params.num,"onUpdate:checked":s[3]||(s[3]=i=>o.store.report_settings.params.num=i)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_description",value:"Description"}),n(r,{id:"filter_description",checked:o.store.report_settings.params.description,"onUpdate:checked":s[4]||(s[4]=i=>o.store.report_settings.params.description=i)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_memo",value:"Memo"}),n(r,{id:"filter_memo",checked:o.store.report_settings.params.memo,"onUpdate:checked":s[5]||(s[5]=i=>o.store.report_settings.params.memo=i)},null,8,["checked"])])])]),default:b(()=>[e("div",K,[o.store.props.currency&&!o.store.processing?(m(),y(H,{key:0})):B("",!0)])]),_:1},8,["extra_params"])}}}));export{X as default};
