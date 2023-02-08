import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeManagerProvider from './context/Theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about/About';
//import TasksContextProvider from './context/TasksContext';
import Tasks from './components/tasks/Tasks';
import Api from './components/api/Api';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Tasks /> },
      { path: '/about/:articles', element: <About /> },
      { path: '/about/', element: <About /> },
      { path: '/api', element: <Api /> },
    ],
  },
  { path: '/about/', element: <About /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<TasksContextProvider>

  <ThemeManagerProvider value='dark'>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </ThemeManagerProvider>
  //</TasksContextProvider>
);
