const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultOutput = document.getElementById('result');

let isPalindrome = false;

function checkString(checkedString) {
    let j = checkedString.length - 1;
    for (let i = 0; i < checkedString.length / 2; i++) {
        if (checkedString[i] !== checkedString[j]) {
            isPalindrome = false;
            return false;
        }
        j--;
    }
    return true;
}

function checkPalindrome(){

    let isPalindrome = false;
    
    //saved for the output text
    const savedInput = inputText.value;

    if (inputText.value === "") {
        alert("Please input a value");
        return;
    }

    //g-global, i-both lower and upper case, ^-not
    let checkedString = inputText.value.replace(/[^a-z0-9]/gi,'').toLowerCase();

    //loop to check a palindrome
    isPalindrome = checkString(checkedString);

    let outputString = `<b>${savedInput}</b>`;
    outputString += `${(isPalindrome) ? ' is' : ' is not'}`;
    outputString +=' a palindrome.'

    resultOutput.classList.remove('hidden');
    resultOutput.innerHTML = outputString;
}
checkButton.addEventListener('click',() => {
    checkPalindrome();
    inputText.value = '';
});

inputText.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkPalindrome();
      inputText.value = '';
    }
  });