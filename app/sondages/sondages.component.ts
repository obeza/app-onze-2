import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../services/movies.service';

@Component({
  selector: 'app-sondages',
  templateUrl: 'sondages.component.html',
  styleUrls: ['sondages.component.css'],
  providers:[MoviesService]
})
export class SondagesComponent implements OnInit {

  public moviesList=[];
  public titre:string;
  public loading = true;

  constructor( private moviesService:MoviesService ) { 

  }

  ngOnInit() {
    this.loadMovies();
     
  }

  loadMovies(){
    this.titre = "Hello";
    this.moviesService.get()
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
