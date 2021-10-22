import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router';
import SideBar from '../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons'
import './TopicPage.css'
import NewComment from '../NewComment';
import { useSelector } from 'react-redux';

const TopicPage = () => {

  const { title } = useParams()
  const user = useSelector(state => state.session.user)
  const [topic, setTopic] = useState({})
  const [posts, setPosts] = useState([])
  const [commenting, setCommenting] = useState(false)
  const [clicked, setClicked] = useState(-1)
  const [liked, setLiked] = useState(false)
  useEffect(() => {
    (async function topicsFetch() {
      const topicResponse = await fetch(`/api/topic/${title}`);
      const topicData = await topicResponse.json();
      const topicObject = topicData.topic[0]
      setTopic(topicObject)
      setPosts(topicObject.posts)
    })()
  }, [title])
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
          console.log("POST ======>>>", post)
          return (
            <>
            <div id="post">
              <div id="post-owner">
                <img id="profile-pic" src={post.user.images[0].url} alt="profile" />
                <strong>{post.user.firstName} {post.user.lastName}</strong>
                <p>{post.user.aboutMe}</p>
              </div>
              <strong>{post.title}?</strong>
              <br/>
              {post.content}
              <button id="like-button" onClick={() => setLiked(!liked)}>
                <p><FontAwesomeIcon icon={faArrowUp} />{post.likes && post.likes.length}</p>
              </button>
              <button onClick={() => commentingHere(post.id)}>
                <p><FontAwesomeIcon icon={faComment} />{post.comments && post.comments.length}</p>
              </button>
              <div>
                {(user && commenting && clicked === post.id) &&
                  <NewComment setCommenting={setCommenting} title={title} post={post} />
                }
                {(clicked === post.id) && post.comments.map(comment => {
                  return (
                  <>
                  <div id="comment-owner">
                  <img id="profile-pic" src={comment.user.images[0].url} alt="profile" />
                  <strong>{comment.user.firstName} {comment.user.lastName}</strong>
                  <p>{comment.user.aboutMe}</p>
                  <p>{comment.content}</p>
              </div>
                </>
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
