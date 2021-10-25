import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import "./NewComment.css"

const NewComment = ({post, title, setCommenting}) => {
  const user = useSelector(state => state.session.user);
  const [comments, setComments] = useState([])
  const [content, setContent] = useState('');
  const [errors , setErrors] = useState([])


  const createComment = async(e) => {
    e.preventDefault()
    const newComment = {
      content,
      userId: user.id,
      postId: post.id
    }
    post?.comments?.push(newComment)

    const commentData = await fetch(`/api/topic/${title}/${post.id}/comments`, {
      method: 'POST',
      body: JSON.stringify({...newComment}),
          headers: {
            "Content-Type": "application/json"
          }
      })
      const data = await commentData.json()
      if(data.errors){
        setErrors(data.errors)
        setCommenting(true)
      }else {
        const newComments = await (await fetch(`/api/topic/${title}/${post.id}/comments`)).json()
        setComments(newComments.comments)
        setCommenting(false)
      }
    return data
  }
  return (
    <div id="add-comment-section">
      <div style={{ color:'#F27D21'}}>
        {errors.map((error, ind) => (<li key={ind}>{error}</li>))}
      </div>
      <NavLink to={`/users/${user.id}`} exact={true} >
        <div id='add-comment-circle-div'>
          <p>{user && user.firstName[0]}</p>
        </div>
      </NavLink>
    <form id="content-form" onSubmit={createComment}>
      <div id="textarea-div">
        <input id="content-input"
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='Add a comment...'
        ></input>
      </div>
      <button id="add-comment-button">Add Comment</button>
    </form>
  </div>
  );
};

export default NewComment;
