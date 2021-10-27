import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faComment, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../SideBar';
import NewComment from '../NewComment';
import PostSettingsBox from '../PostSettingsBox';
import EditPost from '../EditPost';
import CommentSettingsBox from '../CommentSettingsBox';
import EditComment from '../EditComment';
import './HomePage.css'

const HomePage = () => {
  const [feed, setFeed] = useState([])
  const user = useSelector(state => state.session.user)
  const [commenting, setCommenting] = useState(false)
  const [editing, setEditing] = useState(false)
  const [postClicked, setPostClicked] = useState(-1)
  const [commentClicked, setCommentClicked] = useState(-1)
  const [editedCommentId, setEditedCommentId] = useState(-1)
  const [commentDeleted, setCommentDeleted] = useState(false)
  const [commentShowing, setCommentShowing] = useState(false)
  const [postLiked, setPostLiked] = useState(false)
  const [commentLiked, setCommentLiked] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    updateFeed()
  }, [title, commenting, editing, postClicked, commentClicked, editedCommentId, commentDeleted, commentShowing, postLiked, commentLiked])


  const updateFeed = async() => {
    setFeed((await (await fetch(`api/users/feed`)).json()).feed)
  }

  const commentingHere = (post) => {
    if(postClicked === post.id && commenting === true){
      setCommenting(false)
      setPostClicked(-1)
    } else {
      setCommenting(true)
      setPostClicked(post.id)
      setTitle(post.topicName)
    }
  }
  const showCommentSettingsBox = (id) => {
    setCommentShowing(!commentShowing)
    setCommentClicked(id)
  }

  const likePost = async (e, post) => {
    e.preventDefault();
    if (user) {
      setTitle(post.topicName)
      await fetch(`/api/topic/${title}/${post.id}/like`, {
        method: 'POST'
      })
      setPostLiked(!postLiked)
      }
    }

  const likeComment = async (e, post, commentId) => {
    console.log(e)
    e.preventDefault();
    if (user) {
      setTitle(post.topicName)
      await fetch(`/api/topic/${title}/${post.id}/comments/${commentId}/like`, {
        method: 'POST'
      })
      setCommentLiked(!commentLiked)
      }
    }


console.log("FEED =======>>>", feed)
console.log("TITLE ======>>>", title)
  return (
    <div id="main-content">
      <SideBar />
      <div id="user-feed">
        {feed && feed.map(post => {
          return (
            <>
            <div id="post-container">
              <div id="owner">
                <img id="profile-pic" src={post.user.images[0].url} alt="profile" />
                <div id="owner-text">
                  <strong>{post.user.firstName} {post.user.lastName}</strong>
                  <p id="owner-bio">{post.user.aboutMe}</p>
                </div>
              </div>
              <div id="post">
                <strong><p id="post-title">{post.title}?</p></strong>
                <span>{post.content}</span>
              </div>
              <div id="post-buttons">
                <button id="like-button" onClick={(e) => likePost(e, post)}>
                  <FontAwesomeIcon icon={faArrowUp} />
                  <p>{post.likes && post.likes.length}</p>
                </button>
                <button id="comment-button" onClick={() => commentingHere(post)}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>{post.comments && post.comments.length}</p>
                </button>
              </div>
              <div id="comments-section">
                {(user && commenting && postClicked === post.id) &&
                  <NewComment setCommenting={setCommenting} title={title} post={post} />
                }
                {(postClicked === post.id) && post.comments.map(comment => {
                  return (comment.user &&
                    <div id="comment-box">
                      <div id="owner">
                      {comment.user.images.length > 0 && <img id="profile-pic" src={post.user.images[0].url} alt="profile" />}
                      {comment.user.images.length === 0 && <img id="profile-pic" src="https://www.spica-siam.com/wp-content/uploads/2017/12/user-demo.png" alt="profile" />}
                        <div id="owner-text">
                          <strong>{comment.user.firstName} {comment.user.lastName}</strong>
                          <p id="owner-bio">{comment.user.aboutMe}</p>
                        </div>
                      </div>
                      <div id="bottom-box">
                        {((user && comment.userId !== user.id) || (!editing || editedCommentId !== comment.id)) && <p id="comment">{comment.content}</p>}
                        <div id="bottom-of-the-bottom">
                          <div id="like-button-box">
                            <button id="like-button" onClick={(e) => likeComment(e, post, comment.id)}>
                              <FontAwesomeIcon icon={faArrowUp} />
                              <p>{comment.likes && comment.likes.length}</p>
                            </button>
                          </div>
                          <div id="edit-settings-box">
                            {((user && comment.userId === user.id) && !editing && commentShowing && commentClicked === comment.id) &&  <CommentSettingsBox comment={comment} title={title} post={post} setEditing={setEditing} commentDeleted={commentDeleted} setCommentDeleted={setCommentDeleted} setEditedCommentId={setEditedCommentId} />}
                            {((user && comment.userId === user.id) && !editing) &&  <button id="edit-comment-button" onClick={() => showCommentSettingsBox(comment.id)}><FontAwesomeIcon icon={faEllipsisH} /></button>}
                          </div>
                        </div>
                        {((editedCommentId === comment.id) && (user && comment.userId === user.id) && editing) && <EditComment comment={comment} post={post} setEditing={setEditing} title={title} setEditedCommentId={setEditedCommentId} setCommentShowing={setCommentShowing}/>}
                      </div>
                  </div>
                )})}
              </div>
            </div>
            <br/>
            </>
          )
        })}
      </div>
    </div>
  )
}


export default HomePage;
