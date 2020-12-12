import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FirstComponent } from '../snackbar/first/first.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  durationInSeconds = 2;
  constructor(private route: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  username: string = '';
  password: string = '';
  username_error: boolean = false;
  password_error: boolean = false;
  
  login(message: string, action: string){
    if(this.username == 'shravan' && this.password == '123456'){
      this._snackBar.open(message = 'All good', action = 'ok', {
        duration: 2000
      })
      this.route.navigate(['/layout'])
    }
    
    else if(this.username == "" && this.password == ""){
      // this.username_error = true;
      // this.password_error = true;
      this._snackBar.open(message = 'All fields are required', action = 'ok', {
        duration: 2000
      })
    }
    else{
      this._snackBar.open(message = 'Wrong password', action = 'ok', {
        duration: 2000
      })
    }
  }

  // ngmodelchange(){
  //   this.username_error = false;
  //   this.password_error = false;
  // }
}
