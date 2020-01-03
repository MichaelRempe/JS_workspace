// Grab functional buttons
var generate_button = document.getElementById("generate");
var copy_button = document.getElementById("copy");

// Create pw type arrays
var digits = ["1","2","3","4","5","6","7","8","9","0"];
var specKeys = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "'", "{","}", "[", "]", "/", "|", "<", ">", "+", "=", "_", "-", "~", "`", ".", ",", " "];
var lower_alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper_alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// declare criteria
  var length="";
  var type =[];

  var pHolder =""; //password holder 


generate_button.addEventListener("click", function(event){
  event.preventDefault();

  // set criteria
  length = document.getElementById("length").value;
  if(document.getElementById("numeric").checked){
    type = type.concat(digits);
  }
  if(document.getElementById("special").checked){
    type = type.concat(specKeys);
  }
  if(document.getElementById("upper_alpha").checked){
    type = type.concat(upper_alpha);
  }
  if(document.getElementById("lower_alpha").checked){
    type = type.concat(lower_alpha);
  }

  // check criteria
  if(type==""){ //if length and type are not captured: alert
    alert("All form fields are required; double check type specifications");
  }
  if(length<8 || length>128){//if length does not meet requirments: alert
    alert("Password length should be betweek 8 and 128; double check length specifications");
  }
  else if(type != "" && length != ""){ //if type and length specs captured apporpriatley 
     pHolder = generatePassword();
  }
})


function generatePassword(){
  console.log(type);
  var password ="";
  for(var i = 0; i<length; i++){
    password += type[Math.floor(Math.random()*type.length)];
  }
  document.getElementById("password").innerHTML = password;
  return password;
 }

copy_button.addEventListener("click", function(){
  if(pHolder==""){
    alert("You have yet to generate a password");
  }
  else if(pHolder.length >= 8){
    var text = document.getElementById("password");
    text.select();
    document.execCommand("copy");
    alert("Password Coppied");
  }
})
