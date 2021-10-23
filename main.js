
// const innerBody = document.getElementsByTagName('body')[0].innerHTML
// console.log(innerBody)

const sleepBtn = document.getElementById('sleep')
const playBtn = document.getElementById('play')
const feedBtn = document.getElementById('feed')


let hungerNum = document.getElementById('hunger')
let boredNum = document.getElementById('bordem')
let tiredNum = document.getElementById('tired')
let ageNum = document.getElementById('age')



tiredNum.innerText = 1
console.log(tiredNum.innerText)
console.log(tiredNum.innerText === 0)









function groupEls(){
    const div = document.createElement('div')
    div.setAttribute('class', 'container')

}






class buttons{
    constructor(num ,count, element, base, src1, src2){
        this.count = count
        this.element = element
        this.base = base
        this.src1 = src1
        this.src2 = src2
    }


    
    decreaseNum(){
        this.element.innerText --
    }  




}







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
            return element.innerText --
        })
    
    }
    buttonPress()


    interval = setInterval(()=>{
        
        // console.log(element)
        // display content
        // renderNum(count)
    
        // update         
        count = increment()

        
        
        if(element.innerText >= 10){
            // game over state
            clearInterval(interval)
        }
    
    }, base)
    // setInterval(function, number)
    // function - anonymous
    // number - interger (in milliseconds)
}

interval(boredNum, playBtn, 500)