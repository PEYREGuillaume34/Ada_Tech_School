import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [quotes, setQuotes] = useState()

  const loadData = async () => {
    const response = await fetch('https://dummyjson.com/quotes')
    const data = await response.json()
    setQuotes(data.quotes)
  }

  useEffect(() => {
    loadData()
  },[]);

   if (quotes === undefined) {
        return <div>Loading...</div>;
    }
  

  return (
    <>
    <div>
       {quotes.map((data) => (
        <div key={data.id}>
          <h2>{data.quote}</h2>
          <p>{data.author}</p>
        </div>
      ))}
    </div>

    </>
  )
}

export default App
