import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SondagesService {

  constructor( public http:Http) {
    //this.http=http;
  }

  get(){
   return  this.http.get('http://localhost:8888/laboratoire/marketing/api/sondages.php')
      .map( res => res.json() );
  }

  post(data:any):any{
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http
             .post('http://localhost:8888/laboratoire/marketing/api/test.php', JSON.stringify(data), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);

  }

  private handleError(error: any){
    console.error('An error occurred', error);
    //alert('ok ' + JSON.stringify(error));
  }
  
}
