import React from 'react'
import { useState, useEffect } from 'react'

function NewPost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [userid, setUserid] = useState(1)
    const [likes, setLikes] = useState(0)
    console.log(title)
    console.log(content)
    console.log(image)
    console.log(userid)
    
    function handleSubmit(e){
        e.preventDefault()

        const formData = new FormData();
        formData.append('title', title)
        formData.append('content', content)
        formData.append('featured_image', image)
        formData.append('user_id', userid)
        formData.append('likes', likes)
        
        fetch(`http://127.0.0.1:3000/posts`, {
            method: 'POST',
            // headers: { 'Content-Type': 'multipart/form-data' },
            body: formData
        })
        .catch(error => console.error(error))
    }
        // let req = await fetch(`http://127.0.0.1:3000/posts`, {
        //     method: 'POST',
        //     // headers: { 'Content-Type': 'multipart/form-data' },
        //     body: {
        //         title: title,
        //         content: content,
        //         user_id: userid,
        //         likes: 0,
        //         featured_image: image
        //     }
        // })
        // .catch(error => console.log(error));
  return (
    <div style={{ border: '2px solid purple', borderRadius: '3%', marginTop: '8vh' }}>
        <h1>Post with a New Link</h1>
        <form onSubmit={handleSubmit}>
            <h2>title:</h2>
            <input value={title} type="text" placeholder="title here..." onChange={(e) => setTitle(e.target.value)} /><br />
            <h2>Content:</h2>
            <input name={content} type="text" placeholder="Content here..." onChange={(e) => setContent(e.target.value)} /><br />
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
            <button type="submit"></button>
        </form>
    </div>
  )
}

export default NewPost