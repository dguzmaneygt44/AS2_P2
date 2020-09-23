/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.edu.umg.as2p2.controller;

import gt.edu.umg.as2p2.model.PatientEntity;
import gt.edu.umg.as2p2.dao.PatientRepository;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
     * Obtener la lista completa de pacientes.
     *
     * @return Lista de pacientes.
     */
    @GetMapping("/patients")
    public List<PatientEntity> getAllPatients() {
        return patientRepository.findAll();
    }

    /**
     * Obtiene el detalle de un paciente por id.
     *
     * @param patientId
     * @return Detalle de un usuario por id
     * @throws ResourceNotFoundException Muestra esta excepción si no retornó
     * ningún paciente
     */
    @GetMapping("/patients/{id}")
    public ResponseEntity<PatientEntity> getUsersById(@PathVariable(value = "id_patient") Long idPatient) {
        PatientEntity patient = patientRepository
                .findById(idPatient)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró el paciente :: " + idPatient));
        
        return ResponseEntity.ok().body(patient);
    }
    
    /**
     * Crea un nuevo paciente.
     * 
     * @param patient El paciente
     * @return El paciente creado
     */
    @PostMapping("/patients")
    public PatientEntity createPatient(@Valid @RequestBody PatientEntity patient){
        return patientRepository.save(patient);
    }
}
