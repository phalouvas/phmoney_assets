var f=Object.defineProperty,v=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&l(e,o,t[o]);if(d)for(var o of d(t))y.call(t,o)&&l(e,o,t[o]);return e},_=(e,t)=>v(e,g(t));import{_ as C,o as i,g as b,a as s,t as n,d as k,r as h,c as u,w as m,b as $,k as z,p as L,i as x}from"./main.f659eac9.js";const B={mounted(){this.drawChart()},methods:{drawChart(){var e=new google.visualization.DataTable;for(let r=0;r<this.store.props.columns.length;r++){const a=this.store.props.columns[r];e.addColumn(a.type,a.name)}for(let r=0;r<this.store.props.rows.length;r++){const a=this.store.props.rows[r];e.addRow(a)}var t={height:500,vAxis:{minValue:0}},o=new google.visualization.LineChart(document.getElementById("chart_div"));o.draw(e,t)}}},O={class:"p-6"},R={class:"text-center"},V={class:"text-center"},D=s("div",{class:"border-b"},[s("div",{id:"chart_div"})],-1);function S(e,t,o,r,a,p){return i(),b("div",O,[s("h2",R,n(e.store.props.company)+" "+n(e.store.props.title),1),s("h3",V," From "+n(e.store.convert_date(e.store.props.date_start))+" to "+n(e.store.convert_date(e.store.props.date_end)),1),D])}var M=C(B,[["render",S]]);const N={class:"flex gap-2"},Y=s("option",null,"One Day",-1),E=s("option",null,"One Week",-1),T=s("option",null,"Two Weeks",-1),W=s("option",null,"One Month",-1),A=s("option",null,"Quarter Year",-1),F=s("option",null,"Half Year",-1),H=s("option",null,"One Year",-1),I=[Y,E,T,W,A,F,H],Q={class:"bg-white shadow mt-4 prose max-w-none"},U={data(){return{extra_params:{step_size:"One Month"}}}},G=k(_(c({},U),{name:"ReportsChartLine",setup(e){return(t,o)=>{const r=h("form-label"),a=h("ReportLayout");return i(),u(a,{title:"Line Chart",extra_params:t.extra_params},{settings:m(()=>[s("div",N,[s("div",null,[$(r,{for:"step_size",value:"Step Size"}),z(s("select",{id:"step_size","onUpdate:modelValue":o[0]||(o[0]=p=>t.store.report_settings.params.step_size=p),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},I,512),[[L,t.store.report_settings.params.step_size]])])])]),default:m(()=>[s("div",Q,[t.store.props.currency&&!t.store.processing?(i(),u(M,{key:0})):x("",!0)])]),_:1},8,["extra_params"])}}}));export{G as default};
