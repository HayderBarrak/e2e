import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {CmpModel} from "@app/core/services/Campagnes/cmp.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class CmpService {
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    }


    getcamp(id: number): Observable<CmpModel[]> {
        return this.http.get<CmpModel[]>(`/api/sandbox/platformconnection/getcampagne/${id}`);

    }










}