import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export class ActiveFilterListComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, filterWarehouse, filterCommandDispatcher) {
        super(changeDetectorRef, elementRef);
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandDispatcher = filterCommandDispatcher;
        this.activeFilters = [];
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onActiveFilters(this.structureId), (activeFilters) => {
            this.activeFilters = activeFilters;
        });
    }
    removeFilter(filter) {
        this.filterCommandDispatcher.remove(filter.getFilterId(), this.structureId);
    }
    getSelectorName() {
        return 'gui-active-filter-list';
    }
}
ActiveFilterListComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-active-filter-list]',
                template: "<div *ngFor=\"let filter of activeFilters\">\n\t{{filter.getText()}}\n\t<span (click)=\"removeFilter(filter)\">X</span>\n</div>\n\n<div gui-active-search></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
ActiveFilterListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: FilterWarehouse },
    { type: FilterCommandInvoker }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFTN0UsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7SUFJNUQsWUFBWSxpQkFBb0MsRUFDN0MsVUFBc0IsRUFDTCxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyx1QkFBNkM7UUFDaEUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBSGxCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBTmpFLGtCQUFhLEdBQTZCLEVBQUUsQ0FBQztJQVE3QyxDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN0RCxDQUFDLGFBQXVDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNwQyxDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsTUFBeUI7UUFDckMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sd0JBQXdCLENBQUM7SUFDakMsQ0FBQzs7O1lBbENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2Qyw4S0FBa0Q7Z0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O1lBZGlDLGlCQUFpQjtZQUFhLFVBQVU7WUFLakUsV0FBVztZQUZYLGVBQWU7WUFHZixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWFjdGl2ZS1maWx0ZXItbGlzdF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyTGlzdENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJNb2RlbD4gPSBbXTtcblxuXHRjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZpbHRlcldhcmVob3VzZS5vbkFjdGl2ZUZpbHRlcnModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoYWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlRmlsdGVycyA9IGFjdGl2ZUZpbHRlcnM7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHJlbW92ZUZpbHRlcihmaWx0ZXI6IEFjdGl2ZUZpbHRlck1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5yZW1vdmUoZmlsdGVyLmdldEZpbHRlcklkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWFjdGl2ZS1maWx0ZXItbGlzdCc7XG5cdH1cbn1cbiJdfQ==