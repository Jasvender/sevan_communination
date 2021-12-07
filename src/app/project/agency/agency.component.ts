import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {
  featureImages = [
    {
      title: '01',
      image: 'assets/images/features/icon01.svg',
      number: 'UI-UX DESIGN',
    },
    {
      title: '02',
      image: 'assets/images/features/icon02.svg',
      number: 'DESIGN CODING',
    },
    {
      title: '03',
      image: 'assets/images/features/icon03.svg',
      number: 'BRANDING',
    },
    {
      title: '04',
      image: 'assets/images/features/icon04.svg',
      number: 'MARKETTING',
    },
    {
      title: '05',
      image: 'assets/images/features/icon05.svg',
      number: 'IOS APPS',
    },
    {
      title: '06',
      image: 'assets/images/features/icon06.svg',
      number: 'CUSTOM CMS',
    },
    {
      title: '07',
      image: 'assets/images/features/icon07.svg',
      number: 'JAVA APPS',
    },
    {
      title: '08',
      image: 'assets/images/features/icon08.svg',
      number: 'eCOMMERCE',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e:any) {
    let element:any = document.querySelector('.change-bg');
    if (window.pageYOffset >= element.offsetTop - (window.innerHeight/3) && window.pageYOffset < element.offsetTop + window.innerHeight) {
      document.body.classList.add('color-dark');
    } else {
      document.body.classList.remove('color-dark');
    }
  }
}
