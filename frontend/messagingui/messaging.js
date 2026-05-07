let name = document.getElementById("name");
let namediv = document.getElementById("namediv");
let logout = document.getElementById("logout");
logout.style.display = "none";

let num = 0;

function namee() {
    num += 1;
  if (num == 1) {
    namediv.style.height = "150px";
    logout.style.display = "block";

  } else {
    namediv.style.height = "50px";
    logout.style.display = "none";
  }
  if (num == 2) {
    num = 0;
  }
  
  console.log(num)
}




name.onclick = namee;



async function logoutt() {
    let resp = fetch("https://messaging-app-backend-production-cd06.up.railway.app/logout", {
  method: "GET",
  credentials: "include"

    })
    let data = await resp.json();
if (data == "logged out") {
    window.location.href = "/frontend/login/signin.html";
}
}


logout.onclick = logoutt;










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