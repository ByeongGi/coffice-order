import {
  Directive,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { MenuGridComponent } from './menu-grid/menu-grid.component';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective {
  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      MenuGridComponent
    );
    const componentRef = viewContainerRef.createComponent(componentFactory);
    console.log('viewContainerRef :', this.viewContainerRef);
  }
}
