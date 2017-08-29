import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorComponent } from './mostrador.component';

describe('MostradorComponent', () => {
  let component: MostradorComponent;
  let fixture: ComponentFixture<MostradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
