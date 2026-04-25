import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Termo } from './termo';

describe('Termo', () => {
  let component: Termo;
  let fixture: ComponentFixture<Termo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Termo],
    }).compileComponents();

    fixture = TestBed.createComponent(Termo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
