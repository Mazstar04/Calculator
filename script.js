// console.log("hey");
let firstNo = 0;
let secondNo = 0;
let operator = null;

const typeNormalChar = () => {
    const normalBtns = document.querySelectorAll(".normal-char");
    const calcMainScreen = document.querySelector(".calc-screen-max");
    normalBtns.forEach(b => b.addEventListener("click", () => {
        if (calcMainScreen.textContent == 0) {
            calcMainScreen.textContent = b.id;
        } else {
            calcMainScreen.textContent += b.id;
        }

    }))
}

const typeOperator = () => {
    const operatorBtn = document.querySelectorAll(".special-char");
    const calcMiniScreen = document.querySelector(".calc-screen-mini");
    const calcMainScreen = document.querySelector(".calc-screen-max");

    operatorBtn.forEach(o => o.addEventListener("click", () => {
        if (operator == null) {

            firstNo = calcMainScreen.textContent;
        }
        operator = o.id;
        calcMiniScreen.textContent = `${firstNo}  ${operator}  `;
        calcMainScreen.textContent = 0;
    }));
}

const operation = (a, b) => {
    return {
        "+": a + b,
        "-": a - b,
        "*": a * b,
        "/": a / b,
    }
}

const calculate = () => {
    const submitBtn = document.querySelector(".submit-btn");
    const calcMiniScreen = document.querySelector(".calc-screen-mini");
    const calcMainScreen = document.querySelector(".calc-screen-max");
    submitBtn.addEventListener("click", () => {
        secondNo = calcMainScreen.textContent;
        calcMiniScreen.textContent = "";
        operator != null ? calcMainScreen.textContent = operation(parseInt(firstNo), parseInt(secondNo))[operator]
            : "";
        operator = null;
    });
}

const clearMainScreen = () => {
    const clearMainBtn = document.querySelector("#ce");
    const calcMainScreen = document.querySelector(".calc-screen-max");
    clearMainBtn.addEventListener('click', () => {
        calcMainScreen.textContent = 0;
    });
}

const clearAllScreen = () => {
    const clearAllBtn = document.querySelector("#c");
    const calcMiniScreen = document.querySelector(".calc-screen-mini");
    const calcMainScreen = document.querySelector(".calc-screen-max");
    clearAllBtn.addEventListener('click', () => {
        calcMainScreen.textContent = 0;
        calcMiniScreen.textContent = "";
        firstNo = 0;
        secondNo = 0;
        operator = null;
    });
}

const clearBackwards = () => {
    const clearBackwardsBtn = document.querySelector("#x");
    const calcMainScreen = document.querySelector(".calc-screen-max");
    clearBackwardsBtn.addEventListener('click', () => {
        if (calcMainScreen.textContent.length > 1) {
            calcMainScreen.textContent = calcMainScreen.textContent.substring(0, calcMainScreen.textContent.length - 1);
        }
        else{
            calcMainScreen.textContent = 0;
        }
    });
}

const generateRandomColor = () => {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

const changeTheme = () => {
    const themeBtn = document.querySelector(".theme-btn");
    let container = document.querySelector(".container");
    themeBtn.addEventListener('click', ()=>{
        container.style.backgroundColor = generateRandomColor();
    })
}

typeNormalChar();
typeOperator();
calculate();
clearMainScreen();
clearAllScreen();
clearBackwards();
changeTheme()