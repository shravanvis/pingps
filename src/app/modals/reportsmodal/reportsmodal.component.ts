import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportsmodal',
  templateUrl: './reportsmodal.component.html',
  styleUrls: ['./reportsmodal.component.css']
})
export class ReportsmodalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Reports: boolean = true;
  Generated: boolean = false;
  
  show_reports(){
    this.Reports = true;
    this.Generated = false;
  }

  show_generated(){
    this.Reports = false;
    this.Generated = true;
  }
  
}
