import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router';
import SideBar from '../SideBar';
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
        <img src={topic && topic.coverPhoto} alt="cover"/>
        <h1>{title}</h1>
        {posts && posts.map(post => {
          return (
            <>
            <div id="post">
              {post.id}
              <br/>
              {post.content}
            </div>
            <br/>
            <p>{post.comments && post.comments.length}</p>
            </>
          )
        })}
      </div>
    </div>
  )
}


export default TopicPage;
