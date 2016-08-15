import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sondage-ajouter',
  templateUrl: 'sondage-ajouter.component.html',
  styleUrls: ['sondage-ajouter.component.css']
})
export class SondageAjouterComponent implements OnInit {

  public sondageForm = {};
  constructor() { }

  ngOnInit() {
  }


  formSubmit(){
    console.log( this.sondageForm)
  }

}
