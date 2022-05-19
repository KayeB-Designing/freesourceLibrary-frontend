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
      <div className="contentContainer" >
        <h1  className="pageTitle">About The Freesource Library</h1>
        <hr className="lineThick" />
        <div className="result">
          <h2 className="itemTitle">Our Mission</h2>
          <p className="descr">{about.mission}</p>
        </div>
        <hr className="lineThin" />
        <div  className="result">
          <h2 className="itemTitle">Our Vision</h2>
          <p className="descr">{about.vision}</p>
        </div>
        <hr className="lineThin" />
        <div  className="result">
          <h2 className="itemTitle">Why is this important?</h2>
          <p className="descr">{about.importance}</p>
        </div>
        <hr className="lineThin" />
        <div  className="result">
          <h2 className="itemTitle">How did the Freesource Library idea come to be?</h2>
          <p className="descr">{about.how}</p>
        </div>
        <hr className="lineThin" />
        <div  className="result aboutGrid">
          <h2 className="itemTitle aboutGridTitle">Thanks for your Support!!!</h2>
          <div className="aboutMsg">
          <p className="descr thanksMsg">{about.thanks}</p>
          <p className="descr thanksMsg"><span className="authorSpan"><h2>{about.author}</h2></span></p>
          </div>
          <img  className="descr aboutImg" src="https://thumbs2.imgbox.com/34/fe/YDsWLhUR_t.png" alt="Kaye B. of Kaye B. Designing"/>
        </div>
      </div>
    )
  }

}
