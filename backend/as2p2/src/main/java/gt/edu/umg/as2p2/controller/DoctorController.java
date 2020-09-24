/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.edu.umg.as2p2.controller;

import gt.edu.umg.as2p2.dao.DoctorRepository;
import gt.edu.umg.as2p2.model.DoctorEntity;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin("*")
public class DoctorController {
    
    @Autowired
    private DoctorRepository doctorRepository;
    
    /**
     * Obtiene la lista completa de doctores
     * 
     * @return Lista de doctores
     */
    @GetMapping("/doctors")
    public List<DoctorEntity> getAllDoctors(){
        return doctorRepository.findAll();
    }
    
    /**
     * Obtiene el detalle de un doctor por id
     * 
     * @param idDoctor Id del doctor
     * @return Detalle del doctor
     * @throws ResourceNotFoundException en dado caso no encuentre el recurso
     */
    @GetMapping("/doctors/{id}")
    public ResponseEntity getDoctorsById(@PathVariable(value = "id") Long idDoctor)
        throws ResourceNotFoundException {
        
        DoctorEntity doctor =
                doctorRepository
                    .findById(idDoctor)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró el doctor con el id : " + idDoctor));
        
        return ResponseEntity.ok().body(doctor);
    }
    
    /**
     * Crea un nuevo doctor en la base de datos
     * 
     * @param doctor El doctor
     * @return El doctor creado
     */
    @PostMapping("/doctors")
    public DoctorEntity createDoctor(@Valid @RequestBody DoctorEntity doctor){
        return doctorRepository.save(doctor);
    }
    
    /**
     * Actualiza la entidad DoctorEntity
     * 
     * @param idDoctor Id del doctor
     * @param doctorDetails Detalle del doctor
     * @return El doctor con los datos modificados
     * @throws ResourceNotFoundException en dado caso no se encuentre el recurso
     */
    @PutMapping("/doctors/{id}")
    public ResponseEntity<DoctorEntity> updateDoctor(
        @PathVariable(value = "id") Long idDoctor, @Valid @RequestBody DoctorEntity doctorDetails) 
        throws ResourceNotFoundException {
        
        DoctorEntity doctor = 
                doctorRepository
                    .findById(idDoctor)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró el doctor con el id : " + idDoctor));
        
        doctor.setFirstName(doctorDetails.getFirstName());
        doctor.setMiddleName(doctorDetails.getMiddleName());
        doctor.setLastName(doctorDetails.getLastName());
        doctor.setMaidenName(doctorDetails.getMaidenName());
        doctor.setAddress1(doctorDetails.getAddress1());
        doctor.setAddress2(doctorDetails.getAddress2());
        doctor.setGender(doctorDetails.getGender());
        doctor.setBirthdate(doctorDetails.getBirthdate());
        doctor.setCollegiateNumber(doctorDetails.getCollegiateNumber());
        doctor.setIsActive(doctorDetails.getIsActive());
        doctor.setPhone1(doctorDetails.getPhone1());
        doctor.setPhone2(doctorDetails.getPhone2());
        
        final DoctorEntity updatedDoctor = doctorRepository.save(doctor);
        return ResponseEntity.ok(updatedDoctor);
    }
    
    /**
     * Elimina un doctor de la base de datos
     * 
     * @param doctorId Id del doctor
     * @return deleted = true si fue eliminado, false en caso contrario
     * @throws Exception La excepción
     */
    @DeleteMapping("/doctors/{id}")
    public Map<String, Boolean> deleteDoctor(@PathVariable(value = "id") Long doctorId) 
        throws Exception {
        
        DoctorEntity doctor = 
                doctorRepository
                    .findById(doctorId)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró el doctor con el id : " + doctorId));
        
        doctorRepository.delete(doctor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        
        return response;
    }
}
