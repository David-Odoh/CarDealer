import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMakeComponent } from './detail-make.component';

describe('DetailMakeComponent', () => {
  let component: DetailMakeComponent;
  let fixture: ComponentFixture<DetailMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
