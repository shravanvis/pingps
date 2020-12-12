import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

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
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
  
}
