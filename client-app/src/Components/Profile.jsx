import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Postcards from './Account.jsx/Postcards'

function Profile({ user }) {

  let navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(user)
  const [userData, setUserData] = useState([])

  useEffect(() => {
    let request = async () => {
      let req = await fetch(`http://localhost:3000/users/${userInfo.id}`)
      let res = await req.json()
      console.log(res.posts)
      setUserData(res.posts)
    }
    request()
  }, [])
  
  const logout = () => {
      localStorage.removeItem('token')
      navigate('/')
  }

  return (
    <div style={{ border: '2px solid purple', borderRadius: '3%', marginTop:'8vh' }}>
        <h1>Profile Background</h1>
        <div style={{ border: '2px solid purple', borderRadius: '3%', margin:'4px'}}>
            <hr />
            <h2>Profile Info Goes Here:</h2>
            <h5>Profile Pic</h5>
            <h4>Username: {userInfo.email}</h4>
            <button onClick={() => {logout()}} >Logout X</button>
            <hr />
            <div>
                <h3>All your posts Goes here:</h3>
                <div>
                  {
                    userData.map((card, i) => {
                      return(
                        <div key={i} style={{ border:'2px solid black'}}>
                          <Postcards card={card}/>
                        </div>
                      )
                    })
                  }
                </div>
                <h3>if none, you can see the add a new post button!</h3>
            </div>
        </div>        
    </div>
  )
}

export default Profile