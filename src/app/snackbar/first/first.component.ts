import { Component, OnInit } from '@angular/core';
import { BaseComp } from 'src/app/BaseComp';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent extends BaseComp implements OnInit {
  alert_type: string = "";
  constructor() {
    super();
   }

  ngOnInit() {
    this.alert_type = this.getItem("alert_type");
  }

}
