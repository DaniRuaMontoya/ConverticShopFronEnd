import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMujerComponent } from './home-mujer.component';

describe('HomeMujerComponent', () => {
  let component: HomeMujerComponent;
  let fixture: ComponentFixture<HomeMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
