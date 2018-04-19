import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuoteService } from '../../services/quotes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public email: string;
  constructor(public navCtrl: NavController,public quotes:QuoteService) {
    this.quotes.getFavoriteSports();

  }


  login(): void {
    //comparar email capturado vs email en server
    
  }
}
