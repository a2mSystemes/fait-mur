import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayManagerComponent } from './display-manager.component';

describe('DisplayManagerComponent', () => {
  let component: DisplayManagerComponent;
  let fixture: ComponentFixture<DisplayManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
