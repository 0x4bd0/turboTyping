const QUOTES_API = "https://api.quotable.io/random"
const textArea = document.getElementById('text')

const getQuote = () => {
  return  fetch(QUOTES_API)
          .then(res => res.json())
          .then(data => data.content)
}

const next = async() =>{
    textArea.innerText = await getQuote()
}


next()