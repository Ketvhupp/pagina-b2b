import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface item {
  label: string; //el nombrecito
  link: string; //el link a donde lleva, el routerlink
  roles?: string[]; //opcional, roles a los que les aparece
  children?: item[]; //para el dropdown
}

@Component({
  selector: 'app-minisections',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './minisections.html',
  styleUrl: './minisections.css',
})

export class MinisectionsComponent {

  menu: item[] = [
    {
      label: 'Categorias',
      link: '#',
      children: [
        { label: 'Action', link: '/roma' },
        { label: 'Another action', link: '/roma' },
        { label: 'Something else here', link: '/roma' },
        { label: 'Separated link', link: '/roma' }
      ]
    },

    { label: 'Promociones', link: '/roma' },
    { label: 'Ofertas', link: '/roma' },
    { label: 'Convenios', link: '/roma' },
    { label: 'Pedidos', link: '/roma' },
    {
      label: 'Novedades', link: '/roma ',
      children: [
        { label: 'Noticias', link: '/roma' },
        { label: 'Eventos', link: '/roma' },
      ]
    }
  ];

  IndexDropdownActivo: number | null = null;

  openDropdown(index: number) {
    this.IndexDropdownActivo = index;
  }

  closeDropdown() {
    this.IndexDropdownActivo = null;
  }

}


