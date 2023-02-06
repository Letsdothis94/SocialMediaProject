import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Profile from './Components/Profile'
import NewPost from './Components/NewPost'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Register from './Components/Account.jsx/Register'
import Login from './Components/Account.jsx/Login'
import jwtDecode from 'jwt-decode'

let logged;
if (localStorage.token) {
  const jwt = localStorage.getItem('token')
  logged = jwtDecode(jwt)
}

function App() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [user, setUser] = useState(logged)

  useEffect(() => {
    let request = async () => {
      let req = await fetch(`http://127.0.0.1:3000/posts`)
      let res = await req.json()
      // console.log(res)
      setPosts(res)
    }
    
    let requestCom = async () => {
      let req = await fetch(`http://127.0.0.1:3000/comments`)
      let res = await req.json()
      // console.log(res)
      setComments(res)
    }

    request()
    requestCom()
  }, [])


  return (
    <div>
      <BrowserRouter>
      <Header user={user}/>
        <Routes>
          <Route path={'/'} element={<Home posts={posts} />} />
          <Route path={'/profile'} element={<Profile user={user}/>} />
          <Route path={'/new'} element={<NewPost user={user}/>} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
