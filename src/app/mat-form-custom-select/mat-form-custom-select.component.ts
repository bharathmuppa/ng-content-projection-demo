import { Component, TemplateRef, input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mat-form-custom-select',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, CommonModule],
  templateUrl: './mat-form-custom-select.component.html',
  styleUrl: './mat-form-custom-select.component.css',
})
export class MatFormCustomSelectComponent {
  selected = null;
  employees: { id: number; name: string }[] = [
    { id: 1, name: 'Bharath' },
    { id: 2, name: 'Harshit' },
    { id: 3, name: 'Mansur' },
  ];
  template = input.required<TemplateRef<any>>();
}
