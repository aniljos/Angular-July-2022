import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetsShopComponent } from './gadgets-shop.component';

describe('GadgetsShopComponent', () => {
  let component: GadgetsShopComponent;
  let fixture: ComponentFixture<GadgetsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadgetsShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GadgetsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
