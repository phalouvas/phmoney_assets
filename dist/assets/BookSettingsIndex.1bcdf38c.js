var C=Object.defineProperty;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var y=(p,o,r)=>o in p?C(p,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[o]=r,v=(p,o)=>{for(var r in o||(o={}))S.call(o,r)&&y(p,r,o[r]);if(f)for(var r of f(o))D.call(o,r)&&y(p,r,o[r]);return p};import{_ as w,r as u,o as d,g as c,a as l,b as n,i as a,n as i,k as V,p as U,l as x,m as T,t as g,w as k,e as F,d as j,c as I}from"./main.503448c0.js";const E={async created(){await this.store.get(`http://phmoney_local.kainotomo.localhost/phmoney/teams/${this.store.user.current_team_id}/options/show`),this.props=v({},this.store.props),this.form.options=this.props.options},data(){return{props:null,form:{options:{accounting_period:{date_start:null,date_end:null},business:{company_name:null,company_address:null,company_contact_person:null,company_phone_number:null,company_fax_number:null,company_email_address:null,company_website_url:null,company_id:null,default_customer_taxtable:null,default_vendor_taxtable:null},tax:{tax_number:null},counters:{bill:null,vendor:null,invoice:null,job:null,employee:null},counter_formats:{bill:null,vendor:null,invoice:null,job:null,employee:null}}}}},methods:{async submit(){let p=this.store.props.team.id;await this.store.put(`http://phmoney_local.kainotomo.localhost/phmoney/teams/${p}/options/store`,this.form),this.store.errors===null&&(this.store.errors="Settings Saved Successfully!"),this.$router.back()}}},A={key:0,class:"p-6"},P={class:"grid grid-cols-6 gap-6"},J=l("div",{class:"col-span-6 sm:col-span-6"},[l("h4",{class:"text-md font-bold text-gray-900"},"Accounting Period")],-1),L={class:"col-span-6 sm:col-span-3"},M={class:"col-span-6 sm:col-span-3"},W=l("div",{class:"col-span-6 sm:col-span-6"},[l("h4",{class:"text-md font-bold text-gray-900"},"Business")],-1),z={class:"col-span-6 sm:col-span-2"},q={class:"col-span-6 sm:col-span-2"},G={class:"col-span-6 sm:col-span-2"},H={class:"col-span-6 sm:col-span-2"},K={class:"col-span-6 sm:col-span-2"},O={class:"col-span-6 sm:col-span-2"},Q={class:"col-span-6 sm:col-span-4"},R={class:"col-span-6 sm:col-span-2"},X={class:"col-span-6 sm:col-span-2"},Y=l("option",{value:null,class:"text-gray-500"},"Select Tax Table",-1),Z=["value"],$={class:"col-span-6 sm:col-span-4"},ss=l("option",{value:null,class:"text-gray-500"},"Select Tax Table",-1),os=["value"],es=l("div",{class:"col-span-6 sm:col-span-6 border-t pt-2"},[l("h4",{class:"text-md font-bold text-gray-900"},"Tax")],-1),ns={class:"col-span-6 sm:col-span-2"},ls=l("div",{class:"col-span-6 sm:col-span-6 border-t pt-2"},[l("h4",{class:"text-md font-bold text-gray-900"},"Counters")],-1),ts={class:"col-span-6 sm:col-span-2"},as={class:"col-span-6 sm:col-span-4"},is={class:"col-span-6 sm:col-span-2"},ms={class:"col-span-6 sm:col-span-4"},ps={class:"col-span-6 sm:col-span-2"},rs={class:"col-span-6 sm:col-span-4"},us={class:"col-span-6 sm:col-span-2"},ds={class:"col-span-6 sm:col-span-4"},cs={class:"col-span-6 sm:col-span-2"},bs={class:"col-span-6 sm:col-span-4"},_s=l("span",{class:"material-icons-outlined"}," save ",-1);function fs(p,o,r,b,s,_){const t=u("form-label"),h=u("FormDateStart"),B=u("FormDateEnd"),m=u("form-input"),N=u("form-button");return s.props?(d(),c("div",A,[l("form",{onSubmit:o[23]||(o[23]=F((...e)=>_.submit&&_.submit(...e),["prevent"]))},[l("div",P,[J,l("div",L,[n(t,{for:"accounting_period_date_start",value:"Start Date"}),n(h,{id:"accounting_period_date_start",name:"accounting_period_date_start",modelValue:s.form.options.accounting_period.date_start,"onUpdate:modelValue":o[0]||(o[0]=e=>s.form.options.accounting_period.date_start=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled"])]),l("div",M,[n(t,{for:"accounting_period_date_end",value:"End Date"}),n(B,{id:"accounting_period_date_end",name:"accounting_period_date_end",modelValue:s.form.options.accounting_period.date_end,"onUpdate:modelValue":o[1]||(o[1]=e=>s.form.options.accounting_period.date_end=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled"])]),W,a(" Business Company Name "),l("div",z,[n(t,{for:"business_company_name",value:"Company Name"}),n(m,{id:"business_company_name",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_name,"onUpdate:modelValue":o[2]||(o[2]=e=>s.form.options.business.company_name=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Business Company Address "),l("div",q,[n(t,{for:"business_company_address",value:"Company Address"}),n(m,{id:"business_company_address",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_address,"onUpdate:modelValue":o[3]||(o[3]=e=>s.form.options.business.company_address=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Business Contact Person "),l("div",G,[n(t,{for:"business_company_contact_person",value:"Company Contact Person"}),n(m,{id:"business_company_contact_person",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_contact_person,"onUpdate:modelValue":o[4]||(o[4]=e=>s.form.options.business.company_contact_person=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Business Phone Number "),l("div",H,[n(t,{for:"business_company_phone_number",value:"Company Phone Number"}),n(m,{id:"business_company_phone_number",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_phone_number,"onUpdate:modelValue":o[5]||(o[5]=e=>s.form.options.business.company_phone_number=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Business Fax Number "),l("div",K,[n(t,{for:"business_company_fax_number",value:"Company Fax Number"}),n(m,{id:"business_company_fax_number",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_fax_number,"onUpdate:modelValue":o[6]||(o[6]=e=>s.form.options.business.company_fax_number=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Business Email Number "),l("div",O,[n(t,{for:"business_company_email_address",value:"Company Email Number"}),n(m,{id:"business_company_email_address",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_email_address,"onUpdate:modelValue":o[7]||(o[7]=e=>s.form.options.business.company_email_address=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Business Website Url "),l("div",Q,[n(t,{for:"business_company_website_url",value:"Company Website Url"}),n(m,{id:"business_company_website_url",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_website_url,"onUpdate:modelValue":o[8]||(o[8]=e=>s.form.options.business.company_website_url=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Business Company Id "),l("div",R,[n(t,{for:"business_company_id",value:"Company ID"}),n(m,{id:"business_company_id",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_id,"onUpdate:modelValue":o[9]||(o[9]=e=>s.form.options.business.company_id=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Business Default customer taxtable "),l("div",X,[n(t,{for:"business_default_customer_taxtable",value:"Default Customer Tax Table"}),V(l("select",{id:"business_default_customer_taxtable","onUpdate:modelValue":o[10]||(o[10]=e=>s.form.options.business.default_customer_taxtable=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[Y,(d(!0),c(x,null,T(s.props.taxtables,e=>(d(),c("option",{key:e.guid,value:e},g(e.name),9,Z))),128))],512),[[U,s.form.options.business.default_customer_taxtable]])]),a(" Business Default vendor taxtable "),l("div",$,[n(t,{for:"business_default_vendor_taxtable",value:"Default Vendor Tax Table"}),V(l("select",{id:"business_default_vendor_taxtable","onUpdate:modelValue":o[11]||(o[11]=e=>s.form.options.business.default_vendor_taxtable=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[ss,(d(!0),c(x,null,T(s.props.taxtables,e=>(d(),c("option",{key:e.guid,value:e},g(e.name),9,os))),128))],512),[[U,s.form.options.business.default_vendor_taxtable]])]),es,a(" Tax Number "),l("div",ns,[n(t,{for:"tax_number",value:"Tax Number"}),n(m,{id:"tax_number",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.tax.tax_number,"onUpdate:modelValue":o[12]||(o[12]=e=>s.form.options.tax.tax_number=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),ls,a(" Bill Number "),l("div",ts,[n(t,{for:"bill_number",value:"Bill number"}),n(m,{id:"bill_number",type:"number",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.bill,"onUpdate:modelValue":o[13]||(o[13]=e=>s.form.options.counters.bill=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Bill Number Format"),l("div",as,[n(t,{for:"bill_number_format",value:"Bill number format"}),n(m,{id:"bill_number_format",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.bill,"onUpdate:modelValue":o[14]||(o[14]=e=>s.form.options.counter_formats.bill=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Vendor Number "),l("div",is,[n(t,{for:"vendor_number",value:"Vendor number"}),n(m,{id:"vendor_number",type:"number",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.vendor,"onUpdate:modelValue":o[15]||(o[15]=e=>s.form.options.counters.vendor=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Vendor Number Format"),l("div",ms,[n(t,{for:"vendor_number_format",value:"Vendor number format"}),n(m,{id:"vendor_number_format",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.vendor,"onUpdate:modelValue":o[16]||(o[16]=e=>s.form.options.counter_formats.vendor=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Invoice Number "),l("div",ps,[n(t,{for:"invoice_number",value:"Invoice number"}),n(m,{id:"invoice_number",type:"number",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.invoice,"onUpdate:modelValue":o[17]||(o[17]=e=>s.form.options.counters.invoice=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Invoice Number Format"),l("div",rs,[n(t,{for:"vendor_number_format",value:"Invoice number format"}),n(m,{id:"invoice_number_format",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.invoice,"onUpdate:modelValue":o[18]||(o[18]=e=>s.form.options.counter_formats.invoice=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Job Number "),l("div",us,[n(t,{for:"job_number",value:"Job number"}),n(m,{id:"job_number",type:"number",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.job,"onUpdate:modelValue":o[19]||(o[19]=e=>s.form.options.counters.job=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Job Number Format"),l("div",ds,[n(t,{for:"job_number_format",value:"Job number format"}),n(m,{id:"job_number_format",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.job,"onUpdate:modelValue":o[20]||(o[20]=e=>s.form.options.counter_formats.job=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Employee Number "),l("div",cs,[n(t,{for:"employee_number",value:"Employee number"}),n(m,{id:"employee_number",type:"number",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.employee,"onUpdate:modelValue":o[21]||(o[21]=e=>s.form.options.counters.employee=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),a(" Employee Number Format"),l("div",bs,[n(t,{for:"job_number_format",value:"Employee number format"}),n(m,{id:"employee_number_format",type:"text",class:i(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.employee,"onUpdate:modelValue":o[22]||(o[22]=e=>s.form.options.counter_formats.employee=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])])]),n(N,{class:i(["mt-4",{"opacity-25":p.store.processing}]),disabled:p.store.processing||!s.props.permissions.canUpdateTeam,title:"Save"},{default:k(()=>[_s]),_:1},8,["class","disabled"])],32)])):a("v-if",!0)}var ys=w(E,[["render",fs],["__file","/var/www/html/src/components/book/BookSettingsIndex.vue"]]);const vs={class:"bg-white shadow mt-4 prose max-w-none"},Vs=j({name:"BookSettingsIndex",setup(p){return(o,r)=>{const b=u("AppLayout");return d(),I(b,{title:"Book Settings"},{default:k(()=>[l("div",vs,[n(ys)])]),_:1})}}});var Ts=w(Vs,[["__file","/var/www/html/src/views/book/BookSettingsIndex.vue"]]);export{Ts as default};
