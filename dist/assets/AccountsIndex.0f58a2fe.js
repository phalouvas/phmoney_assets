import{_ as A,r as a,o as l,g as r,a as t,b as n,k,p as g,F as p,m as _,t as i,w as d,n as L,q as N,c as y,i as f,f as w,d as x}from"./main.49a2f634.js";const B={async created(){await this.store.get("/phmoney/accounts")},data(){return{levels:[0,1,2,3,4,5,6]}},methods:{async destroy(o){confirm("Are you sure you want to delete this account? All transactions will also be deleted.")&&(await this.store.delete(`/phmoney/accounts/destroy/${o.pk}`,!0),await this.store.get("/phmoney/accounts"))},is_visible(o){let s="";return this.store.accounts_filter.name!==null&&(o.name_simple.toLowerCase().includes(this.store.accounts_filter.name.toLowerCase())||(s="hidden")),this.store.accounts_filter.code!==null&&(o.code.toLowerCase().includes(this.store.accounts_filter.code.toLowerCase())||(s="hidden")),this.store.accounts_filter.type!==null&&o.type!==this.store.accounts_filter.type&&(s="hidden"),this.store.accounts_filter.level!==null&&o.level>this.store.accounts_filter.level&&(s="hidden"),s},clear(){this.store.accounts_filter={name:null,code:null,type:null,level:null}}}},F={key:0,class:"md:p-6"},D={class:"flex gap-2"},S=t("option",{value:null},"- Filter by type -",-1),U=["value"],R=t("option",{value:null},"- Show all levels -",-1),T=["value"],z=t("span",{class:"material-icons-outlined"}," search_off ",-1),E=t("th",null,"Name",-1),I=t("th",null,"Code",-1),q=t("th",null,"Type",-1),M=t("th",null,"Description",-1),P=t("th",null,"Balance",-1),j=t("span",{class:"material-icons-outlined"},"add",-1),G=t("span",{class:"material-icons-outlined"},"edit",-1),H=t("span",{class:"material-icons-outlined"},"confirmation_number",-1),J=t("span",{class:"material-icons-outlined"},"view_list",-1),K=["onClick"],O={class:"grid grid-cols-2 pt-2 border-t font-semibold"},Q=w(" Net Assets: "),W=w(" Profits: ");function X(o,s,b,h,C,c){const v=a("form-input"),V=a("form-secondary-button"),$=a("form-button"),u=a("amount-financial"),m=a("RouterLink");return!o.store.processing&&o.store.props.accounts?(l(),r("div",F,[t("div",D,[n(v,{id:"filter_name",name:"filter_name",type:"text",modelValue:o.store.accounts_filter.name,"onUpdate:modelValue":s[0]||(s[0]=e=>o.store.accounts_filter.name=e),placeholder:"Filter by name..."},null,8,["modelValue"]),n(v,{id:"filter_code",name:"filter_code",type:"text",modelValue:o.store.accounts_filter.code,"onUpdate:modelValue":s[1]||(s[1]=e=>o.store.accounts_filter.code=e),placeholder:"Filter by code..."},null,8,["modelValue"]),k(t("select",{id:"filter_type",name:"filter_type","onUpdate:modelValue":s[2]||(s[2]=e=>o.store.accounts_filter.type=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[S,(l(!0),r(p,null,_(o.store.props.account_types,e=>(l(),r("option",{value:e},i(e),9,U))),256))],512),[[g,o.store.accounts_filter.type]]),k(t("select",{id:"levels","onUpdate:modelValue":s[3]||(s[3]=e=>o.store.accounts_filter.level=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[R,(l(!0),r(p,null,_(C.levels,e=>(l(),r("option",{value:e},i(e),9,T))),256))],512),[[g,o.store.accounts_filter.level]]),n(V,{title:"Clear",onClick:c.clear},{default:d(()=>[z]),_:1},8,["onClick"])]),t("table",null,[t("thead",null,[E,I,q,M,P,t("th",null,[n($,{onClick:s[4]||(s[4]=e=>o.$router.push({name:"accounts.create"})),title:"Add New"},{default:d(()=>[j]),_:1})])]),t("tbody",null,[(l(!0),r(p,null,_(o.store.props.accounts,e=>(l(),r("tr",{key:e.guid,class:L(c.is_visible(e))},[t("td",{style:N(`padding-left: ${e.level}rem`)},i(e.name_simple),5),t("td",null,i(e.code),1),t("td",null,i(e.type),1),t("td",null,i(e.description),1),t("td",null,[n(u,{amount:e.amount_sum,commodity:e.commodity},null,8,["amount","commodity"])]),t("td",null,[n(m,{class:"text-sky-500 hover:text-sky-300",to:{name:"accounts.edit",params:{account_pk:e.pk}},title:"Edit"},{default:d(()=>[G]),_:2},1032,["to"]),e.placeholder?f("",!0):(l(),y(m,{key:0,class:"text-yellow-500 hover:text-yellow-300",to:{name:"reconcile.index",params:{account_pk:e.pk}},title:"Reconcile"},{default:d(()=>[H]),_:2},1032,["to"])),e.placeholder?f("",!0):(l(),y(m,{key:1,class:"text-gray-500 hover:text-gray-300",to:{name:"transactions.index",params:{account_pk:e.pk}},title:"Transactions"},{default:d(()=>[J]),_:2},1032,["to"])),t("span",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer material-icons-outlined",onClick:ee=>c.destroy(e),title:"Delete"}," delete ",8,K)])],2))),128))])]),t("div",O,[t("div",null,[Q,n(u,{amount:o.store.props.net_assets,commodity:o.store.props.commodity},null,8,["amount","commodity"])]),t("div",null,[W,n(u,{amount:o.store.props.profits,commodity:o.store.props.commodity},null,8,["amount","commodity"])])])])):f("",!0)}var Y=A(B,[["render",X]]);const Z={class:"bg-white shadow mt-4 prose max-w-none"},oe=x({name:"AccountsIndex",setup(o){return(s,b)=>{const h=a("AppLayout");return l(),y(h,{title:"Accounts"},{default:d(()=>[t("div",Z,[n(Y)])]),_:1})}}});export{oe as default};
