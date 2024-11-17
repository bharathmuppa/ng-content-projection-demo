import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatFormCustomSelectComponent } from './app/mat-form-custom-select/mat-form-custom-select.component';

import {MatDivider} from '@angular/material/divider';
import ParentContainerComponnet from './app/parent-container/parent-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatFormCustomSelectComponent,MatDivider, ParentContainerComponnet],

  template: `
<app-mat-form-custom-select [template]="employeeOptions"></app-mat-form-custom-select>
<ng-template #employeeOptions let-employee>
  {{ employee.name }}
</ng-template>


<mat-divider></mat-divider>

<parent-container></parent-container>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {

  providers: [provideAnimationsAsync()],
});
