import{_ as c,r as s,o as m,g as b,a as o,b as a,w as i,n as p,e as y,f as k,d as g,c as v}from"./main.b8a63217.js";const x={data(){return{form:{sqlite_file:null},download_url:`http://phmoney_app.kainotomo.localhost/phmoney/teams/${this.store.user.current_team_id}/database/download`}},methods:{async submit(){if(confirm("Are you sure you want to upload this file? All existing data will be deleted.")){let e=new FormData;e.append("sqlite_file",this.form.sqlite_file),await this.store.post(`http://phmoney_app.kainotomo.localhost/phmoney/teams/${this.store.user.current_team_id}/database/upload`,e,{headers:{"Content-Type":"multipart/form-data"}}),this.store.errors===null&&(this.store.errors="File imported succesfully")}}}},q=o("p",null,[k(" Load or save the whole book data as sqlite file. The sqlite file is fully compatible with "),o("a",{href:"https://gnucash.org/",target:"_blank"},"GnuCash")],-1),B=o("p",{class:"text-red-500"}," Warning: This operation will overwite your database and existing data will be forever deleted. ",-1),D={class:"flex items-center justify-end mt-4 gap-2"},U=["href"],C=o("span",{class:"material-icons-outlined"}," download ",-1),I=[C],$=o("span",{class:"material-icons-outlined"},"upload",-1);function A(e,t,_,r,l,d){const u=s("form-label"),f=s("form-input"),h=s("form-secondary-button"),w=s("form-button");return m(),b("form",{onSubmit:t[1]||(t[1]=y((...n)=>d.submit&&d.submit(...n),["prevent"])),class:"p-6"},[q,B,o("div",null,[a(u,{for:"sqlite_file",value:"Select a Sqlite file"}),a(f,{id:"sqlite_file",type:"file",class:"mt-1 block w-full",onInput:t[0]||(t[0]=n=>l.form.sqlite_file=n.target.files[0]),required:"",autofocus:""})]),o("div",D,[a(h,{class:p({"opacity-25":e.store.processing}),disabled:e.store.processing,title:"Download"},{default:i(()=>[o("a",{href:l.download_url},I,8,U)]),_:1},8,["class","disabled"]),a(w,{class:p({"opacity-25":e.store.processing}),disabled:e.store.processing||l.form.sqlite_file===null,title:"Uploads"},{default:i(()=>[$]),_:1},8,["class","disabled"])])],32)}var T=c(x,[["render",A],["__file","/home/phalo/kainotomo/phmoney/phmoney_assets/src/components/book/BookDownloadUploadIndex.vue"]]);const L={class:"bg-white shadow mt-4 prose max-w-none"},N=g({name:"BookDownloadUploadIndex",setup(e){return(t,_)=>{const r=s("AppLayout");return m(),v(r,{title:"Download/Upload"},{default:i(()=>[o("div",L,[a(T)])]),_:1})}}});var V=c(N,[["__file","/home/phalo/kainotomo/phmoney/phmoney_assets/src/views/book/BookDownloadUploadIndex.vue"]]);export{V as default};