import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDeformateurComponent } from './ngx-deformateur.component';

describe('NgxDeformateurComponent', () => {
  let component: NgxDeformateurComponent;
  let fixture: ComponentFixture<NgxDeformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDeformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDeformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
