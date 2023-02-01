import React from 'react'
import Cards from './Cards'


function Home({ posts }) {

    return (
    <div style={{border:'2px solid purple', borderRadius:'3%', padding:'2%'}}>
        {
            posts.map((post, i)=>{
                return(
                    <div key={i}>
                        <Cards post={post}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home