import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjetes } from './tarjetes';

describe('Tarjetes', () => {
  let component: Tarjetes;
  let fixture: ComponentFixture<Tarjetes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarjetes],
    }).compileComponents();

    fixture = TestBed.createComponent(Tarjetes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
