import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';
import User from './user/user';
import Cities from './cities/cities';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/user",
      element: <User></User>
    }, {
      path: "/cities",
      element: <Cities></Cities>
    }
  ],
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
