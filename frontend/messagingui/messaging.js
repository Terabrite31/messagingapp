let name = document.getElementById("name");




async function sendData() {
    let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/ui", {
        method: "POST",
         credentials: "include",
        headers: {
            "Content-Type":"application/json"
     },
   
    
})
let data = await res.json();
name.textContent = data.username;


  
    }

    sendData();