import React, {useState, useEffect} from 'react'

export default function Message() {

  const [message, setMessage] = useState(null)

  useEffect(() => {
    getMessageData()
  }, [])

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
    .then(data => console.log(`This is data: ${data}`))
    .catch(err => console.error(err))
  };

  if(!message){
    <h2>Loading a quote for you!</h2>
    }else{
      return (
        <div>
          <h2>Quote:</h2>
          <p>{message.content}</p>
          <p>{message.author}</p>
        </div>
      )
  }
}
