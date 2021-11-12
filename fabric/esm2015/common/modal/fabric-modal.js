import { ApplicationRef, ComponentFactoryResolver, Directive, Inject, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricReactive } from '../fabric-reactive';
import { fromEvent } from 'rxjs/';
import { filter } from 'rxjs/operators';
export class FabricModal extends FabricReactive {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.componentRef = null;
    }
    ngOnDestroy() {
        this.removeComponent();
    }
    createAndAppend(config) {
        const componentInjector = (config === null || config === void 0 ? void 0 : config.injector) ? config.injector : this.injector;
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.getComponent())
            .create(componentInjector);
        this.applicationRef.attachView(this.componentRef.hostView);
        const domModalElement = this.componentRef.hostView
            .rootNodes[0];
        this.getElement(config === null || config === void 0 ? void 0 : config.appendToElement).appendChild(domModalElement);
        if (config === null || config === void 0 ? void 0 : config.afterCompCreation) {
            config === null || config === void 0 ? void 0 : config.afterCompCreation();
        }
        this.componentRef.changeDetectorRef.detectChanges();
    }
    removeComponent() {
        if (this.componentRef) {
            this.applicationRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
    getComponentRef() {
        return this.componentRef;
    }
    getInjector() {
        return this.injector;
    }
    getDocument() {
        return this.document;
    }
    onCloseOnEsc() {
        const close$ = fromEvent(this.getDocument(), 'keyup');
        return close$
            .pipe(filter((key) => key.code === 'Escape'), this.takeUntil());
    }
    getElement(el) {
        return el ? el.nativeElement : this.document.body;
    }
}
FabricModal.decorators = [
    { type: Directive }
];
FabricModal.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2NvbW1vbi9tb2RhbC9mYWJyaWMtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFFeEIsU0FBUyxFQUdULE1BQU0sRUFDTixRQUFRLEVBR1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sT0FBTyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxNQUFNLE9BQWdCLFdBQWUsU0FBUSxjQUFjO0lBSTFELFlBQXVDLHdCQUFrRCxFQUNqRSxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDdEQsS0FBSyxFQUFFLENBQUM7UUFKOEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNqRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLGFBQVEsR0FBUixRQUFRLENBQUs7UUFMdkQsaUJBQVksR0FBb0IsSUFBSSxDQUFDO0lBT3JDLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFJRCxlQUFlLENBQUMsTUFBMEI7UUFDekMsTUFBTSxpQkFBaUIsR0FBRyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFN0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUM1QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNELE1BQU0sZUFBZSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBaUM7YUFDMUUsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztRQUU5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdEUsSUFBSSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsaUJBQWlCLEVBQUU7WUFDOUIsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxZQUFZO1FBQ1gsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRCxPQUFPLE1BQU07YUFDWCxJQUFJLENBQ0osTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxFQUN0QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCLENBQUM7SUFDSixDQUFDO0lBRU8sVUFBVSxDQUFDLEVBQWU7UUFDakMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUM7OztZQXRFRCxTQUFTOzs7WUFoQlQsd0JBQXdCO1lBRHhCLGNBQWM7WUFPZCxRQUFROzRDQWtCQSxNQUFNLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0RGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLFxuXHRFbWJlZGRlZFZpZXdSZWYsXG5cdEluamVjdCxcblx0SW5qZWN0b3IsXG5cdE9uRGVzdHJveSxcblx0VHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vZmFicmljLXJlYWN0aXZlJztcbmltcG9ydCB7IEZhYnJpY01vZGFsQ29uZmlnIH0gZnJvbSAnLi9mYWJyaWMtbW9kYWwuY29uZmlnJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFicmljTW9kYWw8VD4gZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0Y29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gPSBudWxsO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdFx0XHQgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnQ6IGFueSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHR9XG5cblx0YWJzdHJhY3QgZ2V0Q29tcG9uZW50KCk6IFR5cGU8VD47XG5cblx0Y3JlYXRlQW5kQXBwZW5kKGNvbmZpZz86IEZhYnJpY01vZGFsQ29uZmlnKTogdm9pZCB7XG5cdFx0Y29uc3QgY29tcG9uZW50SW5qZWN0b3IgPSBjb25maWc/LmluamVjdG9yID8gY29uZmlnLmluamVjdG9yIDogdGhpcy5pbmplY3RvcjtcblxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHRcdFx0XHRcdFx0XHQucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5nZXRDb21wb25lbnQoKSlcblx0XHRcdFx0XHRcdFx0XHQuY3JlYXRlKGNvbXBvbmVudEluamVjdG9yKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21Nb2RhbEVsZW1lbnQgPSAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5nZXRFbGVtZW50KGNvbmZpZz8uYXBwZW5kVG9FbGVtZW50KS5hcHBlbmRDaGlsZChkb21Nb2RhbEVsZW1lbnQpO1xuXG5cdFx0aWYgKGNvbmZpZz8uYWZ0ZXJDb21wQ3JlYXRpb24pIHtcblx0XHRcdGNvbmZpZz8uYWZ0ZXJDb21wQ3JlYXRpb24oKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRyZW1vdmVDb21wb25lbnQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZjtcblx0fVxuXG5cdGdldEluamVjdG9yKCk6IEluamVjdG9yIHtcblx0XHRyZXR1cm4gdGhpcy5pbmplY3Rvcjtcblx0fVxuXG5cdGdldERvY3VtZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9jdW1lbnQ7XG5cdH1cblxuXHRvbkNsb3NlT25Fc2MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmdldERvY3VtZW50KCksICdrZXl1cCcpO1xuXHRcdHJldHVybiBjbG9zZSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGtleSkgPT4ga2V5LmNvZGUgPT09ICdFc2NhcGUnKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RWxlbWVudChlbD86IEVsZW1lbnRSZWYpOiBhbnkge1xuXHRcdHJldHVybiBlbCA/IGVsLm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmRvY3VtZW50LmJvZHk7XG5cdH1cbn1cbiJdfQ==