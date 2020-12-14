import React from 'react';
import './App.css';
import { PageTitleProvider } from "./contexts/PageTitle";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import Routes from './routes';
import { PersistGate } from "redux-persist/integration/react";
import LoadingComponent from './shared/components/loading';
import 'bootstrap/dist/css/bootstrap.min.css';

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <PageTitleProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<></>}>
          <Router basename={PUBLIC_URL}>
            <Routes/>
            <LoadingComponent/>
          </Router>
        </PersistGate>
      </Provider>
    </PageTitleProvider>
  );
}

export default App;
