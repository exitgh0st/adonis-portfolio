import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtmAutomation } from './rtm-automation';

describe('RtmAutomation', () => {
  let component: RtmAutomation;
  let fixture: ComponentFixture<RtmAutomation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtmAutomation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtmAutomation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
