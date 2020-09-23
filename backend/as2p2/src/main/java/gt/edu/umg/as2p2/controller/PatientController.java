/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.edu.umg.as2p2.controller;

import gt.edu.umg.as2p2.model.PatientEntity;
import gt.edu.umg.as2p2.dao.PatientRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author AK272DT
 */
@RestController
@RequestMapping("/api/v1")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    /**
     * Obtiene la lista completa de pacientes
     *
     * @return Lista de pacientes
     */
    @GetMapping("/patients")
    public List<PatientEntity> getAllPatients() {
        return patientRepository.findAll();
    }

    /**
     * Obtiene el detalle de un paciente por id
     *
     * @param patientId Id del paciente
     * @return Detalle del paciente
     * @throws ResourceNotFoundException en dado caso no encuentre el recurso
     */
    @GetMapping("/patients/{id}")
    public ResponseEntity<PatientEntity> getUsersById(@PathVariable(value = "id") Long idPatient)
        throws ResourceNotFoundException {
        
        PatientEntity patient = 
                patientRepository
                    .findById(idPatient)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró el paciente con el id : " + idPatient));
        
        return ResponseEntity.ok().body(patient);
    }
    
    /**
     * Crea un nuevo paciente en la base de datos
     * 
     * @param patient El paciente
     * @return El paciente creado
     */
    @PostMapping("/patients")
    public PatientEntity createPatient(@Valid @RequestBody PatientEntity patient){
        return patientRepository.save(patient);
    }
    
    /**
     * Actualiza la entidad PatientEntity
     * 
     * @param idPatient Id del paciente
     * @param patientDetails Detalle del paciente
     * @return El paciente con los datos modificados
     * @throws ResourceNotFoundException en dado caso no se encuentre el recurso
     */
    @PutMapping("/patients/{id}")
    public ResponseEntity<PatientEntity> updatePatient(
        @PathVariable(value = "id") Long idPatient, @Valid @RequestBody PatientEntity patientDetails) 
        throws ResourceNotFoundException {
        
        PatientEntity patient = 
                patientRepository
                    .findById(idPatient)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró el paciente con el id : " + idPatient));
        
        patient.setFirstName(patientDetails.getFirstName());
        patient.setMiddleName(patientDetails.getMiddleName());
        patient.setLastName(patientDetails.getLastName());
        patient.setMaidenName(patientDetails.getMaidenName());
        patient.setAddress1(patientDetails.getAddress1());
        patient.setAddress2(patientDetails.getAddress2());
        patient.setPhone1(patientDetails.getPhone1());
        patient.setPhone2(patientDetails.getPhone2());
        patient.setGender(patientDetails.getGender());
        patient.setBirthdate(patientDetails.getBirthdate());
        
        final PatientEntity updatedPatient = patientRepository.save(patient);
        return ResponseEntity.ok(updatedPatient);
    }
    
    /**
     * Elimina un paciente de la base de datos
     * 
     * @param patientId Id del paciente
     * @return deleted = true si fue eliminado, false en caso contrario
     * @throws Exception La excepción 
     */
    @DeleteMapping("/patients/{id}")
    public Map<String, Boolean> deletePatient(@PathVariable(value = "id") Long patientId) 
        throws Exception {
        
        PatientEntity patient = 
                patientRepository
                    .findById(patientId)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró el paciente con el id : " + patientId));
        
        patientRepository.delete(patient);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        
        return response;
    }
}
