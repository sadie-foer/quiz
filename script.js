let scoreCount = 0;
let questionCount = 0;
let number = 15;
let running = true;

function writeTime(){
    if (number <= 0){
        clearInterval()
        document.body.style.background = '#ABEDC6';
        document.querySelector('.answers').innerHTML = ""
        document.querySelector('.score').innerHTML = ""
        document.querySelector(".timer").innerHTML = ""
        let speed = Math.round(questionCount/15*100)/100
        let accuracy = Math.round(scoreCount/questionCount)*100 + "%"
        let finalMessage1 = `You got ${scoreCount} questions correct.`
        let finalMessage2 = `Your answer speed is ${speed} questions per second and your accuracy is ${accuracy}`
        document.getElementsByClassName('main')[0].style.marginTop = "50px"
        document.querySelector(".question").innerHTML = finalMessage1
        document.querySelector(".answers").innerHTML = finalMessage2

    }else if (number === 15){
        document.querySelector(".question").innerHTML = ""
        document.querySelector(".score").innerHTML = "score:"
        writeEquation()
        document.querySelector('.timer').innerHTML = number
        console.log(number)
       number = number -1
    }else{
        document.querySelector('.timer').innerHTML = number
        console.log(number)
        number = number - 1
    }
}

function writeEquation(){
    let operation;
    let operationNum = Math.random() * 4;
    if (operationNum < 1){
        operation = "+";
    }else if(operationNum >=1 && operationNum < 2){
        operation = '-';
    }else if(operationNum >=2 && operationNum < 3){
        operation = '*';
    }else if(operationNum >=3 && operationNum < 4){
        operation = '/';
    }
    //if(operation === "") do difffernt size numbers for types of operations
    let number1 = operationNum = Math.floor(Math.random() * 9) +1;
    let number2 = operationNum = Math.floor(Math.random() * 9)+1;
    let equation =  `${number1} ${operation} ${number2} = `
    console.log(equation)

    document.querySelector('.question').innerHTML = equation

    let correctAnswerIndex = Math.floor(Math.random()*4)
    let correctAnswer = Math.round(eval(`${number1} ${operation} ${number2}`)*100)/100
    console.log(correctAnswerIndex)

    for(let i = 0; i < 4; i++){
        let answerDiv = document.createElement('div')
        answerDiv.classList.add('answer')
        if (i === correctAnswerIndex){
            answerDiv.innerHTML = correctAnswer 
        }else{
            if (operation === "+" || operation ==="-"){
                let randomAnswer =  Math.round(Math.random()*20)
                if (randomAnswer === correctAnswer){
                    randomAnswer = Math.round(Math.random()*20)
                }
                answerDiv.innerHTML = randomAnswer
            }else if (operation ==="*"){
                answerDiv.innerHTML = Math.round(Math.random()*100) 
            }else{
                answerDiv.innerHTML = Math.round(Math.random()*2000)/100
            }  
        }
        document.querySelector('.answers').appendChild(answerDiv)
        answerDiv.addEventListener('click', ()=>{
        if (i === correctAnswerIndex){
            document.body.style.background = 'green'
            scoreCount ++
            document.querySelector(".score").innerHTML = `score: ${scoreCount}`

        }else{
            document.body.style.background = 'red'
        }

        questionCount ++
        setTimeout(() => {
            document.body.style.background = '#ABEDC6';
            document.querySelector('.answers').innerHTML = ""
            writeEquation()
            //if (questionCount < 5){
            //    writeEquation()
            //}
        }, 100)
    })
    }

}

document.querySelector("#start").addEventListener('click', ()=>{setInterval(writeTime, 1000)})







