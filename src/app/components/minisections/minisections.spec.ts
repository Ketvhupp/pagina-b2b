import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minisections } from './minisections';

describe('Minisections', () => {
  let component: Minisections;
  let fixture: ComponentFixture<Minisections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Minisections]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Minisections);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
