// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate random password function
function generatePassword() {

  // Prompt the user to enter a desired password length 
  var passwordLength = prompt("How many characters would you like your password to be?");

  // Password length must be 8-128 characters 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter a character length between 8 and 128.");
  }

  // Collect password criteria from user 
  else {
    var includeUppercase = confirm("Would you like to include uppercase letters?");
    var includeLowercase = confirm("Would you like to include lowercase letters?");
    var includeNumeric = confirm("Would you like to include numbers?");
    var includeSpecialChar = confirm("Would you like to include special characters?");

  }

  // Define possible characters to include in a password 
  var charTypes = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    special: "!$%^&*()-=+[]{};#:@~,./<>?",
  }

  var uppercaseOptions = charTypes.uppercase.split("");
  console.log(uppercaseOptions);
  console.log(uppercaseOptions[5]);

  var lowercaseOptions = charTypes.lowercase.split("");
  console.log(lowercaseOptions);

  var numberOptions = charTypes.numbers.split("");
  console.log(numberOptions);

  var specialOptions = charTypes.special.split("");
  console.log(specialOptions);

  // If no character types are selected, password cannot be generated 
  if (
    includeLowercase === false &&
    includeUppercase === false &&
    includeNumeric === false &&
    includeSpecialChar === false
  ) {
    alert("At least one character type must be selected to generate a password.");
  } else {

    // for loop for the length of the password length to choose the character types and add characters to a PW string value 
    var passwordArray=[];
    for (i = 0; i < passwordLength; i++) {

      if (
        includeUppercase === true
      ) {
        //Math random to get an array index position and then add character to password string 

        var a = uppercaseOptions[Math.floor(Math.random() * uppercaseOptions.length)];
        console.log(a);
        passwordArray.push(a);
      }

      if (
        includeLowercase === true
      ) {
        //Math random to get an array index position and then add character to password string 

        var b = lowercaseOptions[Math.floor(Math.random() * lowercaseOptions.length)];
        console.log(b);
        passwordArray.push(b);
      }

      if (
        includeNumeric === true
      ) {
        //Math random to get an array index position and then add character to password string 

        var c = numberOptions[Math.floor(Math.random() * numberOptions.length)];
        console.log(c);
        passwordArray.push(c);

      }

      if (
        includeSpecialChar === true
      ) {
        //Math random to get an array index position and then add character to password string 

        var d = specialOptions[Math.floor(Math.random() * specialOptions.length)];
        console.log(d);
        passwordArray.push(d);

      }

      
    } 
  } console.log(passwordArray.join(""));
  return passwordArray.join(""); 
}


  


// // for loop to choose characters 
// for (let i = 0; i < charTypes.length; i++) {
//   var a = Math.floor(Math.random()*charTypes.length);
//   console.log(charTypes.length);
// }

// Choose uppercase characters 

// function getUppercaseChar()
// {
//   for (i = 0; index < uppercaseOptions.length; i++) {
//     var a = uppercaseOptions[Math.floor(Math.random()*uppercaseOptions.length)];
//     console.log(a);
//     password += uppercaseOptions.charAt(a);

//   }
//   return uppercaseOptions[a]; 
// }

// // Choose lowercase characters

// // Choose numeric characters

// // Choose special characters 

// }

// if (
//   includeUppercase === true
// ) {
//   function getUppercaseChar()
// }


// // Choose lowercase characters
// if (
//   includeLowercase === true
// ) {
//   function getLowercaseChar(){
//     return String.lowercaseOptions(Math.floor(Math.random() * lowercaseOptions.length));
//   }
// }

// // Choose number characters 
// if (
//   includeNumeric === true
// ) {
//   function getNumericChar(){
//     return String.numberOptions(Math.floor(Math.random() * numberOptions.length));
//   }
// }

// // Choose special characters 
// if (
//   includeSpecialChar === true
// ) {
//   function getSpecialChar(){
//     return String.specialOptions(Math.floor(Math.random() * specialOptions.length));
//   }
// }

// for loop to choose password characters
// for (var i = 0; i < passwordLength; i++){
//    console.log(password + charTypes.charAt(Math.floor(Math.random()* Math.floor(charTypes - 1))));