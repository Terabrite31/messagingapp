let inputemail = document.getElementById("inputemail");
let inputpassword = document.getElementById("inputpassword");
let button = document.getElementById("button");
let statuss = document.getElementById("status");

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
    let data = await res.json();

    let status = data.status;
    let username = data.username;

    if (status == "correct") {
        localStorage.setItem("userEmail", inputemail.value);
        localStorage.setItem("userPassword", inputpassword.value);
        localStorage.setItem("userUsername", username);

        window.location.href = "/frontend/messagingui/messaging.html";
    } else {
        statuss.textContent = "wrong email or password try again";

    }
}

button.onclick = sendData;

