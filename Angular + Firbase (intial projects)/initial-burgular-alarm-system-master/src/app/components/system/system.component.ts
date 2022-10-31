import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';



declare let $: any

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  doorsList: any[] = [];
  windowsList: any[] = [];
  Battery: any[] = [];
  motion: any[] = [];

  doorsAlarm: any[] = [];
  windowsAlarm: any[] = [];





  constructor(private auth: AuthService, private data: DataService, private router: Router) {
    // 2. initialize(calling) functions in constructor
    // ----------------------------------------------------------------- //
    this.getDoors();
    this.getWindows();
    this.getBattery();
    this.getMotion()
  }







  // 1.retrieve data data (functions)
  // ----------------------------------------------------------------- //
  getDoors() {
    this.data.getDoors().subscribe(res => {


      this.doorsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;


        this.doorsAlarm.push(data)
        return data;
      })
    }, err => {
      alert(err.message)
    })
  }



  getBattery() {
    this.data.getBattery().subscribe(res => {
      this.Battery = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert(err.message)
    })
  }


  getMotion() {
    this.data.getMotion().subscribe(res => {
      this.motion = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        console.log(data);

        return data;
      })

    }, err => {
      alert(err.message)
    })
  }



  getWindows() {
    this.data.getWindows().subscribe(res => {
      this.windowsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;

        this.windowsAlarm.push(data)
        return data;
      })
    }, err => {
      alert(err.message)
    })
  }











  // 3.windows and doors alarm
  // 3.1.battery and motion alarm in => (html)
  // ----------------------------------------------------------------- //
  alarm(type: string) {
    let list = [];
    if (type == 'door') {
      list = this.doorsList
    } else if (type == 'window') {
      list = this.windowsList
    }


    let container = ''
    let txt = ''
    for (let i = 0; i < list.length; i++) {
      if (list[i]?.status == 'open') {
        container = 'bg-danger'
        txt = 'text-danger'
        break
      }

      else {
        container = 'bg-info'
        txt = ''
      }
    }
    return {
      container: container,
      txt: txt
    }
  }










  // 4.call police function
  // 4.1.call tech,power supply test and backup in => (html)
  // ----------------------------------------------------------------- //
  callPolice() {
    let container = '';
    let txt = ''


    if (
      this.doorsList.some(e => e.status === 'open') ||
      this.windowsList.some(e => e.status === 'open') ||
      this.Battery[0]?.status < 80
    ) {
      container = 'bg-danger';
      txt = 'text-danger'

      return {
        container: container,
        txt: txt
      }
    }



    else {
      container = 'bg-primary';

      return {
        container: container,
        txt: txt
      }
    }
  }






  // 5.clear alarm command
  // ----------------------------------------------------------------- //
  command = ''
  checkCommand() {
    if (this.command == 'clear') {

      this.doorsList.map(e => {
        this.data.updateDoors(e.id, 'close');
      })

      this.windowsList.map(e => {
        this.data.updateWindow(e.id, 'close');
      })

      this.Battery.map(e => {
        this.data.updateBattery(100);
      })

      this.motion.map(e => {
        this.data.updateMotion('not detected');
      })
    }
  }






  // 6.logout
  // ----------------------------------------------------------------- //
  logOut() {
    this.auth.logOut();
  }



  ngOnInit(): void { }
}
