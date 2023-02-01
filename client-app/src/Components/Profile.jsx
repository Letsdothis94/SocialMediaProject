import React from 'react'

function Profile() {
  return (
    <div style={{ border: '2px solid purple', borderRadius: '3%', marginTop:'8vh' }}>
        <h1>Profile Background</h1>
        <div style={{ border: '2px solid purple', borderRadius: '3%', margin:'4px'}}>
            <hr />
            <h2>Profile Info Goes Here:</h2>
            <h5>Profile Pic</h5>
            <h4>Username:</h4>
            <h4>Logout X</h4>
            <hr />
            <div>
                <h3>All your posts Goes here:</h3>
                <h3>if none, you can see the add a new post button!</h3>
            </div>
        </div>        
    </div>
  )
}

export default Profile