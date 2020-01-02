const QUOTES_API = "https://api.quotable.io/random"
const textArea = document.getElementById('text')
const typingArea = document.getElementById('textType')
const timerElement = document.getElementById('time')
const startBot = document.getElementById('start')
let scoreElement = document.getElementById('score')
let topScoreElement = document.getElementById('topScore')
let interval
let endTime
let seconds
let score = 0
let topScore = 0

var _0x2765=['oncopy','return\x20false','onpaste'];(function(_0x3c5f73,_0x59d2b4){var _0x12c30a=function(_0x181fb8){while(--_0x181fb8){_0x3c5f73['push'](_0x3c5f73['shift']());}};_0x12c30a(++_0x59d2b4);}(_0x2765,0x1aa));var _0x3a81=function(_0x3c5f73,_0x59d2b4){_0x3c5f73=_0x3c5f73-0x0;var _0x12c30a=_0x2765[_0x3c5f73];return _0x12c30a;};document[_0x3a81('0x0')]=new Function(_0x3a81('0x1'));document[_0x3a81('0x2')]=new Function('return\x20false');

startBot.addEventListener('click',() => { 
     renderQuote()
     startBot.parentNode.removeChild(startBot)
     typingArea.focus()
    })

typingArea.addEventListener('input',() => {
   const quoteObject =  textArea.querySelectorAll('span')
   const typedObject = typingArea.value.split('')
   let correct = true
   quoteObject.forEach((item,i)=>{
       if(typedObject[i] == null) {
            item.classList.remove('correct')
            item.classList.remove('incorrect')
            correct = false;
            score = 0
            scoreElement.innerText = 0
       }
        else if (typedObject[i] === item.innerText) {
            item.classList.add('correct')
            item.classList.remove('incorrect')
        } else {
            item.classList.add('incorrect')
            item.classList.remove('correct')
            correct = false
            score = 0
            scoreElement.innerText  = 0
        } 
   })
   if (correct) {
        score++
        scoreElement.innerText = score
        if(topScore<score){topScoreElement.innerText=scoreElement.innerText}
        clearInterval(interval)
        renderQuote()
    }
})

const getQuote = () => {
  return  fetch(QUOTES_API)
          .then(res => res.json())
          .then(data => data.content)
}

const renderQuote = async() =>{
    let quote = await getQuote()
    textArea.innerHTML = ''
    typingArea.value = null
    quote.split('').forEach(item => {
     const mySpan = document.createElement('span')
     mySpan.innerText = item
     textArea.appendChild(mySpan)
    });
    timer((textArea.querySelectorAll('span').length/5))
}


const timerCounter = () => {
    timerElement.innerText = updateTimer()
    if(endTime <= new Date()){
        clearInterval(interval)
        score = 0
        scoreElement.innerText  = 0
        renderQuote()
    }
}

const timer = (secs) => {
    seconds = Math.floor(secs)
    timerElement.innerText = 0
    endTime = new Date()
    endTime.setSeconds( endTime.getSeconds() + secs )
    interval = setInterval(timerCounter,1000)
}

const updateTimer = () => {
 return seconds--
}