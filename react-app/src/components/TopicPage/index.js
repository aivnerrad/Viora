import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router';
import SideBar from '../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons'
import './TopicPage.css'

const TopicPage = () => {

  const { title } = useParams()
  const [topic, setTopic] = useState({})
  const [posts, setPosts] = useState([])
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
            <div id="post">
              <div id="post-owner">
                <strong>{post.user.firstName} {post.user.lastName}</strong>
                <p>{post.user.aboutMe}</p>
              </div>
              <strong>{post.title}?</strong>
              <br/>
              {post.content}
              <button id="like-button" onClick={console.log("Liked")}>
                <p><FontAwesomeIcon icon={faArrowUp} />{post.likes && post.likes.length}</p>
              </button>
              <button onClick={console.log("Open Comments")}>
                <p><FontAwesomeIcon icon={faComment} />{post.comments && post.comments.length}</p>
              </button>
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
