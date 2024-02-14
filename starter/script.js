// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() {
  let passInfo = [];
  let passChars = '';

  const characterAmount = parseInt(prompt("Enter the amount of characters you want for your password. NOTE: Must be between 8-128 characters"));

  if (characterAmount >= 8 && characterAmount < 129) {
    if (confirm("Would you like to include NUMBERS?")) {
      passInfo = passInfo.concat(numericCharacters);
      passChars += getRandom(numericCharacters);
    }

    if (confirm("Would you like to include SPECIAL characters?")) {
      passInfo = passInfo.concat(specialCharacters);
      passChars += getRandom(specialCharacters);
    }

    if (confirm("Would you like to include LOWERCASE characters?")){
      passInfo = passInfo.concat(lowerCasedCharacters)
      passChars += getRandom(lowerCasedCharacters);
    }

    if (confirm("Would you like to include UPPERCASE characters?")){
      passInfo = passInfo.concat(upperCasedCharacters)
      passChars += getRandom(upperCasedCharacters);
    }


    if (!passInfo.length) {
      alert("You need to select at least one option, please try again!");
      return;
    }

    for (let i = passChars.length; i < characterAmount; i++) {
      passChars += getRandom(passInfo);
    }

    return passChars;
  } else {
    alert("You need to provide a valid length!");
    return;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomCharsIndex = Math.floor(Math.random() * arr.length);
  const randomChar = arr[randomCharsIndex];
  return randomChar;
}

// Function to generate password with user input
function generatePassword() {
  return getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password || "";
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);