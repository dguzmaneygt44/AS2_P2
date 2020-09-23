/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gt.edu.umg.as2p2.repository;

import gt.edu.umg.as2p2.model.PatientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author AK272DT
 */
@Repository
public interface PatientRepository extends JpaRepository<PatientEntity, Long> {}
