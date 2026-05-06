let name = document.getElementById("name");
const token = localStorage.getItem("token"); 



async function sendData() {
    let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/ui", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
     },
    
    body:JSON.stringify({
       token: token
    })
})
let data = await res.json();
name.textContent = data.username;


  
    }

    sendData();