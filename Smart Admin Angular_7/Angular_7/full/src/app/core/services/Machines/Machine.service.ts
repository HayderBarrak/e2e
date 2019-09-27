import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {Observable} from "rxjs";
import {MachineModel} from "@app/core/services/Machines/Machine.model";
import {createRequestOption} from "@app/shared/utils/request-util";


@Injectable({ providedIn: 'root' })
export class MachineService {
    constructor(private http: HttpClient, private localStorage: LocalStorageService ) {}


    queryMachines(req: any): Observable<MachineModel[]> {
        const option = createRequestOption(req);
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.get<MachineModel[]>('/api/sandbox/api/machines', {headers: headers, params: option});
    }


    update(machinemModel: MachineModel): Observable<HttpResponse<MachineModel>> {
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.put<MachineModel>('api/sandbox/api/machines', machinemModel, { observe: 'response' , headers: headers });
    }


    delete(id: string): Observable<HttpResponse<any>> {
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.delete(`api/sandbox/api/machines/${id}`, { observe: 'response' , headers: headers });
    }

    create(machinemModel: MachineModel): Observable<HttpResponse<MachineModel>> {
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.post<MachineModel>('api/sandbox/api/machines', machinemModel, { observe: 'response' , headers: headers });
    }








}