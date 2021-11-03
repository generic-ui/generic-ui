import { Inject, Injectable } from '@angular/core';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricMessageComponent } from './fabric-message.component';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
export class FabricMessageService extends FabricModal {
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
    }
    getComponent() {
        return FabricMessageComponent;
    }
    open(text) {
        this.createAndAppend();
        this.getComponentRef().instance.text = text;
        this.getComponentRef().instance.detectChanges();
    }
    close() {
        this.removeComponent();
    }
}
FabricMessageService.ɵfac = function FabricMessageService_Factory(t) { return new (t || FabricMessageService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
FabricMessageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricMessageService, factory: FabricMessageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricMessageService, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9tZXNzYWdlL2ZhYnJpYy1tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE0QyxNQUFNLEVBQUUsVUFBVSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUczQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsV0FBbUM7SUFFNUUsWUFBWSx3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhO1FBQ2pDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDaEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7O3dGQXJCVyxvQkFBb0Isa0hBS3JCLFFBQVE7MEVBTFAsb0JBQW9CLFdBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRGhDLFVBQVU7O3NCQU1OLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY01vZGFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy1tb2RhbCc7XG5pbXBvcnQgeyBGYWJyaWNNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljTWVzc2FnZVNlcnZpY2UgZXh0ZW5kcyBGYWJyaWNNb2RhbDxGYWJyaWNNZXNzYWdlQ29tcG9uZW50PiB7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIGRvY3VtZW50KTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY01lc3NhZ2VDb21wb25lbnQ+IHtcblx0XHRyZXR1cm4gRmFicmljTWVzc2FnZUNvbXBvbmVudDtcblx0fVxuXG5cdG9wZW4odGV4dDogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jcmVhdGVBbmRBcHBlbmQoKTtcblx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLnRleHQgPSB0ZXh0O1xuXHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2UuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVDb21wb25lbnQoKTtcblx0fVxufVxuIl19