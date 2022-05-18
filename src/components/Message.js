import React from 'react'

export default function Message() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      'X-RapidAPI-Key': '7dc5c7d94amsh5950acede55f00ap1606fbjsncf5bef6f77af'
    }
  };
  
  fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    return <h2>{response.content}</h2>
}
