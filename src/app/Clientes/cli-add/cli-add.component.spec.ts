import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliAddComponent } from './cli-add.component';

describe('CliAddComponent', () => {
  let component: CliAddComponent;
  let fixture: ComponentFixture<CliAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
