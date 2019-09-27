import {PlatformModel} from "@app/core/services/Platforms/platform.model";
import {ScriptModel} from "@app/core/services/scripts/script.model";
import {MachineModel} from "@app/core/services/Machines/Machine.model";

export class ScenarioModel {
    constructor(
        public id?: any,
        public nom?: string,
        public description?: string,
        public jhi_type?: string,
        public plateforme?: PlatformModel,
        public script?: ScriptModel,
        public machine?: MachineModel,
        public $$expanded?: boolean
    ) {

        this.id = id ? id : null;
        this.nom = nom ? nom : null;
        this.description = description ? description : null;
        this.jhi_type = jhi_type ? jhi_type : null;
        this.plateforme = plateforme ? plateforme : null;
        this.script = script ? script : null;
        this.machine = machine ? machine : null;
    }


}