const displayNum = document.getElementById("displaynum");
const displayOperater = document.getElementById("displayOperater");

const numButton1 = document.getElementById("numButton1");
const numButton2 = document.getElementById("numButton2");
const numButton3 = document.getElementById("numButton3");
const numButton4 = document.getElementById("numButton4");
const numButton5 = document.getElementById("numButton5");
const numButton6 = document.getElementById("numButton6");
const numButton7 = document.getElementById("numButton7");
const numButton8 = document.getElementById("numButton8");
const numButton9 = document.getElementById("numButton9");
const numButton0 = document.getElementById("numButton0");
const numButtonDecimal = document.getElementById("numButtonDecimal");

const operationButtonPlus = document.getElementById("operationButtonPlus");
const operationButtonMinus = document.getElementById("operationButtonMinus");
const operationButtonMultiply = document.getElementById("operationButtonMultiply");
const operationButtonDivide = document.getElementById("operationButtonDivide");
const operationButtonEquals = document.getElementById("operationButtonEquals");


function shownum(num){
    const data = displayNum.innerHTML;
    if(data.length < 10)
        displayNum.innerHTML = data + num;
}
function showOpt(opt){
    displayOperater.innerHTML = opt
}

numButton1.addEventListener("click", function() {
    shownum('1')
});

numButton2.addEventListener("click", function() {
    shownum('2')
});

numButton3.addEventListener("click", function() {
    shownum('3')
});

numButton4.addEventListener("click", function() {
    shownum('4')
});

numButton5.addEventListener("click", function() {
    shownum('5')
});

numButton6.addEventListener("click", function() {
    shownum('6')
});

numButton7.addEventListener("click", function() {
    shownum('7')
});

numButton8.addEventListener("click", function() {
    shownum('8')
});

numButton9.addEventListener("click", function() {
    shownum('9')
});

numButton0.addEventListener("click", function() {
    shownum('0')
});

numButtonDecimal.addEventListener("click", function() {
    const data = displayNum.innerHTML;
    if (!data.includes('.')) {
        displayNum.innerHTML = data + '.';
    }
});

operationButtonPlus.addEventListener("click", function() {
    shownum('+')
});

operationButtonMinus.addEventListener("click", function() {
    shownum('-')
});
operationButtonMultiply.addEventListener("click", function() {
    shownum('x')
});
operationButtonDivide.addEventListener("click", function() {
    shownum('÷')
});