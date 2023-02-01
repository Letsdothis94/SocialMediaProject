import React from 'react'
import { useState } from 'react'

function Postcomment( { post } ) {

    const [content, setContent] = useState('')
    console.log(content)
    console.log(post.id)

    function postingComment(e){
        e.preventDefault()
        fetch(`http://127.0.0.1:3000/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                content: content,
                post_id: post.id,
                user_id: 1 
            } 
            )
        })
    }


  return (
    <div>
        <div>
            <form onSubmit={postingComment}>
                <input type="text" value={content} placeholder="Enter your comment here" onChange={(e) => setContent(e.target.value)} />
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Postcomment