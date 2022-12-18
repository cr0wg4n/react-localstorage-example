import { useEffect, useState } from "react"



export default function MediumMode(){
  const [count, setCount] = useState(
    Number(localStorage.getItem('counter')) || 0
  )

  const handleCounter = () => {
    setCount(count + 1)
  }

  useEffect(()=>{
    localStorage.setItem('counter', count)
  }, [count])

  return (
    <div className="card">
      <h3>Medium Example</h3>
      <p>Click the button many times and try to refresh the page</p>
      <br />
      <button onClick={handleCounter}>
        count is {count}
      </button>
    </div>
  ) 
}