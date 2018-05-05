import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuoteService } from '../../services/quotes';
/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public quotes: QuoteService) {
      this.quotes.getFavoriteSports();
      console.log(this.quotes.data.sports);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage'); 
  }

}
