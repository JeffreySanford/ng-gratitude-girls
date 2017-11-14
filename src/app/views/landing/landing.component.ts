import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

  scrollToSection() {
    document.getElementById('introduction').scrollIntoView();
  }
  constructor() { }

  ngOnInit() {

  }

}
