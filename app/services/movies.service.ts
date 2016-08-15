import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
//import {Observable} from 'rxjs/Rx';

@Injectable()
export class MoviesService {

  constructor( public http:Http) {
    //this.http=http;
  }

  get(){
   return  this.http.get('http://localhost:3000/sondages')
      .map( res => res.json() );
  }

/*
  add(value):void{
    //
  }
*/
  
}
