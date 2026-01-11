import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface cardP {
  nombre: string;
  src: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'app-promociones',
  imports: [RouterLink],
  templateUrl: './promociones.html',
  styleUrl: './promociones.css',
})


export class PromocionesComponent {
  menuu: cardP[] = [
    {
      nombre: 'Oferta 1',
      src: "https://b2b.global-pharma.cl/Vista/img/Promociones/MTc2NzcxMTM0NTU3NTg0MF8zIGlzZGluLmpwZw..",
      alt: 'Oferta 1',
      link: '/roma'
    },
    {
      nombre: 'Suplementos Destacados',
      src: 'https://b2b.global-pharma.cl/Vista/img/Promociones/MTc2NTg5OTU4N0dydW5lIExlYmVuLnBuZw..',
      alt: 'Suplementos Destacados',
      link: '/roma'
    },
    {
      nombre: 'Oferta 1',
      src: "https://b2b.global-pharma.cl/Vista/img/Promociones/MTc2NzcxMTM0NTU3NTg0MF8zIGlzZGluLmpwZw..",
      alt: 'Oferta 1',
      link: '/roma'
    },
    {
      nombre: 'Oferta 1',
      src: "https://b2b.global-pharma.cl/Vista/img/Promociones/MTc2NzcxMTM0NTU3NTg0MF8zIGlzZGluLmpwZw..",
      alt: 'Oferta 1',
      link: '/roma'
    },
    {
      nombre: 'Oferta 1',
      src: "https://b2b.global-pharma.cl/Vista/img/Promociones/MTc2NzcxMTM0NTU3NTg0MF8zIGlzZGluLmpwZw..",
      alt: 'Oferta 1',
      link: '/roma'
    },
    {
      nombre: 'Oferta 1',
      src: "https://b2b.global-pharma.cl/Vista/img/Promociones/MTc2NzcxMTM0NTU3NTg0MF8zIGlzZGluLmpwZw..",
      alt: 'Oferta 1',
      link: '/roma'
    },
    {
      nombre: 'Oferta 1',
      src: "https://b2b.global-pharma.cl/Vista/img/Promociones/MTc2NzcxMTM0NTU3NTg0MF8zIGlzZGluLmpwZw..",
      alt: 'Oferta 1',
      link: '/roma'
    }
  ]


  loopMenuu: cardP[] = [
    ...this.menuu,
    ...this.menuu,
  ];


  scroll(direction: number) {
    const ele = document.querySelector('.flash-stripP')!;
    const cardwidth = 300;

    ele.scrollBy({ left: direction * cardwidth, behavior: 'smooth' });
    const half = ele.scrollWidth / 2;

    setTimeout(() => {
      if (ele.scrollLeft >= half) {
        ele.scrollLeft -= half;
      }

      if (ele.scrollLeft <= cardwidth / 2) {
        ele.scrollLeft += half;
      }

    }, 400);
  }

  ngOnInit() {
    setInterval(() => {
      this.scroll(1);
    }, 5000);
  }

}
