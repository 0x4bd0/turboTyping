const QUOTES_API = "https://api.quotable.io/random"
const textArea = document.getElementById('text')
const typingArea = document.getElementById('textType')


typingArea.addEventListener('input',() => {
   const quoteObject =  textArea.querySelector('span')
   const typedObject = typingArea.value.split('')
})

const getQuote = () => {
  return  fetch(QUOTES_API)
          .then(res => res.json())
          .then(data => data.content)
}

const renderQuote = async() =>{
    let quote = await getQuote()
    textArea.innerHTML = ''
    quote.split('').forEach(item => {
     const mySpan = document.createElement('span')
     mySpan.classList = 'correct'
     mySpan.innerText = item
     textArea.appendChild(mySpan)
    });
    typingArea.innerText = null
}


renderQuote()