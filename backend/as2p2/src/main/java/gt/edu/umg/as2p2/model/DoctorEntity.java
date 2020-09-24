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
@Table(name = "tb_doctor")
/*@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "DoctorEntity.findAll", query = "SELECT d FROM DoctorEntity d"),
    @NamedQuery(name = "DoctorEntity.findByIdDoctor", query = "SELECT d FROM DoctorEntity d WHERE d.idDoctor = :idDoctor"),
    @NamedQuery(name = "DoctorEntity.findByFirstName", query = "SELECT d FROM DoctorEntity d WHERE d.firstName = :firstName"),
    @NamedQuery(name = "DoctorEntity.findByMiddleName", query = "SELECT d FROM DoctorEntity d WHERE d.middleName = :middleName"),
    @NamedQuery(name = "DoctorEntity.findByLastName", query = "SELECT d FROM DoctorEntity d WHERE d.lastName = :lastName"),
    @NamedQuery(name = "DoctorEntity.findByMaidenName", query = "SELECT d FROM DoctorEntity d WHERE d.maidenName = :maidenName"),
    @NamedQuery(name = "DoctorEntity.findByAddress1", query = "SELECT d FROM DoctorEntity d WHERE d.address1 = :address1"),
    @NamedQuery(name = "DoctorEntity.findByAddress2", query = "SELECT d FROM DoctorEntity d WHERE d.address2 = :address2"),
    @NamedQuery(name = "DoctorEntity.findByGender", query = "SELECT d FROM DoctorEntity d WHERE d.gender = :gender"),
    @NamedQuery(name = "DoctorEntity.findByBirthdate", query = "SELECT d FROM DoctorEntity d WHERE d.birthdate = :birthdate"),
    @NamedQuery(name = "DoctorEntity.findByCollegiateNumber", query = "SELECT d FROM DoctorEntity d WHERE d.collegiateNumber = :collegiateNumber"),
    @NamedQuery(name = "DoctorEntity.findByIsActive", query = "SELECT d FROM DoctorEntity d WHERE d.isActive = :isActive"),
    @NamedQuery(name = "DoctorEntity.findByPhone1", query = "SELECT d FROM DoctorEntity d WHERE d.phone1 = :phone1"),
    @NamedQuery(name = "DoctorEntity.findByPhone2", query = "SELECT d FROM DoctorEntity d WHERE d.phone2 = :phone2")})*/
public class DoctorEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_doctor")
    private Long idDoctor;
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
    @Column(name = "address1")
    private String address1;
    @Column(name = "address2")
    private String address2;
    @Column(name = "gender")
    private Character gender;
    @Column(name = "birthdate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date birthdate;
    @Basic(optional = false)
    @Column(name = "collegiate_number")
    private String collegiateNumber;
    @Column(name = "is_active")
    private Boolean isActive;
    @Column(name = "phone1")
    private String phone1;
    @Column(name = "phone2")
    private String phone2;
    /*@OneToMany(cascade = CascadeType.ALL, mappedBy = "idDoctor")
    private Collection<ConsultationEntity> consultationEntityCollection;*/

    public DoctorEntity() {
    }

    public DoctorEntity(Long idDoctor) {
        this.idDoctor = idDoctor;
    }

    public DoctorEntity(Long idDoctor, String firstName, String lastName, String collegiateNumber) {
        this.idDoctor = idDoctor;
        this.firstName = firstName;
        this.lastName = lastName;
        this.collegiateNumber = collegiateNumber;
    }

    public Long getIdDoctor() {
        return idDoctor;
    }

    public void setIdDoctor(Long idDoctor) {
        this.idDoctor = idDoctor;
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

    public String getCollegiateNumber() {
        return collegiateNumber;
    }

    public void setCollegiateNumber(String collegiateNumber) {
        this.collegiateNumber = collegiateNumber;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
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
        hash += (idDoctor != null ? idDoctor.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof DoctorEntity)) {
            return false;
        }
        DoctorEntity other = (DoctorEntity) object;
        if ((this.idDoctor == null && other.idDoctor != null) || (this.idDoctor != null && !this.idDoctor.equals(other.idDoctor))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "gt.edu.umg.as2p2.model.DoctorEntity[ idDoctor=" + idDoctor + " ]";
    }
    
}
