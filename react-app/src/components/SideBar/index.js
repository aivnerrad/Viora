import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {

  const [topics, setTopics] = useState([])
  useEffect(() => {
    (async function topicsFetch() {
      const topicsResponse = await fetch('/api/topic');
      const topicsData = await topicsResponse.json();
      setTopics(topicsData.topics)
    })()
  }, [])
  return (
    <>
    <div id="topics-list-container">
      <div id="topics-list">
        {topics && topics.map((topic) => {
          return (
            <div id="sidebar-topic-div">
              <NavLink id="topic-button" to={`/topic/${topic.title}`} exact={true} activeClassName='active'>
                <img id="topic-icon" src={topic.coverPhoto} alt="topic-icon"/><p>{topic.title}</p>
              </NavLink>
            </div>
          )
        })}
      </div>
      <div id="about-me-links">
        <a target="_blank" rel="noreferrer" href="https://github.com/aivnerrad">Check out my projects on Github!</a>
        <br/>
        <br/>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/darren-via-ii-552667159/">Connect with me on LinkedIn!</a>
        <br/>
        <br/>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/DarrenVia">Follow Me on Twitter!</a>
      </div>
    </div>
    </>
    );
}

export default SideBar;
