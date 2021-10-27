import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import "./EditPost.css"
const EditPost = ({ post, title, setEditingPost, setEditedPostId, setPostShowing}) => {
    const user = useSelector(state => state.session.user);
    const [postTitle, setPostTitle] = useState(post.title)
    const [content, setContent] = useState(post.content);
    const [errors , setErrors] = useState([])


    const updatePost = async(e) => {
      e.preventDefault()
      const updatedPost = {
        title: postTitle,
        topicName: title,
        content,
        userId: user.id,
        postId: post.id
      }

      const postData = await fetch(`/api/topic/${title}/${post.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          ...updatedPost
            }),
            headers: {
              "Content-Type": "application/json"
            }
        })
        const data = await postData.json()
        if(data.errors){
          setErrors(data.errors)
          setEditingPost(true)
        }else {
          const newPosts = await (await fetch(`/api/topic/${title}/${post.id}/comments`)).json()
          setEditingPost(false)
          setEditedPostId(-1)
          setPostShowing(false)
        }
      return data
    }

  return (
    <div id="add-comment-section">
      <div>
        {errors.map((error, ind) => (<li key={ind}>{error}</li>))}
      </div>
      <NavLink to={`/`} exact={true} >
        <div id='add-comment-circle-div'>
          <p>{user && user.firstName[0]}</p>
        </div>
      </NavLink>
    <form id="post-content-form" onSubmit={updatePost}>
    <div id="textarea-div">
        <input id="content-input" type="text" placeholder="Post Title" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}></input>
      </div>
      <div id="textarea-div">
        <input id="content-input"
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='Say Something...'
        ></input>
      </div>
      <button id="add-comment-button">Update</button>
    </form>
  </div>
  );
};

export default EditPost;
