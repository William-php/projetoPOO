import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarpComponent } from './cadastrarp.component';

describe('CadastrarpComponent', () => {
  let component: CadastrarpComponent;
  let fixture: ComponentFixture<CadastrarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
