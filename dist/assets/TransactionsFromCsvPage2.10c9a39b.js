var y=Object.defineProperty,w=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var d=(e,t,o)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))k.call(t,o)&&d(e,o,t[o]);if(m)for(var o of m(t))$.call(t,o)&&d(e,o,t[o]);return e},_=(e,t)=>w(e,C(t));import{_ as x,r as a,o as f,g as F,a as n,b as s,w as l,n as B,e as N,d as S,c as T}from"./main.faceb598.js";const D={data(){return{form:{upload_file:null}}},methods:{async submit(){let e=new FormData;e.append("upload_file",this.form.upload_file),e.append("file_path",null),e.append("items",null),e.append("delimiter",","),e.append("enclosure",'"'),e.append("date_format","m/d/Y"),e.append("currency_format","."),e.append("selected_columns",null),await this.store.post("/phmoney/import/transactions-from-csv/page3/update",e,{headers:{"Content-Type":"multipart/form-data"}}),this.$router.push({name:"import.transactions_from_csv.page3"})}}},L={class:"flex items-center justify-end mt-4 gap-2"},P=n("span",{class:"material-icons-outlined"},"navigate_before",-1),V=n("span",{class:"material-icons-outlined"},"navigate_next",-1);function j(e,t,o,i,p,c){const b=a("form-label"),v=a("form-input"),g=a("form-secondary-button"),h=a("form-button");return f(),F("form",{onSubmit:t[2]||(t[2]=N((...r)=>c.submit&&c.submit(...r),["prevent"])),class:"p-6"},[n("div",null,[s(b,{for:"upload_file",value:"Select a csv file"}),s(v,{id:"upload_file",type:"file",class:"mt-1 block w-full",onInput:t[0]||(t[0]=r=>p.form.upload_file=r.target.files[0]),required:"",autofocus:"",accept:".csv"})]),n("div",L,[s(g,{onClick:t[1]||(t[1]=r=>e.$router.back()),title:"Back"},{default:l(()=>[P]),_:1}),s(h,{class:B({"opacity-25":e.store.processing}),disabled:e.store.processing||p.form.upload_file===null,title:"Next"},{default:l(()=>[V]),_:1},8,["class","disabled"])])],32)}var q=x(D,[["render",j]]);const z={class:"bg-white shadow mt-4 prose max-w-none"},E={async created(){await this.store.get("/phmoney/import/transactions-from-csv/page2")}},Y=S(_(u({},E),{name:"TransactionsFromCsvPage2",setup(e){return(t,o)=>{const i=a("FormLayout");return f(),T(i,{title:"Select File"},{default:l(()=>[n("div",z,[s(q)])]),_:1})}}}));export{Y as default};
