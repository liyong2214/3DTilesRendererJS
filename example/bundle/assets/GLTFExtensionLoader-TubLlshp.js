import{bc as l}from"./three.module-DpclfMcJ.js";import{G as d}from"./GLTFLoader-DkJa3Jo5.js";import{L as p}from"./LoaderBase-CVSPpjX2.js";let u=class{constructor(){this.name="CESIUM_RTC"}afterRoot(e){if(e.parser.json.extensions&&e.parser.json.extensions.CESIUM_RTC){const{center:t}=e.parser.json.extensions.CESIUM_RTC;t&&(e.scene.position.x+=t[0],e.scene.position.y+=t[1],e.scene.position.z+=t[2])}}};class h extends u{constructor(...e){super(...e),console.warn('GLTFCesiumRTCExtension: Plugins should now be imported from "3d-tiles-renderer/plugins" path.')}}class T extends p{constructor(e=l){super(),this.manager=e}parse(e){return new Promise((t,a)=>{const o=this.manager,n=this.fetchOptions;let s=o.getHandler("path.gltf")||o.getHandler("path.glb");s||(s=new d(o),s.register(()=>new h)),n.credentials==="include"&&n.mode==="cors"&&s.setCrossOrigin("use-credentials"),"credentials"in n&&s.setWithCredentials(n.credentials==="include"),n.headers&&s.setRequestHeader(n.headers);let r=s.resourcePath||s.path||this.workingPath;!/[\\/]$/.test(r)&&r.length&&(r+="/"),s.parse(e,r,c=>{t(c)},a)})}}export{T as G,u as a};
