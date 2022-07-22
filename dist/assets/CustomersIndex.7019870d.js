var N=Object.defineProperty,A=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(s,t,n)=>t in s?N(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,k=(s,t)=>{for(var n in t||(t={}))L.call(t,n)&&g(s,n,t[n]);if(y)for(var n of y(t))P.call(t,n)&&g(s,n,t[n]);return s},v=(s,t)=>A(s,I(t));import{_ as w,r,o as u,g as _,a as e,b as l,w as d,l as B,m as U,t as i,i as C,c as b,d as E}from"./main.503448c0.js";const S={data(){return{filter:{page:1,name:null,id:null,addr_name:null,shipaddr_name:null}}},methods:{clear(){this.filter={page:1,name:null,id:null,addr_name:null,shipaddr_name:null},this.load(1)},async load(s){this.filter.page=s,await this.store.get("http://phmoney_local.kainotomo.localhost/phmoney/business/customers",this.filter)},async destroy(s){confirm("Are you sure you want to delete this item?")&&(await this.store.delete(`http://phmoney_local.kainotomo.localhost/phmoney/business/customers/destroy/${s.pk}`),this.load(1))}}},$={class:"p-6 overflow-x-auto"},D={class:"flex flex-wrap gap-2"},R=e("span",{class:"material-icons-outlined"}," search ",-1),z=e("span",{class:"material-icons-outlined"}," search_off ",-1),F=e("th",null,"Company Name",-1),j=e("th",null,"Customer Number",-1),q=e("th",null,"Address 1",-1),G=e("th",null,"Address 2",-1),H=e("th",null,"Phone",-1),J=e("span",{class:"material-icons-outlined"},"add",-1),K={class:"flex"},M=e("span",{class:"material-icons-outlined"},"summarize",-1),O=e("span",{class:"material-icons-outlined"},"edit",-1),Q=["onClick"],T=e("span",{class:"material-icons-outlined"},"delete",-1),W=[T];function X(s,t,n,c,a,m){const p=r("form-input"),h=r("form-button"),x=r("form-secondary-button"),f=r("RouterLink"),V=r("Pagination");return u(),_("div",$,[e("div",D,[l(p,{id:"name",name:"filter_name",type:"text",modelValue:a.filter.name,"onUpdate:modelValue":t[0]||(t[0]=o=>a.filter.name=o),placeholder:"Company Name..."},null,8,["modelValue"]),l(p,{id:"id",name:"filter_id",type:"text",modelValue:a.filter.id,"onUpdate:modelValue":t[1]||(t[1]=o=>a.filter.id=o),placeholder:"Customer Number..."},null,8,["modelValue"]),l(p,{id:"addr_name",name:"filter_addr_name",type:"text",modelValue:a.filter.addr_name,"onUpdate:modelValue":t[2]||(t[2]=o=>a.filter.addr_name=o),placeholder:"Address Name..."},null,8,["modelValue"]),l(p,{id:"shipaddr_name",name:"filter_shipaddr_name",type:"text",modelValue:a.filter.shipaddr_name,"onUpdate:modelValue":t[3]||(t[3]=o=>a.filter.shipaddr_name=o),placeholder:"Shipping Address Name..."},null,8,["modelValue"]),l(h,{onClick:t[4]||(t[4]=o=>m.load(1)),title:"Search"},{default:d(()=>[R]),_:1}),l(x,{title:"Clear",onClick:m.clear},{default:d(()=>[z]),_:1},8,["onClick"])]),e("table",null,[e("thead",null,[e("tr",null,[F,j,q,G,H,e("th",null,[l(h,{onClick:t[5]||(t[5]=o=>s.$router.push({name:"business.customers.create"})),title:"Add New"},{default:d(()=>[J]),_:1})])])]),e("tbody",null,[s.store.props.customers?(u(!0),_(B,{key:0},U(s.store.props.customers.data,o=>(u(),_("tr",{key:o.guid},[e("td",null,i(o.name),1),e("td",null,i(o.id),1),e("td",null,i(o.addr_addr1),1),e("td",null,i(o.addr_addr2),1),e("td",null,i(o.addr_phone),1),e("td",null,[e("div",K,[l(f,{class:"text-gray-500 hover:text-gray-300",to:{name:"business.customers.edit",params:{customer_pk:o.pk}},title:"Edit"},{default:d(()=>[M]),_:2},1032,["to"]),l(f,{class:"text-sky-500 hover:text-sky-300",to:{name:"business.customers.edit",params:{customer_pk:o.pk}},title:"Edit"},{default:d(()=>[O]),_:2},1032,["to"]),e("div",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer",onClick:se=>m.destroy(o),title:"Delete"},W,8,Q)])])]))),128)):C("v-if",!0)]),e("tfoot",null,[s.store.props.customers&&s.store.props.customers.total>s.store.props.customers.per_page?(u(),b(V,{key:0,current:s.store.props.customers.current_page,total:s.store.props.customers.total,"per-page":s.store.props.customers.per_page,onPageChanged:m.load},null,8,["current","total","per-page","onPageChanged"])):C("v-if",!0)])])])}var Y=w(S,[["render",X],["__file","/var/www/html/src/components/business/customers/CustomersIndex.vue"]]);const Z={class:"bg-white shadow mt-4 prose max-w-none"},ee={async created(){await this.store.get("http://phmoney_local.kainotomo.localhost/phmoney/business/customers")}},te=E(v(k({},ee),{name:"CustomersIndex",setup(s){return(t,n)=>{const c=r("AppLayout");return u(),b(c,{title:"Customers"},{default:d(()=>[e("div",Z,[l(Y)])]),_:1})}}}));var le=w(te,[["__file","/var/www/html/src/views/business/customers/CustomersIndex.vue"]]);export{le as default};
