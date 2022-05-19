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
    .then(data => setMessage(data))
    .catch(err => console.error(err))
  };

  function buttonClicked() {
    console.log(`clicked`)
    return click
  }

  if(!message){
    <h2>Loading a quote for you!</h2>
    }else{
      return (
        <div className="quoteBlock" >
          <hr className="lineThick" />
          <h2 className="quoteTitle" >Quote of the day:</h2>
          <p className="quote" >{message.content}</p>
            <a className="quotePDF" target="_blank" href="https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=https://freesourcelibrary.netlify.app/home/&inline=Download&document_size=Letter&orientation=portrait" download><button onClick={buttonClicked}>Get an extra quote!</button></a>
            <hr className="lineThick" />
        </div>
      )
  }
}
