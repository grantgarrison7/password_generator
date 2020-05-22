var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  event.preventDefault();
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
}

function generatePassword() {
  var typesOfCharacters = {
    lowerCaseLetters: "abcdefghijklmnopqrstuvwxyz",
    upperCaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numericValues: "0123456789",
    specialCharacters: "!#$%&()*+,-./:;<=>?@[^_'{|}~",
  };

  var fromPrompt = prompt(
    "Choose a length of 8 to 128 characters for your password."
  );
  var lengthPassword = fromPrompt;
  console.log(lengthPassword);

  if (lengthPassword > 7 && lengthPassword < 129) {
    var lowerCase = confirm("Would you like to include lower case letters?");
    var upperCase = confirm("Would you like to include upper case letters?");
    var numeric = confirm("Would you like to include numeric characters?");
    var special = confirm("Would you like to include special characters?");

    if (lowerCase || upperCase || numeric || special) {
      var possibleCharacters = [];

      if (lowerCase) {
        possibleCharacters = possibleCharacters.concat(
          typesOfCharacters.lowerCaseLetters.split("")
        );
      }

      if (upperCase) {
        possibleCharacters = possibleCharacters.concat(
          typesOfCharacters.upperCaseLetters.split("")
        );
      }

      if (numeric) {
        possibleCharacters = possibleCharacters.concat(
          typesOfCharacters.numericValues.split("")
        );
      }

      if (special) {
        possibleCharacters = possibleCharacters.concat(
          typesOfCharacters.specialCharacters.split("")
        );
      }

      console.log(possibleCharacters);

      var password = "";

      for (var i = 0; i < lengthPassword; i++) {
        var position = Math.floor(Math.random() * possibleCharacters.length);
        password = password + possibleCharacters[position];
      }
    } else {
      alert("No character type has been selected. Please try again.");
    }
  } else {
    alert("The password length is out of bounds. Please try again.");
    return "";
  }

  return password;
}
