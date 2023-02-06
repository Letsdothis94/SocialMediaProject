import React from 'react'

function Postcards({card}) {
  return (
    <div style={{border:'2px red solid', width:"25vw"}}>
        <h1>This is a post card!</h1>
          <img src={`http://localhost:3000${card.featured_image}`} height="300px" width="400px"></img>
    </div>
  )
}

export default Postcards