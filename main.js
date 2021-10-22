
const section = document.getElementById("Books")

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