import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{ border: '2px solid blue', backgroundColor: 'grey', height:'7vh', display:'flex', flexWrap:'wrap', justifyContent:'space-between', position:'fixed', left:'0', top:'0', width:'100%' }}>
      <div style={{ border: '2px solid black', width: '14vh', height:'70px',  margin: '3px', textAlign: 'center', lineHeight: '3', }}>
        <button style={{marginRight:'20px'}}>Burger Menu</button>     
        <Link to={'/'}>Title</Link>
      </div>
      <div style={{ border: '2px solid black', width: '290px', height: '70px', margin: '3px', textAlign: 'center', lineHeight: '3', }}>Search Bar</div>
      <div style={{ border: '2px solid black', width: '150px', height: '70px', margin: '3px', textAlign: 'center', lineHeight: '3', }}>
        <Link to={"/new"}><button>New</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
      </div>
    </div>
  )
}

export default Header