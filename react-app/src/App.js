import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/MyProfile';
import { authenticate } from './store/session';
import HomePage from './components/HomePage';
import TopicPage from './components/TopicPage';
import QuestionsPage from './components/QuestionsPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/topic/:title' exact={true}>
          <TopicPage />
        </Route>
        <ProtectedRoute path='/' exact={true} >
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/answer' exact={true} >
          <QuestionsPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
