import React, {useState, useEffect} from 'react'

export default function Message() {

  const [message, setMessage] = useState(null)
  const [click, setClick] = useState(false)

  useEffect(() => {
    getMessageData()
  }, [])

  useEffect(() => setClick())

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      'X-RapidAPI-Key': '7dc5c7d94amsh5950acede55f00ap1606fbjsncf5bef6f77af'
    }
  };

  function getMessageData(){
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(data => setMessage(data))
    // .then(data => console.log(`This is data: ${data}`))
    .catch(err => console.error(err))
  };


  // console.log(`This is message: ${message}`)
  function buttonClicked() {
    console.log(`clicked`)
    return click
  }

  if(!message){
    <h2>Loading a quote for you!</h2>
    }else{
      return (
        <div>
          <h2>Quote of the day:</h2>
            {message.content}
            {message.name}
            <a target="_blank" href="https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=https://freesourcelibrary.netlify.app/home/&inline=Download&document_size=Letter&orientation=portrait" download><button onClick={buttonClicked}>Get an extra quote!</button></a>
        </div>
      )
  }
}
