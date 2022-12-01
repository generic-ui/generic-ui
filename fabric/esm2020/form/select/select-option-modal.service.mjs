import { Inject, Injectable } from '@angular/core';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricSelectOptionsComponent } from './options/select-options.component';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./options/select-options-geometry.service";
export class SelectOptionModalService extends FabricModal {
    constructor(selectOptionsGeometryService, componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
        this.selectOptionsGeometryService = selectOptionsGeometryService;
    }
    getComponent() {
        return FabricSelectOptionsComponent;
    }
    open(options, width) {
        this.createAndAppend({
            afterCompCreation: () => this.afterCompCreation(options, width)
        });
    }
    closeOptions() {
        this.removeComponent();
    }
    afterCompCreation(options, width) {
        if (this.isComponentCreated()) {
            const componentRef = this.getComponentRef();
            componentRef.instance.options = options;
            componentRef.instance.width = width;
            componentRef.instance.detectChanges();
            this.selectOptionsGeometryService.setGeometry(componentRef.instance.getElementRef());
            componentRef.instance.detectChanges();
        }
    }
}
SelectOptionModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SelectOptionModalService, deps: [{ token: i1.SelectOptionsGeometryService }, { token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
SelectOptionModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SelectOptionModalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: SelectOptionModalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SelectOptionsGeometryService }, { type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vc2VsZWN0L3NlbGVjdC1vcHRpb24tbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTBELE1BQU0sRUFBRSxVQUFVLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUkzQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsV0FBeUM7SUFFdEYsWUFBNkIsNEJBQTBELEVBQ3BGLHdCQUFrRCxFQUNsRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDakMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFMeEMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQU12RixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksQ0FBQyxPQUErQixFQUFFLEtBQWE7UUFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNwQixpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztTQUMvRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8saUJBQWlCLENBQUMsT0FBK0IsRUFBRSxLQUFhO1FBQ3ZFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBZ0QsQ0FBQztZQUMxRixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDeEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDckYsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QztJQUNGLENBQUM7O3FIQWpDVyx3QkFBd0IsNEpBTXpCLFFBQVE7eUhBTlAsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBRHBDLFVBQVU7OzBCQU9OLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTW9kYWwgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLW1vZGFsJztcbmltcG9ydCB7IEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbnMvc2VsZWN0LW9wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UgfSBmcm9tICcuL29wdGlvbnMvc2VsZWN0LW9wdGlvbnMtZ2VvbWV0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHdWlTZWxlY3RPcHRpb24gfSBmcm9tICcuL3NlbGVjdC1vcHRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0aW9uTW9kYWxTZXJ2aWNlIGV4dGVuZHMgRmFicmljTW9kYWw8RmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZTogU2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZSxcblx0XHRcdFx0Y29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIGRvY3VtZW50KTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnQ+IHtcblx0XHRyZXR1cm4gRmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudDtcblx0fVxuXG5cdG9wZW4ob3B0aW9uczogQXJyYXk8R3VpU2VsZWN0T3B0aW9uPiwgd2lkdGg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKHtcblx0XHRcdGFmdGVyQ29tcENyZWF0aW9uOiAoKSA9PiB0aGlzLmFmdGVyQ29tcENyZWF0aW9uKG9wdGlvbnMsIHdpZHRoKVxuXHRcdH0pO1xuXHR9XG5cblx0Y2xvc2VPcHRpb25zKCk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdH1cblxuXHRwcml2YXRlIGFmdGVyQ29tcENyZWF0aW9uKG9wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4sIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0NvbXBvbmVudENyZWF0ZWQoKSkge1xuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5nZXRDb21wb25lbnRSZWYoKSBhcyBDb21wb25lbnRSZWY8RmFicmljU2VsZWN0T3B0aW9uc0NvbXBvbmVudD47XG5cdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2Uud2lkdGggPSB3aWR0aDtcblx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR0aGlzLnNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2Uuc2V0R2VvbWV0cnkoY29tcG9uZW50UmVmLmluc3RhbmNlLmdldEVsZW1lbnRSZWYoKSk7XG5cdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2UuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxufVxuIl19