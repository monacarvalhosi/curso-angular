import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasNewComponent } from './pessoas-new.component';

describe('PessoasNewComponent', () => {
  let component: PessoasNewComponent;
  let fixture: ComponentFixture<PessoasNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
