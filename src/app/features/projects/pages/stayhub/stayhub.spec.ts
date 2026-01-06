import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stayhub } from './stayhub';

describe('Stayhub', () => {
  let component: Stayhub;
  let fixture: ComponentFixture<Stayhub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stayhub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stayhub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
