import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {PageOne} from './components/Pages'
import {PageTwo} from './components/Pages'

function App() {
  return (
       <Switch>
         <Route path='/page-1' exact component={PageOne}></Route>
         <Route path='/page-2' exact component={PageTwo}></Route>
       </Switch>
    );
}

export default App;
