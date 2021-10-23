
// Declaring Variables
const sleepBtn = document.getElementById('sleep')
const playBtn = document.getElementById('play')
const feedBtn = document.getElementById('feed')
const buttons = document.getElementsByClassName('button')

let hungerNum = document.getElementById('hunger')
let boredNum = document.getElementById('bordem')
let tiredNum = document.getElementById('tired')
let ageNum = document.getElementById('age')

const tamagachi = document.getElementById('tamagachi')
const bubbles = document.getElementsByClassName('bubbles')
const talkBubble = document.getElementById('luffySpeak')
const chopImg = document.getElementById('chopper')
const resetbtn = document.getElementsByClassName('startOver')
const numEls = document.getElementsByClassName('number')

let gameFinished = false

let colorPrompt = prompt("What color would you like your tamagachi?")

for (bubble of bubbles){
    bubble.style.backgroundColor = colorPrompt
}

const chopperUrl = {
    hungry: '/assets/maxresdefault.png',
    bored: '/assets/anime-doctor-one-piece-pirates-wallpaper-thumb.png',
    sleep: '/assets/d5e14q8-2421a2c9-76a7-48b7-84a1-cabc5b8c8840 (1).png',
    up: '/assets/5-tony-tony-chopper-sreeraj-kaniyamparambil-transparent.png',
    eat: '/assets/27704659aae4b05f53c86950de2c8fb5.png',
    fun: '/assets/9039f5ca23b28b74c45bf712848ee3e0.png',
    start: '/assets/Chopper_post_timeskip.png',
    end: '/assets/One-Piece-Chopper-Rumble-ball-header.png'
}

const luffyWords = [
    'Good way to wake him up!',
    "Keep going! that way he won't be bored.",
    "I wish i could eat that food...",
    "He knocked out!!",
    "How bored did he get?!",
    "How did you forget to feed him?!",
    "Wow!, he got old!",
    "A new tamagachi!"

]

// removes the attributes for the chopper img and adds new attribute
function removeAtt(src, id){
    chopImg.removeAttribute('src')
    chopImg.removeAttribute('id')
    chopImg.setAttribute('id', id)
    chopImg.setAttribute('src', src)
}



function press (button, element, src, id, word){
    button.addEventListener('click', ()=>{
        if(element.innerText > 0 && gameFinished === false){
            removeAtt(src, id)
            talkBubble.innerText = word
            element.innerText = element.innerText - 1  
        }    
    })
}





// function buttonPress(element, button, src, id, word){
//     // Use the try and catch to catch the error for the null property for age
//     try{
//         button.addEventListener('click', () =>{
//             if(element.innerText > 0 && gameFinished === false){
//                 removeAtt(src, id)
//                 talkBubble.innerText = word

//                 element.innerText = element.innerText - 1  
//             }          
//         })
//     }
//     catch(TypeError){
//         null
//     }  
// }


// for base, 1000 = 1sec interval

function interval(element, button, baseNum, src, id, word){
    // model - bindings: variables, DOM references, other values related to application state 
    element.innerText = 0
    let interval;
    let base = baseNum
    talkBubble.innerText = luffyWords[7]
    removeAtt(chopperUrl['start'], 'chopper')

    //controller - application logic (event listeners )
    function increment(){
        return element.innerText ++
    }    

    interval = setInterval(()=>{       
        
        // adds current element by 1 on each intervall    
        increment()
        

        if(gameFinished === true){
            clearInterval(interval)
        }
        else if(hungerNum.innerText >= 10 && gameFinished === false){
            clearInterval(interval)
            removeAtt(chopperUrl['hungry'], 'chopD2')
            talkBubble.innerText = luffyWords[5]
            gameFinished = true
        }
        else if(tiredNum.innerText >= 10 && gameFinished === false){
            clearInterval(interval)
            removeAtt(chopperUrl['sleep'], 'chopD3')
            talkBubble.innerText = luffyWords[3]
            gameFinished = true
        }
        else if(boredNum.innerText >= 10 && gameFinished === false){
            clearInterval(interval)
            removeAtt(chopperUrl['bored'], 'chopD')
            talkBubble.innerText = luffyWords[4]
            gameFinished = true
        }
        else if(ageNum.innerText >= 100 && gameFinished === false){
            clearInterval(interval)
            removeAtt(chopperUrl['end'], 'chopE')
            talkBubble.innerText = luffyWords[6]
            gameFinished = true
        }

        
       
    
    } , base)


    
    // setInterval(function, number)
    // function - anonymous
    // number - interger (in milliseconds)
}



interval(ageNum, null, 1000, null, null)
interval(boredNum, playBtn, 1000, chopperUrl['fun'], "chop", luffyWords[1])
interval(hungerNum, feedBtn, 1000, chopperUrl['eat'], "chop2", luffyWords[2])
interval(tiredNum, sleepBtn, 1000, chopperUrl['up'], "chop3", luffyWords[0])



function reset(){
    for(let num of numEls){
        if(gameFinished === true){
            num.innerText = 0
        }
    }
    gameFinished = false
    interval(ageNum, null, 1000, null, null)
    interval(boredNum, playBtn, 1000, chopperUrl['fun'], "chop", luffyWords[1])
    interval(hungerNum, feedBtn, 1000, chopperUrl['eat'], "chop2", luffyWords[2])
    interval(tiredNum, sleepBtn, 1000, chopperUrl['up'], "chop3", luffyWords[0])
}


for(let rst of resetbtn){
    rst.addEventListener('click', ()=>{
        reset()
    })
}