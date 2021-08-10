import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  contact={
    nom :'Omaimar',
    prenom :'Jaouadi',
    email:'jaouadiOmaimaz@gmail.com',
    age :'25 ans',
    photo :'/assets/image/profil.jpg'
  }
  constructor() { }

  ngOnInit() {
  }
}
