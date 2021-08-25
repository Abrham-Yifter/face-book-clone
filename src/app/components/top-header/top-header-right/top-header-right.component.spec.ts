import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderRightComponent } from './top-header-right.component';

describe('TopHeaderRightComponent', () => {
  let component: TopHeaderRightComponent;
  let fixture: ComponentFixture<TopHeaderRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeaderRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
