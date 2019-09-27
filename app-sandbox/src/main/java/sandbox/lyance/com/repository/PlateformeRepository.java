package sandbox.lyance.com.repository;

import org.springframework.transaction.annotation.Transactional;
import sandbox.lyance.com.domain.Plateforme;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * Spring Data  repository for the Plateforme entity.
 */
@Repository
public interface PlateformeRepository extends JpaRepository<Plateforme, Long> {


}
