import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComp } from './BaseComp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComp implements OnInit {
  durationInSeconds = 2;
  
  constructor(private route:Router) {
    super();
   }

  ngOnInit() {
    if(this.getItem('is_login')=='1'){
      this.route.navigate(['/layout'])
    }else{
      this.route.navigate(['/login'])
    }
  }
  title = 'pingps';
}
