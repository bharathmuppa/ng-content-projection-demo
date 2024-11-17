import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'content-container-multiple',
  standalone: true,
  imports: [],
  templateUrl: './content-container-multiple.component.html',
  styleUrl: './content-container-multiple.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ContentContainerMultiple {
  users = input<any>();

   usersList= computed(()=>{
    return this.users.length;
   })
}
