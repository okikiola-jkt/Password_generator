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

  const characterAmount = 12; 

  // Include special characters, numbers, and both lowercase and uppercase letters
  passInfo = passInfo.concat(specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters);

  // Generate password
  for (let i = 0; i < characterAmount; i++) {
    passChars += getRandom(passInfo);
  }

  return passChars;
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomCharsIndex = Math.floor(Math.random() * arr.length);
  const randomChar = arr[randomCharsIndex];
  return randomChar;
}

// Function to generate password with predefined criteria
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
