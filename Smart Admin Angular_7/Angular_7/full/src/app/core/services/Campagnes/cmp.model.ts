export class CmpModel {
    constructor(
        public rid?: any,
        public  name?: any,
        public   status?: any,
        public  lastStartDate?: any,
        public archived?: any) {


        this.rid = rid ? rid : null;
        this.name = name ? name : null;
        this.status = status ? status : null;
        this.lastStartDate = lastStartDate ? lastStartDate : null;
        this.archived = archived ? archived : null;

    }


}