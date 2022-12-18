import './App.scss'
import { Routes, Route, Link} from 'react-router-dom'
import SimpleMode from './pages/SimpleMode'
import MediumMode from './pages/MediumMode'
import HookMode from './pages/HookMode'
import SecureHookMode from './pages/SecureHookMode'


function App() {
  return (
    <div className="App">
      <Routes>
        {/* 
          Try to refresh this page
          Result: the counter loses its value
        */}
        <Route path='/simple' element={<SimpleMode/>} />

        {/* 
          Try to refresh this page
          Result: the counter holds its value
          Contra: Is not scalable and reusable
        */}
        <Route path='/medium' element={<MediumMode/>} />


        <Route path='/hook' element={<HookMode/>} />

        <Route path='/secure-hook' element={<SecureHookMode />} />
      </Routes>

      <h3>Menu</h3>
      <Link to={'/simple'}>
        Simple example (without localStorage)
      </Link>
      <br />
      <br />
      <Link to={'/medium'}>
        Medium example (localStorage usage, without libraries)
      </Link>
      <br />
      <br />
      <Link to={'/hook'}>
        Hook example (reusable and scalable approach)
      </Link>
      <br />
      <br />
      <Link to={'/secure-hook'}>
        Secure Hook example (using the "encrypt-storage" library)
      </Link>
      <br />
      <br />
      <button onClick={() => {
        localStorage.clear()
        location.reload()
      }}>
        Clear localStorage
      </button>
    </div>
  )
}

export default App
