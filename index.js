const QUOTES_API = "https://api.quotable.io/random"

const getQuote = async() => {
  return await fetch(QUOTES_API)
}

const next = async() =>{
   let x = await getQuote();
   console.log(x)
}


next()