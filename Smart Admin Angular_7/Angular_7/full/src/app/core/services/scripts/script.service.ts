import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {Observable} from "rxjs";
import {createRequestOption} from "@app/shared/utils/request-util";
import {ScriptModel} from "@app/core/services/scripts/script.model";

@Injectable({ providedIn: 'root' })
export class scriptService {
script:ScriptModel;

    constructor(private http: HttpClient, private localStorage: LocalStorageService ) {}


    queryScripts(req: any): Observable<ScriptModel[]> {
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        const option = createRequestOption(req);
        return this.http.get<ScriptModel[]>('/api/sandbox/api/scripts', {headers: headers, params: option});
    }

    update(scriptModel: ScriptModel): Observable<HttpResponse<ScriptModel>> {
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.put<ScriptModel>('api/sandbox/api/scripts', scriptModel, { observe: 'response' , headers: headers });
    }


    updatesc(scriptModel: ScriptModel): Observable<HttpResponse<ScriptModel>> {
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.put<ScriptModel>('api/sandbox/api/scenario', scriptModel, { observe: 'response' , headers: headers });
    }




    delete(id: string, nom:string): Observable<HttpResponse<any>> {
                const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.delete(`api/sandbox/api/scripts/${id}/${nom}`,{ observe: 'response' , headers: headers });
    }

    create(script: ScriptModel): Observable<HttpResponse<ScriptModel>> {
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.post<ScriptModel>('api/sandbox/api/scripts', script,{ observe: 'response' , headers: headers });
    }

    upload(file: File,nom_script:string,description:string): Observable<HttpResponse<any>> {
        const formdata: FormData = new FormData();
        formdata.append('file', file);
        formdata.append('nom_script',nom_script);
        formdata.append('description',description);
        const headers = {"Authorization" : 'Bearer ' + localStorage.getItem('token')}
        return this.http.post<Object>('api/sandbox/api/upload', formdata,{ observe: 'response' , headers: headers });
    }





}