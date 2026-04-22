let chicken = document.getElementById("chicken");

async function request() {
  let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/messages");
  chicken.textContent = await res.json();
}

request();