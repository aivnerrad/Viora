import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import "./NewPost.css"

const NewPost = ({title, postCreated, setPostCreated}) => {
  const user = useSelector(state => state.session.user);
  const history = useHistory();
  const [posts, setPosts] = useState([])
  const [postTitle, setPostTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors , setErrors] = useState([])


  const createPost = async(e) => {
    e.preventDefault()
    const newPost = {
      title: postTitle,
      topicName: title,
      content,
      userId: user.id
    }

    const commentData = await fetch(`/api/topic/${title}`, {
      method: 'POST',
      body: JSON.stringify({...newPost}),
          headers: {
            "Content-Type": "application/json"
          }
      })
      const data = await commentData.json()
      if(data.errors){
        setErrors(data.errors)
      }
      else {
        const newPosts = await (await fetch(`/api/topic/${title}`)).json()
        setPosts(newPosts.topic.posts)
      }
      setPostCreated(!postCreated)
      history.push(`#last-post`)
      return data
  }
  return (
    <div id="add-post-section">
      <NavLink id="link-to-user" to={`/`} exact={true} >
        <div id='add-post-circle-div'>
          <p>{user && user.firstName[0]}</p>
        </div>
        <div id='post-owner-text'>
          {user && <p> {user.firstName} {user.lastName}</p>}
        </div>
      </NavLink>
    <form id="post-form" onSubmit={createPost}>
      <div id="textarea-div">
        <input id="content-input" type="text" placeholder="Post Title..." value={postTitle} onChange={(e) => setPostTitle(e.target.value)}></input>
      </div>
      <div id="textarea-div">
        <input id="content-input"
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='Say Something...'
          ></input>
      </div>
      <div id="button-div">
        <button id="add-comment-button">Add Post</button>
      </div>
    </form>
  <div>
    {errors.map((error, ind) => (<li key={ind}>{error}</li>))}
  </div>
  </div>
  );
};

export default NewPost;
