import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router';
import SideBar from '../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons'
import './TopicPage.css'
import NewComment from '../NewComment';
import { useSelector } from 'react-redux';
import CommentSettingsModal from '../CommentSettingsModal';
import EditComment from '../EditComment';

const TopicPage = () => {

  const { title } = useParams()
  const user = useSelector(state => state.session.user)
  const [topic, setTopic] = useState({})
  const [posts, setPosts] = useState([])
  const [commenting, setCommenting] = useState(false)
  const [editing, setEditing] = useState(false)
  const [clicked, setClicked] = useState(-1)
  const [editedCommentId, setEditedCommentId] = useState(-1)
  const [liked, setLiked] = useState(false)
  const [deleted, setDeleted] = useState(false)
  useEffect(() => {
    (async function topicsFetch() {
      const topicResponse = await fetch(`/api/topic/${title}`);
      const topicData = await topicResponse.json();
      const topicObject = topicData.topic[0]
      setTopic(topicObject)
      setPosts(topicObject.posts)
      setDeleted(false)
    })()
  }, [title, commenting, editing, deleted])
  console.log("TITLE", title)
  console.log("TOPIC", topic)
  console.log("POSTS", posts)

  const commentingHere = (postId) => {
    if(clicked === postId && commenting === true){
      setCommenting(false)
      setClicked(-1)
    } else {
      setCommenting(true)
      setClicked(postId)
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
        {posts && posts.map(post => {
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
                <button id="like-button" onClick={() => setLiked(!liked)}>
                  <FontAwesomeIcon icon={faArrowUp} />
                  <p>{post.likes && post.likes.length}</p>
                </button>
                <button id="comment-button" onClick={() => commentingHere(post.id)}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>{post.comments && post.comments.length}</p>
                </button>
              </div>
              <div id="comments-section">
                {(user && commenting && clicked === post.id) &&
                  <NewComment setCommenting={setCommenting} title={title} post={post} />
                }
                {(clicked === post.id) && post.comments.map(comment => {
                  return (comment.user &&
                    <div id="comment-box">
                      <div id="owner">
                        <img id="profile-pic" src={comment.user.images[0].url} alt="profile" />
                        <div id="owner-text">
                          <strong>{comment.user.firstName} {comment.user.lastName}</strong>
                          <p id="owner-bio">{comment.user.aboutMe}</p>
                        </div>
                      </div>
                      <div id="bottom-box">
                        {((user && comment.userId !== user.id) || (!editing || editedCommentId !== comment.id)) && <p id="comment">{comment.content}</p>}
                        <div id="bottom-of-the-bottom">
                          {((user && comment.userId === user.id) && !editing) && <CommentSettingsModal  comment={comment} title={title} post={post} setEditing={setEditing} setDeleted={setDeleted} setEditedCommentId={setEditedCommentId}/>}
                        </div>
                        {((editedCommentId === comment.id) && (user && comment.userId === user.id) && editing) && <EditComment comment={comment} post={post} setEditing={setEditing} title={title} />}
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
