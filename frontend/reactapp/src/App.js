import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PersonaService } from './service/PersonaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Panel} from 'primereact/panel';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {};
    this.personaService = new PersonaService();
  }

  componentDidMount(){
    this.personaService.getAll().then(data => this.setState({personas: data}))
  }

  render(){
    return (
      <Panel header="react" style={{width: '100%', marginTop:'20px'}}>
        <DataTable value={this.state.personas}>
          <Column field="idPatient" header="Id"></Column>
          <Column field="firstName" header="Nombre"></Column> 
          <Column field="middleName" header="Aeguno nombre"></Column>
          <Column field="lastName" header="Apellido"></Column>
          <Column field="maidenName" header="Segundo apellido"></Column>
          <Column field="address1" header="Direccion1"></Column>
          <Column field="address2" header="Direccion2"></Column>
          <Column field="phone1" header="Telefono1"></Column>
          <Column field="phone2" header="Telefono2"></Column>
          <Column field="gender" header="Genero"></Column>
          <Column field="birthdate" header="Fecha nacimiento"></Column>
        </DataTable>
      </Panel>
    );
  }
}