import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  landSectionsList: any[] = [];

  isFlying: boolean = false;

  batteryList: any[] = [];

  battery: number = 100;




  constructor(private auth: AuthService, public data: DataService, private router: Router) {
    this.getLandSections();

  }





  getLandSections() {
    this.data.getLandSections().subscribe(res => {


      this.landSectionsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;


        return data;
      })
    }, err => {
      alert(err.message)
    })
  }



  sectionColor(status: boolean) {
    if (status === true) {
      return "alert-warning";
    }
    else {
      return "alert-success";
    }
  }



  error() {
    alert("The drone is not flying!");
  }




  logOut() {
    this.auth.logOut();
  }




  ngOnInit(): void {}

}
