import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }




  cimages = [{
    id: 1,
    alt: 'tata',
    src: 'https://tse2.mm.bing.net/th?id=OIP.n5gPgDohYAsMaJI1_GaUJwHaDl&pid=Api&P=0&h=220'
  }, {
    id: 2,
    alt: 'amazon',
    src: 'https://www.bontravelindia.com/wp-content/uploads/2021/10/Taj-Mahal-Heritage-Tourism-India-scaled.jpg'
  }, {
    id: 3,
    alt: 'tata',
    src: 'https://tse2.mm.bing.net/th?id=OIP.00E7uAOuJTn4juWhCa8KvQHaEE&pid=Api&P=0&h=220'
  }

  ]
}
