import { Component, OnInit } from '@angular/core';
import { Cards } from '../shared/data';
import * as AOS from 'aos';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  cards = Cards
  show: boolean = false
  constructor() {
  }

  ngOnInit(): void {
    AOS.init()
  }

}
