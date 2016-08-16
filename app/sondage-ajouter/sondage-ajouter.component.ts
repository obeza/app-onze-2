import { Component, OnInit } from '@angular/core';
import { SondagesService } from './../services/sondages.service';

@Component({
  selector: 'app-sondage-ajouter',
  templateUrl: 'sondage-ajouter.component.html',
  styleUrls: ['sondage-ajouter.component.css'],
  providers:[SondagesService]
})
export class SondageAjouterComponent implements OnInit {

  public sondageForm = {};
  constructor( private _sondagesService:SondagesService) { }

  ngOnInit() {
  }


  formSubmit(){
    console.log( this.sondageForm)
    this._sondagesService
      .post(this.sondageForm)
      .then( console.log('ok'))
      ; // TODO: Display error message
  }

}
