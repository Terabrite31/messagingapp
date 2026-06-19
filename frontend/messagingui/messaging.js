let name = document.getElementById("name");
let namediv = document.getElementById("namediv");
let logout = document.getElementById("logout");
let who = document.getElementById("who");
logout.style.display = "none";
who.textContent = currenttalkingto;

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
    let resp = await fetch("https://api.konnn.com/logout", {
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
    let res = await fetch("https://api.konnn.com/ui", {
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



let currenttalkingto = null;




    async function messagelist() {
        let res = await fetch("https://api.konnn.com/messagelist", {
   method: "POST",
   credentials: "include",
   headers: {
    "Content-Type":"application/json"
   } 
    })
    let data = await res.json();
let friendss = data.data;


for (let i = 0; i < friendss.length; i++) {
const listdiv = document.createElement("div")
const friendname = document.createElement("p")
const message = document.createElement("p")
const buttonnn = document.createElement("button")

let talkingto = friendss[i].friendemail;
currenttalkingto = talkingto;

listdiv.className = "messagediv";
friendname.className = "friend";
message.className = "message";
buttonnn.className = "buttonnn";

friendname.textContent = friendss[i].friendemail;
message.textContent = "no message yet"

buttonnn.onclick = async function() {
  let res = await fetch("https://api.konnn.com/click", {
method: "POST",
credentials: "include",
headers: {
    "Content-Type":"application/json"
},
body: JSON.stringify({
  friendemail: talkingto
})
})
let data = await res.json();

}


listdiv.appendChild(friendname);
listdiv.appendChild(message);
listdiv.appendChild(buttonnn);



let left = document.getElementById("left");
left.appendChild(listdiv);
  }

  }


  messagelist();
  



