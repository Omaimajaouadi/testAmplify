import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public RegisterForm: FormGroup;

  constructor(public FormBuilder: FormBuilder, public nav1 : NavController) { //formbuiller intermédaire entre le formgroup et le forme control name
    this.RegisterForm = FormBuilder.group({
      fullname : [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
         
          
        ])
      ],

      email : [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-z0-z0-9]+$")
          
        ])
      ],


      age : [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(2)
        ])
      ]


    });
  }
  NavigateToHome(){
    this.nav1.navigateForward("/home");
  }
  ngOnInit() {
  }
 

}
