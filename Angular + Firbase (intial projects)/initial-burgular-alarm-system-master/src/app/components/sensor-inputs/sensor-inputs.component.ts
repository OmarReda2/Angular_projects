import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';



@Component({
  selector: 'app-sensor-inputs',
  templateUrl: './sensor-inputs.component.html',
  styleUrls: ['./sensor-inputs.component.css']
})
export class SensorInputsComponent implements OnInit {
  constructor(private data: DataService) { }

  doorId: any = "";
  doorStatus: any = "";

  windowId: any = "";
  windowStatus: any = "";

  batteryStatus: any = ""
  motion: any = ""


  updateDoor() {
    this.data.updateDoors(this.doorId, this.doorStatus);
  }


  updateWindow() {
    this.data.updateWindow(this.windowId, this.windowStatus);
  }


  updateBattery() {
    this.data.updateBattery(this.batteryStatus);
  }


  updateMotion() {
    this.data.updateMotion(this.motion);
  }


  ngOnInit(): void { }
}
