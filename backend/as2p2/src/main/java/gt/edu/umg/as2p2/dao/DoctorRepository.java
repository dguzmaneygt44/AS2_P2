package gt.edu.umg.as2p2.dao;

import gt.edu.umg.as2p2.model.DoctorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio DoctorRepository
 * @author AK272DT
 */
@Repository
public interface DoctorRepository extends JpaRepository<DoctorEntity, Long> {}
