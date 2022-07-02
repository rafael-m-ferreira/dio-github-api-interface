import React from 'react';
import Layout from './components/layout';

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/67316263?v=4"
            alt="Avatar of User"
          />
          <h1>Rafael Ferreira</h1>
          <h3>Username: </h3>
          <span>rafaelmferreira</span>
          <div>
            <h4>Folowers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Folowings</h4>
            <span>5</span>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
