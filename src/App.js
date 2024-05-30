
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Appfooter from './components/Appheader/Appfooter/Appfooter';
import Appheader from './components/Appheader/Appheader';
import Apphome from './components/Appheader/Apphome/Apphome';
import Login from './components/Appheader/Login/Login';

import {Switch} from 'react-router-dom';
import Companies from './components/Companies/Companies';


function App(){
  
  function handleBtn(){
    alert("logged in successfully")
  }

  function onprompt(){
    prompt("parent component")
  }
  return (
      <div>
        <h1>hello vinay</h1>
       <Appheader /> 
          <Switch>

              <Route path="/login" exact>
                 <Login />
              </Route>
              
              <Route path="/Apphome" exact>
                <Apphome />
              </Route>
              
          </Switch>
          
       <Apphome />
       <Appfooter />
       <Companies />
       {/* <Login onclick1={handleBtn} promphandler={onprompt} /> */}
      </div>
  );
}
export default App;