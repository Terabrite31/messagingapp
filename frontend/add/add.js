let inputemail = document.getElementById("inputemail");
let button = document.getElementById("button");
let status = document.getElementById("status");
let r1 = document.getElementById("r1");
r1.style.display = "none";


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

console.log(sender[0].sender)

}

accept();



