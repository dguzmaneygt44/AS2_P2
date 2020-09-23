/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.edu.umg.as2p2.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author AK272DT
 */
@Entity
@Table(name = "tb_patient")
//@XmlRootElement
/*@NamedQueries({
    @NamedQuery(name = "PatientEntity.findAll", query = "SELECT p FROM PatientEntity p"),
    @NamedQuery(name = "PatientEntity.findByIdPatient", query = "SELECT p FROM PatientEntity p WHERE p.idPatient = :idPatient"),
    @NamedQuery(name = "PatientEntity.findByFirstName", query = "SELECT p FROM PatientEntity p WHERE p.firstName = :firstName"),
    @NamedQuery(name = "PatientEntity.findByMiddleName", query = "SELECT p FROM PatientEntity p WHERE p.middleName = :middleName"),
    @NamedQuery(name = "PatientEntity.findByLastName", query = "SELECT p FROM PatientEntity p WHERE p.lastName = :lastName"),
    @NamedQuery(name = "PatientEntity.findByMaidenName", query = "SELECT p FROM PatientEntity p WHERE p.maidenName = :maidenName"),
    @NamedQuery(name = "PatientEntity.findByAddress1", query = "SELECT p FROM PatientEntity p WHERE p.address1 = :address1"),
    @NamedQuery(name = "PatientEntity.findByAddress2", query = "SELECT p FROM PatientEntity p WHERE p.address2 = :address2"),
    @NamedQuery(name = "PatientEntity.findByPhone1", query = "SELECT p FROM PatientEntity p WHERE p.phone1 = :phone1"),
    @NamedQuery(name = "PatientEntity.findByPhone2", query = "SELECT p FROM PatientEntity p WHERE p.phone2 = :phone2"),
    @NamedQuery(name = "PatientEntity.findByGender", query = "SELECT p FROM PatientEntity p WHERE p.gender = :gender"),
    @NamedQuery(name = "PatientEntity.findByBirthdate", query = "SELECT p FROM PatientEntity p WHERE p.birthdate = :birthdate")})*/
public class PatientEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_patient")
    private Long idPatient;
    @Basic(optional = false)
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "middle_name")
    private String middleName;
    @Basic(optional = false)
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "maiden_name")
    private String maidenName;
    @Basic(optional = false)
    @Column(name = "address1")
    private String address1;
    @Column(name = "address2")
    private String address2;
    @Basic(optional = false)
    @Column(name = "phone1")
    private String phone1;
    @Column(name = "phone2")
    private String phone2;
    @Column(name = "gender")
    private Character gender;
    @Column(name = "birthdate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date birthdate;
    /*@OneToMany(cascade = CascadeType.ALL, mappedBy = "idPatient")
    private Collection<ConsultationEntity> consultationEntityCollection;*/

    public PatientEntity() {
    }

    public PatientEntity(Long idPatient) {
        this.idPatient = idPatient;
    }

    public PatientEntity(Long idPatient, String firstName, String lastName, String address1, String phone1) {
        this.idPatient = idPatient;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address1 = address1;
        this.phone1 = phone1;
    }

    public Long getIdPatient() {
        return idPatient;
    }

    public void setIdPatient(Long idPatient) {
        this.idPatient = idPatient;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMaidenName() {
        return maidenName;
    }

    public void setMaidenName(String maidenName) {
        this.maidenName = maidenName;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getPhone1() {
        return phone1;
    }

    public void setPhone1(String phone1) {
        this.phone1 = phone1;
    }

    public String getPhone2() {
        return phone2;
    }

    public void setPhone2(String phone2) {
        this.phone2 = phone2;
    }

    public Character getGender() {
        return gender;
    }

    public void setGender(Character gender) {
        this.gender = gender;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    /*@XmlTransient
    public Collection<ConsultationEntity> getConsultationEntityCollection() {
        return consultationEntityCollection;
    }

    public void setConsultationEntityCollection(Collection<ConsultationEntity> consultationEntityCollection) {
        this.consultationEntityCollection = consultationEntityCollection;
    }*/

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPatient != null ? idPatient.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PatientEntity)) {
            return false;
        }
        PatientEntity other = (PatientEntity) object;
        if ((this.idPatient == null && other.idPatient != null) || (this.idPatient != null && !this.idPatient.equals(other.idPatient))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "gt.edu.umg.as2p2.model.PatientEntity[ idPatient=" + idPatient + " ]";
    }
    
}
