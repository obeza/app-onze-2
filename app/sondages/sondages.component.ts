import { Component, OnInit } from '@angular/core';
import { SondagesService } from './../services/sondages.service';

@Component({
  selector: 'app-sondages',
  templateUrl: 'sondages.component.html',
  styleUrls: ['sondages.component.css'],
  providers:[SondagesService]
})
export class SondagesComponent implements OnInit {

  public moviesList=[];
  public titre:string;
  public loading = true;

  constructor( private _sondagesService:SondagesService ) { 

  }

  ngOnInit() {
    this.loadMovies();
     
  }

  loadMovies(){
    this.titre = "Hello";
    this._sondagesService.get()
      .subscribe( 
        data => { 
          this.moviesList = data,
          this.endLoading()
        }
    );
    
  }

  endLoading(){
    console.log('ok');
    this.loading = false;
  }

  clicked(){
    console.log('click');
  }

}
