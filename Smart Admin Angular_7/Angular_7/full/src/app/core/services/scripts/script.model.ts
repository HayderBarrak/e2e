export class ScriptModel {
    constructor(
        public id? : any,
        public nom_script?: string,
        public nom_fichier?: string,
        public description?: string,
        public contenu?: string,
        public $$expanded?: boolean


){

        this.id = id ? id : null;
        this.nom_script = nom_script ? nom_script : null;
        this.nom_fichier = nom_fichier ? nom_fichier : null;
        this.description = description ? description : null;
        this.contenu = contenu ? contenu : null;


    }




}