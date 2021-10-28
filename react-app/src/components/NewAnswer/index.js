import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import "./NewAnswer.css"

const NewAnswer = ({question, answering, setAnswering}) => {
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

    const answerData = await fetch(`/api/questions/${question.id}/answers`, {
      method: 'POST',
      body: JSON.stringify({...newAnswer}),
          headers: {
            "Content-Type": "application/json"
          }
      })
      const data = await answerData.json()
      if(data.errors){
        setErrors(data.errors)
        setAnswering(!answering)
      }else {
        const newAnswers = await (await fetch(`/api/questions/${question.id}/answers`)).json()
        setAnswers(newAnswers.answers)
        setAnswering(!answering)
        setContent("")
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
    <form id="content-form" onSubmit={createAnswer} autoComplete="off">
      <div id="textarea-div">
        <input id="content-input"
          name='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='Give us your answer...'
          ></input>
          <div>
            {errors.map((error, ind) => (<span key={ind}>{error}<br/></span>))}
          </div>
      </div>
      <button id="add-comment-button">Add Answer</button>
    </form>
  </div>
  );
};

export default NewAnswer;
