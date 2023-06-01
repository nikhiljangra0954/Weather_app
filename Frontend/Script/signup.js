
const baseUrl = `https://weather-app-8wun.onrender.com`
document.querySelector("form").addEventListener("submit", signup);

async function signup(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(!email || !password) {
    alert("Please enter all the information")
  }

  let data = {
    email,
    password,
  };

  let Signup = await fetch(`${baseUrl}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(Signup)
  if (Signup.ok) {
    alert("Register Successfully");
    window.location.href = "index.html";
  }
}