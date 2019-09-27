import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {map} from 'rxjs/operators';
import {JsonApiService} from "@app/core/services";

@Injectable({providedIn: 'root'})
export class TestService {

    url: string;

    constructor(private http: HttpClient, private localStorage: LocalStorageService, private jsonApiService: JsonApiService) {

        this.url = '../assets/output.json';
    }


    lancerfile(idSce: any) {
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.get(`/api/sandbox/api/lancertest/${idSce}`, {headers: headers});

    }

    getLogs() {
        return this.http.get(this.url)
            .pipe(map(res => res));
    }

}