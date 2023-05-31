import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHandleComponent } from './menu-handle.component';

describe('MenuHandleComponent', () => {
  let component: MenuHandleComponent;
  let fixture: ComponentFixture<MenuHandleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuHandleComponent]
    });
    fixture = TestBed.createComponent(MenuHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
