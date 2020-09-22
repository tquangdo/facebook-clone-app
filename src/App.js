import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  let [{ user }] = useStateValue();
  if (!user) {
    user = JSON.parse(localStorage.getItem('FB_CLONE_LOGIN_USER'))
  }

  return (
    <div className="App">
      { !user ? (
        <Login />
      ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
