import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz.js';
import QuizList from './containers/QuizList/QuizList.js';
import QuizCreator from './containers/QuizCreator/QuizCreator.js';
import Auth from './containers/Auth/Auth.js';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={QuizList} />
      </Switch>
    </Layout>
  );
}

export default App;
