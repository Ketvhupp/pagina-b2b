import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roma } from './roma';

describe('Roma', () => {
  let component: Roma;
  let fixture: ComponentFixture<Roma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
