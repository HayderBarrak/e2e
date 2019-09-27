import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {Observable} from "rxjs";
import {createRequestOption} from "@app/shared/utils/request-util";
import {ScenarioModel} from "@app/core/services/Scenarios/scenario.model";

@Injectable({providedIn: 'root'})
export class ScenarioService {


    constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    }


    queryScenario(req: any): Observable<ScenarioModel[]> {
        const option = createRequestOption(req);
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.get<ScenarioModel[]>('/api/sandbox/api/scenarios', {headers: headers, params: option});
    }

    update(ScenarioModel: ScenarioModel): Observable<HttpResponse<ScenarioModel>> {
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.put<ScenarioModel>('api/sandbox/api/scenarios', ScenarioModel, {
            observe: 'response',
            headers: headers
        });
    }


    delete(id: string): Observable<HttpResponse<any>> {
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.delete(`api/sandbox/api/scenarios/${id}`, {observe: 'response', headers: headers});
    }

    create(ScenarioModel: ScenarioModel): Observable<HttpResponse<ScenarioModel>> {
        const headers = {"Authorization": 'Bearer ' + localStorage.getItem('token')}
        return this.http.post<ScenarioModel>('api/sandbox/api/scenarios', ScenarioModel, {
            observe: 'response',
            headers: headers
        });
    }


}