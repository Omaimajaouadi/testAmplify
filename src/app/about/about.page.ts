import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  contact={
    nom :'Macdonalds',
   
    
    photo :'/assets/image/image2.png'
  }
  constructor() { }

  ngOnInit() {
  }
}
