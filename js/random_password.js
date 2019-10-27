var keyList = "abcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()";
var tmp = '';
function generatePassword(passwordLength) {
    tmp = '';
    for(var index = 0; index < passwordLength; index++){
        tmp += keyList.charAt(Math.random()*keyList.length);
    }
    return tmp;
}

function populateForm(enterLength) {
    document.passGen.output.value = generatePassword(enterLength);
}

