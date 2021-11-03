import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Injector, ViewEncapsulation } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FilterMenuComponent } from './filter-menu.component';
import { filterContainerToken } from '../../core/api/config/filter-container-token';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
export class FilterMenuTriggerComponent extends SmartComponent {
    constructor(detector, elementRef, injector, drawerService, filterContainerRef) {
        super(detector, elementRef);
        this.injector = injector;
        this.drawerService = drawerService;
        this.filterContainerRef = filterContainerRef;
    }
    openDrawer() {
        const elementRef = this.filterContainerRef.getElementRef();
        this.drawerService.open(elementRef, FilterMenuComponent, { injector: this.injector });
    }
    getSelectorName() {
        return 'gui-filter-menu-trigger';
    }
}
FilterMenuTriggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-filter-menu-trigger]',
                template: "<div (click)=\"openDrawer()\"\n\t [gui-tooltip]=\"'Filters'\" class=\"gui-filter-icon-wrapper\">\n\t<div gui-filter-icon></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".gui-filter-icon-wrapper{margin-right:24px}.gui-filter-menu{width:400px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}\n"]
            },] }
];
FilterMenuTriggerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Injector },
    { type: FabricDrawerService },
    { type: undefined, decorators: [{ type: Inject, args: [filterContainerToken,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBV2xGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUFjO0lBRTdELFlBQVksUUFBMkIsRUFDcEMsVUFBc0IsRUFDTCxRQUFrQixFQUNsQixhQUFrQyxFQUNKLGtCQUFzQztRQUN2RixLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSFQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDSix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBRXhGLENBQUM7SUFFRCxVQUFVO1FBQ1QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7OztZQTNCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMscUpBQW1EO2dCQUNuRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBSS9DOzs7WUFqQmlDLGlCQUFpQjtZQUFhLFVBQVU7WUFBVSxRQUFRO1lBRW5GLG1CQUFtQjs0Q0FzQnZCLE1BQU0sU0FBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RvciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmaWx0ZXJDb250YWluZXJUb2tlbiB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2NvbmZpZy9maWx0ZXItY29udGFpbmVyLXRva2VuJztcbmltcG9ydCB7IEZpbHRlckNvbnRhaW5lclJlZiB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2NvbmZpZy9maWx0ZXItY29udGFpbmVyLXJlZic7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLW1lbnUtdHJpZ2dlcl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vc3R5bGUvZmlsdGVyLm5neC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZHJhd2VyU2VydmljZTogRmFicmljRHJhd2VyU2VydmljZSxcblx0XHRcdFx0QEluamVjdChmaWx0ZXJDb250YWluZXJUb2tlbikgcHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb250YWluZXJSZWY6IEZpbHRlckNvbnRhaW5lclJlZikge1xuXHRcdHN1cGVyKGRldGVjdG9yLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG9wZW5EcmF3ZXIoKTogdm9pZCB7XG5cdFx0Y29uc3QgZWxlbWVudFJlZiA9IHRoaXMuZmlsdGVyQ29udGFpbmVyUmVmLmdldEVsZW1lbnRSZWYoKTtcblxuXHRcdHRoaXMuZHJhd2VyU2VydmljZS5vcGVuKGVsZW1lbnRSZWYsIEZpbHRlck1lbnVDb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLW1lbnUtdHJpZ2dlcic7XG5cdH1cbn1cbiJdfQ==