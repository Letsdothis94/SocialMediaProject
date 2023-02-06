import React from 'react'
import { Link } from 'react-router-dom'


function Header({ user }) {
  return (
    <div style={{ border: '2px solid blue', backgroundColor: 'grey', height:'7vh', display:'flex', flexWrap:'wrap', justifyContent:'space-between', position:'fixed', left:'0', top:'0', width:'100%' }}>
      <div style={{ border: '2px solid black', width: '14vh', height:'70px',  margin: '3px', textAlign: 'center', lineHeight: '3', }}>
        <button style={{marginRight:'20px'}}>Burger Menu</button>     
      </div>
      <div style={{ border: '2px solid black', width: '290px', height: '70px', margin: '3px', textAlign: 'center', lineHeight: '3', }}><Link to='/'>Title with logo</Link></div>
      <div style={{ border: '2px solid black', width: '250px', height: '70px', margin: '3px', textAlign: 'center', lineHeight: '3', }}>
        {!user && (
            <>
            <Link to="/register"><button>Sign Up/Log in</button></Link>
            </>
          )}
        {user && (
          <>
          <Link to={"/new"}><button>New</button></Link>
          <Link to="/profile"><button>Profile</button></Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header