import { Component, OnInit } from '@angular/core';
import { IfeatureCard } from '../../model/data';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featureCardsArray : Array<IfeatureCard> = [
    {
      icon : `<i class="fa-brands fa-apple fa-3x"></i>`,
      title : 'Fully Responsive',
      info : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`
    },
    {
      icon : `<i class="fa-brands fa-apple fa-3x"></i>`,
      title : 'Fully Responsive',
      info : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`
    },
    {
      icon : `<i class="fa-brands fa-apple fa-3x"></i>`,
      title : 'Fully Responsive',
      info : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`
    },
    {
      icon : `<i class="fa-brands fa-apple fa-3x"></i>`,
      title : 'Fully Responsive',
      info : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`
    },
    {
      icon : `<i class="fa-brands fa-apple fa-3x"></i>`,
      title : 'Fully Responsive',
      info : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`
    },
    {
      icon : `<i class="fa-brands fa-apple fa-3x"></i>`,
      title : 'Fully Responsive',
      info : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
