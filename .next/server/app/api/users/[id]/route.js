(()=>{var e={};e.id=100,e.ids=[100],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},6579:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>g,routeModule:()=>l,serverHooks:()=>m,workAsyncStorage:()=>x,workUnitAsyncStorage:()=>v});var s={};t.r(s),t.d(s,{GET:()=>d,POST:()=>c});var i=t(2706),a=t(8203),n=t(5994),o=t(9187);let p=require("@prisma/client"),u=global.prisma??new p.PrismaClient;async function d(e){let r=await u.app.findMany();return o.NextResponse.json(r)}async function c(e){let r=await e.json(),t=await u.app.create({data:{tittle:r.tittle,description:r.description}});return o.NextResponse.json(t)}let l=new i.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/users/[id]/route",pathname:"/api/users/[id]",filename:"route",bundlePath:"app/api/users/[id]/route"},resolvedPagePath:"C:\\Users\\Lenovo\\Desktop\\revision\\test\\src\\app\\api\\users\\[id]\\route.tsx",nextConfigOutput:"",userland:s}),{workAsyncStorage:x,workUnitAsyncStorage:v,serverHooks:m}=l;function g(){return(0,n.patchFetch)({workAsyncStorage:x,workUnitAsyncStorage:v})}},6487:()=>{},8335:()=>{}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,452],()=>t(6579));module.exports=s})();