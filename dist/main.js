(()=>{"use strict";var e,r,t,n={172:(e,r,t)=>{const n=t(933);if("string"==typeof n)throw new TypeError("Not running in an Electron environment!");const o="ELECTRON_IS_DEV"in process.env,p=1===Number.parseInt(process.env.ELECTRON_IS_DEV,10);e.exports=o?p:!n.app.isPackaged},933:e=>{e.exports=require("electron")}},o={};function p(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return n[e](r,r.exports,p),r.exports}p.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return p.d(r,{a:r}),r},p.d=(e,r)=>{for(var t in r)p.o(r,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e=p(933),r=p(172),t=p.n(r),e.app.on("ready",(function(){var r=new e.BrowserWindow({width:800,height:600,webPreferences:{nodeIntegration:!0,contextIsolation:!1}});console.log(t()),r.loadURL(t()?"http://localhost:9000":"file://"+e.app.getAppPath()+"/index.html")}))})();