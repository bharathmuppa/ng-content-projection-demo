import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormCustomSelectComponent } from './mat-form-custom-select.component';

describe('MatFormCustomSelectComponent', () => {
  let component: MatFormCustomSelectComponent;
  let fixture: ComponentFixture<MatFormCustomSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormCustomSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormCustomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
