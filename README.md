# ng-content-projection-demo

https://angular.dev/guide/components/content-projection#


Angular refers to any children of a component passed this way as that component's content. This is distinct from the component's view, which refers to the elements defined in the component's template.

The <ng-content> element is neither a component nor DOM element. Instead, it is a special placeholder that tells Angular where to render content. Angular's compiler processes all <ng-content> elements at build-time. You cannot insert, remove, or modify <ng-content> at run time. You cannot add directives, styles, or arbitrary attributes to <ng-content>.

You should not conditionally include <ng-content> with @if, @for, or @switch. Angular always instantiates and creates DOM nodes for content rendered to a <ng-content> placeholder, even if that <ng-content> placeholder is hidden. For conditional rendering of component content, see Template fragments.


