var N=Object.defineProperty,D=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var w=(r,e,n)=>e in r?N(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,x=(r,e)=>{for(var n in e||(e={}))F.call(e,n)&&w(r,n,e[n]);if(b)for(var n of b(e))B.call(e,n)&&w(r,n,e[n]);return r},C=(r,e)=>D(r,q(e));import{_ as T,r as f,o as u,g as d,a as i,b as s,k as _,p as v,F as y,m as h,t as k,w as a,n as I,e as E,s as L,f as S,d as M,c as Y}from"./main.f659eac9.js";const P={data(){return{form:{upload_file:null,delimiter:",",enclosure:'"',date_format:"m/d/Y",currency_format:".",setting:{pk:0,name:"No Settings",type:"import_transactions_csv",params:{delimiter:",",enclosure:'"',date_format:"m/d/Y",currency_format:"."}}},currency_formats:[".",","],savingSettings:!1}},methods:{async submit(){let r=new FormData;r.append("upload_file",this.form.upload_file),r.append("file_path",null),r.append("items",null),r.append("delimiter",this.form.delimiter),r.append("enclosure",this.form.enclosure),r.append("date_format",this.form.date_format),r.append("currency_format",this.form.currency_format),r.append("selected_columns",null),await this.store.post("/phmoney/import/transactions-from-csv/page3/update",r,{headers:{"Content-Type":"multipart/form-data"}}),this.$router.push({name:"import.transactions_from_csv.page3"})},loadSettings(){this.form.delimiter=this.form.setting.params.delimiter,this.form.enclosure=this.form.setting.params.enclosure,this.form.date_format=this.form.setting.params.date_format,this.form.currency_format=this.form.setting.params.currency_format},async saveSettings(){this.form.setting.pk===0?await this.store.put("/phmoney/settings/store",this.form):await this.store.post(`/phmoney/settings/update/${this.form.setting.pk}`,this.form),await this.store.get("/phmoney/import/transactions-from-csv/page2"),this.store.props.import_settings=this.store.props.import_settings,this.savingSettings=!1},async deleteSettings(){this.form.setting.pk!=0&&confirm("Are you sure you want to delete these settings?")&&(await this.store.delete(`/phmoney/settings/destroy/${this.form.setting.pk}`),await this.store.get("/phmoney/import/transactions-from-csv/page2"),this.form.setting={pk:0,name:"No Settings",type:"import_transactions_csv",params:{delimiter:",",enclosure:'"',date_format:"m/d/Y",currency_format:"."}},this.store.props.import_settings=this.store.props.import_settings)}}},j={class:"p-6"},z={class:"flex gap-2"},A=["value"],W=i("span",{class:"material-icons-outlined"}," save ",-1),G=i("span",{class:"material-icons-outlined"}," delete ",-1),H={class:"flex flex-wrap gap-2"},J=["value"],K={class:"flex items-center justify-end mt-4 gap-2"},O=i("span",{class:"material-icons-outlined"},"navigate_before",-1),Q=i("span",{class:"material-icons-outlined"},"navigate_next",-1),R=S("Save Current Import Settings"),X=["value"],Z={class:"flex gap-2"},$=S(" Save "),ee=S(" Close ");function te(r,e,n,V,o,p){const l=f("form-label"),c=f("form-button"),g=f("form-secondary-button"),m=f("form-input"),U=f("form-dialog-modal");return u(),d("div",j,[i("div",z,[s(l,{for:"import_settings",value:"Select Settings"}),_(i("select",{id:"import_settings","onUpdate:modelValue":e[0]||(e[0]=t=>o.form.setting=t),onChange:e[1]||(e[1]=(...t)=>p.loadSettings&&p.loadSettings(...t)),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(u(!0),d(y,null,h(r.store.props.import_settings,t=>(u(),d("option",{key:t.pk,value:t},k(t.name),9,A))),128))],544),[[v,o.form.setting]]),s(c,{onClick:e[2]||(e[2]=t=>o.savingSettings=!0),title:"Save Settings"},{default:a(()=>[W]),_:1}),s(g,{onClick:p.deleteSettings,title:"Delete Settings"},{default:a(()=>[G]),_:1},8,["onClick"])]),i("div",H,[i("div",null,[s(l,{for:"delimiter",value:"Delimiter"}),s(m,{id:"delimiter",modelValue:o.form.delimiter,"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.delimiter=t),type:"text",required:""},null,8,["modelValue"])]),i("div",null,[s(l,{for:"enclosure",value:"Enclosure"}),s(m,{id:"enclosure",modelValue:o.form.enclosure,"onUpdate:modelValue":e[4]||(e[4]=t=>o.form.enclosure=t),type:"text",required:""},null,8,["modelValue"])]),i("div",null,[s(l,{for:"date_format",value:"Date Format"}),s(m,{id:"date_format",modelValue:o.form.date_format,"onUpdate:modelValue":e[5]||(e[5]=t=>o.form.date_format=t),type:"text",required:""},null,8,["modelValue"])]),i("div",null,[s(l,{for:"date_format",value:"Numbers separator"}),_(i("select",{id:"currency_format","onUpdate:modelValue":e[6]||(e[6]=t=>o.form.currency_format=t),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(u(!0),d(y,null,h(o.currency_formats,t=>(u(),d("option",{value:t},k(t),9,J))),256))],512),[[v,o.form.currency_format]])])]),i("form",{onSubmit:e[9]||(e[9]=E((...t)=>p.submit&&p.submit(...t),["prevent"]))},[i("div",null,[s(l,{for:"upload_file",value:"Select a csv file"}),s(m,{id:"upload_file",type:"file",class:"mt-1 block w-full",onInput:e[7]||(e[7]=t=>o.form.upload_file=t.target.files[0]),required:"",autofocus:"",accept:".csv"})]),i("div",K,[s(g,{onClick:e[8]||(e[8]=t=>r.$router.back()),title:"Back"},{default:a(()=>[O]),_:1}),s(c,{class:I({"opacity-25":r.store.processing}),disabled:r.store.processing||o.form.upload_file===null,title:"Next"},{default:a(()=>[Q]),_:1},8,["class","disabled"])])],32),s(U,{show:o.savingSettings,onClose:e[17]||(e[17]=t=>o.savingSettings=!1),maxWidth:"w-full"},{title:a(()=>[R]),content:a(()=>[i("div",null,[s(l,{for:"import_settings_name",value:"Name"}),s(m,{id:"import_settings_name",modelValue:o.form.setting.name,"onUpdate:modelValue":e[10]||(e[10]=t=>o.form.setting.name=t),type:"text",placeholder:"Name...",required:""},null,8,["modelValue"]),_(i("input",{type:"hidden","onUpdate:modelValue":e[11]||(e[11]=t=>o.form.setting.type=t)},null,512),[[L,o.form.setting.type]])]),i("div",null,[s(l,{for:"import_settings_delimiter",value:"Delimiter"}),s(m,{id:"import_settings_delimiter",modelValue:o.form.setting.params.delimiter,"onUpdate:modelValue":e[12]||(e[12]=t=>o.form.setting.params.delimiter=t),type:"text",required:""},null,8,["modelValue"])]),i("div",null,[s(l,{for:"import_settings_enclosure",value:"Enclosure"}),s(m,{id:"import_settings_enclosure",modelValue:o.form.setting.params.enclosure,"onUpdate:modelValue":e[13]||(e[13]=t=>o.form.setting.params.enclosure=t),type:"text",required:""},null,8,["modelValue"])]),i("div",null,[s(l,{for:"import_settings_date_format",value:"Date Format"}),s(m,{id:"import_settings_date_format",modelValue:o.form.setting.params.date_format,"onUpdate:modelValue":e[14]||(e[14]=t=>o.form.setting.params.date_format=t),type:"text",required:""},null,8,["modelValue"])]),i("div",null,[s(l,{for:"import_settings_date_format",value:"Numbers separator"}),_(i("select",{id:"import_settings_currency_format","onUpdate:modelValue":e[15]||(e[15]=t=>o.form.setting.params.currency_format=t),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(u(!0),d(y,null,h(o.currency_formats,t=>(u(),d("option",{value:t},k(t),9,X))),256))],512),[[v,o.form.setting.params.currency_format]])])]),footer:a(()=>[i("div",Z,[s(c,{onClick:p.saveSettings},{default:a(()=>[$]),_:1},8,["onClick"]),s(g,{onClick:e[16]||(e[16]=t=>o.savingSettings=!1)},{default:a(()=>[ee]),_:1})])]),_:1},8,["show"])])}var oe=T(P,[["render",te]]);const se={class:"bg-white shadow mt-4 prose max-w-none"},re={async created(){await this.store.get("/phmoney/import/transactions-from-csv/page2")}},le=M(C(x({},re),{name:"TransactionsFromCsvPage2",setup(r){return(e,n)=>{const V=f("ImportLayout");return u(),Y(V,{title:"Select File"},{default:a(()=>[i("div",se,[s(oe)])]),_:1})}}}));export{le as default};
