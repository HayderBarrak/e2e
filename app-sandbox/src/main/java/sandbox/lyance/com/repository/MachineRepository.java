package sandbox.lyance.com.repository;

import org.springframework.data.domain.Example;
import org.springframework.transaction.annotation.Transactional;
import sandbox.lyance.com.domain.Machine;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * Spring Data  repository for the Machine entity.
 */

@Repository
public interface MachineRepository extends JpaRepository<Machine, Long> {

    @Transactional(readOnly = true)
     Optional<Machine> findById(Long id);




}
