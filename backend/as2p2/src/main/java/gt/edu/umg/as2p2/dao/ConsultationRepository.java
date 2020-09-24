package gt.edu.umg.as2p2.dao;

import gt.edu.umg.as2p2.model.ConsultationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio ConsultationRepository
 * @author AK272DT
 */
@Repository
public interface ConsultationRepository extends JpaRepository<ConsultationEntity, Long> {}
