let chicken = document.getElementById("chicken");

fetch("https://messaging-app-backend-production-cd06.up.railway.app/messages")
  .then(res => res.json())
  .then(data => {
    chicken.textContent = data.join("");
  });