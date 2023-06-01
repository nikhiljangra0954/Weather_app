const baseUrl = `https://weather-app-8wun.onrender.com/`
document.querySelector("form").addEventListener("submit",loginuser);

async function loginuser(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
    // console.log(email, password);
  if(!email || !password){
    alert("Please enter all required information")
  }
  let data = {
    email,
    password,
  };

  let loggininUser = await fetch(`${baseUrl}user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
//   console.log(loggininUser)
  if(loggininUser.status == 401){
    alert("User Details are wrong!")
  }
  if (loggininUser.ok) {
    const token = await loggininUser.json();
    localStorage.setItem("token", token.token);
    alert("Login Successfull");
    window.location.href = "WeatherApp.html";
  }
}