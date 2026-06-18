let inputemail = document.getElementById("inputemail");
let button = document.getElementById("button");
let status = document.getElementById("status");
let right = document.getElementById("right");
let FR = document.getElementById("friendrequest");







//add input
async function addInput() {
    let res = await fetch("https://messaging-app-backend-v8y1.onrender.com/add", {
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
    let res = await fetch("https://messaging-app-backend-v8y1.onrender.com/accept", {
method: "POST",
headers: {
    "Content-Type":"application/json"
},
credentials: "include"
})
let data = await res.json();
  if (data === "no pending requests") {
    console.log("no pending requests");
    return;
  }

let sender = data.data;

for (let i = 0; i < sender.length; i++) {
  const div = document.createElement("div")
  const senderemail = document.createElement("p")
  const sendername = document.createElement("p")
  const acceptBtn = document.createElement("button")
  const declineBtn = document.createElement("button")
  const stat = document.createElement("stat");
  stat.style.display = "none";

  acceptBtn.dataset.email = sender[i].username;
  acceptBtn.dataset.number = i;
  declineBtn.dataset.remail = sender[i].username;


  acceptBtn.onclick = async function acceptBE() {
    let res = await fetch("https://messaging-app-backend-v8y1.onrender.com/acceptBE", {
 headers: {"Content-Type":"application/json"},
credentials: "include",
      method: "POST",
         body: JSON.stringify({
  acceptemail: this.dataset.email
  })
})

acceptBtn.style.display = "none";
declineBtn.style.display = "none";
stat.style.display = "block";
stat.textContent = "accepted";


  }

    declineBtn.onclick = async function declineBE() {
    let res = await fetch("https://messaging-app-backend-v8y1.onrender.com/acceptBE", {
 headers: {"Content-Type":"application/json"},
credentials: "include",
      method: "POST"
})

acceptBtn.style.display = "none";
declineBtn.style.display = "none";
stat.style.display = "block";
stat.textContent = "declined";


  }
  div.className = "requestdiv"
  senderemail.className = "senderemail"
  sendername.className = "sendername"
  acceptBtn.className = "abutton"
  declineBtn.className = "rbutton"
  stat.className = "stat"



  senderemail.textContent = sender[i].sender
  sendername.textContent = sender[i].username
  acceptBtn.textContent = "Accept"
  declineBtn.textContent = "Decline"
  
  div.appendChild(sendername)
  div.appendChild(senderemail)
  div.appendChild(acceptBtn)
  div.appendChild(declineBtn)
  div.appendChild(stat);

  right.appendChild(div)
}

console.log(sender[0].sender)
}

accept();


