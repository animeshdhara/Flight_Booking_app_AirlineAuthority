import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routers from './routes/Rourters'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </>
  )
}

export default App
