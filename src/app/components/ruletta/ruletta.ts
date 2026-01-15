import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-ruletta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ruletta.html',
  styleUrl: './ruletta.css',
})
export class Ruletta {


  constructor(private cdr: ChangeDetectorRef) { }

  colors = ['#7ee6c8', '#7ecbff', '#6fa8ff', '#a68cff', '#ffb3c6', '#ffd6a5', '#f87b8c', '#ffb366', '#ffe066'];

  items = [1, 2, 3, 4, 5, 6, 7, 8];
  open = false;
  rotation = 0;
  spinning = false;
  result: number | null = null;

  girar() {
    if (this.spinning) return;
    this.spinning = true;
    this.result = null;

    const count = this.items.length;
    const degPerItem = 360 / count;

    const extraSpins = 5 * 360;
    const randomDeg = Math.random() * 360;
    const finalRotation = extraSpins + randomDeg;

    this.rotation += finalRotation;

    setTimeout(() => {
      const normalized = (360 - (this.rotation % 360)) % 360;
      const index = Math.floor(normalized / degPerItem);
      this.result = this.items[index];
      this.spinning = false;
      this.cdr.detectChanges();

    }, 2500);
  }

  getX(i: number, radius: number) {
    const angle = (2 * Math.PI * i) / this.items.length - Math.PI / 2;
    return 150 + radius * Math.cos(angle);
  }

  getY(i: number, radius: number) {
    const angle = (2 * Math.PI * i) / this.items.length - Math.PI / 2;
    return 150 + radius * Math.sin(angle);
  }

  getPath(i: number) {
    const r = 140;
    return `
    M150 150
    L ${this.getX(i, r)} ${this.getY(i, r)}
    A ${r} ${r} 0 0 1 ${this.getX(i + 1, r)} ${this.getY(i + 1, r)}
    Z
  `;
  }

  getTextRotation(i: number) {
    const angle = (360 / this.items.length) * i;
    return angle;
  }
}
