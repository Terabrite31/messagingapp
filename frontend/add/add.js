let inputemail = document.getElementById("inputemail");
let button = document.getElementById("button");
let status = document.getElementById("status");
let right = document.getElementById("right");


let token = localStorage.getItem("token");



//add input
async function addInput() {
    let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/add", {
method: "POST",
headers: {
    "Content-Type":"application/json"
},
body:JSON.stringify({
    token: token,
    REmail: inputemail.value
})
})
let data = await res.json();
if (data == "the email doesnt exists") {
   status.textContent = "email doesnt exists";
} else if(data == "sent") {
    status.textContent = "sent";
}
}
button.onclick = addInput;







//accept
async function accept() {
    let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/accept", {
method: "POST",
headers: {
    "Content-Type":"application/json"
},
credentials: "include"
})
let data = await res.json();
let sender = data.data;

for (let i = 0; i < sender.length; i++) {
  const div = document.createElement("div")
  const p = document.createElement("p")
  const acceptBtn = document.createElement("button")
  const declineBtn = document.createElement("button")

  p.textContent = sender[i].sender
  acceptBtn.textContent = "Accept"
  declineBtn.textContent = "Decline"

  div.appendChild(p)
  div.appendChild(acceptBtn)
  div.appendChild(declineBtn)

  right.appendChild(div)
}

console.log(sender[0].sender)

}

accept();





