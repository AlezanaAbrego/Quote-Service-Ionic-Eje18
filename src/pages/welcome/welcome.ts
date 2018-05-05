import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteService } from  '../../services/quotes';
import { SportsPage } from '../../pages/sports/sports';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public quotes: QuoteService) {

      console.log("Informacion  "+this.quotes.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }


  goToSports(): void{
    this.navCtrl.push(SportsPage);
  }
}

//iarjona@ittepic.edu.mx