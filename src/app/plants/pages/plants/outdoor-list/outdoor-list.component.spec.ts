import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorListComponent } from './outdoor-list.component';

describe('OutdoorListComponent', () => {
  let component: OutdoorListComponent;
  let fixture: ComponentFixture<OutdoorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
