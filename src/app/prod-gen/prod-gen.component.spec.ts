import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdGenComponent } from './prod-gen.component';

describe('ProdGenComponent', () => {
  let component: ProdGenComponent;
  let fixture: ComponentFixture<ProdGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
