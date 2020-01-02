// Grab functional buttons
var generate_button = document.getElementById("generate");
var copy_button = document.getElementById("copy");

// Create pw type arrays
var digits = ["1","2","3","4","5","6","7","8","9","0"];
var specKeys = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "'", "{","}", "[", "]", "/", "|", "<", ">", "+", "=", "_", "-", "~", "`", ".", ",", " "];
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// declare criteria
  var length="";
  var type ="";
  var upper = null;


generate_button.addEventListener("click", function(event){
  event.preventDefault();

  // set criteria
  length = document.getElementById("length").value;
  if(document.getElementById("numeric").checked){
    type += digits.slice(0, digits.length);
  }
  if(document.getElementById("special").checked){
    type += specKeys.slice(0, specKeys.length);
  }
  if(document.getElementById("upper_alpha").checked){
    type += alpha.slice(0, alpha.length);
    upper = true;
  }
  if(document.getElementById("lower_alpha").checked){
    type += alpha.slice(0, alpha.length);
    upper = false;
  }

  // check criteria
  if(type==""){ //if length and type are not captured: alert
    alert("All form fields are required; double check type specifications");
  }
  if(length<8 || length>128){//if length does not meet requirments: alert
    alert("Password length should be betweek 8 and 128; double check length specifications");
  }
  else if(type != "" && length != ""){ //if type and length specs captured apporpriatley 
    generatePassword();
  }
})


function generatePassword(){
  var password ="";
  for(var i = 0; i<length; i++){
    password += type[Math.floor(Math.random()*type.length)];
    if(upper == true){
      password.toUpperCase;
    }
  }
  document.getElementById("password").innerHTML = password;
 }
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER
