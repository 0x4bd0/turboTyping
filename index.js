const QUOTES_API = "https://api.quotable.io/random"
const textArea = document.getElementById('text')
const typingArea = document.getElementById('textType')
const timer = document.getElementById('time')


typingArea.addEventListener('input',() => {
   const quoteObject =  textArea.querySelectorAll('span')
   const typedObject = typingArea.value.split('')
   let correct = true
   quoteObject.forEach((item,i)=>{
       if(typedObject[i] == null) {
            item.classList.remove('correct')
            item.classList.remove('incorrect')
            correct = false
       }
        else if (typedObject[i] === item.innerText) {
            item.classList.add('correct')
            item.classList.remove('incorrect')
        } else {
            item.classList.add('incorrect')
            item.classList.remove('correct')
            correct = false
        } 
   })
   if (correct) renderQuote()
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
}

let startTime

const timer = () => {
    timer.innerText = 0
    startTime = new Date()
    setInterval(()=>{
     updateTimer()
    },1000)
}

const updateTimer = () => {

}

renderQuote()