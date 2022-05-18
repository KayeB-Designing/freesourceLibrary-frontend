import React, {useState, useEffect} from 'react'

export default function About(props) {
  const [about, setAbout] = useState(null)
  useEffect(() => {
    getAboutData()
  }, [])
  function getAboutData(){
    fetch(`${props.URL}/about`)
    .then(res => res.json())
    .then(data => setAbout(data))
  }

  if(!about){
  <h2>Loading...</h2>
  }else{
    return (
      <div>
        <h2>Mission:</h2>
        <p>{about.mission}</p>
        <h2>Vision</h2>
        <p>{about.vision}</p>
        <h2>Why is this important?</h2>
        <p>{about.importance}</p>
        <h2>How did the Freesource Library idea come to be?</h2>
        <p>{about.how}</p>
        <h2>Thanks for your Support!!!</h2>
        <p>{about.thanks}</p>
        <p>{about.author}</p>
      </div>
    )
  }

}
