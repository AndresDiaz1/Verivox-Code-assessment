import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifCardComponent } from './tarif-card.component';

describe('TarifCardComponent', () => {
  let component: TarifCardComponent;
  let fixture: ComponentFixture<TarifCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
