import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FirstComponent } from '../snackbar/first/first.component';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { BaseComp } from '../BaseComp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComp implements OnInit {
  durationInSeconds = 2;
  
  constructor(private route: Router, private _snackBar: MatSnackBar, private dataservice: DataService, private _http: HttpClient) {
    super();
   }

  ngOnInit() {
  }


  loginUserData = {
    email: '',
    password: ''
  }
  email: string = '';
  password: string = '';
  username_error: boolean = false;
  password_error: boolean = false;
  
  // login(message: string, action: string){

  //   const headers= new HttpHeaders()
  //   .set('content-type', 'application/x-www-form-urlencoded')
  //   .set('Access-Control-Allow-Origin', '*');
    
  //   var formData: any = new FormData();
  //   formData.append('email', this.email);
  //   formData.append('password', this.password);

  //   this._http.post('http://15.207.204.95:8082/api/session', formData, {'headers': headers}).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )
  // }


  callTraccarLogin(message: string, action: string) {
    var url = 'http://15.207.204.95:8082/api/session';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let data="email="+this.email+"&password="+this.password;

    console.log('url:-' + url);

    this._http.post(url, data, httpOptions).subscribe(result => {
      try {
        console.log('data:-' + JSON.stringify(result, null, 4));

        this.setItem('login_details',JSON.stringify(result));
        this.setItem('is_login','1');

        // this.setItem("login_details", "1");
        this._snackBar.open(message = 'All good', action = 'ok', {
          duration: 2000
        })
        this.route.navigate(['/layout'])
      } catch (err) {
        console.log(err);
      }
    }, error => {
      console.log('API Error', JSON.stringify(error, null, 4));
      this._snackBar.open(message = 'Wrong password', action = 'ok', {
            duration: 2000
          })
    });
  }

  
  // ngmodelchange(){
  //   this.username_error = false;
  //   this.password_error = false;
  // }
}
