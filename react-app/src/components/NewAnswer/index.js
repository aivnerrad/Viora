import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import "./NewAnswer.css"

const NewAnswer = ({question, setAnswering}) => {
  const user = useSelector(state => state.session.user);
  const [answers, setAnswers] = useState([])
  const [content, setContent] = useState('');
  const [errors , setErrors] = useState([])


  const createAnswer = async(e) => {
    e.preventDefault()
    const newAnswer = {
      content,
      userId: user.id,
      questionId: question.id
    }

    const commentData = await fetch(`/api/users/${question.id}/answers`, {
      method: 'POST',
      body: JSON.stringify({...newAnswer}),
          headers: {
            "Content-Type": "application/json"
          }
      })
      const data = await commentData.json()
      if(data.errors){
        setErrors(data.errors)
        setAnswering(true)
      }else {
        const newAnswers = await (await fetch(`/api/users/answers`)).json()
        setAnswers(newAnswers.answers)
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
    <form id="content-form" onSubmit={createAnswer}>
      <div id="textarea-div">
        <input id="content-input"
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='Give us your answer...'
          ></input>
          <div>
            {errors.map((error, ind) => (<li key={ind}>{error}</li>))}
          </div>
      </div>
      <button id="add-comment-button">Add Answer</button>
    </form>
  </div>
  );
};

export default NewAnswer;
