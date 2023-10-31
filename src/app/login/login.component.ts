import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nom : string = "";
  prenom : string = "";
  valid : boolean = true;
  isValid() : boolean { //fonction
    return this.valid;
  }
  desactivation() {
    this.valid = false;
  }
}
