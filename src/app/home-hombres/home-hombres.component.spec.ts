import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHombresComponent } from './home-hombres.component';

describe('HomeHombresComponent', () => {
  let component: HomeHombresComponent;
  let fixture: ComponentFixture<HomeHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHombresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
