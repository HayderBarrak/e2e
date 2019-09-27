export class MachineModel {
    constructor(
        public id?: any,
        public machinename?: string,
        public Driver?: string,
        public dockerdirec?: string,
        public memototal?: string,
        public ncpu?: string,
        public ostype?: string,
        public opsystem?: string,
        public $$expanded?: boolean,
        public adresse?: string,
        public containerimage?: string,







    ){

        this.id = id ? id : null;
        this.machinename = machinename ? machinename : null;
        this.Driver = Driver ? Driver : null;
        this.dockerdirec = dockerdirec ? dockerdirec : null;
        this.memototal = memototal ? memototal : null;
        this.ncpu = ncpu ? ncpu : null;
        this.ostype = ostype ? ostype : null;
        this.opsystem = opsystem ? opsystem : null;

        this.adresse = adresse ? adresse : null;
        this.containerimage = containerimage ? containerimage : null;


    }




}