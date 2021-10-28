import React, { useState , useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import SideBar from '../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faComment, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import './TopicPage.css'
import NewComment from '../NewComment';
import { useSelector } from 'react-redux';
import CommentSettingsBox from '../CommentSettingsBox';
import EditComment from '../EditComment';
import NewPost from '../NewPost';
import EditPost from '../EditPost'
import PostSettingsBox from '../PostSettingsBox';

const TopicPage = () => {

  const { title } = useParams()
  const user = useSelector(state => state.session.user)
  const [topic, setTopic] = useState({})
  const [posts, setPosts] = useState([])
  const [commenting, setCommenting] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editingPost, setEditingPost] = useState(false)
  const [postCreated, setPostCreated] = useState(false)
  const [postClicked, setPostClicked] = useState(-1)
  const [commentClicked, setCommentClicked] = useState(-1)
  const [editedCommentId, setEditedCommentId] = useState(-1)
  const [editedPostId, setEditedPostId] = useState(-1)
  const [commentDeleted, setCommentDeleted] = useState(false)
  const [postDeleted, setPostDeleted] = useState(false)
  const [commentShowing, setCommentShowing] = useState(false)
  const [postShowing, setPostShowing] = useState(false)
  const [postLiked, setPostLiked] = useState(false)
  const [commentLiked, setCommentLiked] = useState(false)

  useEffect(() => {
    (async function topicsFetch() {
      const topicResponse = await fetch(`/api/topic/${title}`);
      const topicData = await topicResponse.json();
      const topicObject = topicData.topic[0]
      setTopic(topicObject)
      setPosts(topicObject.posts)
      setPostDeleted(false)
      setCommentDeleted(false)

    })()
  }, [title, commenting, editing, postLiked, commentLiked, postCreated, postDeleted, commentDeleted, editingPost])
  console.log("TITLE", title)
  console.log("TOPIC", topic)
  console.log("POSTS", posts)

  const commentingHere = (postId) => {
    if(postClicked === postId && commenting === true){
      setCommenting(false)
      setPostClicked(-1)
    } else {
      setCommenting(true)
      setPostClicked(postId)
    }
  }
  const showCommentSettingsBox = (id) => {
    setCommentShowing(!commentShowing)
    setCommentClicked(id)
  }

  const showPostSettingsBox = (id) => {
    setPostShowing(!postShowing)
    setPostClicked(id)
  }

  const likePost = async (e, postId) => {
    console.log(e)
    e.preventDefault();
    if (user) {
      await fetch(`/api/topic/${title}/${postId}/like`, {
        method: 'POST'
      })
      setPostLiked(!postLiked)
      }
    }

  const likeComment = async (e, postId, commentId) => {
    console.log(e)
    e.preventDefault();
    if (user) {
      await fetch(`/api/topic/${title}/${postId}/comments/${commentId}/like`, {
        method: 'POST'
      })
      setCommentLiked(!commentLiked)
      }
    }

  return (
    <div id="main-content">
      <SideBar />
      <div id="middle-content">
        <div id="top-block">
          <img id="cover-photo" src={topic && topic.coverPhoto} alt="cover"/>
          <div id="topic-title-container">
            <h2>{title}</h2>
          </div>
        </div>
        <div id="add-post-box">
          {user && <NewPost title={title} postCreated={postCreated} setPostCreated={setPostCreated}/>}
        </div>
        {posts && posts.map(post => {
          return (
            <>
            <div id="post-container">
              {post.user &&
              <div id="owner">
                {console.log("post.user", post.user)}
                {post.user.images.length > 0 && <img id="profile-pic" src={post.user.images[0].url} alt="profile" />}
                {post.user.images.length === 0 && <img id="profile-pic" src="https://www.spica-siam.com/wp-content/uploads/2017/12/user-demo.png" alt="profile" />}
                <div id="owner-text">
                  <p id="owner-name"><strong>{post.user.firstName} {post.user.lastName}</strong></p>
                  <p id="owner-bio">{post.user.aboutMe}</p>
                </div>
              </div>}
              {((editedPostId === post.id) && (user && post.userId === user.id) && editingPost) && <EditPost post={post} setEditingPost={setEditingPost} title={title} setEditedPostId={setEditedPostId} setPostShowing={setPostShowing}/>}
              {((user && post.userId !== user.id) || (!editing || editedPostId !== post.id)) &&<div id="post">
                <strong><p id="post-title">{post.title}?</p></strong>
                <span>{post.content}</span>
              </div>}
              <div id="post-buttons">
                <button id="like-button" onClick={(e) => likePost(e, post.id)}>
                  <FontAwesomeIcon icon={faArrowUp} />
                  <p>{post.likes && post.likes.length}</p>
                </button>
                <button id="comment-button" onClick={() => commentingHere(post.id)}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>{post.comments && post.comments.length}</p>
                </button>
                <div id="edit-post-div">
                  {((user && post.userId === user.id) && !editing) &&  <button id="edit-comment-button" onClick={() => showPostSettingsBox(post.id)}><FontAwesomeIcon icon={faEllipsisH} /></button>}
                  {((user && post.userId === user.id) && !editing && postShowing && postClicked === post.id) &&<PostSettingsBox title={title} post={post} setEditingPost={setEditingPost} setPostDeleted={setPostDeleted} setEditedPostId={setEditedPostId} />}
                </div>
              </div>
              <div id="comments-section">
                {(user && commenting && postClicked === post.id) &&
                  <NewComment setCommenting={setCommenting} title={title} post={post} />
                }
                {(postClicked === post.id) && post.comments.map(comment => {
                  return (comment.user &&
                    <div id="comment-box">
                      <div id="owner">
                      {comment.user.images.length > 0 && <img id="profile-pic" src={comment.user.images[0].url} alt="profile" />}
                      {comment.user.images.length === 0 && <img id="profile-pic" src="https://www.spica-siam.com/wp-content/uploads/2017/12/user-demo.png" alt="profile" />}
                        <div id="owner-text">
                          <p><strong>{comment.user.firstName} {comment.user.lastName}</strong></p>
                          <p id="owner-bio">{comment.user.aboutMe}</p>
                        </div>
                      </div>
                      <div id="bottom-box">
                        {((user && comment.userId !== user.id) || (!editing || editedCommentId !== comment.id)) && <p id="comment">{comment.content}</p>}
                        <div id="bottom-of-the-bottom">
                          <div id="like-button-box">
                            <button id="like-button" onClick={(e) => likeComment(e, post.id, comment.id)}>
                              <FontAwesomeIcon icon={faArrowUp} />
                              <p>{comment.likes && comment.likes.length}</p>
                            </button>
                          </div>
                          <div id="edit-settings-box">
                            {((user && comment.userId === user.id) && !editing && commentShowing && commentClicked === comment.id) &&  <CommentSettingsBox comment={comment} title={title} post={post} setEditing={setEditing} setCommentDeleted={setCommentDeleted} setEditedCommentId={setEditedCommentId} />}
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


export default TopicPage;
