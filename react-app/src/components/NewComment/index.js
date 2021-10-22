import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import "./NewComment.css"

const NewComment = ({post, title, setCanComment, setCommenting}) => {
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
        setCommenting(true)
      }else {
        const newComments = await (await fetch(`/api/topic/${title}/${post.id}/comments`)).json()
        //console.log("NEW COMMENTS .JSON ======>>>>", newComments)
        setComments(newComments.comments)
        setCommenting(false)
      }
    return data
  }

  return (
    <>
      <div style={{ color:'#F27D21'}}>
                    {errors.map((error, ind) => (
                    <li style={{ marginLeft:'15%', textAlign:'start'}}
                            key={'newCommentErr'+ind}>{error}</li>
                    ))}
                </div>
    <form id="content-form" onSubmit={createComment}>
      <textarea id="content-textarea"
        name='content'
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <button>Add Comment</button>
    </form>
  </>
  );
};

export default NewComment;
