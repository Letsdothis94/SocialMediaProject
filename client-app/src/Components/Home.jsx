import React from 'react'
import Cards from './Cards'
import { useState } from 'react'


function Home({ posts }) {

    const [query, setQuery] = useState('')
    
    return (
    <>
    <div style={{ border: '2px solid purple', borderRadius: '3%', padding: '2%', marginTop:'12%' }}>
        <input type='text' placeholder='Search post...' onChange={(e) => setQuery(e.target.value)}></input>
    </div>
    <div style={{border:'2px solid purple', borderRadius:'3%', padding:'2%'}}>
        {
            posts.filter((post) => 
                post.title.toLowerCase().includes(query)
                ).map((post, i)=>{
                return(
                    <div key={i}>
                        <Cards post={post}/>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Home