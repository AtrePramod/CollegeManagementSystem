import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactrootComponent } from './contactroot.component';

describe('ContactrootComponent', () => {
  let component: ContactrootComponent;
  let fixture: ComponentFixture<ContactrootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactrootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
