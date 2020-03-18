// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {

  // Generate password - collect password requirements 

var charLength = prompt("How many characters would you like your password to be?");


if (charLength < 8 || charLength > 128){
  alert("Enter a character length between 8 and 128.");
}

else {
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeNumeric = confirm("Would you like to include numbers?");
  var includeSpecialChar = confirm("Would you like to include special characters?");

}

if (
  includeLowercase === false && 
  includeUppercase === false &&
  includeNumeric === false &&
  includeSpecialChar === false
) {
  alert("Must select all character types.");
}

if (
  includeLowercase === false && 
  includeUppercase === true &&
  includeNumeric === true &&
  includeSpecialChar === true
) {
  alert("Password criteria must include lowercase letter.");
}

if (
  includeLowercase === true && 
  includeUppercase === true &&
  includeNumeric === true &&
  includeSpecialChar === true
) {
  alert("Password criteria must include lowercase letter.");
}

if (
  includeLowercase === true && 
  includeUppercase === true &&
  includeNumeric === true &&
  includeSpecialChar === true
) {
  alert("Password criteria is accepted.");
}

//include if statements for all true/false combos of character types 



//THEN a password is generated that matches the selected criteria - one of each if selected 
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page



  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Password values 

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var specialChar = '!"#$%&)(+-.?:;<=>?@[/]^_`{|}~';






// // Form password
function generatePassword() {}

  

  








//BELOW IS FUNCTION STARTER FOR COPY PASSWORD BUTTON - BONUS 
// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
//     function copyPassword(){
//     /* Get the text field */
//     var copyText = document.getElementById("myInput");
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /*For mobile devices*/
//     /* Copy the text inside the text field */
//     document.execCommand("copy");
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);//