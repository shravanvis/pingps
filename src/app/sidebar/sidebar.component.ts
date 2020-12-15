import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseComp } from '../BaseComp';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class SidebarComponent extends BaseComp implements OnInit {

  constructor(private dataservice: DataService, private _http: HttpClient) {
    super();
   }

  ngOnInit() {
    // console.log("user data:-"+this.getItem("login_details"));
    this.getDevices();
  }

  leftside: boolean = true;
  openleft(){
    this.leftside = !this.leftside;
  }

  sideObjects: boolean = true;

  openSideObjects(){
    this.sideObjects = !this.sideObjects;
  }

  objects: boolean = true;
  events: boolean = false;
  history: boolean = false;
  
  showObjects(){
    this.objects = true;
    this.events = false;
    this.history = false;
  }

  showevents(){
    this.events = true;
    this.objects = false;
    this.history = false;
  }

  showhistory(){
    this.history = true;
    this.objects = false;
    this.events = false;
  }
  
  allDevices: object
  getDevices(){

    // var url = "http://15.207.204.95:8082/api/devices?userId=1";
    var url = "http://15.207.204.95:8082/api/devices?userId="+JSON.parse(this.getItem('login_details')).id;

    var encodedString = btoa("admin:admin");
    console.log("encodedString:-" + encodedString)

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + encodedString
      })
    };

    this._http.get(url, httpOptions).subscribe((data)=> {
      this.allDevices = data
      console.log(data);
    })
  }

  selectObject(index){
    console.log(this.allDevices[index])
  }
}
