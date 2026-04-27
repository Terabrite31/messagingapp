let inputemail = document.getElementById("inputemail");
let button = document.getElementById("button");
let status = document.getElementById("status");
let r1 = document.getElementById("r1");
r1.style.display = "none";
let r2 = document.getElementById("r2");
r2.style.display = "none";
let r3 = document.getElementById("r3");
r3.style.display = "none";
let r4 = document.getElementById("r4");
r4.style.display = "none";
let r5 = document.getElementById("r5");
r5.style.display = "none";
let r6 = document.getElementById("r6");
r6.style.display = "none";
let r7 = document.getElementById("r7");
r7.style.display = "none";

let email = localStorage.getItem("userEmail");



//add input
async function addInput() {
    let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/add", {
method: "POST",
headers: {
    "Content-Type":"application/json"
},
body:JSON.stringify({
    email: email,
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
body:JSON.stringify({
    email: email
})
})
let data = await res.json();
p1.textContent = data;
r1.style.display = "block";


}

accept();



