package sandbox.lyance.com.service;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import sandbox.lyance.com.domain.Plateforme;
import sandbox.lyance.com.repository.PlateformeRepository;
import sandbox.lyance.com.service.dto.PlatformDTO;
import sandbox.lyance.com.service.mapper.PlatformMapper;

import java.util.Optional;


@Service
@Transactional
public class PlatformService {
    private final Logger log = LoggerFactory.getLogger(PlatformService.class);
    private final PlateformeRepository platformRepository;
    private final PlatformMapper platformMapper;


    public PlatformService(PlateformeRepository platformRepository, PlatformMapper platformMapper) {
        this.platformRepository = platformRepository;
        this.platformMapper = platformMapper;
    }

    public PlatformDTO save(PlatformDTO platformDTO) {
        log.debug("Request to save Platform : {}", platformDTO);

        Plateforme platform = platformMapper.toEntity(platformDTO);
        platform = platformRepository.save(platform);
        return platformMapper.toDto(platform);
    }

    @Transactional(readOnly = true)
    public Optional<PlatformDTO> findOne(Long id) {
        log.debug("Request to get Platform : {}", id);
        return platformRepository.findById(id)
            .map(platformMapper::toDto);
    }


}
