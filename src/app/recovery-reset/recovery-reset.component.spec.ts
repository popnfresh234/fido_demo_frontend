import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryResetComponent } from './recovery-reset.component';

describe('RecoveryResetComponent', () => {
  let component: RecoveryResetComponent;
  let fixture: ComponentFixture<RecoveryResetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecoveryResetComponent]
    });
    fixture = TestBed.createComponent(RecoveryResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
