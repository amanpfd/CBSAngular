import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitUserComponent } from './transit-user.component';

describe('TransitUserComponent', () => {
  let component: TransitUserComponent;
  let fixture: ComponentFixture<TransitUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
