import './App.css'
import Auth from './pages/Auth'
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className='container xl:max-w-screen-xl'>
    <Routes>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
    </div>
  )
}

export default App
