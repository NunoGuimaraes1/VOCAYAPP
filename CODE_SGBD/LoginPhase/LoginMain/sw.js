if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(function(){
        console.log("Registered")
    })
}

self.addEventListener("install", function(e){
    console.log("Service Worker - Installing", e)
})

self.addEventListener("activate", function(e){
    console.log("Service Worker - Activating", e)
})

self.addEventListener("fetch", function(e){
    console.log("Service Worker - Fetching Something", e)
})