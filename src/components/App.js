import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../pages/Home'
import Users from '../pages/Users'
import Notifications from '../pages/Notifications'
import CreatePost from './CreatePost'
import EditPost from './EditPost'
import store from '../store'
import "../styles/App.css"

const App = () => {
  return (
    <Provider store={store}>
       <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:postId" element={<EditPost />} />
         </Routes>
      </BrowserRouter>
    </Provider>
      
  )
}

export default App