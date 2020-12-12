import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showBottom: boolean = false;
  arrow = 'up';
  
  openbottom(){
    this.showBottom = !this.showBottom;
    if(this.arrow == 'up'){
      this.arrow = 'down';
    }
    else{
      this.arrow = 'up'
    }
  }

  public pieChartLabels = ['Moving', 'Offline'];
  public pieChartData = [67, 33];
  public pieChartType = 'pie';
  
  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
}
