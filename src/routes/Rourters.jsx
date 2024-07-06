import {Route, Routes } from 'react-router-dom'


const Routers = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<h1 className=" text-4xl text-blue-400 underline"> Welcome to flight booking app Hare Krishna </h1>} />
        
      </Route>
    </Routes>
  )
}

export default Routers
