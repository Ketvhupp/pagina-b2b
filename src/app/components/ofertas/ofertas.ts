import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface card {
  nombre: string;
  src: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'app-ofertas',
  imports: [RouterLink],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class OfertasComponent {
  menu: card[] = [
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


  loopMenu: card[] = [
    ...this.menu,
    ...this.menu,
  ];


  scroll(direction: number) {
    const el = document.querySelector('.flash-strip')!;
    const cardwidth = 300;

    el.scrollBy({ left: direction * cardwidth, behavior: 'smooth' });
    const half = el.scrollWidth / 2;

    setTimeout(() => {
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }

      if (el.scrollLeft <= cardwidth / 2) {
        el.scrollLeft += half;
      }

    }, 400);
  }

  ngOnInit() {
    setInterval(() => {
      this.scroll(1);
    }, 5000);
  }


}
