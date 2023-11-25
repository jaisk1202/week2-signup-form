const submitButton = document.querySelector(".submit");
if(localStorage.getItem('userData')!==null){
  alert("Already logged in!")
  window.location.href = "https://jaisk1202.github.io/week2-signup-form/sign-in.html";
} 

//validation 
submitButton.addEventListener("click", (event) => {
  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  event.preventDefault();
  const passwordValue = document.getElementById("password").value;
  const finalPassword = document.getElementById("final-password").value;

  if (nameValue === "" || emailValue === "" || passwordValue === "" || finalPassword === "") {
    document.getElementById("error").style.display = "block";
  } else if(passwordValue !== finalPassword){
    console.log("Didnt match")
    alert("Passwords should match!")
  } else {
    console.log(passwordValue === finalPassword);
    console.log(finalPassword)
    document.getElementById("error").style.display = "none";
    const token = generateAccessToken();
    let userData = {
        name:nameValue,
        email:emailValue,
        password:passwordValue,
        token:token
    }
    localStorage.setItem("userData",JSON.stringify(userData))
    window.location.href = "https://jaisk1202.github.io/week2-signup-form/sign-in.html"
  }
});

// for ticket generation
function generateAccessToken(){
  let token = '';
  const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()";
  for(let i = 0; i<16;i++){
    token+=keys.charAt(Math.floor(Math.random()*keys.length));
  }
  console.log(token);
  return token
}

// for visivility 
const eye = document.getElementById("eye");
const passwordInput = document.getElementById("password");
eye.addEventListener("click", () => {
  if ((passwordInput.type === "text")){
    passwordInput.type = "password";
  }else{
    passwordInput.type = "text";
  }
})
const confirmEye = document.getElementById("confirm-eye");
const confirmPasswordInput = document.getElementById("final-password")
confirmEye.addEventListener("click", () => {
  if ((confirmPasswordInput.type === "text")) {
    confirmPasswordInput.type = "password";
  } else {
    confirmPasswordInput.type = "text";
  }
})