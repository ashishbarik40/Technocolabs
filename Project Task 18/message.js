import { capitalizeFirstCharacterOfWords, countCharacter, encode, palindrome, pigLatin, replaceFirstOccurence, reverseAllWords, reverseWord } from "./messageMixer";

function displayMessage() {
    console.log(countCharacter("What is the color of the sky?", "t"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(reverseWord("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));
    console.log(palindrome("What is the color of the sky?"));
    console.log(pigLatin("What is the color of the sky?",'$'));
  }
  
  
  displayMessage();