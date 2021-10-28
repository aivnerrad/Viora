import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import "./NewQuestion.css"

const NewQuestion = ({question, asking, setAsking}) => {
  const user = useSelector(state => state.session.user);
  const [questions, setQuestions] = useState([])
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors , setErrors] = useState([]);
  const [topicName, setTopicName] = useState('');


  const createQuestion = async(e) => {
    e.preventDefault()
    const newQuestion = {
      content,
      title,
      topicName,
      userId: user.id,
    }

    const questionData = await fetch(`/api/questions`, {
      method: 'POST',
      body: JSON.stringify({...newQuestion}),
          headers: {
            "Content-Type": "application/json"
          }
      })
      const data = await questionData.json()
      if(data.errors){
        setErrors(data.errors)
        setAsking(!asking)
      }else {
        const newQuestions = await (await fetch(`/api/questions`)).json()
        setQuestions(newQuestions.questions)
        setAsking(!asking)
        setTitle("")
        setContent("")
        setTopicName("")
        setErrors([])
      }
    return data
  }
  return (
    <div id="add-comment-section">
      <NavLink to={`/`} exact={true} >
        <div id='add-comment-circle-div'>
          <p>{user && user.firstName[0]}</p>
        </div>
      </NavLink>
    <form id="content-form" onSubmit={createQuestion} autoComplete="off">
      <div id="question-textarea-div">
        <input id="content-input"
          name='content'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Ask Something...'
          ></input>
          <input id="content-input"
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='Give us more details'
          ></input>
          <select onChange={(e) => setTopicName(e.target.value)} id="topic-dropdown" type="select">
            <option value="" disabled selected>Pick a topic</option>
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
      <button id="add-question-button">Ask Question</button>
    </form>
  </div>
  );
};

export default NewQuestion;
