import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoFormComponent } from './neo-form.component';

describe('NeoFormComponent', () => {
  let component: NeoFormComponent;
  let fixture: ComponentFixture<NeoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
