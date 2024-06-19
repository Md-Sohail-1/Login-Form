async function SignUpForm(){
     let user_id =await document.querySelector("#SignUp_name").value;
     let email_id =await document.querySelector("#SignUp_id").value;
     let password =await document.querySelector("#SignUp_password").value;
     //localStorage.clear();
     if(user_id!=""&& email_id!=""){
     localStorage.setItem("User_Id",user_id);
     localStorage.setItem("Email_Id",email_id);
     localStorage.setItem("Password",password);
     user_id= document.querySelector("#SignUp_name").innerHTML="";
     email_id= document.querySelector("#SignUp_id").innerHTML="";
     password= document.querySelector("#SignUp_password").innerHTML="";
     console.log("Your User Id = "+localStorage.getItem("User_Id")+"\r If I Am Correct")
     console.log("Your Email Id = "+localStorage.getItem("Email_Id")+"\r If I Am Correct")
     console.log("And Your Password = "+localStorage.getItem("Password")+"\r If I Am Correct")
     }
if(user_id!="" && user_id!="null"){
   alert("Your ID Succecfully Created With User ID = "+localStorage.getItem("User_Id"))
   }
}
if(localStorage.getItem("User_Id")!= "" || localStorage.getItem("User_Id")!=""){
  setTimeout(()=>{
  alert("Hello "+localStorage.getItem("User_Id")+" Now Login Your Account")
  },500)
}
let SignUp = document.querySelector(".SignUp_Btn")
SignUp.addEventListener("click",SignUpForm);
let form1 = document.querySelector("#form1");
let form2 = document.querySelector("#form2");
let forget_form = document.querySelector("#forget_form");
form1.addEventListener("submit",function(e){
    // document.querySelector("#name").innerHTML ="4";
    // document.querySelector("#id").innerhtml="";
    // document.querySelector("#password").innerHTML="";
   //e.preventDefault();
   alert(`Congratulations, Your Account Has Been Created With UserName = ${localStorage.getItem("User_Id")} Now You Can Login Easily `)
})
form2.addEventListener("submit",function(e){
    // document.querySelector("#name").innerHTML ="4";
    // document.querySelector("#id").innerhtml="";
    // document.querySelector("#password").innerHTML="";
     e.preventDefault();
})
forget_form.addEventListener("submit",function(e){
    // document.querySelector("#name").innerHTML ="4";
    // document.querySelector("#id").innerhtml="";
    // document.querySelector("#password").innerHTML="";
     e.preventDefault();
})

let LoginIdError = document.getElementById("IdP1")
let LoginPasswordError = document.getElementById("IdP2")
function loginForm(){
  let loginId = document.querySelector(".id2").value;
  let loginPassword = document.querySelector(".password2").value;
  if(loginId == localStorage.getItem("User_Id") && loginPassword == localStorage.getItem("Password")){
   setTimeout(()=>{
    alert(`Hello ${localStorage.getItem("User_Id")} How Are You ? Fine Or Not`)
    },1000)
   setTimeout(()=>{
     location.href="https://md-sohail-1.github.io/Daily-New-Science-Facts-Using-Api/"
   },3000)
  }
  else if(loginId == localStorage.getItem("Email_Id") && loginPassword == localStorage.getItem("Password")){
   setTimeout(()=>{
    alert(`Hello ${localStorage.getItem("User_Id")} How Are You ? Fine Or Not`)
    },1000)
   setTimeout(()=>{
     location.href="https://md-sohail-1.github.io/Daily-New-Science-Facts-Using-Api/"
   },3000)
  }
  else if(loginPassword != localStorage.getItem("Password") && loginId == localStorage.getItem("User_Id")){
    LoginPasswordError.innerHTML = "incorrect Password";
    LoginIdError.innerHTML = "";
  }
  else if(loginPassword != localStorage.getItem("Password") && loginId == localStorage.getItem("Email_Id")){
    LoginPasswordError.innerHTML = "incorrect Password";
    LoginIdError.innerHTML = "";
  }
  else if(loginId!=localStorage.getItem("User_Id") && loginPassword == localStorage.getItem("Password")){
    LoginIdError.innerHTML = "Incorrect User ID!";
    LoginPasswordError.innerHTML = "";
  }
  else if(loginId!=localStorage.getItem("Email_Id") && loginPassword == localStorage.getItem("Password")){
    LoginIdError.innerHTML = "Incorect Email Id!";
    LoginPasswordError.innerHTML = "";
  }
  else{
    alert("Incorrect User Name And Password!")
  }
}
let loginBtn = document.querySelector(".Login-btn");
loginBtn.addEventListener("click",loginForm)

console.log(localStorage.length)
console.log("User Id  = "+localStorage.getItem("User_Id"))
console.log("Email Id = "+localStorage.getItem("Email_Id"))
console.log("Password = "+localStorage.getItem("Password"))


