let inputemail = document.getElementById("inputemail");
let button = document.getElementById("button");
let status = document.getElementById("status");
let right = document.getElementById("right");
let token = localStorage.getItem("token");
const div = document.createElement("div")


  const senderemail = document.createElement("p")
  const sendername = document.createElement("p")
  const acceptBtn = document.createElement("button")
  const declineBtn = document.createElement("button")

  div.className = "requestdiv"
  senderemail.className = "senderemail"
  sendername.className = "sendername"
  acceptBtn.className = "abutton"
  declineBtn.className = "rbutton"

  senderemail.textContent = "jasontorrevillas57@gmail.com"
  sendername.textContent = "Jason"
  acceptBtn.textContent = "Accept"
  declineBtn.textContent = "Decline"
  
  div.appendChild(sendername)
  div.appendChild(senderemail)
  div.appendChild(acceptBtn)
  div.appendChild(declineBtn)

  right.appendChild(div)




//add input
async function addInput() {
    let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/add", {
method: "POST",
credentials: "include",
headers: {
    "Content-Type":"application/json"
},
body:JSON.stringify({
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



console.log(sender[0].sender)

}

accept();








