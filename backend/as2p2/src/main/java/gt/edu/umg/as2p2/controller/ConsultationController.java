package gt.edu.umg.as2p2.controller;

import gt.edu.umg.as2p2.dao.ConsultationRepository;
import gt.edu.umg.as2p2.model.ConsultationEntity;
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
 * Controlador ConsultationController
 * Permite implementar todas las operaciones del CRUD para la entidad ConsultationEntity
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
    
    /**
     * Actualiza la entidad ConsultationEntity
     * 
     * @param idConsultation Id de la consulta
     * @param consultationDetails Detalle de la consulta
     * @return La consulta con los datos modificados
     * @throws ResourceNotFoundException en dado caso no se encuentre el recurso
     */
    @PutMapping("/consultations/{id}")
    public ResponseEntity<ConsultationEntity> updateConsultation(
        @PathVariable(value = "id") Long idConsultation, @Valid @RequestBody ConsultationEntity consultationDetails)
        throws ResourceNotFoundException {
        
        ConsultationEntity consultation = 
                consultationRepository
                    .findById(idConsultation)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró la consulta con id : " + idConsultation));
        
        consultation.setConsultationDate(consultationDetails.getConsultationDate());
        consultation.setDiagnosis(consultationDetails.getDiagnosis());
        consultation.setTreatment(consultationDetails.getTreatment());
        consultation.setObservations(consultationDetails.getObservations());
        consultation.setComplaints(consultationDetails.getComplaints());
        consultation.setOtherDetails(consultationDetails.getOtherDetails());
        consultation.setNextVisit(consultationDetails.getNextVisit());
        
        final ConsultationEntity updatedConsultation = consultationRepository.save(consultation);
        return ResponseEntity.ok(updatedConsultation);
    }
    
    /**
     * Elimina una consulta de la base de datos
     * 
     * @param consultationId Id de la consulta
     * @return deleted = true si fue eliminado, false en caso contrario
     * @throws Exception La excepción
     */
    @DeleteMapping("/consultations/{id}")
    public Map<String, Boolean> deleteConsultation (@PathVariable(value = "id") Long consultationId) 
        throws Exception {
        
        ConsultationEntity consultation = 
                consultationRepository
                    .findById(consultationId)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró la consulta con el id : " + consultationId));
        
        consultationRepository.delete(consultation);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        
        return response;
    }
}
