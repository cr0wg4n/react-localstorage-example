import { useLocalStorage } from "../hooks/localstorage"

export default function HookMode(){
  const [counter, setCounter] = useLocalStorage('counter', 0);
  const [secondCounter, setSecondCounter] = useLocalStorage('secondCounter', 0);
  
  return (
    <div className="card">
      <h3>Hook Example</h3>
      <p>Click the button many times and try to refresh the page</p>
      <br />

      <button onClick={() => setCounter(counter + 1)}>
        Button 1: count is {counter}
      </button>
      <br /><br />
      <button onClick={() => setSecondCounter(secondCounter + 1)}>
        Button 2: count is {secondCounter}
      </button>
    </div>
  )
}