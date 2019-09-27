package sandbox.lyance.com.service.mapper;

import sandbox.lyance.com.domain.Plateforme;
import sandbox.lyance.com.service.dto.PlatformDTO;
import org.mapstruct.*;

@Mapper(componentModel = "spring", uses = {})
public interface PlatformMapper extends EntityMapper<PlatformDTO, Plateforme> {


    default Plateforme fromId(Long id) {
        if (id == null) {
            return null;
        }
        Plateforme platform = new Plateforme();
        platform.setId(id);
        return platform;
    }


}
