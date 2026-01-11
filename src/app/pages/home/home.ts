import { Component } from '@angular/core';
import { MinisectionsComponent } from '../../components/minisections/minisections';
import { CarruselComponent } from '../../components/carrusel/carrusel';
import { OfertasComponent } from '../../components/ofertas/ofertas';
import { PromocionesComponent } from '../../components/promociones/promociones';
import { WalletComponent } from '../../components/wallet/wallet';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [MinisectionsComponent, CarruselComponent, OfertasComponent, PromocionesComponent, WalletComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

}
