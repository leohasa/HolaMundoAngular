import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFileComponent } from './entry-file.component';

describe('EntryFileComponent', () => {
  let component: EntryFileComponent;
  let fixture: ComponentFixture<EntryFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
