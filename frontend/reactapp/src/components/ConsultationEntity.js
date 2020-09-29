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
      persona: {

        idConsultation: null,
        consultationDate: null,
        diagnosis: null,
        treatment: null,
        observations: null,
        address1: null,
        address2: null,
        complaints: null,
        otherDetails: null,
        nextVisit: null,
        //////////////////////
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

        
      },
      selectedPersona : {
      },
      selectedDoctor : {

        idPatient: null,
        firstName: null,
        middleName: null,
        lastName: null,
        maidenName: null,
        address1: null,
        address2: null,
        phone1: null,
        phone2: null,
        gender: null,
        birthdate: null,
         //////////////////////
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
   
    this.personaService = new ConsulService();
    this.selectedDoctor = new ConsulService();  
    
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.footer = (
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>
    );
  }

  componentDidMount(){
    this.personaService.getAll().then(data => this.setState({personas: data})) 
    
  }

 
  save() {
    this.personaService.save(this.state.persona).then(data => {
      this.setState({
        visible : false,
        persona: {
          idConsultation: null,
          consultationDate: null,
          diagnosis: null,
          treatment: null,
          observations: null,
          complaints: null,
          otherDetails: null,
          nextVisit: null,
           //////////////////////
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
      });
     
      this.toast.show({severity: 'success', summary: 'Atención!', detail: 'Se guardó el registro correctamente.'});
      this.personaService.getAll().then(data => this.setState({personas: data}))
    })
  }

  delete() {
    if(window.confirm("¿Realmente desea eliminar el registro?")) {
      this.personaService.delete(this.state.selectedPersona.idPatient).then(data => {   
      this.toast.show({severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.'});
        this.personaService.getAll().then(data => this.setState({personas: data}));
      });
    }
  }

  render(){
    return (
      <div style={{width:'300%', margin: '0 auto', marginTop: '0 auto'}}>
        <Menubar model={this.items}/>
        <br/>
        <Panel header="React CRUD Consultas">
            <DataTable value={this.state.personas} paginator={true} rows="4" selectionMode="single" selection={this.state.selectedPersona} onSelectionChange={e => this.setState({selectedPersona: e.value})}>
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
                <InputText value={this.state.persona.consultationDate} style={{width : '100%'}} id="consultationDate" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.consultationDate = val;

                        return { persona };
                    })}
                  } />
                <label htmlFor="consultationDate">Fecha consulta</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.diagnosise} style={{width : '100%'}} id="diagnosis" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.diagnosis = val;

                        return { persona };
                    })}
                  } />
                <label htmlFor="diagnosis">Diagnostico</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.treatment} style={{width : '100%'}} id="treatment" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.treatment = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="treatment">Tratamiento</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.observations} style={{width : '100%'}} id="observations" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.observations = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="observations">Observaciones</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.complaints} style={{width : '100%'}} id="complaints" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.complaints = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="complaints">Quejas</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.otherDetails} style={{width : '100%'}} id="otherDetails" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.otherDetails = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="otherDetails">otros detalles</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.nextVisit} style={{width : '100%'}} id="nextVisit" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.nextVisit = val

                        return { persona };
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
                <InputText value={this.state.persona.docfirstName} style={{width : '100%'}} id="docfirstName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docfirstName = val;

                        return { persona };
                    })}
                  } />
                <label htmlFor="docfirstName">nombre docto</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.diagnosise} style={{width : '100%'}} id="docmiddleName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docmiddleName = val;

                        return { persona };
                    })}
                  } />
                <label htmlFor="docmiddleName">Diagnostico</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.doclastName} style={{width : '100%'}} id="doclastName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.doclastName = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="tdoclastName">TdoclastNameo</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.docmaidenName} style={{width : '100%'}} id="docmaidenName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docmaidenName = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="docmaidenName">docmaidenName:</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.docaddress1} style={{width : '100%'}} id="docaddress1" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docaddress1 = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="docaddress1">Quejas</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.docaddress2} style={{width : '100%'}} id="docaddress2" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docaddress2 = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="docaddress2">docaddress2</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.docgender} style={{width : '100%'}} id="docgender" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docgender = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="docgender">Siguiente Visita</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.docbirthdate} style={{width : '100%'}} id="docbirthdate" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docbirthdate = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="docbirthdate">docbirthdate</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.doccollegiateNumber} style={{width : '100%'}} id="doccollegiateNumber" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.doccollegiateNumber = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="doccollegiateNumberr">doccollegiateNumber</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.docisActive} style={{width : '100%'}} id="docisActive" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docisActive = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="docisActive">docisActive</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.docphone1} style={{width : '100%'}} id="docphone1" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docphone1 = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="docphone1">docphone1</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.docphone2} style={{width : '100%'}} id="docphone2" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.docphone2 = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="docphone">telefono 2</label>
              </span>

              </div>

              <hr/>
              <hr/>
              <div>
              <span className="p-float-label">
                <InputText value={this.state.persona.pasfirstName} style={{width : '100%'}} id="pasfirstName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.pasfirstName = val;

                        return { persona };
                    })}
                  } />
                <label htmlFor="pasfirstName">pasfirstName</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.pasmiddleName} style={{width : '100%'}} id="pasmiddleName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.pasmiddleName = val;

                        return { persona };
                    })}
                  } />
                <label htmlFor="pasmiddleName">pasmiddleName</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.paslastName} style={{width : '100%'}} id="paslastName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.paslastNamee = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="paslastName">paslastName</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.pasmaidenName} style={{width : '100%'}} id="pasmaidenName" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.pasmaidenName = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="pasmaidenName">dpasmaidenName:</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.pasaddress1} style={{width : '100%'}} id="pasaddress1" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.pasaddress1 = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="pasaddress11">pasaddress1</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.pasaddress2} style={{width : '100%'}} id="pasaddress2" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.pasaddress2 = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="pasaddress2">pasaddress22</label>
              </span>

              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.pasphone1} style={{width : '100%'}} id="pasphone1" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.pasphone1 = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="pasphone1">pasphone1</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.pasphone2} style={{width : '100%'}} id="pasphone2" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.pasphone2 = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="pasphone2">pasphone2</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.pasgender} style={{width : '100%'}} id="pasgender" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.pasgender = val

                        return { persona };
                    })}
                  } />
                <label htmlFor="pasgender">pasgender</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.persona.pasbirthdate} style={{width : '100%'}} id="pasbirthdate" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let persona = Object.assign({}, prevState.persona);
                        persona.pasbirthdate = val

                        return { persona };
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
      persona : {
        idConsultation: null,
        consultationDate: null,
        diagnosis: null,
        treatment: null,
        observations: null,
        address1: null,
        address2: null,
        complaints: null,
        otherDetails: null,
        nextVisit: null,
        
         //////////////////////
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
    });
   // document.getElementById('persona-form').reset();
  }

  showEditDialog() {
    this.setState({
      visible : true,
      persona : {
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
        idConsultation: this.state.selectedPersona.idConsultation,
        consultationDate: this.state.selectedPersona.consultationDate,
        diagnosis: this.state.selectedPersona.diagnosis,
        treatment: this.state.selectedPersona.treatment,
        observations: this.state.selectedPersona.observations,
        address1: this.state.selectedPersona.address1,
        address2: this.state.selectedPersona.address2,
        complaints: this.state.selectedPersona.complaints,
        otherDetails: this.state.selectedPersona.otherDetails,
        nextVisit: this.state.selectedPersona.nextVisit,
        idDoctor: this.state.selectedPersona.idDoctor,

         ////////////////////////
         
         //docfirstName : this.state.selectedPersona.docfirstName,
         //docmiddleName: this.state.selectedPersona.docmiddleNam,
        // doclastName: this.state.selectedPersona. doclastName,
        // docmaidenName: this.state.selectedPersona.docmaidenName,
        // docaddress1: this.state.selectedPersona.docaddress1,
         //docaddress2: this.state.selectedPersona.docaddress2,
         //docgender: this.state.selectedPersona.docgende,
         //docbirthdate: this.state.selectedPersona.docbirthdate,
         //doccollegiateNumber: this.state.selectedPersona.doccollegiateNumber,
         //docisActive: this.state.selectedPersona.docisActive,
         //docphone1: this.state.selectedPersona.docphone1,
         //docphone2: this.state.selectedPersona.docphone2,
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
