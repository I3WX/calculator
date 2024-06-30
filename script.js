// Display elements
const displayNum1 = document.getElementById("displaynum"); // First operand display
const displayNum2 = document.getElementById("displayNum"); // Second operand display
const displayOperater = document.getElementById("displayOperater"); // Operator display

// Calculator buttons
const operationButton = document.querySelectorAll(".operationButton"); // All operation buttons

const Calculater = document.getElementById("box"); // Calculator container

// Number buttons
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

// Operation buttons
const operationButtonPlus = document.getElementById("operationButtonPlus");
const operationButtonMinus = document.getElementById("operationButtonMinus");
const operationButtonMultiply = document.getElementById("operationButtonMultiply");
const operationButtonDivide = document.getElementById("operationButtonDivide");
const operationButtonEquals = document.getElementById("operationButtonEquals");
const backspace = document.getElementById("backspace");


    function shownum(num){
        const data = displayNum2.innerHTML;
        if(data.length < 10)
            displayNum2.innerHTML = data + num;
    }
    function showOpt(opt){
        displayOperater.innerHTML = " "
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
        const data = displayNum2.innerHTML;
        if (!data.includes('.')) {
            displayNum2.innerHTML = data + '.';
        }
    });

    operationButtonPlus.addEventListener("click", function() {
        showOpt('+')
    });

    operationButtonMinus.addEventListener("click", function() {
        showOpt('-')
    });
    operationButtonMultiply.addEventListener("click", function() {
        showOpt('×')
    });
    operationButtonDivide.addEventListener("click", function() {
        showOpt('÷')
    });

    backspace.addEventListener("click",function(){
        num = displayNum2.innerHTML
        num = num.slice(0,num.length-1)
        displayNum2.innerHTML = num
    })

    operationButton.forEach(button=>{
        button.addEventListener("click",function(){
            displayNum1.innerHTML = displayNum2.innerHTML
            displayNum2.innerHTML= " "
        })
    })



    operationButtonEquals.addEventListener("click",function(){
        num1 = displayNum1.innerHTML
        num2 = displayNum2.innerHTML
        opertater = displayOperater.innerHTML
        displayOperater.innerHTML = ""
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        displayNum1.innerHTML= " "
        displayNum2.innerHTML= " "
        if(opertater == "+")
            displayNum2.innerHTML = num1+num2
        else if(opertater == "-")
            displayNum2.innerHTML = num1-num2
        else if(opertater == "×")
            displayNum2.innerHTML = num1*num2
        else if(opertater == "÷")
            if(num2 !== 0)
                displayNum2.innerHTML = num1/num2
            else
                displayNum2.innerHTML = "Can't Divide With 0"
    })

    function getMousePosition(event) {
        const x = event.clientX;
        const y = event.clientY;
        return { x, y };
    }

    Calculater.addEventListener('mousemove', function(event) {
        const { x, y } = getMousePosition(event);
        const rect = Calculater.getBoundingClientRect();
        const midX = rect.left + rect.width / 2;
        const midY = rect.top + rect.height / 2;
    
        const distanceX = Math.abs(x - midX);
        const distanceY = Math.abs(y - midY);
    
        const maxDistance = Math.max(rect.width / 2, rect.height / 2);
        const strengthX = (distanceX / maxDistance) * 15; 
        const strengthY = (distanceY / maxDistance) * 15; 
    
        let shadowX = x < midX ? -strengthX : strengthX;
        let shadowY = y < midY ? -strengthY : strengthY;
    
        Calculater.style.boxShadow = `${shadowX}px ${shadowY}px 15px rgba(0, 0, 0, 0.5)`;
    });