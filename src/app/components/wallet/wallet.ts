import { Component, ElementRef, ViewChild } from '@angular/core';

interface wallet {
  label: string;
  balance?: number;
  estado?: string;
}

interface wallet {
  label: string;
  balance?: number;
  estado?: string;
}

@Component({
  selector: 'app-wallet',
  imports: [],
  templateUrl: './wallet.html',
  styleUrl: './wallet.css',
})
export class WalletComponent {
  wallets: wallet[] = [
    { label: 'Estado', estado: 'Bloqueado' },
    { label: 'Cupo Asignado', balance: 100000 },
    { label: 'Cupo Disponible', balance: 100000 },
    { label: 'Bonificación Global', balance: 225764 },
    { label: 'Receta Solidaria', balance: 5000 },
    { label: 'ChileSalud', balance: 4598 },
    { label: 'Yapp', balance: 500 },
    { label: 'Puntos Acumulados', balance: 1500 }
  ];
  @ViewChild('walletStrip', { static: false })
  walletStrip!: ElementRef<HTMLElement>;

  scrollWallet(direction: number) {
    const el = this.walletStrip.nativeElement;
    const cardWidth = 170;

    el.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth',
    });
  }
}


