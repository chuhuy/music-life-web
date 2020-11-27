import React from 'react';
import './App.css';
import { PageTitleProvider } from "./contexts/PageTitle";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './redux/store';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <PageTitleProvider>
      <Provider store={store}>
        <Router basename={PUBLIC_URL}>
          <Routes/>
        </Router>
      </Provider>
    </PageTitleProvider>
  );
}

export default App;
