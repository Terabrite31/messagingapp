let chicken = document.getElementById("chicken");
let inputemail = document.getElementById("inputemail");
let inputpassword = document.getElementById("inputpassword");
let button = document.getElementById("button");

async function request() {
  let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/test-email");
  chicken.textContent = await res.json();
}

button.onclick = request;