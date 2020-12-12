import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddresssearchComponent } from '../modals/addresssearch/addresssearch.component';
import { ChatmodalComponent } from '../modals/chatmodal/chatmodal.component';
import { DashboardComponent } from '../modals/dashboard/dashboard.component';
import { ReportsmodalComponent } from '../modals/reportsmodal/reportsmodal.component';
import { SetupComponent } from '../modals/setup/setup.component';
import { ShowpointmodalComponent } from '../modals/showpointmodal/showpointmodal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  shownavbar:boolean = true;
  hidenavbar: boolean = false;

  togglenavbar(){
    this.shownavbar = false;
    this.hidenavbar = true;
  }

  opendashboard(): void {
    const dialogRef = this.dialog.open(DashboardComponent, {
      // width: '15000px',
      // height: '600px'
      panelClass: 'dashboardclass'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  opensetup(){
    this.dialog.open(SetupComponent, {
      panelClass: 'setupclass',
      // width: '700px',
      // height: '540px'
    })
  }

  addressearch(){
    this.dialog.open(AddresssearchComponent, {
      panelClass: 'addressClass'
    })
  }

  reportsModal(){
    this.dialog.open(ReportsmodalComponent, {
      panelClass: 'reportsmodalclass'
    })
  }

  chatmodal(){
    this.dialog.open(ChatmodalComponent, {
      panelClass: 'chatclass'
    })
  }

  showpoint(){
    this.dialog.open(ShowpointmodalComponent, {
      panelClass: 'showpointclass'
    })
  }
  
}
