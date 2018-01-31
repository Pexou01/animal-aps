import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public animal;
  public inputText:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
   public events: Events) {
    this.animal = navParams.get('data');
    console.log(this.animal);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
 ionViewDidLeave(){
   let data = {
     input: this.inputText,
     origin: "detailsPage"
   }
   // Publication d'un Evenement
  this.events.publish('event.data', JSON.stringify(data));
 }
}
