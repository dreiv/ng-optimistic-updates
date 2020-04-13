import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerFasterComponent } from './bigger-faster.component';

describe('BiggerFasterComponent', () => {
  let component: BiggerFasterComponent;
  let fixture: ComponentFixture<BiggerFasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiggerFasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiggerFasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
