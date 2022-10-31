import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('h1').click(function () {
      $('h1').hide(3000)
    })

    $(document).ready(function () {
      $('.owl-carousel').owlCarousel();
    });
  }

}
