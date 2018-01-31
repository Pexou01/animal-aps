import { AnimalsProvider } from './../../providers/animals/animals';
import {Component} from '@angular/core';
import { NavController, ToastController, Events } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AnimalsProvider } from '../../providers/animals/animals';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {
  
  animals;
  private currentAnimal;
  public result : string;
  public showReorder = false;

  constructor(public navCtrl : NavController, public ToastCtrl : ToastController , public events: Events , public AnimalsProvider: AnimalsProvider) {}
  /**
 *  fonctiion pour choix aléatoire d'un animal
 * si aucun choix préalable
 */

 ionViewDidLoad(){
// appel de la classe AnimalsProvider
  this.animals = this.AnimalsProvider.getAll();


   // creation de l'abonements data
  this.events.subscribe('event.data', (data) => {
   let unserializedData = JSON.parse(data);
   // creation de la bulle toast
    this.ToastCtrl.create({
     message: unserializedData.input,
     // temps affichage
     duration: 3000,
     // position de la bul toast
     position: 'middle'
   }).present();
  });
 }
  pickAnimal() {
    let pos;
    let animal;
    if (!this.currentAnimal) {
      pos = Math.floor(Math.random() * this.animals.length);
      animal = this.animals[pos];
    } else {
      animal = this.currentAnimal;
    }

    return animal;
  }
  /**
 * fonction Lecture d'un son
 */
  playSound() {

    this.result = "";

    //choix d'un animal
    this.currentAnimal = this.pickAnimal();

    // chargement du son
    let audio = new Audio();
    audio.src = 'assets' + this.currentAnimal.file;
    audio.load();

    // Lecture du son
    audio.play();
  }

  /**
   *
   * @param pos
   * deviner l'animal en fonction de son cri
   */
  guess(animalName) {
    //est ce que l'on a joué un son
    if (this.currentAnimal) {
      //est ce que l'on a choisi un animal
      if (animalName == this.currentAnimal.title) {
        // CREATION d'un toast
        this
          .ToastCtrl
          .create({
            //message affiche
            message: "Gagné",
            // temps affichage
            duration: 2000,
            //position du message
            position: 'top'
          })
          .present();
        // Rénitialisation du choix pour faire une nouvelle partie
        this.currentAnimal = null;
      } else {
        this
          .ToastCtrl
          .create({
            //message affiche
            message: "perdu",
            // temps affichage
            duration: 2000,
            //position du message
            position: 'top'
          })
          .present();
      }
    }
    
  }
  goToDetails(animal){
    console.log(animal);
    this.navCtrl.push(DetailPage, {data: animal});
  }
}
