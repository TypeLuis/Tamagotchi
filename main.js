
const innerBody = document.getElementsByTagName('body')[0].innerHTML
console.log(innerBody)

const sleepBtn = document.getElementById('sleep')
const playBtn = document.getElementById('play')
const feedBtn = document.getElementById('feed')


function bttnPress(bttn){
    bttn.addEventListener('click', () =>{
        if(bttn === sleepBtn){
            console.log('sleep')
        }
        else if (bttn === playBtn){
            console.log('play')
        }
        else if(bttn === feedBtn){
            console.log('feed')
        }
        else{null}
    })

}

bttnPress(playBtn)
bttnPress(sleepBtn)
bttnPress(feedBtn)






function groupEls(){
    const div = document.createElement('div')
    div.setAttribute('class', 'container')

}













function interval(){
    // model - bindings: variables, DOM references, other values related to application state 
    let interval;
    let count = 1
    let base = 1000

    const head = document.getElementById('count')


    //view - applications where the UI is updated / provided current data
    function renderNum(num){
    head.innerText = num
    }


    //controller - application logic (event listeners )
    function increment(value, step){
        return value+=step
    }




    interval = setInterval(()=>{
    
        // display content
        renderNum(count)
    
        // update         
        count = increment(count, 1)
    
        if(count > 10){
            // game over state
            clearInterval(interval)
        }
    
    }, base)
    // setInterval(function, number)
    // function - anonymous
    // number - interger (in milliseconds)
}

interval()