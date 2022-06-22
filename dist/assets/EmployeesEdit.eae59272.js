import{_ as g,r as i,o as n,g as m,a as d,b as l,k as p,p as f,l as _,m as y,t as v,w as V,n as x,e as k}from"./main.ab09678c.js";const b={data(){return{form:{id:this.store.props.employee.id,username:this.store.props.employee.username,active:this.store.props.employee.active,addr_name:this.store.props.employee.addr_name,addr_addr1:this.store.props.employee.addr_addr1,addr_addr2:this.store.props.employee.addr_addr2,addr_addr3:this.store.props.employee.addr_addr3,addr_addr4:this.store.props.employee.addr_addr4,addr_phone:this.store.props.employee.addr_phone,addr_fax:this.store.props.employee.addr_fax,addr_email:this.store.props.employee.addr_email,language:this.store.props.employee.language,currency:this.store.props.employee.currency,workday_num:this.store.props.employee.workday_num,workday_denom:this.store.props.employee.workday_denom,rate_num:this.store.props.employee.rate_num,rate_denom:this.store.props.employee.rate_denom,ccard_guid:this.store.props.employee.ccard_guid},workday:this.store.props.employee.workday_num/this.store.props.employee.workday_denom,rate:this.store.props.employee.rate_num/this.store.props.employee.rate_denom}},methods:{async submit(){let a=this.store.props.currencies.find(o=>o.guid===this.form.currency);this.form.workday_num=this.workday*a.fraction,this.form.workday_denom=a.fraction,this.form.rate_num=this.rate*a.fraction,this.form.rate_denom=a.fraction,this.$route.name==="business.employees.create"?await this.store.post("http://phmoney_app.kainotomo.localhost/phmoney/business/employees/store",this.form):await this.store.post(`http://phmoney_app.kainotomo.localhost/phmoney/business/employees/update/${this.$route.params.employee_pk}`,this.form),this.$router.back()}}},w={class:"p-3 border"},U=d("div",{class:"font-bold text-lg"},"Employee",-1),E=d("div",{class:"font-semibold text-md"},"Identification",-1),A={class:"flex flex-wrap gap-2"},q=d("div",{class:"font-semibold text-md"},"Billing Address",-1),B={class:"flex flex-wrap gap-2"},C=d("div",{class:"font-semibold text-md"},"Interface",-1),D={class:"flex flex-wrap gap-2"},N={class:"p-3 mt-6 border"},S=d("div",{class:"font-bold text-lg"},"Billing Information",-1),I={class:"flex flex-wrap gap-2"},F=["value"],L=["value"],M={class:"flex gap-2 items-center justify-end mt-4"},j=d("span",{class:"material-icons-outlined"}," save ",-1);function z(a,o,H,P,r,u){const s=i("form-label"),t=i("form-input"),c=i("form-checkbox"),h=i("form-button");return n(),m("div",null,[d("form",{onSubmit:o[16]||(o[16]=k((...e)=>u.submit&&u.submit(...e),["prevent"])),class:"p-6"},[d("div",w,[U,E,d("div",A,[d("div",null,[l(s,{for:"id",value:"Number"}),l(t,{id:"id",type:"text",modelValue:r.form.id,"onUpdate:modelValue":o[0]||(o[0]=e=>r.form.id=e)},null,8,["modelValue"])]),d("div",null,[l(s,{for:"username",value:"Username*"}),l(t,{id:"username",type:"text",modelValue:r.form.username,"onUpdate:modelValue":o[1]||(o[1]=e=>r.form.username=e),required:""},null,8,["modelValue"])]),d("div",null,[l(s,{for:"active",value:"Active"}),l(c,{id:"active",checked:r.form.active,"onUpdate:checked":o[2]||(o[2]=e=>r.form.active=e)},null,8,["checked"])])]),q,d("div",B,[d("div",null,[l(s,{for:"addr_name",value:"Name*"}),l(t,{id:"addr_name",type:"text",modelValue:r.form.addr_name,"onUpdate:modelValue":o[3]||(o[3]=e=>r.form.addr_name=e),required:""},null,8,["modelValue"])]),d("div",null,[l(s,{for:"addr_addr1",value:"Address 1"}),l(t,{id:"addr_addr1",type:"text",modelValue:r.form.addr_addr1,"onUpdate:modelValue":o[4]||(o[4]=e=>r.form.addr_addr1=e)},null,8,["modelValue"])]),d("div",null,[l(s,{for:"addr_addr2",value:"Address 2"}),l(t,{id:"addr_addr2",type:"text",modelValue:r.form.addr_addr2,"onUpdate:modelValue":o[5]||(o[5]=e=>r.form.addr_addr2=e)},null,8,["modelValue"])]),d("div",null,[l(s,{for:"addr_addr3",value:"Address 3"}),l(t,{id:"addr_addr3",type:"text",modelValue:r.form.addr_addr3,"onUpdate:modelValue":o[6]||(o[6]=e=>r.form.addr_addr3=e)},null,8,["modelValue"])]),d("div",null,[l(s,{for:"addr_addr4",value:"Address 4"}),l(t,{id:"addr_addr4",type:"text",modelValue:r.form.addr_addr4,"onUpdate:modelValue":o[7]||(o[7]=e=>r.form.addr_addr4=e)},null,8,["modelValue"])]),d("div",null,[l(s,{for:"addr_phone",value:"Phone"}),l(t,{id:"addr_phone",type:"text",modelValue:r.form.addr_phone,"onUpdate:modelValue":o[8]||(o[8]=e=>r.form.addr_phone=e)},null,8,["modelValue"])]),d("div",null,[l(s,{for:"addr_fax",value:"Fax"}),l(t,{id:"addr_fax",type:"text",modelValue:r.form.addr_fax,"onUpdate:modelValue":o[9]||(o[9]=e=>r.form.addr_fax=e)},null,8,["modelValue"])]),d("div",null,[l(s,{for:"addr_email",value:"Email"}),l(t,{id:"addr_email",type:"text",modelValue:r.form.addr_email,"onUpdate:modelValue":o[10]||(o[10]=e=>r.form.addr_email=e)},null,8,["modelValue"])])]),C,d("div",D,[d("div",null,[l(s,{for:"language",value:"Language"}),l(t,{id:"language",type:"text",modelValue:r.form.language,"onUpdate:modelValue":o[11]||(o[11]=e=>r.form.language=e)},null,8,["modelValue"])])])]),d("div",N,[S,d("div",I,[d("div",null,[l(s,{for:"currency",value:"Currency"}),p(d("select",{id:"currency","onUpdate:modelValue":o[12]||(o[12]=e=>r.form.currency=e),required:"",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(n(!0),m(_,null,y(a.store.props.currencies,e=>(n(),m("option",{key:e.guid,value:e.guid},v(e.fullname),9,F))),128))],512),[[f,r.form.currency]])]),d("div",null,[l(s,{for:"workday",value:"Default Hours per Day*"}),l(t,{id:"workday",type:"number",modelValue:r.workday,"onUpdate:modelValue":o[13]||(o[13]=e=>r.workday=e),min:"0",required:""},null,8,["modelValue"])]),d("div",null,[l(s,{for:"rate",value:"Default Rate*"}),l(t,{id:"rate",type:"number",modelValue:r.rate,"onUpdate:modelValue":o[14]||(o[14]=e=>r.rate=e),step:"0.01",min:"0",required:""},null,8,["modelValue"])]),d("div",null,[l(s,{for:"ccard_guid",value:"Credit Account"}),p(d("select",{id:"terms","onUpdate:modelValue":o[15]||(o[15]=e=>r.form.ccard_guid=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(n(!0),m(_,null,y(a.store.props.accounts,e=>(n(),m("option",{key:e.guid,value:e.guid},v(e.name),9,L))),128))],512),[[f,r.form.ccard_guid]])])])]),d("div",M,[l(h,{class:x({"opacity-25":r.form.processing}),disabled:r.form.processing,title:"Save"},{default:V(()=>[j]),_:1},8,["class","disabled"])])],32)])}var G=g(b,[["render",z],["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/components/business/employees/EmployeesEdit.vue"]]);export{G as E};