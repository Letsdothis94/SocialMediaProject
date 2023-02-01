import React from 'react'
import { useState } from 'react'
import CommentSection from './CommentSection'
import Postcomment from './Postcomment'


function Cards({ post }) {
    const [comsection, setComsection] = useState(false)
    console.log(comsection)

    const onoff = () => {
        setComsection(!comsection)
        console.log(comsection)
    }

    // console.log(post.featured_image)
    const url = post.featured_image
    const link = `http://localhost:3000${url}`
    // console.log(link)
    let likes = post.likes
    console.log(post.comments)

    const upvoteClick = () => {
        console.log('updateClick')
        const upvote = {likes: likes + 1}
        fetch(`http://127.0.0.1:3000/posts/${post.id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify( upvote ),
        })
            .then((r) => r.json())
            .then(console.log('success'))
    }

    const downvoteClick = () => {
        console.log('downvoteClick')
        const downvote = { likes: likes - 1 }
        fetch(`http://127.0.0.1:3000/posts/${post.id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify( downvote ),
        })
            .then((r) => r.json())
            .then(console.log('success'))
    }

  return (
      <div style={{ border: '2px solid green', borderRadius: '7%', paddingTop:'7vh', paddingBottom:'7vh' }}>
          <h1> - {post.title}</h1>
          <div style={{ border: '2px solid red', margin: '10px' }}>
                <h2>Content: {post.content}</h2>
                <img src={link} height="250vh"></img>
                <h5>Likes: {post.likes} </h5>
              <div style={{ border: '2px solid black' }}>
                  <button onClick={()=>{upvoteClick()}}>Upvote:</button>
                  <button onClick={() => { downvoteClick() }}>Downvote</button>
                  <button onClick={()=>{onoff()}}>Comments</button>
                  <button>Share</button>
              </div>
              {!comsection && (
              <div>
                {
                    post.comments.map((comment, i) => {
                        return(
                            <div key={i}>
                            <CommentSection comment={comment}/>
                        </div>
                    )
                })
                }
                <Postcomment post={post}/>
              </div>
            )}
          </div>
      </div>
  )
}

export default Cards