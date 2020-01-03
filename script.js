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


generate_button.addEventListener("click", function generateaAssets(event){
  event.preventDefault();

  // set criteria
  length = document.getElementById("length").value;
  // create new array of type assets based of checkbox selections
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
  if(pHolder.length>=8){ //if a password already exists (stored within the holder) reset type
    type = [];
    pHolder = "";
    generateaAssets(event); //Erik, got it working, I just needed to name my function and repass the event for my call

  }
  else if(type != "" && length != ""){ //if type and length specs captured apporpriatley 
     pHolder = generatePassword();
  }
})

function generateClick(){
   event.preventDefault();

  // set criteria
  length = document.getElementById("length").value;
  // create new array of type assets based of checkbox selections
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
  if(pHolder.length>=8){ //if a password already exists (stored within the holder) reset type
    type = [];
    pHolder = "";
    //recall this function

  }
  else if(type != "" && length != ""){ //if type and length specs captured apporpriatley 
     pHolder = generatePassword();
  }
}
function generatePassword(){
  var password ="";
  for(var i = 0; i<length; i++){
    password += type[Math.floor(Math.random()*type.length)];//concats password w/random index of type array until length requirment is met
  }
  document.getElementById("password").innerHTML = password;
  return password;
 }

copy_button.addEventListener("click", function(e){
  e.preventDefault();
  if(pHolder==""){ // Cannot use copy button unless there is a stored pwrd
    alert("You have yet to generate a password");
  }
  else if(pHolder.length >= 8){ //will only copy if pwrd is valid
    var text = document.getElementById("password"); //grab current text content of password
    text.select();
    document.execCommand("copy"); //copy selected text from document obj
    alert("Password Coppied");
  }
})
