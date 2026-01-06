import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmtAutomation } from './rmt-automation';

describe('RmtAutomation', () => {
  let component: RmtAutomation;
  let fixture: ComponentFixture<RmtAutomation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmtAutomation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmtAutomation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
