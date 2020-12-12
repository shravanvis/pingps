import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SetupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close('Pizza!');
  }

  Main: boolean = true;
  object_groups: boolean = false;
  drivers: boolean = false;
  events: boolean = false;
  SMS_gateway: boolean = false;
  SMS_templates: boolean = false;
  GPRS_templates: boolean = false;
  widgets: boolean = false;
  dashboard: boolean = false;

  show_main(){
    this.Main = true;
    this.object_groups = false;
    this.drivers = false;
    this.events = false;
    this.SMS_gateway = false;
    this.SMS_templates = false;
    this.GPRS_templates = false;
    this.widgets = false;
    this.dashboard = false;
  }

  show_object_groups(){
    this.Main = false;
    this.object_groups = true;
    this.drivers = false;
    this.events = false;
    this.SMS_gateway = false;
    this.SMS_templates = false;
    this.GPRS_templates = false;
    this.widgets = false;
    this.dashboard = false;
  }

  show_drivers(){
    this.Main = false;
    this.object_groups = false;
    this.drivers = true;
    this.events = false;
    this.SMS_gateway = false;
    this.SMS_templates = false;
    this.GPRS_templates = false;
    this.widgets = false;
    this.dashboard = false;
  }

  show_events(){
    this.Main = false;
    this.object_groups = false;
    this.drivers = false;
    this.events = true;
    this.SMS_gateway = false;
    this.SMS_templates = false;
    this.GPRS_templates = false;
    this.widgets = false;
    this.dashboard = false;
  }

  show_SMS_gateway(){
    this.Main = false;
    this.object_groups = false;
    this.drivers = false;
    this.events = false;
    this.SMS_gateway = true;
    this.SMS_templates = false;
    this.GPRS_templates = false;
    this.widgets = false;
    this.dashboard = false;
  }

  show_SMS_templates(){
    this.Main = false;
    this.object_groups = false;
    this.drivers = false;
    this.events = false;
    this.SMS_gateway = false;
    this.SMS_templates = true;
    this.GPRS_templates = false;
    this.widgets = false;
    this.dashboard = false;
  }

  show_GPRS_templates(){
    this.Main = false;
    this.object_groups = false;
    this.drivers = false;
    this.events = false;
    this.SMS_gateway = false;
    this.SMS_templates = false;
    this.GPRS_templates = true;
    this.widgets = false;
    this.dashboard = false;
  }

  show_widgets(){
    this.Main = false;
    this.object_groups = false;
    this.drivers = false;
    this.events = false;
    this.SMS_gateway = false;
    this.SMS_templates = false;
    this.GPRS_templates = false;
    this.widgets = true;
    this.dashboard = false;
  }

  show_dashboard(){
    this.Main = false;
    this.object_groups = false;
    this.drivers = false;
    this.events = false;
    this.SMS_gateway = false;
    this.SMS_templates = false;
    this.GPRS_templates = false;
    this.widgets = false;
    this.dashboard = true;
  }

}
