import { animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  masonryItems = [
    {
      title: 'Pet World App',
      image: 'https://sevancommunination.com/public/images/petworld.jpg',
      content: 'Branding — Website'
    },
    {
      title: 'Ajioo Website Redesgin',
      image: 'https://sevancommunination.com/public/images/ajioo.png',
      content: 'Website — eCommerce'
    },
    {
      title: 'Online Learning',
      image: 'https://sevancommunination.com/public/images/onlineEdu.jpg',
      content: 'Wordpress — eCommerce'
    },
    {
      title: 'Flight Booking App',
      image: 'https://sevancommunination.com/public/images/flight.jpg',
      content: 'Print — Branding'
    },
  ];
  animations = {
    show: [
      style({ opacity: 0 }),
      animate('100ms ease-in', style({ opacity: 1 })),
    ],
    hide: [
      style({ opacity: '*' }),
      animate('100ms ease-in', style({ opacity: 0 })),
    ]
  }

}
