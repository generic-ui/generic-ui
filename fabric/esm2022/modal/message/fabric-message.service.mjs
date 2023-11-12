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
        this.createAndAppend({
            afterCompCreation: () => this.afterCompCreation(text)
        });
    }
    close() {
        this.removeComponent();
    }
    afterCompCreation(text) {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.text = text;
            componentRef.instance.detectChanges();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricMessageService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricMessageService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricMessageService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9tZXNzYWdlL2ZhYnJpYy1tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEwRCxNQUFNLEVBQUUsVUFBVSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUczQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsV0FBbUM7SUFFNUUsWUFBWSx3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhO1FBQ2pDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxzQkFBc0IsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNwQixpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1NBQ3JELENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxJQUFZO1FBQ3JDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBMEMsQ0FBQztZQUNwRixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QztJQUNGLENBQUM7dUdBN0JXLG9CQUFvQixnSEFLckIsUUFBUTsyR0FMUCxvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVU7OzBCQU1OLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTW9kYWwgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLW1vZGFsJztcbmltcG9ydCB7IEZhYnJpY01lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNNZXNzYWdlU2VydmljZSBleHRlbmRzIEZhYnJpY01vZGFsPEZhYnJpY01lc3NhZ2VDb21wb25lbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0YXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcblx0XHRzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGFwcGxpY2F0aW9uUmVmLCBpbmplY3RvciwgZG9jdW1lbnQpO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50KCk6IFR5cGU8RmFicmljTWVzc2FnZUNvbXBvbmVudD4ge1xuXHRcdHJldHVybiBGYWJyaWNNZXNzYWdlQ29tcG9uZW50O1xuXHR9XG5cblx0b3Blbih0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNyZWF0ZUFuZEFwcGVuZCh7XG5cdFx0XHRhZnRlckNvbXBDcmVhdGlvbjogKCkgPT4gdGhpcy5hZnRlckNvbXBDcmVhdGlvbih0ZXh0KVxuXHRcdH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVDb21wb25lbnQoKTtcblx0fVxuXG5cdHByaXZhdGUgYWZ0ZXJDb21wQ3JlYXRpb24odGV4dDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb21wb25lbnRDcmVhdGVkKCkpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkgYXMgQ29tcG9uZW50UmVmPEZhYnJpY01lc3NhZ2VDb21wb25lbnQ+O1xuXHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLnRleHQgPSB0ZXh0O1xuXHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmRldGVjdENoYW5nZXMoKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==