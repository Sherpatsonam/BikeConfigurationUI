import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from "rxjs/Observable";
import { IMtBike } from './mountainBikes/IMtBike';
import { IBikeConfigs } from './BikeConfig/IBikeConfigs';
import {environment} from '../environments/environment';

@Injectable()
    
export class ApiService{

   
private _url:string;
    constructor(private http:HttpClient)
    {
      this._url=environment.apiUrl;
    }

    getBikes():Observable<any>{
        return this.http.get(this._url+'api/bike/GetBikes').map((res: Response) =>res);
    }

    addBike(bike: any):Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
            })
          };
     
         return this.http.post(this._url+'api/bike/AddBike', JSON.stringify(bike),httpOptions);
    }

    deleteBike(bikeId: number):Observable<any>{
      return this.http.delete(this._url+'api/bike/DeleteBike/'+bikeId);
    }

    editBike(bike: IMtBike): Observable <any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
     return this.http.put(this._url+'api/bike/UpdateBike', JSON.stringify(bike),httpOptions);
    }
////////BIKE Configuration APIs/////////////////////////////////////
    getBikeConfs(bikeId: number):Observable<any>{
      return this.http.get(this._url+'api/bike/GetBikeConfigs/'+bikeId).map((res: Response) =>res);
    }

    deleteConfig(configId: number):Observable<any>{
      return this.http.delete(this._url+'api/bike/DeleteBikeConfig/'+configId);
    }

    editBConf(bConf:IBikeConfigs):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };      
      return this.http.put(this._url+'api/bike/UpdateBikeConf', JSON.stringify(bConf),httpOptions);
    }

      addBikeConfig(bConf: any):Observable<any>{
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
          })
        };      
        return this.http.post(this._url+'api/bike/AddBikeConfig', JSON.stringify(bConf),httpOptions);

      }



}