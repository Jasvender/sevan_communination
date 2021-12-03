import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';
// import * as AOS from 'aos';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images:any = [
    {
      image: 'assets/images/slider/slide.jpg',
      smallImg: 'assets/images/clients/client01.png',
      heading: 'Space in typographical terms is usually',
      link: '#'
    },
    {
      image:'assets/images/slider/slide01.jpg',
      smallImg: 'assets/images/clients/client01.png',
      heading: 'Space in typographical terms is usually',
      link: '#'
    },
    {
      image:'assets/images/slider/slide02.jpg',
      smallImg: 'assets/images/clients/client01.png',
      heading: 'Space in typographical terms is usually',
      link: '#'
    },
    {
      image:'assets/images/slider/slide03.jpg',
      smallImg: 'assets/images/clients/client01.png',
      heading: 'Space in typographical terms is usually',
      link: '#'
    }
  ]
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
    // AOS.init();
  }
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    loop:true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  };
  onSwiper(swiper:any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
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
  onSectionScroll(e:any) {
    // let smallElement:any = document.querySelector('.small-change-bg');
    // if (window.pageYOffset >= smallElement.offsetTop - (window.innerHeight/3) && window.pageYOffset < smallElement.offsetTop + (window.innerHeight/3)) {
    //   document.body.classList.add('color-dark');
    // } else {
    //   document.body.classList.remove('color-dark');
    // }
  }
  

}
