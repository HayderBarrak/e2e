import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({providedIn: 'root'})
export class HealthServiceService {
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    }


    checkhealth(url: any) {
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.get(`/api/sandbox/platformconnection/check/${url}`, {headers: headers});

    }


}