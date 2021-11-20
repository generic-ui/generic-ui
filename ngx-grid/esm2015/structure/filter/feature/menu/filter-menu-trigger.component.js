import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Injector, ViewEncapsulation } from '@angular/core';
import { FabricDialogService, FabricDrawerService } from '@generic-ui/fabric';
import { FilterMenuComponent } from './filter-menu.component';
import { filterContainerToken } from '../../core/api/config/filter-container-token';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { StructureId } from '../../../core/api/structure.id';
export class FilterMenuTriggerComponent extends SmartComponent {
    constructor(detector, elementRef, injector, drawerService, fabricDialogService, structureId, filterWarehouse, filterContainerRef) {
        super(detector, elementRef);
        this.injector = injector;
        this.drawerService = drawerService;
        this.fabricDialogService = fabricDialogService;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterContainerRef = filterContainerRef;
        this.activeFiltersExist = false;
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onActiveFilters(this.structureId), (activeFilters) => {
            this.activeFiltersExist = activeFilters.length > 0;
        });
    }
    openDrawer() {
        const elementRef = this.filterContainerRef.getElementRef();
        this.fabricDialogService.open({ component: FilterMenuComponent, injector: this.injector });
        // this.drawerService.open(elementRef, FilterMenuComponent, { injector: this.injector });
    }
    getSelectorName() {
        return 'gui-filter-menu-trigger';
    }
}
FilterMenuTriggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-filter-menu-trigger]',
                template: "<div (click)=\"openDrawer()\"\n\t [gui-tooltip]=\"'Filters'\"\n\t class=\"gui-filter-icon-wrapper\">\n\n\t<div *ngIf=\"activeFiltersExist\" class=\"gui-filter-active\"></div>\n\n\t<div gui-filter-icon></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".gui-filter-icon-wrapper{margin-right:24px;position:relative;width:19px;height:19px}.gui-filter-active{position:absolute;top:-6px;left:-6px;border:2px solid #aaa!important;width:27px;height:27px;border-radius:50%}.gui-filter-menu{width:600px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}\n"]
            },] }
];
FilterMenuTriggerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Injector },
    { type: FabricDrawerService },
    { type: FabricDialogService },
    { type: StructureId },
    { type: FilterWarehouse },
    { type: undefined, decorators: [{ type: Inject, args: [filterContainerToken,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWx0ZXIvZmVhdHVyZS9tZW51L2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0ksT0FBTyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFZN0QsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGNBQWM7SUFJN0QsWUFBWSxRQUEyQixFQUNwQyxVQUFzQixFQUNMLFFBQWtCLEVBQ2xCLGFBQWtDLEVBQ2xDLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixlQUFnQyxFQUNGLGtCQUFzQztRQUN2RixLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBTlQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFDbEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDRix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBVHhGLHVCQUFrQixHQUFZLEtBQUssQ0FBQztJQVdwQyxDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN0RCxDQUFDLGFBQStDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUNELENBQUM7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNULE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUzRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzRix5RkFBeUY7SUFDMUYsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOzs7WUEzQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLHFPQUFtRDtnQkFDbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUkvQzs7O1lBcEJpQyxpQkFBaUI7WUFBYSxVQUFVO1lBQVUsUUFBUTtZQUU5RCxtQkFBbUI7WUFBeEMsbUJBQW1CO1lBT25CLFdBQVc7WUFEWCxlQUFlOzRDQXdCbkIsTUFBTSxTQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdG9yLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UsIEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmlsdGVyQ29udGFpbmVyVG9rZW4gfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9jb25maWcvZmlsdGVyLWNvbnRhaW5lci10b2tlbic7XG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXJSZWYgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9jb25maWcvZmlsdGVyLWNvbnRhaW5lci1yZWYnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1maWx0ZXItbWVudS10cmlnZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuLi9zdHlsZS9maWx0ZXIubmd4LnNjc3MnXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudVRyaWdnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0YWN0aXZlRmlsdGVyc0V4aXN0OiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkcmF3ZXJTZXJ2aWNlOiBGYWJyaWNEcmF3ZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RpYWxvZ1NlcnZpY2U6IEZhYnJpY0RpYWxvZ1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRASW5qZWN0KGZpbHRlckNvbnRhaW5lclRva2VuKSBwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbnRhaW5lclJlZjogRmlsdGVyQ29udGFpbmVyUmVmKSB7XG5cdFx0c3VwZXIoZGV0ZWN0b3IsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uQWN0aXZlRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChhY3RpdmVGaWx0ZXJzOiBSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlck1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUZpbHRlcnNFeGlzdCA9IGFjdGl2ZUZpbHRlcnMubGVuZ3RoID4gMDtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0b3BlbkRyYXdlcigpOiB2b2lkIHtcblx0XHRjb25zdCBlbGVtZW50UmVmID0gdGhpcy5maWx0ZXJDb250YWluZXJSZWYuZ2V0RWxlbWVudFJlZigpO1xuXG5cdFx0dGhpcy5mYWJyaWNEaWFsb2dTZXJ2aWNlLm9wZW4oeyBjb21wb25lbnQ6IEZpbHRlck1lbnVDb21wb25lbnQsIGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuXHRcdC8vIHRoaXMuZHJhd2VyU2VydmljZS5vcGVuKGVsZW1lbnRSZWYsIEZpbHRlck1lbnVDb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktZmlsdGVyLW1lbnUtdHJpZ2dlcic7XG5cdH1cbn1cbiJdfQ==