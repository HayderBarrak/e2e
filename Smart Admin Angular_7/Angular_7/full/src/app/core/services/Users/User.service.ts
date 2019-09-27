import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {Observable} from "rxjs";
import {UserModel} from "@app/core/services/Users/User.model";

@Injectable({providedIn: 'root'})
export class UserSer {
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    }


    getusers(idPlat: number, idCmp: any): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(`/api/sandbox/platformconnection/campaigns/users/${idPlat}/${idCmp}`);
    }

}