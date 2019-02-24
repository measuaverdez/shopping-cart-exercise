//Palindrome
function Palindrome(word){
    this.word = word
    var wordLower = word.toLowerCase()
    var wordNoSpaces = wordLower.replace(/\s+/g, "")
    var reversed = word.split("").reverse().join("")
    var lowerCaseWord = reversed.toLowerCase() 
    var removeSpaces = lowerCaseWord.replace(/\s+/g, "")
    
    if (wordNoSpaces === removeSpaces){
        console.log(word+ " is a palindrome")
    }else{
        console.log(word+ " is not a palindrome")
    }
}
Palindrome("wow")
Palindrome("Wow")
Palindrome("A but tuba")
Palindrome("A slut nixes sex in Tulsa")
Palindrome("listen")
Palindrome("elaine")
Palindrome("jan")
Palindrome("rhea")

