import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderMiddleComponent } from './top-header-middle.component';

describe('TopHeaderMiddleComponent', () => {
  let component: TopHeaderMiddleComponent;
  let fixture: ComponentFixture<TopHeaderMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeaderMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
