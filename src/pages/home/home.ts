import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {
  animals = [
    {
      'title': 'Vache',
      'image': 'img/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    }, {
      'title': 'Dauphin',
      'image': 'img/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    }, {
      'title': 'Grenouille',
      'image': 'img/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    }, {
      'title': 'Oiseau',
      'image': 'img/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    }, {
      'title': 'Cochon',
      'image': 'img/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    }, {
      'title': 'Chien',
      'image': 'img/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    }, {
      'title': 'Chat',
      'image': 'img/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    }, {
      'title': 'Cheval',
      'image': 'img/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    }, {
      'title': 'Ane',
      'image': 'img/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  private currentPosition : number;

  constructor(public navCtrl : NavController) {}
  /**
 *  fonctiion pour choix aléatoire d'un animal
 * si aucun choix préalable
 */
  pickAnimalPosition() {
    let pos;
    if (! this.currentPosition){
     pos = Math.floor(Math.random() * this.animals.length);
    }else {
      pos = this.currentPosition
    }
    
    return pos;
  }
  /**
 * fonction Lecture d'un son
 */
  playSound() {
    //choix d'un animal
    this.currentPosition = this.pickAnimalPosition();
    let choosenAnimal = this.animals[this.currentPosition];

    // chargement du son
    let audio = new Audio();
    audio.src = 'assets' + choosenAnimal.file;
    audio.load();

    // Lecture du son
    audio.play();
  }

}
