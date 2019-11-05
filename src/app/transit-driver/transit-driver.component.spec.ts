import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitDriverComponent } from './transit-driver.component';

describe('TransitDriverComponent', () => {
  let component: TransitDriverComponent;
  let fixture: ComponentFixture<TransitDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
