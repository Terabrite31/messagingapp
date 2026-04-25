let inputemail = document.getElementById("inputemail");
let inputpassword = document.getElementById("inputpassword");
let button = document.getElementById("button");

async function sendData() {
    let res = await fetch("https://messaging-app-backend-production-cd06.up.railway.app/loginapi", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
   body: JSON.stringify({
  email: inputemail.value,
  password: inputpassword.value
})

    })
    let data = await res.json()

    if (data == "correct") {
        localStorage.setItem("userEmail", inputemail.value);
        window.location.href = "/frontend/messagingui/messaging.html";
    }
}

button.onclick = sendData;

