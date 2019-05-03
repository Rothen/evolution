import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureConfigurationComponent } from './creature-configuration.component';

describe('CreatureConfigurationComponent', () => {
  let component: CreatureConfigurationComponent;
  let fixture: ComponentFixture<CreatureConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatureConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatureConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
