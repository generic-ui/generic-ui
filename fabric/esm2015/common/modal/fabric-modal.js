import { ApplicationRef, ComponentFactoryResolver, Directive, Inject, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricReactive } from '../fabric-reactive';
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
    createAndAppend(injector) {
        const componentInjector = injector ? injector : this.injector;
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.getComponent())
            .create(componentInjector);
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        const domModalElement = componentRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domModalElement);
        this.componentRef = componentRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2NvbW1vbi9tb2RhbC9mYWJyaWMtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBZ0IsU0FBUyxFQUFtQixNQUFNLEVBQUUsUUFBUSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUN0SixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BELE1BQU0sT0FBZ0IsV0FBZSxTQUFRLGNBQWM7SUFJMUQsWUFBdUMsd0JBQWtELEVBQ2pFLGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYTtRQUN0RCxLQUFLLEVBQUUsQ0FBQztRQUo4Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2pFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUx2RCxpQkFBWSxHQUFvQixJQUFJLENBQUM7SUFPckMsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUlELGVBQWUsQ0FBQyxRQUFtQjtRQUNsQyxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTlELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDMUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzVDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRWxDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEQsTUFBTSxlQUFlLEdBQUksWUFBWSxDQUFDLFFBQWlDO2FBQ3JFLFNBQVMsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFFOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7OztZQXZERCxTQUFTOzs7WUFKZSx3QkFBd0I7WUFBeEMsY0FBYztZQUE4RSxRQUFROzRDQVlwRyxNQUFNLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJyaWNNb2RhbDxUPiBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0XHRcdCAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdH1cblxuXHRhYnN0cmFjdCBnZXRDb21wb25lbnQoKTogVHlwZTxUPjtcblxuXHRjcmVhdGVBbmRBcHBlbmQoaW5qZWN0b3I/OiBJbmplY3Rvcik6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudEluamVjdG9yID0gaW5qZWN0b3IgPyBpbmplY3RvciA6IHRoaXMuaW5qZWN0b3I7XG5cblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuXHRcdFx0XHRcdFx0XHRcdCAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5nZXRDb21wb25lbnQoKSlcblx0XHRcdFx0XHRcdFx0XHQgLmNyZWF0ZShjb21wb25lbnRJbmplY3Rvcik7XG5cblx0XHRjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cblx0XHRjb25zdCBkb21Nb2RhbEVsZW1lbnQgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21Nb2RhbEVsZW1lbnQpO1xuXG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRyZW1vdmVDb21wb25lbnQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZjtcblx0fVxuXG5cdGdldEluamVjdG9yKCk6IEluamVjdG9yIHtcblx0XHRyZXR1cm4gdGhpcy5pbmplY3Rvcjtcblx0fVxuXG5cdGdldERvY3VtZW50KCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9jdW1lbnQ7XG5cdH1cbn1cbiJdfQ==