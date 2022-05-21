import{_ as N,r as y,o as i,g as l,a as s,b as r,k as _,p as h,F as c,m as p,t as m,w as g,i as w,n as D,v as A,e as q,q as F,f as S,d as T,c as B}from"./main.6bdfe4fe.js";const I={async created(){await this.store.get("/phmoney/import/transactions-from-csv/page3"),this.form={upload_file:this.store.props.upload_file,file_path:this.store.props.file_path,items:this.store.props.items,delimiter:this.store.props.delimiter,enclosure:this.store.props.enclosure,date_format:this.store.props.date_format,currency_format:this.store.props.currency_format,selected_columns:this.store.props.selected_columns,skip_errors:null,setting:{id:0,name:"No Settings",type:"import_transactions_csv",params:{delimiter:this.store.props.delimiter,enclosure:this.store.props.enclosure,date_format:this.store.props.date_format,currency_format:this.store.props.currency_format}}}},data(){return{form:{upload_file:null,file_path:null,items:null,delimiter:null,enclosure:null,date_format:null,currency_format:null,selected_columns:null,skip_errors:null,setting:{id:0,name:"No Settings",type:"import_transactions_csv",params:{delimiter:null,enclosure:null,date_format:null,currency_format:null}}},currency_formats:[".",","],source_account:null,destination_account:null,columns:["Date","Num","Description","Amount","Shares"],savingSettings:!1}},methods:{next(){confirm("Are you sure you want to proceed to import selected items?")&&this.$router.push({name:"import.transactions_from_csv.page4"})},async submit(){await this.store.post("/phmoney/import/transactions-from-csv/page3/update",this.form),await this.store.get("/phmoney/import/transactions-from-csv/page3"),this.reset()},reset(){this.form.items=this.store.props.items,this.form.selected_columns=this.store.props.selected_columns},getTrValidClass(n){return n.is_valid===!1&&n.checked===!0?"bg-red-500":""},onCheckAll(n){let t=n.target.checked;for(let k=0;k<this.form.items.length;k++)this.form.items[k].checked=t;this.submit()},onSourceAccountChange(){for(let n=0;n<this.form.items.length;n++)this.form.items[n].source_account=this.source_account;this.submit()},onDestinationAccountChange(){for(let n=0;n<this.form.items.length;n++)this.form.items[n].destination_account=this.destination_account;this.submit()},loadSettings(){this.form.delimiter=this.form.setting.params.delimiter,this.form.enclosure=this.form.setting.params.enclosure,this.form.date_format=this.form.setting.params.date_format,this.form.currency_format=this.form.setting.params.currency_format,this.submit()},async saveSettings(){this.form.setting.id===0?await this.store.put("/phmoney/settings/store",this.form):await this.store.post(`/phmoney/settings/update/${this.form.setting.id}`,this.form),await this.store.get("/phmoney/import/transactions-from-csv/page3"),this.store.props.import_settings=this.store.props.import_settings,this.savingSettings=!1},async deleteSettings(){this.form.setting.id!=0&&confirm("Are you sure you want to delete these settings?")&&(await this.store.delete(`/phmoney/settings/destroy/${this.form.setting.id}`),await this.store.get("/phmoney/import/transactions-from-csv/page3"),this.form.setting={id:0,name:"No Settings",type:"import_transactions_csv",params:{delimiter:null,enclosure:null,date_format:null,currency_format:null}},this.store.props.import_settings=this.store.props.import_settings)}}},E={key:0,class:"p-6"},L={class:"flex gap-2"},M=["value"],P=s("span",{class:"material-icons-outlined"}," save ",-1),j=s("span",{class:"material-icons-outlined"}," delete ",-1),z={class:"flex flex-wrap gap-2"},R=["value"],W={key:0},G={class:"overflow-auto h-screen"},H={class:"table"},J=["value"],K={class:"w-60"},O=["value"],Q=s("th",{scope:"col"},"#",-1),X=["onUpdate:modelValue"],Y=["value"],Z={key:0,class:"bg-red-500"},$=["id","onUpdate:modelValue"],ee=["value"],te=["id","onUpdate:modelValue"],se=["value"],oe={scope:"row"},re={class:"p-2 border"},ne={class:"flex items-center justify-end mt-4 gap-2"},ie={class:"text-sm text-red-600"},le=s("span",{class:"material-icons-outlined"},"navigate_before",-1),ae=s("span",{class:"material-icons-outlined"},"navigate_next",-1),ue=S("Save Current Import Settings"),me=["value"],de={class:"flex gap-2"},ce=S(" Save "),pe=S(" Close ");function fe(n,t,k,x,o,a){const d=y("form-label"),b=y("form-button"),C=y("form-secondary-button"),v=y("form-input"),V=y("form-checkbox"),U=y("form-dialog-modal");return n.store.props!==null?(i(),l("div",E,[s("form",{onSubmit:t[17]||(t[17]=q(()=>{},["prevent"]))},[s("div",L,[r(d,{for:"import_settings",value:"Select Settings"}),_(s("select",{id:"import_settings","onUpdate:modelValue":t[0]||(t[0]=e=>o.form.setting=e),onChange:t[1]||(t[1]=(...e)=>a.loadSettings&&a.loadSettings(...e)),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.import_settings,e=>(i(),l("option",{key:e.id,value:e},m(e.name),9,M))),128))],544),[[h,o.form.setting]]),r(b,{onClick:t[2]||(t[2]=e=>o.savingSettings=!0),title:"Save Settings"},{default:g(()=>[P]),_:1}),r(C,{onClick:a.deleteSettings,title:"Delete Settings"},{default:g(()=>[j]),_:1},8,["onClick"])]),s("div",z,[s("div",null,[r(d,{for:"delimiter",value:"Delimiter"}),r(v,{id:"delimiter",modelValue:o.form.delimiter,"onUpdate:modelValue":t[3]||(t[3]=e=>o.form.delimiter=e),type:"text",onChange:a.submit,required:""},null,8,["modelValue","onChange"])]),s("div",null,[r(d,{for:"enclosure",value:"Enclosure"}),r(v,{id:"enclosure",modelValue:o.form.enclosure,"onUpdate:modelValue":t[4]||(t[4]=e=>o.form.enclosure=e),type:"text",onChange:a.submit,required:""},null,8,["modelValue","onChange"])]),s("div",null,[r(d,{for:"date_format",value:"Date Format"}),r(v,{id:"date_format",modelValue:o.form.date_format,"onUpdate:modelValue":t[5]||(t[5]=e=>o.form.date_format=e),type:"text",onChange:a.submit,required:""},null,8,["modelValue","onChange"])]),s("div",null,[r(d,{for:"date_format",value:"Numbers separator"}),_(s("select",{id:"currency_format","onUpdate:modelValue":t[6]||(t[6]=e=>o.form.currency_format=e),onChange:t[7]||(t[7]=(...e)=>a.submit&&a.submit(...e)),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(o.currency_formats,e=>(i(),l("option",{value:e},m(e),9,R))),256))],544),[[h,o.form.currency_format]])])]),n.store.processing?w("",!0):(i(),l("div",W," Total Rows - "+m(o.form.items.length),1)),s("div",G,[s("table",H,[s("thead",null,[s("tr",null,[s("th",null,[r(V,{id:"index_check_all",name:"index_check_all",onInput:a.onCheckAll},null,8,["onInput"])]),s("th",null,[_(s("select",{id:"source_account_all","onUpdate:modelValue":t[8]||(t[8]=e=>o.source_account=e),onChange:t[9]||(t[9]=(...e)=>a.onSourceAccountChange&&a.onSourceAccountChange(...e)),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.accounts,e=>(i(),l("option",{key:e.guid,value:e},m(e.name),9,J))),128))],544),[[h,o.source_account]])]),s("th",null,[s("div",K,[_(s("select",{id:"destination_account_all","onUpdate:modelValue":t[10]||(t[10]=e=>o.destination_account=e),onChange:t[11]||(t[11]=(...e)=>a.onDestinationAccountChange&&a.onDestinationAccountChange(...e)),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.accounts,e=>(i(),l("option",{key:e.guid,value:e},m(e.name),9,O))),128))],544),[[h,o.destination_account]])])]),Q,(i(!0),l(c,null,p(n.store.props.items[0].value.length-1,e=>(i(),l("td",null,[_(s("select",{"onUpdate:modelValue":f=>o.form.selected_columns[e-1]=f,onChange:t[12]||(t[12]=f=>a.submit()),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(o.columns,f=>(i(),l("option",{value:f},m(f),9,Y))),256))],40,X),[[h,o.form.selected_columns[e-1]]])]))),256))])]),s("tbody",null,[(i(!0),l(c,null,p(o.form.items,(e,f)=>(i(),l("tr",{class:D(a.getTrValidClass(e))},[s("td",null,[r(V,{id:"index_check"+f,name:"index_check",checked:e.checked,"onUpdate:checked":u=>e.checked=u,onChange:a.submit},null,8,["id","checked","onUpdate:checked","onChange"]),e.is_valid===!1&&e.checked===!0?(i(),l("div",Z,m(e.validation_message),1)):w("",!0)]),s("td",null,[_(s("select",{id:`source_account${f}`,"onUpdate:modelValue":u=>e.source_account=u,onChange:t[13]||(t[13]=(...u)=>a.submit&&a.submit(...u)),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.accounts,u=>(i(),l("option",{key:u.guid,value:u},m(u.name),9,ee))),128))],40,$),[[h,e.source_account]])]),s("td",null,[_(s("select",{id:`destination_account${f}`,"onUpdate:modelValue":u=>e.destination_account=u,onChange:t[14]||(t[14]=(...u)=>a.submit&&a.submit(...u)),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.accounts,u=>(i(),l("option",{key:u.guid,value:u},m(u.name),9,se))),128))],40,te),[[h,e.destination_account]])]),s("td",oe,m(f),1),(i(!0),l(c,null,p(e.value,u=>(i(),l("td",re,m(u),1))),256))],2))),256))])])]),s("div",ne,[_(s("div",null,[s("p",ie,m(n.store.props.can_proceed_message),1)],512),[[A,n.store.props.can_proceed_message]]),r(C,{onClick:t[15]||(t[15]=e=>n.$router.back()),title:"Back"},{default:g(()=>[le]),_:1}),r(b,{disabled:o.form.processing||!n.store.props.can_proceed,onClick:a.next,title:"Next"},{default:g(()=>[ae]),_:1},8,["disabled","onClick"]),r(d,{for:"skip_errors",value:"Skip Invalid"}),r(V,{id:"skip_errors",name:"skip_errors",modelValue:o.form.skip_errors,"onUpdate:modelValue":t[16]||(t[16]=e=>o.form.skip_errors=e),onChange:a.submit},null,8,["modelValue","onChange"])])],32),r(U,{show:o.savingSettings,onClose:t[25]||(t[25]=e=>o.savingSettings=!1),maxWidth:"w-full"},{title:g(()=>[ue]),content:g(()=>[s("div",null,[r(d,{for:"import_settings_name",value:"Name"}),r(v,{id:"import_settings_name",modelValue:o.form.setting.name,"onUpdate:modelValue":t[18]||(t[18]=e=>o.form.setting.name=e),type:"text",placeholder:"Name...",required:""},null,8,["modelValue"]),_(s("input",{type:"hidden","onUpdate:modelValue":t[19]||(t[19]=e=>o.form.setting.type=e)},null,512),[[F,o.form.setting.type]])]),s("div",null,[r(d,{for:"import_settings_delimiter",value:"Delimiter"}),r(v,{id:"import_settings_delimiter",modelValue:o.form.setting.params.delimiter,"onUpdate:modelValue":t[20]||(t[20]=e=>o.form.setting.params.delimiter=e),type:"text",required:""},null,8,["modelValue"])]),s("div",null,[r(d,{for:"import_settings_enclosure",value:"Enclosure"}),r(v,{id:"import_settings_enclosure",modelValue:o.form.setting.params.enclosure,"onUpdate:modelValue":t[21]||(t[21]=e=>o.form.setting.params.enclosure=e),type:"text",required:""},null,8,["modelValue"])]),s("div",null,[r(d,{for:"import_settings_date_format",value:"Date Format"}),r(v,{id:"import_settings_date_format",modelValue:o.form.setting.params.date_format,"onUpdate:modelValue":t[22]||(t[22]=e=>o.form.setting.params.date_format=e),type:"text",required:""},null,8,["modelValue"])]),s("div",null,[r(d,{for:"import_settings_date_format",value:"Numbers separator"}),_(s("select",{id:"import_settings_currency_format","onUpdate:modelValue":t[23]||(t[23]=e=>o.form.setting.params.currency_format=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(o.currency_formats,e=>(i(),l("option",{value:e},m(e),9,me))),256))],512),[[h,o.form.setting.params.currency_format]])])]),footer:g(()=>[s("div",de,[r(b,{onClick:a.saveSettings},{default:g(()=>[ce]),_:1},8,["onClick"]),r(C,{onClick:t[24]||(t[24]=e=>o.savingSettings=!1)},{default:g(()=>[pe]),_:1})])]),_:1},8,["show"])])):w("",!0)}var _e=N(I,[["render",fe]]);const ge={class:"bg-white shadow mt-4 prose max-w-none"},ve=T({name:"TransactionsFromCsvPage3",setup(n){return(t,k)=>{const x=y("FormLayout");return i(),B(x,{title:"Import Preview"},{default:g(()=>[s("div",ge,[r(_e)])]),_:1})}}});export{ve as default};