import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutationConfigurationComponent } from './mutation-configuration.component';

describe('MutationConfigurationComponent', () => {
  let component: MutationConfigurationComponent;
  let fixture: ComponentFixture<MutationConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutationConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
