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
        this.createAndAppend();
        this.getComponentRef().instance.options = options;
        this.getComponentRef().instance.width = width;
        this.getComponentRef().instance.detectChanges();
        this.selectOptionsGeometryService.setGeometry(this.getComponentRef().instance.getElementRef());
        this.getComponentRef().instance.detectChanges();
    }
    closeOptions() {
        this.removeComponent();
    }
}
SelectOptionModalService.ɵfac = function SelectOptionModalService_Factory(t) { return new (t || SelectOptionModalService)(i0.ɵɵinject(i1.SelectOptionsGeometryService), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
SelectOptionModalService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SelectOptionModalService, factory: SelectOptionModalService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectOptionModalService, [{
        type: Injectable
    }], function () { return [{ type: i1.SelectOptionsGeometryService }, { type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vc2VsZWN0L3NlbGVjdC1vcHRpb24tbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTRDLE1BQU0sRUFBRSxVQUFVLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUkzQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsV0FBeUM7SUFFdEYsWUFBNkIsNEJBQTBELEVBQ3BGLHdCQUFrRCxFQUNsRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDakMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFMeEMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtJQU12RixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sNEJBQTRCLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksQ0FBQyxPQUErQixFQUFFLEtBQWE7UUFDbEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxZQUFZO1FBQ1gsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dHQXpCVyx3QkFBd0IsZ0tBTXpCLFFBQVE7OEVBTlAsd0JBQXdCLFdBQXhCLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBRHBDLFVBQVU7O3NCQU9OLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY01vZGFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy1tb2RhbCc7XG5pbXBvcnQgeyBGYWJyaWNTZWxlY3RPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb25zL3NlbGVjdC1vcHRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9vcHRpb25zL3NlbGVjdC1vcHRpb25zLWdlb21ldHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR3VpU2VsZWN0T3B0aW9uIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdE9wdGlvbk1vZGFsU2VydmljZSBleHRlbmRzIEZhYnJpY01vZGFsPEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2U6IFNlbGVjdE9wdGlvbnNHZW9tZXRyeVNlcnZpY2UsXG5cdFx0XHRcdGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuXHRcdHN1cGVyKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgYXBwbGljYXRpb25SZWYsIGluamVjdG9yLCBkb2N1bWVudCk7XG5cdH1cblxuXHRnZXRDb21wb25lbnQoKTogVHlwZTxGYWJyaWNTZWxlY3RPcHRpb25zQ29tcG9uZW50PiB7XG5cdFx0cmV0dXJuIEZhYnJpY1NlbGVjdE9wdGlvbnNDb21wb25lbnQ7XG5cdH1cblxuXHRvcGVuKG9wdGlvbnM6IEFycmF5PEd1aVNlbGVjdE9wdGlvbj4sIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmNyZWF0ZUFuZEFwcGVuZCgpO1xuXHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2UuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdHRoaXMuc2VsZWN0T3B0aW9uc0dlb21ldHJ5U2VydmljZS5zZXRHZW9tZXRyeSh0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLmdldEVsZW1lbnRSZWYoKSk7XG5cdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRjbG9zZU9wdGlvbnMoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVDb21wb25lbnQoKTtcblx0fVxufVxuIl19