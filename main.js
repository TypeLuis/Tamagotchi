
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

// let colorPrompt = prompt("What color would you like your tamagachi?")

// for (bubble of bubbles){
//     bubble.style.backgroundColor = colorPrompt
// }

const chopperUrl = {
    hungry: '/assets/maxresdefault.png',
    bored: '/assets/anime-doctor-one-piece-pirates-wallpaper-thumb.png',
    sleep: '/assets/d5e14q8-2421a2c9-76a7-48b7-84a1-cabc5b8c8840 (1).png',
    up: '/assets/5-tony-tony-chopper-sreeraj-kaniyamparambil-transparent.png',
    eat: '/assets/27704659aae4b05f53c86950de2c8fb5.png',
    fun: '/assets/9039f5ca23b28b74c45bf712848ee3e0.png',
    start: '/assets/Chopper_post_timeskip.png'
}

const numEls = document.getElementsByClassName('number')





const chopImg = document.getElementById('chopper')




function interval(element, button, baseNum, src, id){
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
                chopImg.removeAttribute('src')
                chopImg.removeAttribute('id')
                chopImg.setAttribute('id', id)
                chopImg.setAttribute('src', src)
                console.log(src)
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

interval(boredNum, playBtn, 500, chopperUrl['fun'], "chop")
interval(hungerNum, feedBtn, 750, chopperUrl['eat'], "chop2")
interval(tiredNum, sleepBtn, 500, chopperUrl['up'], "chop3")