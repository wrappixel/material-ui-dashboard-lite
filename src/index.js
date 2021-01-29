import React, {Suspense} from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/style.css'
import Spinner from "./views/Spinner/Spinner";
ReactDOM.render(
  
  	<Suspense fallback={<Spinner />}>
    	<BrowserRouter basename="/demos/free-admin-templates/material-ui-dashboard-lite/">
  	  	  <App />
  	  </BrowserRouter>
    </Suspense>
  ,
  document.getElementById('root')
);

