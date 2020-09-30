import React, { Component } from 'react';
//import './App.css';
import { ConsulService } from '../service/ConsulService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Panel} from 'primereact/panel';

import {Menubar} from 'primereact/menubar';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { Toast } from 'primereact/toast';

import { Dropdown } from 'primereact/dropdown';



import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';




export default class ConsultationEntity extends Component{
  constructor(){
    super();
    this.state = {
      visible : false,
      consulta: {

        idConsultation: null,
        consultationDate: null,
        diagnosis: null,
        treatment: null,
        observations: null,
        complaints: null,
        otherDetails: null,
        nextVisit: null,
        //////////////////////
        docidDoctor:null,
        docfirstName : null,
        docmiddleName: null,
        doclastName: null,
        docmaidenName: null,
        docaddress1: null,
        docaddress2: null,
        docgender:null,
        docbirthdate:null,
        doccollegiateNumber: null,
        docisActive:null,
        docphone1:null,
        docphone2: null,
       //////////////////////
      pasfirstName:null,
      pasmiddleName:null,
      paslastName:null,
      pasmaidenName:null,
      pasaddress1:null,
      pasaddress2:null,
      pasphone1:null,
      pasphone2:null,
      pasgender:null,
      pasbirthdate:null
        ///////////////////////////

        
      }
      
    };
    this.items = [
      {
        label : 'Nuevo',
        icon  : 'pi pi-fw pi-plus',
        command : () => {this.showSaveDialog()}
      },
      {
        label : 'Editar',
        icon  : 'pi pi-fw pi-pencil',
        command : () => {this.showEditDialog()}
      },
      {
        label : 'Eliminar',
        icon  : 'pi pi-fw pi-trash',
        command : () => {this.delete()}
      }
    ];
   
    this.consultaService = new ConsulService();
    this.consultaDoctor = new ConsulService();  
    
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.footer = (
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>
    );
  }

  componentDidMount(){
    this.consultaService.getAll().then(data => this.setState({consultas: data})) 
    
  }

 
  save() {
    this.consultaService.save(this.state.consulta ).then(data => {
      this.setState({
        visible : false,
        consulta: {
          
          idConsultation: null,
          consultationDate: null,
          diagnosis: null,
          treatment: null,
          observations: null,
          complaints: null,
          otherDetails: null,
          nextVisit: null,
//////////////////////////////////////////
idDoctor:{ 
        docidDoctor:null,
        docfirstName : null,
        docmiddleName: null,
        doclastName: null,
        docmaidenName: null,
        docaddress1: null,
        docaddress2: null,
        docgender:null,
        docbirthdate:null,
        doccollegiateNumber: null,
        docisActive:null,
        docphone1:null,
        docphone2: null
      },
       //////////////////////
      pasfirstName:null,
      pasmiddleName:null,
      paslastName:null,
      pasmaidenName:null,
      pasaddress1:null,
      pasaddress2:null,
      pasphone1:null,
      pasphone2:null,
      pasgender:null,
      pasbirthdate:null
        ///////////////////////////
          
        }
      });
     
      this.toast.show({severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.'});
      this.consultaService.getAll().then(data => this.setState({consultas: data}))
    })
  }

  delete() {
    if(window.confirm("¿Realmente desea eliminar el registro?")) {
      this.consultaService.delete(this.state.selectedConsulta.idConsultation).then(data => {   
      this.toast.show({severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.'});
        this.consultaService.getAll().then(data => this.setState({consultas: data}));
      });
    }
  }

  render(){
    return (
      <div style={{width:'300%', margin: '0 auto', marginTop: '0 auto'}}>
        <Menubar model={this.items}/>
        <br/>
        <Panel header="React CRUD Consultas">
            <DataTable value={this.state.consultas} paginator={true} rows="4" selectionMode="single" selection={this.state.selectedConsulta} onSelectionChange={e => this.setState({selectedConsulta: e.value})}>
              <Column field="idConsultation" header="ID_consulta"></Column>
              <Column field="consultationDate" header="Fecha"></Column>
              <Column field="diagnosis" header="Diagnostico"></Column>
              <Column field="treatment" header="Tratamiento"></Column>
              <Column field="observations" header="Observacion"></Column>
              <Column field="complaints" header="Quejas"></Column>
              <Column field="otherDetails" header="OtrosDetalles"></Column>
              <Column field="nextVisit" header="SiguientesVisitas"></Column>
              
              <Column field="idDoctor.firstName" header="Nombre Doctor"></Column>
              <Column field="idDoctor.middleName" header="Segundo Nombre Doctor"></Column>
              <Column field="idDoctor.lastName" header="Apellido Doctor"></Column>
              <Column field="idDoctor.maidenName" header="Segundo Apellido Doctor"></Column>
              <Column field="idDoctor.address1" header="Direccion"></Column>
              <Column field="idDoctor.address2" header="Segundo Direccion"></Column>
              <Column field="idDoctor.gender" header="Genero"></Column>
              <Column field="idDoctor.birthdate" header="Fecha"></Column>
              <Column field="idDoctor.collegiateNumber" header="Colegiado"></Column>
              <Column field="idDoctor.isActive" header="Estado"></Column>
              <Column field="idDoctor.phone1" header="Telefono"></Column>
              <Column field="idDoctor.phone2" header="Telefono2"></Column>
              
              <Column field="idPatient.firstName" header="Nombre Paciente"></Column>
              <Column field="idPatient.middleName" header="Segundo Nombre Paciente"></Column>
              <Column field="idPatient.lastName" header="Apellido Doctor"></Column>
              <Column field="idPatient.maidenName" header="Segundo Apellido Paciente"></Column>
              <Column field="idPatient.address1" header="Direccion Paciente"></Column>
              <Column field="idPatient.address2" header="Segundo Direccion paciente"></Column>
              <Column field="idPatient.phone1" header="Telefono paciente"></Column>
              <Column field="idPatient.phone2" header="Telefono2 paciente"></Column>
              <Column field="idPatient.gender" header="Genero"></Column>
              <Column field="idPatient.birthdate" header="Fecha Nacimiento"></Column>
              
              
    
            </DataTable>
        </Panel>
        <Dialog header="Crear Consulta" visible={this.state.visible} style={{width: '800px'}} footer={this.footer} modal={true} onHide={() => this.setState({visible: false})}>
            <form id="persona-form">

              <div>
              <span className="p-float-label">
                <InputText value={this.state.consulta.idConsultation} style={{width : '100%'}} id="idConsultation" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta.consulta);
                        consulta.idConsultation = val;

                        return { consulta };
                    })}
                  } />
                <label htmlFor="idConsultation">id</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.consultationDate} style={{width : '100%'}} id="consultationDate" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.consultationDate = val;

                        return { consulta };
                    })}
                  } />
                <label htmlFor="consultationDate">Fecha consulta</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.diagnosis} style={{width : '100%'}} id="diagnosis" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.diagnosis = val;

                        return { consulta };
                    })}
                  } />
                <label htmlFor="diagnosis">Diagnostico</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.treatment} style={{width : '100%'}} id="treatment" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.treatment = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="treatment">Tratamiento</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.observations} style={{width : '100%'}} id="observations" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.observations = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="observations">Observaciones</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.complaints} style={{width : '100%'}} id="complaints" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.complaints = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="complaints">Quejas</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.otherDetails} style={{width : '100%'}} id="otherDetails" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.otherDetails = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="otherDetails">otros detalles</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.nextVisit} style={{width : '100%'}} id="nextVisit" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.nextVisit = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="nextVisit">Siguiente Visita</label>
              </span>
              </div>
              <br/>
              <hr/>
              <hr/>
              
              <div>
              <span className="p-float-label">
                <InputText value={this.state.consulta.docfirstName} style={{width : '100%'}} id="docfirstName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.docfirstName = val;

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docfirstName">.idDoctornombre docto</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.diagnosise} style={{width : '100%'}} id="docmiddleName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.docmiddleName = val;

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docmiddleName">Diagnostico</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.doclastName} style={{width : '100%'}} id="doclastName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.doclastName = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="tdoclastName">idDoctor.TdoclastNameo</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.docmaidenName} style={{width : '100%'}} id="docmaidenName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                          consulta.docmaidenName = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docmaidenName">idDoctor.docmaidenName:</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.docaddress1} style={{width : '100%'}} id="docaddress1" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.docaddress1 = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docaddress1">idDoctor.Quejas</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.docaddress2} style={{width : '100%'}} id="docaddress2" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.docaddress2 = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docaddress2">idDoctor.docaddress2</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.docgender} style={{width : '100%'}} id="docgender" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.docgender = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docgender">idDoctor.Siguiente Visita</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.docbirthdate} style={{width : '100%'}} id="docbirthdate" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.docbirthdate = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docbirthdate">docbirthdate</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.doccollegiateNumber} style={{width : '100%'}} id="doccollegiateNumber" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.doccollegiateNumber = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="doccollegiateNumberr">idDoctor.doccollegiateNumber</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.docisActive} style={{width : '100%'}} id="docisActive" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.docisActive = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docisActive">idDoctor.docisActive</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.docphone1} style={{width : '100%'}} id="docphone1" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.docphone1 = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docphone1">idDoctor.docphone1</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.docphone2} style={{width : '100%'}} id="docphone2" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.docphone2 = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="docphone">idDoctor.telefono 2</label>
              </span>

              </div>

              <hr/>
              <hr/>
              <div>
              <span className="p-float-label">
                <InputText value={this.state.consulta.pasfirstName} style={{width : '100%'}} id="pasfirstName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.pasfirstName = val;

                        return { consulta };
                    })}
                  } />
                <label htmlFor="pasfirstName">pasfirstName</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.pasmiddleName} style={{width : '100%'}} id="pasmiddleName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.pasmiddleName = val;

                        return { consulta };
                    })}
                  } />
                <label htmlFor="pasmiddleName">pasmiddleName</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.paslastName} style={{width : '100%'}} id="paslastName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.paslastNamee = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="paslastName">paslastName</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.pasmaidenName} style={{width : '100%'}} id="pasmaidenName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.pasmaidenName = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="pasmaidenName">dpasmaidenName:</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.pasaddress1} style={{width : '100%'}} id="pasaddress1" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.pasaddress1 = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="pasaddress11">pasaddress1</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.pasaddress2} style={{width : '100%'}} id="pasaddress2" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.pasaddress2 = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="pasaddress2">pasaddress22</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.pasphone1} style={{width : '100%'}} id="pasphone1" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.pasphone1 = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="pasphone1">pasphone1</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.pasphone2} style={{width : '100%'}} id="pasphone2" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.pasphone2 = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="pasphone2">pasphone2</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.pasgender} style={{width : '100%'}} id="pasgender" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.pasgender = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="pasgender">pasgender</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.consulta.pasbirthdate} style={{width : '100%'}} id="pasbirthdate" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let consulta = Object.assign({}, prevState.consulta);
                        consulta.pasbirthdate = val

                        return { consulta };
                    })}
                  } />
                <label htmlFor="pasbirthdate">pasbirthdate</label>
              </span>
              <br/> 
    
              <div>
                
              </div>     

              </div>
              


            </form>
        </Dialog>
       
        <Toast ref={(el) => this.toast = el} />
      </div>
    );
  }

  showSaveDialog(){
    this.setState({
      visible : true,
      consulta : {
        
        idConsultation: null,
        consultationDate: null,
        diagnosis: null,
        treatment: null,
        observations: null,
        complaints: null,
        otherDetails: null,
        nextVisit: null,
        
         docidDoctor:null,
         docfirstName : null,
         docmiddleName: null,
         doclastName: null,
         docmaidenName: null,
         docaddress1: null,
         docaddress2: null,
         docgender:null,
         docbirthdate:null,
         doccollegiateNumber: null,
         docisActive:null,
         docphone1:null,
         docphone2: null,
      
       pasfirstName:null,
       pasmiddleName:null,
       paslastName:null,
       pasmaidenName:null,
       pasaddress1:null,
       pasaddress2:null,
       pasphone1:null,
       pasphone2:null,
       pasgender:null,
       pasbirthdate:null
         ///////////////////////////
      }
    });
   // document.getElementById('persona-form').reset();
  }

  showEditDialog() {
    this.setState({
      visible : true,
      consulta : {
        /*
        id: this.state.selectedPersona.id,
        nombre: this.state.selectedPersona.nombre,
        apellido: this.state.selectedPersona.apellido,
        direccion: this.state.selectedPersona.direccion,
        telefono : this.state.selectedPersona.telefono*/
/*
        idPatient: this.state.selectedPersona.idPatient,
        firstName: this.state.selectedPersona.firstName,
        middleName: this.state.selectedPersona.middleName,
        lastName: this.state.selectedPersona.lastName,
        maidenName: this.state.selectedPersona.maidenName,
        address1: this.state.selectedPersona.address1,
        address2: this.state.selectedPersona.address2,
        phone1: this.state.selectedPersona.phone1,
        phone2:this.state.selectedPersona.phone2,
        gender: this.state.selectedPersona.gender,
        birthdate:this.state.selectedPersona.birthdate
        */
        idConsultation: this.state.selectedConsulta.idConsultation,
        consultationDate: this.state.selectedConsulta.consultationDate,
        diagnosis: this.state.selectedConsulta.diagnosis,
        treatment: this.state.selectedConsulta.treatment,
        observations: this.state.selectedConsulta.observations,
        complaints: this.state.selectedConsulta.complaints,
        otherDetails: this.state.selectedConsulta.otherDetails,
        nextVisit: this.state.selectedConsulta.nextVisit,
        

         ////////////////////////
         docidDoctor: this.state.selectedConsulta.docidDoctor,
         docfirstName : this.state.selectedConsulta.docfirstName,
         docmiddleName: this.state.selectedConsulta.docmiddleNam,
         doclastName: this.state.selectedConsulta.doclastName,
         docmaidenName: this.state.selectedConsulta.docmaidenName,
         docaddress1: this.state.selectedConsulta.docaddress1,
         docaddress2: this.state.selectedConsulta.docaddress2,
         docgender: this.state.selectedConsulta.docgende,
         docbirthdate: this.state.selectedConsulta.docbirthdate,
         doccollegiateNumber: this.state.selectedConsulta.doccollegiateNumber,
         docisActive: this.state.selectedConsulta.docisActive,
         docphone1: this.state.selectedConsulta.docphone1,
         docphone2: this.state.selectedConsulta.docphone2,
        //////////////////////
       //pasfirstName: this.state.selectedPersona.pasfirstName,
       ///pasmiddleName: this.state.selectedPersona.pasmiddleName,
       //paslastName: this.state.selectedPersona.paslastName,
       //pasmaidenName: this.state.selectedPersona.pasmaidenName,
       //pasaddress1: this.state.selectedPersona.pasaddress1,
       //pasaddress2: this.state.selectedPersona.pasaddress2,
       //pasphone1: this.state.selectedPersona.pasphone1,
       //pasphone2: this.state.selectedPersona.pasphone2,
       ///pasgender: this.state.selectedPersona.pasgender,
       //pasbirthdate: this.state.selectedPersona.pasbirthdate
         ///////////////////////////
      }
    })
  }
}
