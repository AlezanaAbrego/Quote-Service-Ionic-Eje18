import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuoteService } from '../../services/quotes';


import { WelcomePage } from '../../pages/welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public email: string;
  public error: boolean = false;


  constructor(public navCtrl: NavController, public quotes: QuoteService) {
    this.quotes.getFavoriteSports();
    console.log(this.quotes.data);
    this.email="iarjona@ittepic.edu.mx";
    

  }


  login(): void {

    if (this.email === this.quotes.data.email) {
      console.log("Todo bien");//comparar email capturado vs email en server
      this.error = false;
      this.navCtrl.push(WelcomePage);
    } else {
      console.log("No coinciden!!");
      this.error = true;
    }
  }
}
