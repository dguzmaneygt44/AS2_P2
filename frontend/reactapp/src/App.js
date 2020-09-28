
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Inicio from './components/Navigation';
import Persona from './components/App';
import Doctor from './components/DoctorEntity';
import Consultation from './components/ConsultationEntity';
import 'bootstrap/dist/css/bootstrap.css';

function App(){
  return(

    
    <Router>
        <div>
            <h1>Rutas 122221</h1>
        </div>
        <a path={'/App'} href={'/App'} component={Persona} className="btn btn-primary">Persona</a>
        <a path={'/App'} href={'/DoctorEntity'} component={Doctor} className="btn btn-outline-secondary">Doctor</a>
        <a path={'/App'} href={'/ConsultationEntity'} component={Consultation} className="btn btn-outline-secondary">Consultas</a>
        <Switch>
          <Route path={'/Navigation'} component={Inicio}></Route>
          <Route path={'/App'} component={Persona}></Route>
          <Route path={'/DoctorEntity'} component={Doctor}></Route>
          <Route path={'/ConsultationEntity'} component={Consultation}></Route>
          
         
        </Switch>

    </Router>
  );
}

export default App;