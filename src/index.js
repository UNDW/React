import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={ <App state ={state} addPost={addPost} updateNewPostText={updateNewPostText}/> }>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

subscribe(rerenderEntireTree);


reportWebVitals();
rerenderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
