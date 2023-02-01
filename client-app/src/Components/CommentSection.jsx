import React from 'react'

function CommentSection({ comment }) {
  return (
    <div style={{ border: '2px solid black' }}>
        <h2>Comments Goes Here... If Clicked</h2>
        <p>{comment.content}</p>
    </div>
  )
}

export default CommentSection