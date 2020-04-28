import React from 'react';  
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz.js'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Quiz />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
