let chicken = document.getElementById("chicken");
let inputemail = document.getElementById("inputemail");
let inputpassword = document.getElementById("inputpassword");
let button = document.getElementById("button");
let inputusername = document.getElementById("inputusername")

let inputverification = document.getElementById("inputverification");
inputverification.style.display = "none";
let verify = document.getElementById("verify");
verify.style.display = "none";
let verification = document.getElementById("verification");
verification.style.display = "none";


async function request() {
  let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/test-email", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
    username:inputusername.value,
    email:inputemail.value,
    password:inputpassword.value
    })
  });

  chicken.textContent = await res.json();
  inputverification.style.display = "block";
  verify.style.display = "block";
  verification.style.display = "block";
}

button.onclick = request;

async function request2() {
  let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/api2", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
    username:inputusername.value,
    email:inputemail.value,
    password:inputpassword.value,
    code:inputverification.value
    })
  });
  chicken.textContent = await res.json();
  if (chicken.textContent == "created") {
    window.location.href = "/frontend/login/signin.html";
  } 
  }


verify.onclick = request2;