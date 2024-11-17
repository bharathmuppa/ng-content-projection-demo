import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  input,
} from '@angular/core';
import { ChildComponent } from '../child-component/child.component';
import { CommonModule } from '@angular/common';
import { ContentContainerMultiple } from '../content-container-multiple/content-container-multiple.component';

@Component({
  selector: 'parent-container',
  imports: [ChildComponent, CommonModule, ContentContainerMultiple],
  standalone: true,
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.componenent.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ParentContainerComponnet {
  Users = [
    { name: 'bharth', country: 'Bharat' },
    { name: 'ganga', country: 'Bharat' },
    { name: 'rayyan', country: 'Bharat' },
  ];
}
