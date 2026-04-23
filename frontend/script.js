let chicken = document.getElementById("chicken");
let inputemail = document.getElementById("inputemail");
let inputpassword = document.getElementById("inputpassword");
let button = document.getElementById("button");

async function request() {
  let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/test-email", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
    email:inputemail.value,
    password:inputpassword.value
    })
  });

  chicken.textContent = await res.json();
}

button.onclick = request;