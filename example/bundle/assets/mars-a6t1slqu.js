import{ae as f,S as h,W as x,a as B,D as P,A as S,G as T}from"./three.module-DpclfMcJ.js";import{g as y}from"./lil-gui.module.min-Bc0DeA9g.js";import{E as C}from"./EnvironmentControls-CYEuz71t.js";import{T as m}from"./TilesRenderer-3GzfWA9Z.js";import{d as p}from"./DebugTilesPlugin-CbfV2ROf.js";import"./I3DMLoader-BlebwdUJ.js";import"./readMagicBytes-Da5ueiou.js";import"./LoaderBase-CVSPpjX2.js";import"./GLTFLoader-DkJa3Jo5.js";import"./Ellipsoid-Cnb0UTwk.js";import"./B3DMLoader-B2OeBq6-.js";import"./PNTSLoader-BMN5TswI.js";import"./CMPTLoader-nLXQ3OXQ.js";import"./GLTFExtensionLoader-TubLlshp.js";import"./EllipsoidRegion-D6hT1syi.js";import"./EllipsoidRegionHelper-OhHLW9vN.js";let t,a,n,o,e,i;const r={errorTarget:12,displayBoxBounds:!1,fog:!1};R();g();function R(){const u=new f(14208704,.0075,250);n=new h,o=new x({antialias:!0}),o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(14208704),document.body.appendChild(o.domElement),o.domElement.tabIndex=1,t=new B(60,window.innerWidth/window.innerHeight,1,4e3),t.position.set(20,10,20),t.lookAt(0,0,0),a=new C(n,t,o.domElement),a.minZoomDistance=2,a.cameraRadius=1;const l=new P(16777215);l.position.set(1,2,3),n.add(l);const w=new S(16777215,.2);n.add(w);const d=new T;d.rotation.set(Math.PI/2,0,0),n.add(d),e=new m("https://raw.githubusercontent.com/NASA-AMMOS/3DTilesSampleData/master/msl-dingo-gap/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_colorize_tileset.json"),e.registerPlugin(new p),e.fetchOptions.mode="cors",e.lruCache.minSize=900,e.lruCache.maxSize=1300,e.errorTarget=12,i=new m("https://raw.githubusercontent.com/NASA-AMMOS/3DTilesSampleData/master/msl-dingo-gap/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_sky/0528_0260184_to_s64o256_sky_tileset.json"),i.registerPlugin(new p),i.fetchOptions.mode="cors",i.lruCache=e.lruCache,d.add(e.group,i.group),c(),window.addEventListener("resize",c,!1);const s=new y;s.add(r,"fog").onChange(_=>{n.fog=_?u:null}),s.add(r,"displayBoxBounds"),s.add(r,"errorTarget",0,100),s.open()}function c(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio)}function g(){requestAnimationFrame(g),a.update(),t.updateMatrixWorld(),e.errorTarget=r.errorTarget,e.getPluginByName("DEBUG_TILES_PLUGIN").displayBoxBounds=r.displayBoxBounds,i.getPluginByName("DEBUG_TILES_PLUGIN").displayBoxBounds=r.displayBoxBounds,e.setCamera(t),e.setResolutionFromRenderer(t,o),e.update(),i.setCamera(t),i.setResolutionFromRenderer(t,o),i.update(),o.render(n,t)}
