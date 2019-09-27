package sandbox.lyance.com.repository;

import org.springframework.transaction.annotation.Transactional;
import sandbox.lyance.com.domain.Script;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * Spring Data  repository for the Script entity.
 */
@Repository
public interface ScriptRepository extends JpaRepository<Script, Long> {

    @Transactional(readOnly = true)
    Optional<Script> findById(Long id);
}
