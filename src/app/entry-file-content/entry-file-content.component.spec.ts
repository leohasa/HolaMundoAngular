import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFileContentComponent } from './entry-file-content.component';

describe('EntryFileContentComponent', () => {
  let component: EntryFileContentComponent;
  let fixture: ComponentFixture<EntryFileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryFileContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryFileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
