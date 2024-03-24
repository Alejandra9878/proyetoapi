import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarproductoComponent } from './actualizarproducto.component';

describe('ActualizarproductoComponent', () => {
  let component: ActualizarproductoComponent;
  let fixture: ComponentFixture<ActualizarproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarproductoComponent]
    });
    fixture = TestBed.createComponent(ActualizarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
