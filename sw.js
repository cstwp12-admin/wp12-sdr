const C="wp12sdr-v16";
const PRE=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","jsqr.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(PRE).then(()=>c.add("heic2any.min.js").catch(()=>0))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET")return;
  const u=new URL(r.url);
  const sameOrFont=u.origin===location.origin||/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if(!sameOrFont)return;
  // network first for the page (so updates arrive); on a weak signal the saved copy is used after 4 seconds (the fetch goes on and refreshes it)
  e.respondWith((async()=>{
    const cached=await caches.match(r);
    const net=fetch(r).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));return res;});
    if(!cached)return net.catch(()=>r.mode==="navigate"?caches.match("index.html"):Response.error());
    return Promise.race([net.catch(()=>cached),new Promise(ok=>setTimeout(()=>ok(cached),4000))]);
  })());
});
