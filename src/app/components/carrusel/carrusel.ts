import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class CarruselComponent {
  //crear elemento <a> u el alt a las imagenes 
  // iamagenes["img":ruta,"alt":alt]
  //imagenes.img[ruta:ruta,alt]
  slides: Slide[] = [
    {
      src: 'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzEyMzEzMENhcnJ1c2VsZXMgUmV0IEVuZXJvIDIwMjYuZ2lm',
      alt: 'Banner enero 2026',
      link: '/roma'
    },
    {
      src: 'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzEyMzMzMENhcnJ1c2VsZXMgUmV0IEVuZXJvIDIwMjYuZ2lm',
      alt: 'Banner 2',
      link: '/roma'
    },
    {
      src: 'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzIwNDEyNUNhcnJ1c2VsX09mZXJ0YXpvcyBTVUVST1guanBn',
      alt: 'Banner 3',
      link: '/roma'
    },
    {
      src: 'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzIwMzcxMFNhdmFsIEVuZXJvIDIwMjYuZ2lm',
      alt: 'Banner 4',
      link: '/roma'
    },
    {
      src: 'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzIwMzcxMFNhdmFsIEVuZXJvIDIwMjYuZ2lm',
      alt: 'Banner 5',
      link: '/roma'
    }

  ];

  /*images = [
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzEyMzEzMENhcnJ1c2VsZXMgUmV0IEVuZXJvIDIwMjYuZ2lm',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzEyMzMzMENhcnJ1c2VsZXMgUmV0IEVuZXJvIDIwMjYuZ2lm',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzIwNDEyNUNhcnJ1c2VsX09mZXJ0YXpvcyBTVUVST1guanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzIwMzcxMFNhdmFsIEVuZXJvIDIwMjYuZ2lm',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzEyMzAwMUNhcnJ1c2VsIEJvbl9Jc2RpbiBFbmUuanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzM2NjIyNkNhcnJ1c2VsIEJvbl9PUEhUSEEgRW5lLmpwZw..',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzM4Mzk0NUNhcnJ1c2VsZXMgUmV0IEVuZXJvIDIwMjYucG5n',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NzIwNDM1MkNhcnJ1c2VsIFNlbmlvcl9Qcl9BaG9ycm8uanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NDU3NDY1OENhcnJ1c2VsIFBhY2sgUmVjYWxjaW5lLmpwZw..',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NDc5MTg4N0NhcnJ1c2VsX1BhY2sgVml0YWwgRWxlbWVudHMuanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2MDUxNDI4OUNhcnJ1c2VsX09mZXJ0YXpvcyBSRUNBTENJTkUuanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2NDc5MjMzOUNhcnJ1c2VsIEtvd2EgRGljLmpwZw..',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2MjE4MTM3NkNhcnJ1c2VsX1NvbGFyZXMgTm92LmpwZw..',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc1OTc4NTA3NUNhcnJ1c2VsIEdvbWl0YXMgT2N0IC0gQ2FycnVzZWwuanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc1ODYzOTIyOWJhbm5lci13ZWItc2FtYnVjb2wuanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc1NzQyMTg2MEJhbm5lci0wMi0tLTIwNDh4NTEyLS0tUFJPWk9ORS5qcGc.',
    'https://b2b.global-pharma.cl/Vista/img/Slider/Q2FycnVzZWw3IERVUkVYIDE0ODh4NDMzcHguanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/Q2FycnVzZWwgQ1JFQVRJTkEuanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc1NjMzMDI0NENhcnJ1c2VsIFZhbnRlbGluLmpwZw..',
    'https://b2b.global-pharma.cl/Vista/img/Slider/MTc2MTE2MjYzOENhcnJ1c2VsIFNvbGFyZXMgQXZlbmUuanBn',
    'https://b2b.global-pharma.cl/Vista/img/Slider/QmFubmVyIEdhdmlzY29uLmpwZw=='
  ];
  */

  currentIndex = signal(0);

  next() {
    this.currentIndex.set(
      (this.currentIndex() + 1) % this.slides.length
    );
  }

  prev() {
    this.currentIndex.set(
      (this.currentIndex() - 1 + this.slides.length) % this.slides.length
    );
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
interface Slide {
  src: string;
  alt: string;
  link: string;
}

