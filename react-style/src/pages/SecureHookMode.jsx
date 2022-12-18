import { useSecureLocalStorage } from "../hooks/localstorage";

export default function SecureHookMode(){
  const [counter, setCounter] = useSecureLocalStorage('counter', 0);
  const [secondCounter, setSecondCounter] = useSecureLocalStorage('secondCounter', 0);
  
  return (
    <div className="card">
      <h3>Secure Hook Example</h3>
      <p>Click the button many times and try to refresh the page</p>
      <br />

      <button onClick={() => setCounter(counter + 1)}>
        Button 1: encrypted count is {counter}
      </button>
      <br /><br />
      <button onClick={() => setSecondCounter(secondCounter + 1)}>
        Button 2: encrypted count is {secondCounter}
      </button>
    </div>
  )
}