import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faComment, faEllipsisH, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../SideBar';
import CommentSettingsBox from '../CommentSettingsBox';
import NewAnswer from '../NewAnswer';
import NewQuestion from '../NewQuestion';
import EditComment from '../EditComment';
import './QuestionsPage.css'

const QuestionsPage = () => {
  const [feed, setFeed] = useState([])
  const user = useSelector(state => state.session.user)
  const [asking, setAsking] = useState(false)
  const [answering, setAnswering] = useState(false)
  const [questionClickedId, setQuestionClickedId] = useState(-1)
  const [questionDeleted, setQuestionDeleted] = useState(false)
  const [answersShowing, setAnswersShowing] = useState(false)
  const [answerLiked, setAnswerLiked] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    (async function updateFeed() {
      const newFeed = ((await (await fetch(`api/questions`)).json()).questions)
      setFeed(newFeed);
    })()
  }, [title, asking, answering, questionClickedId, questionDeleted, answersShowing, answerLiked])


  const deleteQuestion = async (question) => {
    await fetch(`/api/questions/${question.id}`, {
      method: 'DELETE'
    })
    return setQuestionDeleted(!questionDeleted)
  }

  const deleteAnswer = async (question, answer) => {
    await fetch(`/api/questions/${question.id}/answers/${answer.id}`, {
      method: 'DELETE'
    })
    return setQuestionDeleted(!questionDeleted)
  }

  const likeAnswer = async (e, question, answer) => {
    e.preventDefault();
    if (user) {
      await fetch(`/api/questions/${question.id}/answers/${answer.id}/like`, {
        method: 'POST'
      })
      setAnswerLiked(!answerLiked)
      }
    }
  console.log("FEED ====>>>", feed)

  return (
    <div id="main-content">
      <SideBar />
      <div id="questions-feed">
        <div id="top-div">
          <div id="star-background">
            <FontAwesomeIcon icon={faStar}/>
          </div>
          <p id="page-title">Questions Page</p>
        </div>
      <div id="post-question-section">
        <NewQuestion asking={asking} setAsking={setAsking} />
      </div>
        {feed && feed.map(question => {
          return (
            <div id="border-div">
              <div id="question-box">
                <div id="question-text">
                  <p><strong>{question.title}</strong></p>
                  {(questionClickedId === question.id) && <p>{question.content}</p>}
                  <p id="question-topicname-text">Asked in {question.topicName}</p>
                  <p id="answers-number" onClick={() => setQuestionClickedId(question.id)}>{question.answers && question.answers.length} {(question.answers.length > 1) && "answers"} {(question.answers.length === 1) && "answer"}{(question.answers.length < 1) && "answers yet"}</p>
                </div>
                {user.id === question.userId &&
                  <div id="delete-icon-div">
                    <button id="delete-question-button" onClick={() => deleteQuestion(question)}><FontAwesomeIcon icon={faTimes} /></button>
                  </div>}
              </div>
                <div id="answer-background">
                <div id="create-answer-div" onClick={() => setQuestionClickedId(question.id)}>
                  {(user && question.userId !== user.id) && <NewAnswer question={question} setAnswering={setAnswering} answering={answering}/>}
                   {/* <button id="edit-answer-button" onClick={() => showCommentSettingsBox(answer.id)}><FontAwesomeIcon icon={faEllipsisH} /></button>} */}
                </div>
                {question.answers.map(answer => {
                    return ((answer.user && questionClickedId === question.id) &&
                      <div id="answer-box">
                        <div id="owner">
                          <img id="profile-pic" src={answer.user.images[0].url} alt="profile" />
                          <div id="owner-text">
                            <strong>{answer.user.firstName} {answer.user.lastName}</strong>
                            <p id="owner-bio">{answer.user.aboutMe}</p>
                          </div>
                        {user.id === answer.userId &&
                          <div id="delete-icon-div">
                            <button id="delete-question-button" onClick={() => deleteAnswer(question, answer)}><FontAwesomeIcon icon={faTimes} /></button>
                          </div>}
                        </div>
                        <div id="bottom-box">
                          <p id="answer">{answer.content}</p>
                          <div id="bottom-of-the-bottom">
                            <div id="like-button-box">
                              <button id="like-button" onClick={(e) => likeAnswer(e, question, answer)}>
                                <FontAwesomeIcon icon={faArrowUp} />
                                {answer.likes.length}
                                </button>
                            </div>
                          </div>
                        </div>
                    </div>
                  )})}
                </div>
            </div>
          )})}
      </div>
    </div>
  )
}

export default QuestionsPage
