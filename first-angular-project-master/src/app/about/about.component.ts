import { Component, OnInit } from '@angular/core';
import { Portofolio } from '../portofolio';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  cabinPath = '../../assets/img/cabin.png';
  cakePath = '../../assets/img/cake.png';
  gamePath = '../../assets/img/game.png';
  safePath = '../../assets/img/game.png';
  submarinePath = '../../assets/img/submarine.png';

  myImgs:Portofolio[] = [
    {imgName:'LOG CABIN', immSrc: '../../assets/img/cabin.png'},
    {imgName:'TASTY CAKE', immSrc: '../../assets/img/cake.png'},
    {imgName:'CONTROLLER', immSrc: '../../assets/img/game.png'},
    {imgName:'LOCKED SAFE', immSrc: '../../assets/img/safe.png'},
    {imgName:'GIRCUS TENT', immSrc: '../../assets/img/circus.png'},
    {imgName:'SUBMARINE', immSrc: '../../assets/img/submarine.png'}
  ]

 
  constructor() { }

  ngOnInit(): void {
  }

}

