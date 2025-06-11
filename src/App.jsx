
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import Intro from './pages/intro/Intro';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path='welcome' element={<Welcome/>}/>
        <Route path="/intro" element={<Intro />} />
      </Routes>
     
    </div>
  )
}

export default App
