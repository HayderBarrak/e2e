export class HealthServiceModel {
    constructor(
        public status?: any,
    ) {


        this.status = status ? status : null;

    }


}