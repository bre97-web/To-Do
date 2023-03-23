import{_ as p,g as r,o as c,c as m,a as x,w as h,l as _,e as t,d as o,s as a,u,p as f,j as b}from"./index-70ea3a64.js";const k={props:{task:{required:!0}},data(){return{tmp:{id:this.task.id,text:this.task.text,notes:this.task.notes,date:this.task.date,done:this.task.done,pin:this.task.pin}}},methods:{...r("TasksStore",["edit"]),commit(){setTimeout(()=>{this.edit({e:this.task,task:this.tmp}),this.close()},250)},cancel(){this.close()},close(){this.$router.back()}}},n=d=>(f("data-v-7731f930"),d=d(),b(),d),w={class:"fixed left-0 top-0 w-full h-full z-50 bg-white dark:bg-gray-900"},g={open:"",class:"w-full md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-start justify-between gap-2 bg-transparent text-black dark:text-white"},y=n(()=>t("header",null,[t("p",{class:"font-bold text-2xl"},"Task Editor")],-1)),v={class:"overflow-y-scroll flex-grow"},V=n(()=>t("td",null,[t("label",null,"Text")],-1)),T=n(()=>t("td",null,[t("label",null,"Notes")],-1)),U=n(()=>t("td",null,[t("label",null,"Date")],-1)),C=n(()=>t("td",null,[t("label",null,"Done")],-1)),I=n(()=>t("td",null,[t("label",null,"Pin")],-1)),S={class:"line-through"},B=n(()=>t("td",null,[t("label",{class:"text-gray-400"},"TimeId")],-1)),D={class:"flex-no self-end"},N={class:"flex gap-2 font-bold place-content-end"};function j(d,e,A,E,s,i){return c(),m("div",w,[x(_,{name:"body",appear:""},{default:h(()=>[t("dialog",g,[y,t("body",v,[t("table",null,[t("tbody",null,[t("tr",null,[V,t("td",null,[o(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>s.tmp.text=l),type:"text",minlength:"1",maxlength:"999",class:"border outline-none w-full h-10"},null,512),[[a,s.tmp.text]])])]),t("tr",null,[T,t("td",null,[o(t("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>s.tmp.notes=l),type:"text",minlength:"1",maxlength:"999",class:"border outline-none w-full h-10"},null,512),[[a,s.tmp.notes]])])]),t("tr",null,[U,t("td",null,[o(t("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>s.tmp.date=l),type:"date",class:"border outline-none w-full h-10"},null,512),[[a,s.tmp.date]])])]),t("tr",null,[C,t("td",null,[o(t("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>s.tmp.done=l),type:"checkbox",name:"done",class:"block h-10 w-10"},null,512),[[u,s.tmp.done]])])]),t("tr",null,[I,t("td",null,[o(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>s.tmp.pin=l),type:"checkbox",name:"pin",class:"block h-10 w-10"},null,512),[[u,s.tmp.pin]])])]),t("tr",S,[B,t("td",null,[o(t("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>s.tmp.id=l),type:"text",disabled:"",class:"border outline-none w-full h-10"},null,512),[[a,s.tmp.id]])])])])])]),t("footer",D,[t("div",N,[t("button",{onClick:e[6]||(e[6]=(...l)=>i.cancel&&i.cancel(...l)),type:"risk"},"Cancel"),t("button",{onClick:e[7]||(e[7]=(...l)=>i.commit&&i.commit(...l)),type:"safe"},"Apply")])])])]),_:1})])}const q=p(k,[["render",j],["__scopeId","data-v-7731f930"]]);export{q as default};