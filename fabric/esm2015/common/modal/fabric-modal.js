import { Inject, Directive } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricReactive } from '../fabric-reactive';
import * as i0 from "@angular/core";
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
FabricModal.ɵfac = function FabricModal_Factory(t) { return new (t || FabricModal)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ApplicationRef), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(DOCUMENT)); };
FabricModal.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FabricModal, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricModal, [{
        type: Directive
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2NvbW1vbi9tb2RhbC9mYWJyaWMtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyRSxNQUFNLEVBQXdDLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUdwRCxNQUFNLE9BQWdCLFdBQWUsU0FBUSxjQUFjO0lBSTFELFlBQXVDLHdCQUFrRCxFQUNqRSxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWtCO1FBQzNELEtBQUssRUFBRSxDQUFDO1FBSjhCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDakUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTDVELGlCQUFZLEdBQW9CLElBQUksQ0FBQztJQU9yQyxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBSUQsZUFBZSxDQUFDLFFBQW1CO1FBQ2xDLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFOUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMxQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDNUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RCxNQUFNLGVBQWUsR0FBSSxZQUFZLENBQUMsUUFBaUM7YUFDckUsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7c0VBdERvQixXQUFXLHNKQU9qQixRQUFROzhEQVBGLFdBQVc7dUZBQVgsV0FBVztjQURoQyxTQUFTO2lJQVEyQyxRQUFRO3NCQUFwRCxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0LCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlLCBDb21wb25lbnQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmFicmljUmVhY3RpdmUgfSBmcm9tICcuLi9mYWJyaWMtcmVhY3RpdmUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJyaWNNb2RhbDxUPiBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0XHRcdCAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudDogRG9jdW1lbnQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVDb21wb25lbnQoKTtcblx0fVxuXG5cdGFic3RyYWN0IGdldENvbXBvbmVudCgpOiBUeXBlPFQ+XG5cblx0Y3JlYXRlQW5kQXBwZW5kKGluamVjdG9yPzogSW5qZWN0b3IpOiB2b2lkIHtcblx0XHRjb25zdCBjb21wb25lbnRJbmplY3RvciA9IGluamVjdG9yID8gaW5qZWN0b3IgOiB0aGlzLmluamVjdG9yO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0XHRcdFx0XHRcdFx0XHQgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuZ2V0Q29tcG9uZW50KCkpXG5cdFx0XHRcdFx0XHRcdFx0IC5jcmVhdGUoY29tcG9uZW50SW5qZWN0b3IpO1xuXG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tTW9kYWxFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pilcblx0XHRcdC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHR0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tTW9kYWxFbGVtZW50KTtcblxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0cmVtb3ZlQ29tcG9uZW50KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuXHRcdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblx0XHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRnZXRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnRSZWY7XG5cdH1cblxuXHRnZXRJbmplY3RvcigpOiBJbmplY3RvciB7XG5cdFx0cmV0dXJuIHRoaXMuaW5qZWN0b3I7XG5cdH1cblxuXHRnZXREb2N1bWVudCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLmRvY3VtZW50O1xuXHR9XG59XG4iXX0=