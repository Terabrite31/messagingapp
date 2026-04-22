let chicken = document.getElementById("chicken");

async function request() {
  let res = await fetch("/messages");
  chicken.textContent = await res.json();
}

request();