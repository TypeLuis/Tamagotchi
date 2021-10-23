
// const innerBody = document.getElementsByTagName('body')[0].innerHTML
// console.log(innerBody)

const sleepBtn = document.getElementById('sleep')
const playBtn = document.getElementById('play')
const feedBtn = document.getElementById('feed')


let hungerNum = document.getElementById('hunger')
let boredNum = document.getElementById('bordem')
let tiredNum = document.getElementById('tired')
let ageNum = document.getElementById('age')
const tamagachi = document.getElementById('tamagachi')
const bubbles = document.getElementsByClassName('bubbles')
let gameLost = false

let colorPrompt = prompt("What color would you like your tamagachi?")

for (bubble of bubbles){
    bubble.style.backgroundColor = colorPrompt
}




const numEls = document.getElementsByClassName('number')










function interval(element, button, baseNum){
    // model - bindings: variables, DOM references, other values related to application state 
    let interval;
    let count = 1
    let base = baseNum



    //view - applications where the UI is updated / provided current data
    


    //controller - application logic (event listeners )
    function increment(){
        return element.innerText ++
    }

    
    function buttonPress(){
        button.addEventListener('click', () =>{
            if(element.innerText > 0 && gameLost === false){
                return element.innerText --  
            }          
        })
    
    }
    
    buttonPress()
    

    interval = setInterval(()=>{
        
        // console.log(element)
        // display content
        // renderNum(count)
    
        // update         
        count = increment()



        if(hungerNum.innerText >= 10){
            clearInterval(interval)
            gameLost = true
        }
        else if(tiredNum.innerText >= 10){
            clearInterval(interval)
            gameLost = true
        }
        else if(boredNum.innerText >= 10){
            clearInterval(interval)
            gameLost = true
        }
    
    } , base)


    
    // setInterval(function, number)
    // function - anonymous
    // number - interger (in milliseconds)
}

interval(boredNum, playBtn, 500)
interval(hungerNum, feedBtn, 750)
interval(tiredNum, sleepBtn, 500)