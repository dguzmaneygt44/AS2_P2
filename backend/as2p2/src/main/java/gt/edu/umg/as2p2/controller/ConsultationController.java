/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.edu.umg.as2p2.controller;

import gt.edu.umg.as2p2.dao.ConsultationRepository;
import gt.edu.umg.as2p2.model.ConsultationEntity;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin("*")
public class ConsultationController {
    
    @Autowired
    private ConsultationRepository consultationRepository;
    
    /**
     * Obtiene la lista completa de consultas
     * 
     * @return Lista de consultas 
     */
    @GetMapping("/consultations")
    public List<ConsultationEntity> getAllConsultations() {
        return consultationRepository.findAll();
    }
    
    /**
     * Obtiene el detalle de una consulta por id
     * 
     * @param idConsultation Id de la consulta
     * @return Detalle de la consulta
     * @throws ResourceNotFoundException en dado caso no encuentre el recurso 
     */
    @GetMapping("/consultations/{id}")
    public ResponseEntity<ConsultationEntity> getConsultationsById(@PathVariable(value = "id") Long idConsultation)
        throws ResourceNotFoundException {
        
        ConsultationEntity consultation = 
                consultationRepository
                    .findById(idConsultation)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró la consulta con el id : " + idConsultation));
        
        return ResponseEntity.ok().body(consultation);
    }
    
    /**
     * Crea una nueva consulta en la base de datos.
     * 
     * @param consultation La consulta
     * @return La consulta creada
     */
    @PostMapping("/consultations")
    public ConsultationEntity createConsultation(@Valid @RequestBody ConsultationEntity consultation){
        return consultationRepository.save(consultation);
    }
}
