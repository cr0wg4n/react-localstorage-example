import { useState } from "react"

export default function SimpleMode(){
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h3>Simple Example</h3>
      <p>Click the button many times and try to refresh the page</p>
      <br />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}