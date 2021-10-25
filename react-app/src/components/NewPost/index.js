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
    <div id="add-comment-section">
      <div style={{ color:'#F27D21'}}>
        {errors.map((error, ind) => (<li key={ind}>{error}</li>))}
      </div>
      <NavLink to={`/users/${user.id}`} exact={true} >
        <div id='add-comment-circle-div'>
          <p>{user && user.firstName[0]}</p>
        </div>
      </NavLink>
    <form id="post-form" onSubmit={createPost}>
      <div id="post-title-div">
        <input type="text" placeholder="Post Title" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}></input>
      </div>
      <div id="textarea-div">
        <input id="content-input"
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='Say Something...'
        ></input>
      </div>
        <button id="add-comment-button">Add Post</button>
    </form>
  </div>
  );
};

export default NewPost;
