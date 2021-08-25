import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderLeftComponent } from './top-header-left.component';

describe('TopHeaderLeftComponent', () => {
  let component: TopHeaderLeftComponent;
  let fixture: ComponentFixture<TopHeaderLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeaderLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
