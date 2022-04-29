import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={ <App state ={state} dispatch={store.dispatch.bind(store)} store={store}/> }>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();
