import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruletta } from './ruletta';

describe('Ruletta', () => {
  let component: Ruletta;
  let fixture: ComponentFixture<Ruletta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ruletta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ruletta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
