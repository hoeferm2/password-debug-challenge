
// TODO: We need to DEFINE generatePassword!!
// Character choices
var lowercase = "abcdefghijklmnopqurstuwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "@#$%^&*";
var numbers = "1234567890"
// password length variable 
var passwordLength = 0




var generateBtn = document.querySelector("#generate");
// the generateBtn Variable is the part of the document with the generate ID
// in this case that is the button that say "Generate password"







function generatePassword() {

  console.log("Hey you clicked it");
  // Clicking the button has worked. 
  // There is no value being generated.


  var lengthChoice = parseInt(window.prompt("How long is you password? It must be 8-128 characters long"));
  console.log(lengthChoice);
  /* if isNan(lengthChoice) {
    return "Not a number";
    alert("Sorry, it has to be a number");
  }
*/
  if (lengthChoice < 8 ||
    lengthChoice > 128) {
    alert("Sorry, it has to be between 8-128 characters");
    generatePassword();
  } else {
    passwordLength = lengthChoice;
    console.log(passwordLength);
  }

  var specialChoice = confirm("Would you like any special characters?");
  if (specialChoice) {
    console.log("SpecialYES")
    specialChoice = specialCharacters;
  } else {
    console.log("SpecialNO");
    specialChoice = ""
  }

  var lowerChoice = confirm("Lowercase?");
  if (lowerChoice) {
    console.log("lowerYES")
    lowerChoice = lowercase
  } else {
    console.log("lowerNO")
    lowerChoice = ""
  }

  var upperChoice = confirm("Uppercase?");
  if (upperChoice) {
    console.log("UpperYES")
    upperChoice = uppercase
  } else {
    console.log("UpperNO")
    upperChoice = ""
  }

  var numberChoice = confirm("Numbers?");
  if (numberChoice) {
    console.log("NumberYES")
    numberChoice = numbers
  } else {
    console.log("NumberNO")
    numberChoice = ""
  }
  var finalChoice = numberChoice + lowerChoice + upperChoice + specialChoice;
  console.log(finalChoice);


  var passwordResult = ''

  for (var i = 0; i < passwordLength; i++) {
    passwordResult += finalChoice.charAt(Math.floor(Math.random() * finalChoice.length));
  }

  return passwordResult
}





function writePassword() {
  // this is the function that writes our password
  var password = generatePassword();
  // this variable stores the vaule of generatePassword()
  // the parenthesis indicate function
  // generatePassword has been amde w/ a return element.
  // id of password displays in text area element. 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //this line displays the password in the textarea element.
}

generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", writePassword);

