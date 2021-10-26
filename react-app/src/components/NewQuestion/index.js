import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import "./NewQuestion.css"

const NewQuestion = ({question, setAnswering}) => {
  const user = useSelector(state => state.session.user);
  const [questions, setQuestions] = useState([])
  const [content, setContent] = useState('');
  const [errors , setErrors] = useState([]);
  const [topicName, setTopicName] = useState('');


  const createQuestion = async(e) => {
    e.preventDefault()
    const newQuestion = {
      content,
      topicName,
      userId: user.id,
    }

    const commentData = await fetch(`/api/users/${question.id}/questions`, {
      method: 'POST',
      body: JSON.stringify({...newQuestion}),
          headers: {
            "Content-Type": "application/json"
          }
      })
      const data = await commentData.json()
      if(data.errors){
        setErrors(data.errors)
        setAnswering(true)
      }else {
        const newQuestions = await (await fetch(`/api/users/questions`)).json()
        setQuestions(newQuestions.questions)
        setAnswering(false)
      }
    return data
  }
  return (
    <div id="add-comment-section">
      <NavLink to={`/users/${user.id}`} exact={true} >
        <div id='add-comment-circle-div'>
          <p>{user && user.firstName[0]}</p>
        </div>
      </NavLink>
    <form id="content-form" onSubmit={createQuestion}>
      <div id="textarea-div">
        <input id="content-input"
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='Ask Something...'
          ></input>
          <select onChange={(e) => setTopicName(e.target.value)} id="topic-dropdown" type="select">
            <option value="Weather">Weather</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
            <option value="Family">Family</option>
            <option value="Food">Food</option>
            <option value="Work">Work</option>
            <option value="Travel">Travel</option>
            <option value="Hobbies And Health">Hobbies And Health</option>
          </select>
          <div>
            {errors.map((error, ind) => (<li key={ind}>{error}</li>))}
          </div>
      </div>
      <button id="add-comment-button">Ask Question</button>
    </form>
  </div>
  );
};

export default NewQuestion;
