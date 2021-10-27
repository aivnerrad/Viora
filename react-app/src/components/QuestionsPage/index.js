import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faComment, faEllipsisH, faStar } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../SideBar';
import CommentSettingsBox from '../CommentSettingsBox';
import NewAnswer from '../NewAnswer';
import NewQuestion from '../NewQuestion';
import EditComment from '../EditComment';
import './QuestionsPage.css'

const QuestionsPage = () => {
  const [feed, setFeed] = useState([])
  const user = useSelector(state => state.session.user)
  const [answering, setAnswering] = useState(false)
  const [editing, setEditing] = useState(false)
  const [questionClickedId, setQuestionClickedId] = useState(-1)
  const [editedQuestionId, setEditedQuestionId] = useState(-1)
  const [questionDeleted, setQuestionDeleted] = useState(false)
  const [answersShowing, setAnswersShowing] = useState(false)
  const [answerLiked, setAnswerLiked] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    updateFeed()
  }, [title, answering, editing, questionClickedId, editedQuestionId, questionDeleted, answersShowing, answerLiked])

  const updateFeed = async() => {
    setFeed((await (await fetch(`api/questions`)).json()).questions)
  }

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
        <NewQuestion />
      </div>
        {feed && feed.map(question => {
          console.log("question", question)
          return (
            <div id="border-div">
              <div id="question-box">
                <div id="question-text">
                  <p><strong>{question.title}</strong></p>
                  {(questionClickedId === question.id) && <p>{question.content}</p>}
                <p id="answers-number" onClick={() => setQuestionClickedId(question.id)}>{question.answers && question.answers.length} {(question.answers.length < 2) && "answer"}{(question.answers.length < 1) && "answers yet"}</p>
                </div>
              </div>
                <div id="answer-background">
                {question.answers.map(answer => {
                    return ((answer.user && questionClickedId === question.id) &&
                      <div id="answer-box">
                        <div id="owner">
                          <img id="profile-pic" src={answer.user.images[0].url} alt="profile" />
                          <div id="owner-text">
                            <strong>{answer.user.firstName} {answer.user.lastName}</strong>
                            <p id="owner-bio">{answer.user.aboutMe}</p>
                          </div>
                        </div>
                        <div id="bottom-box">
                          {((user && answer.userId !== user.id) || !editing) && <p id="answer">{answer.content}</p>}
                          <div id="bottom-of-the-bottom">
                            <div id="like-button-box">
                              {/*<button id="like-button" onClick={(e) => likeComment(e, question.id, answer.id)}>}
                                <FontAwesomeIcon icon={faArrowUp} />
                                </button>*/}
                            </div>
                            {/* <div id="edit-settings-box">
                              {((user && answer.userId === user.id) && !editing && answersShowing && questionClicked === answer.id) &&  <CommentSettingsBox answer={answer} title={title} question={question} setEditing={setEditing} setQuestionDeleted={setQuestionDeleted} setEditedQuestionId={setEditedQuestionId} />}
                              {((user && answer.userId === user.id) && !editing) &&  <button id="edit-answer-button" onClick={() => showCommentSettingsBox(answer.id)}><FontAwesomeIcon icon={faEllipsisH} /></button>}
                            </div> */}
                          </div>
                          {((editedQuestionId === answer.id) && (user && answer.userId === user.id) && editing) && <EditComment answer={answer} question={question} setEditing={setEditing} title={title} setEditedQuestionId={setEditedQuestionId} setAnswersShowing={setAnswersShowing}/>}
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
