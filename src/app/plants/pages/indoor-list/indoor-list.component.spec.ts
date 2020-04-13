import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorListComponent } from './indoor-list.component';

describe('IndoorListComponent', () => {
  let component: IndoorListComponent;
  let fixture: ComponentFixture<IndoorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
