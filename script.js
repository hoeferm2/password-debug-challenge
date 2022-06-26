
// TODO: We need to DEFINE generatePassword!!

var generateBtn = document.querySelector("#generate");
// the generateBtn Variable is the part of the document with the generate ID
// in this case that is the button that say "Generate password"
function generatePassword() {
  console.log("Hey you clicked it");
  // Clicking the button has worked. 
  // There is no value being generated.
  return "Fi-fi-fo-fum"
}

function writePassword() {
  // this is the function that writes our password
  var password = generatePassword();
  // this variable stores the vaule of generatePassword()
  // the parenthesis indicate function
  // generatePassword has been amde w/ a return element.
  // id of password displays in text area element. 
  var passwordText = document.querySelector("#password");
  passwordText.Value = password;
  //this line displays the password in the textarea element.
}

generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", writePassword);

