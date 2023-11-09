import { Directive, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FabricReactive } from '../fabric-reactive';
import { fromEvent } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class FabricModal extends FabricReactive {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.componentRef = 'destroyed';
    }
    ngOnDestroy() {
        this.removeComponent();
    }
    createAndAppend(config) {
        const componentInjector = config?.injector ? config.injector : this.injector;
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.getComponent())
            .create(componentInjector);
        this.applicationRef.attachView(this.componentRef.hostView);
        const domModalElement = this.componentRef.hostView
            .rootNodes[0];
        this.getElement(config?.appendToElement).appendChild(domModalElement);
        if (config?.afterCompCreation) {
            config?.afterCompCreation();
        }
        this.componentRef.changeDetectorRef.detectChanges();
    }
    removeComponent() {
        if (this.componentRef !== 'destroyed') {
            this.applicationRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = 'destroyed';
            this.unsubscribe();
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
            .pipe(filter((key) => key.code === 'Escape'), takeUntil(this.unsubscribe$));
    }
    isComponentCreated() {
        return this.componentRef !== 'destroyed';
    }
    getElement(el) {
        return el ? el.nativeElement : this.document.body;
    }
}
FabricModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricModal, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Directive });
FabricModal.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: FabricModal, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricModal, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2NvbW1vbi9tb2RhbC9mYWJyaWMtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUlOLFNBQVMsRUFHVCxNQUFNLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR25ELE1BQU0sT0FBZ0IsV0FBZSxTQUFRLGNBQWM7SUFJMUQsWUFBdUMsd0JBQWtELEVBQ2pFLGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYTtRQUN0RCxLQUFLLEVBQUUsQ0FBQztRQUo4Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2pFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUwvQyxpQkFBWSxHQUFrQyxXQUFXLENBQUM7SUFPbEUsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUlELGVBQWUsQ0FBQyxNQUEwQjtRQUN6QyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFN0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCO2FBQzFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUM1QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNELE1BQU0sZUFBZSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBaUM7YUFDMUUsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztRQUU5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdEUsSUFBSSxNQUFNLEVBQUUsaUJBQWlCLEVBQUU7WUFDOUIsTUFBTSxFQUFFLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsRUFBRTtZQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVk7UUFDWCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELE9BQU8sTUFBTTthQUNYLElBQUksQ0FDSixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLEVBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVCLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUM7SUFDMUMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxFQUFlO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNuRCxDQUFDOzt5R0ExRW9CLFdBQVcsZ0hBT2pCLFFBQVE7NkZBUEYsV0FBVzs0RkFBWCxXQUFXO2tCQURoQyxTQUFTOzswQkFRRCxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBsaWNhdGlvblJlZixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRDb21wb25lbnRSZWYsXG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0RW1iZWRkZWRWaWV3UmVmLFxuXHRJbmplY3QsXG5cdEluamVjdG9yLFxuXHRPbkRlc3Ryb3ksXG5cdFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGYWJyaWNSZWFjdGl2ZSB9IGZyb20gJy4uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbENvbmZpZyB9IGZyb20gJy4vZmFicmljLW1vZGFsLmNvbmZpZyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYWJyaWNNb2RhbDxUPiBleHRlbmRzIEZhYnJpY1JlYWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+IHwgJ2Rlc3Ryb3llZCcgPSAnZGVzdHJveWVkJztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRcdFx0ICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50OiBhbnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVDb21wb25lbnQoKTtcblx0fVxuXG5cdGFic3RyYWN0IGdldENvbXBvbmVudCgpOiBUeXBlPFQ+O1xuXG5cdGNyZWF0ZUFuZEFwcGVuZChjb25maWc/OiBGYWJyaWNNb2RhbENvbmZpZyk6IHZvaWQge1xuXHRcdGNvbnN0IGNvbXBvbmVudEluamVjdG9yID0gY29uZmlnPy5pbmplY3RvciA/IGNvbmZpZy5pbmplY3RvciA6IHRoaXMuaW5qZWN0b3I7XG5cblx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0LnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuZ2V0Q29tcG9uZW50KCkpXG5cdFx0XHRcdFx0XHRcdFx0LmNyZWF0ZShjb21wb25lbnRJbmplY3Rvcik7XG5cblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tTW9kYWxFbGVtZW50ID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuXHRcdFx0LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuXHRcdHRoaXMuZ2V0RWxlbWVudChjb25maWc/LmFwcGVuZFRvRWxlbWVudCkuYXBwZW5kQ2hpbGQoZG9tTW9kYWxFbGVtZW50KTtcblxuXHRcdGlmIChjb25maWc/LmFmdGVyQ29tcENyZWF0aW9uKSB7XG5cdFx0XHRjb25maWc/LmFmdGVyQ29tcENyZWF0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cmVtb3ZlQ29tcG9uZW50KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudFJlZiAhPT0gJ2Rlc3Ryb3llZCcpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmNvbXBvbmVudFJlZiA9ICdkZXN0cm95ZWQnO1xuXHRcdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0fVxuXG5cdGdldENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD4gfCAnZGVzdHJveWVkJyB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50UmVmO1xuXHR9XG5cblx0Z2V0SW5qZWN0b3IoKTogSW5qZWN0b3Ige1xuXHRcdHJldHVybiB0aGlzLmluamVjdG9yO1xuXHR9XG5cblx0Z2V0RG9jdW1lbnQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5kb2N1bWVudDtcblx0fVxuXG5cdG9uQ2xvc2VPbkVzYygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudDxhbnk+KHRoaXMuZ2V0RG9jdW1lbnQoKSwgJ2tleXVwJyk7XG5cdFx0cmV0dXJuIGNsb3NlJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoa2V5KSA9PiBrZXkuY29kZSA9PT0gJ0VzY2FwZScpLFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpXG5cdFx0XHQpO1xuXHR9XG5cblx0aXNDb21wb25lbnRDcmVhdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZiAhPT0gJ2Rlc3Ryb3llZCc7XG5cdH1cblxuXHRwcml2YXRlIGdldEVsZW1lbnQoZWw/OiBFbGVtZW50UmVmKTogYW55IHtcblx0XHRyZXR1cm4gZWwgPyBlbC5uYXRpdmVFbGVtZW50IDogdGhpcy5kb2N1bWVudC5ib2R5O1xuXHR9XG59XG4iXX0=