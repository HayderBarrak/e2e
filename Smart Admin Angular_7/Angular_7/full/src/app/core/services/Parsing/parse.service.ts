import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({providedIn: 'root'})
export class ParseService {


    constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    }


    Parsefile(idPlat: number, idCmp: number, idSc: number, idSce: any, login: any) {

        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.get(`/api/sandbox/api/parsefile/${idPlat}/${idCmp}/${idSc}/${idSce}/${login}`, {headers: headers});


    }


}