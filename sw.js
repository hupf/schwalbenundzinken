if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e8df8c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CtkowD8N.css",revision:null},{url:"assets/index-Dd-NWMM7.js",revision:null},{url:"index.html",revision:"2116dbc01c712872e15f487b8da1272e"},{url:"registerSW.js",revision:"bfac43c7229b679a608c3426dee27afc"},{url:"maskable-icon-512x512.png",revision:"3dbb4bf6c17f73209ad346c4ac3799ba"},{url:"pwa-192x192.png",revision:"574f5ad1ff3a2997a26a33a5e27f600d"},{url:"pwa-512x512.png",revision:"87b1ac38d7118aec896835b047898a95"},{url:"pwa-64x64.png",revision:"23748de1b34c0f27d2139b2c02ef78ff"},{url:"manifest.webmanifest",revision:"0fe643904c12e4e996ee0ed578aee41b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
