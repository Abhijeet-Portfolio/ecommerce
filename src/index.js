import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import "./assets/css/index.css";
import Home from './component/Home';
import allReducers from "./reducers";
import App from "./component/App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(allReducers, applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Home />} />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
