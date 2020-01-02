const QUOTES_API = "https://api.quotable.io/random"
const textArea = document.getElementById('text')
const typingArea = document.getElementById('textType')


typingArea.addEventListener('input',() => {
   const quoteObject =  textArea.querySelectorAll('span')
   const typedObject = typingArea.value.split('')
   quoteObject.forEach((item,i)=>{
    if (typedObject[i] === item.innerText) {
            item.classList.add('correct')
            item.classList.remove('incorrect')
        } else {
            item.classList.add('incorrect')
            item.classList.add('correct')
        } 
   })
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
     mySpan.innerText = item
     textArea.appendChild(mySpan)
    });
    typingArea.innerText = null
}


renderQuote()