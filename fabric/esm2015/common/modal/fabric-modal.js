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
            this.unsubscribe();
        }
    }
    getComponentRef() {
        return this.componentRef;
    }
    getComponentInstance() {
        return this.getComponentRef().instance;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2NvbW1vbi9tb2RhbC9mYWJyaWMtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLGNBQWMsRUFDZCx3QkFBd0IsRUFFeEIsU0FBUyxFQUdULE1BQU0sRUFDTixRQUFRLEVBR1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sT0FBTyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxNQUFNLE9BQWdCLFdBQWUsU0FBUSxjQUFjO0lBSTFELFlBQXVDLHdCQUFrRCxFQUNqRSxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDdEQsS0FBSyxFQUFFLENBQUM7UUFKOEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNqRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLGFBQVEsR0FBUixRQUFRLENBQUs7UUFMdkQsaUJBQVksR0FBb0IsSUFBSSxDQUFDO0lBT3JDLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFJRCxlQUFlLENBQUMsTUFBMEI7UUFDekMsTUFBTSxpQkFBaUIsR0FBRyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFN0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUM1QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNELE1BQU0sZUFBZSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBaUM7YUFDMUUsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztRQUU5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdEUsSUFBSSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsaUJBQWlCLEVBQUU7WUFDOUIsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkI7SUFDRixDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBRUQsb0JBQW9CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUNYLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBTSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsT0FBTyxNQUFNO2FBQ1gsSUFBSSxDQUNKLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsRUFDdEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVPLFVBQVUsQ0FBQyxFQUFlO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNuRCxDQUFDOzs7WUEzRUQsU0FBUzs7O1lBaEJULHdCQUF3QjtZQUR4QixjQUFjO1lBT2QsUUFBUTs0Q0FrQkEsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbENvbmZpZyB9IGZyb20gJy4vZmFicmljLW1vZGFsLmNvbmZpZyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzLyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhYnJpY01vZGFsPFQ+IGV4dGVuZHMgRmFicmljUmVhY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+ID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRcdFx0ICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50OiBhbnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVDb21wb25lbnQoKTtcblx0fVxuXG5cdGFic3RyYWN0IGdldENvbXBvbmVudCgpOiBUeXBlPFQ+O1xuXG5cdGNyZWF0ZUFuZEFwcGVuZChjb25maWc/OiBGYWJyaWNNb2RhbENvbmZpZyk6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudEluamVjdG9yID0gY29uZmlnPy5pbmplY3RvciA/IGNvbmZpZy5pbmplY3RvciA6IHRoaXMuaW5qZWN0b3I7XG5cblx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0LnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuZ2V0Q29tcG9uZW50KCkpXG5cdFx0XHRcdFx0XHRcdFx0LmNyZWF0ZShjb21wb25lbnRJbmplY3Rvcik7XG5cblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tTW9kYWxFbGVtZW50ID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZ2V0RWxlbWVudChjb25maWc/LmFwcGVuZFRvRWxlbWVudCkuYXBwZW5kQ2hpbGQoZG9tTW9kYWxFbGVtZW50KTtcblxuXHRcdGlmIChjb25maWc/LmFmdGVyQ29tcENyZWF0aW9uKSB7XG5cdFx0XHRjb25maWc/LmFmdGVyQ29tcENyZWF0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cmVtb3ZlQ29tcG9uZW50KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblx0XHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcblx0XHRcdHRoaXMudW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnRSZWY7XG5cdH1cblxuXHRnZXRDb21wb25lbnRJbnN0YW5jZSgpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZTtcblx0fVxuXG5cdGdldEluamVjdG9yKCk6IEluamVjdG9yIHtcblx0XHRyZXR1cm4gdGhpcy5pbmplY3Rvcjtcblx0fVxuXG5cdGdldERvY3VtZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9jdW1lbnQ7XG5cdH1cblxuXHRvbkNsb3NlT25Fc2MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQ8YW55Pih0aGlzLmdldERvY3VtZW50KCksICdrZXl1cCcpO1xuXHRcdHJldHVybiBjbG9zZSRcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGtleSkgPT4ga2V5LmNvZGUgPT09ICdFc2NhcGUnKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RWxlbWVudChlbD86IEVsZW1lbnRSZWYpOiBhbnkge1xuXHRcdHJldHVybiBlbCA/IGVsLm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmRvY3VtZW50LmJvZHk7XG5cdH1cbn1cbiJdfQ==