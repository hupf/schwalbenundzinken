if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const o=e=>n(e,c),t={module:{uri:c},exports:d,require:o};i[c]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-5dgfBphJ.css",revision:null},{url:"assets/index-CYpvIH_f.js",revision:null},{url:"index.html",revision:"20a54cdbcb9d26cdc6a462130326c247"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-64x64.png",revision:"cb9bd5dfaf870c2a7a72660949cf840a"},{url:"pwa-192x192.png",revision:"734fd2cb88c5ecf0dfbb73edc03dcd7d"},{url:"pwa-512x512.png",revision:"a84789a7de059261b9193ad7da1421d6"},{url:"maskable-icon-512x512.png",revision:"2b9c6f723c808046b2c14ba8851c090b"},{url:"manifest.webmanifest",revision:"6c6f30fb55a09f8d29767aacef18928b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
