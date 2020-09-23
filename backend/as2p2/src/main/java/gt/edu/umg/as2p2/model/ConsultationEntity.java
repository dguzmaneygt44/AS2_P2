/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.edu.umg.as2p2.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author AK272DT
 */
@Entity
@Table(name = "tb_consultation")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ConsultationEntity.findAll", query = "SELECT c FROM ConsultationEntity c"),
    @NamedQuery(name = "ConsultationEntity.findByIdConsultation", query = "SELECT c FROM ConsultationEntity c WHERE c.idConsultation = :idConsultation"),
    @NamedQuery(name = "ConsultationEntity.findByConsultationDate", query = "SELECT c FROM ConsultationEntity c WHERE c.consultationDate = :consultationDate"),
    @NamedQuery(name = "ConsultationEntity.findByDiagnosis", query = "SELECT c FROM ConsultationEntity c WHERE c.diagnosis = :diagnosis"),
    @NamedQuery(name = "ConsultationEntity.findByTreatment", query = "SELECT c FROM ConsultationEntity c WHERE c.treatment = :treatment"),
    @NamedQuery(name = "ConsultationEntity.findByObservations", query = "SELECT c FROM ConsultationEntity c WHERE c.observations = :observations"),
    @NamedQuery(name = "ConsultationEntity.findByComplaints", query = "SELECT c FROM ConsultationEntity c WHERE c.complaints = :complaints"),
    @NamedQuery(name = "ConsultationEntity.findByOtherDetails", query = "SELECT c FROM ConsultationEntity c WHERE c.otherDetails = :otherDetails"),
    @NamedQuery(name = "ConsultationEntity.findByNextVisit", query = "SELECT c FROM ConsultationEntity c WHERE c.nextVisit = :nextVisit")})
public class ConsultationEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_consultation")
    private Integer idConsultation;
    @Column(name = "consultation_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date consultationDate;
    @Basic(optional = false)
    @Column(name = "diagnosis")
    private String diagnosis;
    @Basic(optional = false)
    @Column(name = "treatment")
    private String treatment;
    @Column(name = "observations")
    private String observations;
    @Column(name = "complaints")
    private String complaints;
    @Column(name = "other_details")
    private String otherDetails;
    @Column(name = "next_visit")
    @Temporal(TemporalType.TIMESTAMP)
    private Date nextVisit;
    @JoinColumn(name = "id_doctor", referencedColumnName = "id_doctor")
    @ManyToOne(optional = false)
    private DoctorEntity idDoctor;
    @JoinColumn(name = "id_patient", referencedColumnName = "id_patient")
    @ManyToOne(optional = false)
    private PatientEntity idPatient;

    public ConsultationEntity() {
    }

    public ConsultationEntity(Integer idConsultation) {
        this.idConsultation = idConsultation;
    }

    public ConsultationEntity(Integer idConsultation, String diagnosis, String treatment) {
        this.idConsultation = idConsultation;
        this.diagnosis = diagnosis;
        this.treatment = treatment;
    }

    public Integer getIdConsultation() {
        return idConsultation;
    }

    public void setIdConsultation(Integer idConsultation) {
        this.idConsultation = idConsultation;
    }

    public Date getConsultationDate() {
        return consultationDate;
    }

    public void setConsultationDate(Date consultationDate) {
        this.consultationDate = consultationDate;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getTreatment() {
        return treatment;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }

    public String getObservations() {
        return observations;
    }

    public void setObservations(String observations) {
        this.observations = observations;
    }

    public String getComplaints() {
        return complaints;
    }

    public void setComplaints(String complaints) {
        this.complaints = complaints;
    }

    public String getOtherDetails() {
        return otherDetails;
    }

    public void setOtherDetails(String otherDetails) {
        this.otherDetails = otherDetails;
    }

    public Date getNextVisit() {
        return nextVisit;
    }

    public void setNextVisit(Date nextVisit) {
        this.nextVisit = nextVisit;
    }

    public DoctorEntity getIdDoctor() {
        return idDoctor;
    }

    public void setIdDoctor(DoctorEntity idDoctor) {
        this.idDoctor = idDoctor;
    }

    public PatientEntity getIdPatient() {
        return idPatient;
    }

    public void setIdPatient(PatientEntity idPatient) {
        this.idPatient = idPatient;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idConsultation != null ? idConsultation.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ConsultationEntity)) {
            return false;
        }
        ConsultationEntity other = (ConsultationEntity) object;
        if ((this.idConsultation == null && other.idConsultation != null) || (this.idConsultation != null && !this.idConsultation.equals(other.idConsultation))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "gt.edu.umg.as2p2.model.ConsultationEntity[ idConsultation=" + idConsultation + " ]";
    }
    
}
