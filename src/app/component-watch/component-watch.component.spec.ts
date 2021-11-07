import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWatchComponent } from './component-watch.component';

describe('ComponentWatchComponent', () => {
  let component: ComponentWatchComponent;
  let fixture: ComponentFixture<ComponentWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
