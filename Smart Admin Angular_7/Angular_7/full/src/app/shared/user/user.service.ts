import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {createRequestOption} from "@app/shared/utils/request-util";
import {User} from "@app/shared/user/User.model";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({ providedIn: 'root' })
export class UserService {



    constructor(private http: HttpClient, private localStorage: LocalStorageService ) {}

    create(user: User): Observable<HttpResponse<User>> {
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.post<User>('api/api/users', user, {observe: 'response', headers: headers});
    }

    update(user: User): Observable<HttpResponse<User>> {
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.put<User>('api/api/users', user, {observe: 'response', headers: headers});
    }

    find(login: string): Observable<HttpResponse<User>> {
        return this.http.get<User>(`${'api/api/users'}/${login}`, {observe: 'response'});
    }

    query(req?: any): Observable<User[]> {
        const options = createRequestOption(req);
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.get<User[]>('/api/api/users', {params: options, headers: headers});
    }

    delete(login: string): Observable<HttpResponse<any>> {
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.delete(`${'/api/api/users'}/${login}`, {observe: 'response', headers: headers});
    }

    authorities(): Observable<string[]> {
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.get<string[]>('api/api/users/authorities', {headers: headers});
    }
}
