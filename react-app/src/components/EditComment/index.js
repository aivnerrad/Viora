import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import "./EditComment.css"
const EditComment = ({ comment, post, title, setEditing, setEditedCommentId, setCommentShowing}) => {
    const user = useSelector(state => state.session.user);
    const [content, setContent] = useState(comment.content);
    const [errors , setErrors] = useState([])


    const updateComment = async(e) => {
      e.preventDefault()
      const newComment = {
        content,
        userId: user.id,
        postId: post.id
      }

      const commentData = await fetch(`/api/topic/${title}/${post.id}/comments/${comment.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          ...newComment
            }),
            headers: {
              "Content-Type": "application/json"
            }
        })
        const data = await commentData.json()
        if(data.errors){
          setErrors(data.errors)
          setEditing(true)
        }else {
          const newComments = await (await fetch(`/api/topic/${title}/${post.id}/comments`)).json()
          setEditing(false)
          setEditedCommentId(-1)
          setCommentShowing(false)
        }
      return data
    }

  return (
    <div id="add-comment-section">
      <div style={{ color:'#F27D21'}}>
        {errors.map((error, ind) => (<li key={ind}>{error}</li>))}
      </div>
      <NavLink to={`/`} exact={true} >
        <div id='add-comment-circle-div'>
          <p>{user && user.firstName[0]}</p>
        </div>
      </NavLink>
    <form id="content-form" onSubmit={updateComment}>
      <div id="textarea-div">
        <input id="content-input"
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></input>
      </div>
      <button id="add-comment-button">Update</button>
    </form>
  </div>
  );
};

export default EditComment;
