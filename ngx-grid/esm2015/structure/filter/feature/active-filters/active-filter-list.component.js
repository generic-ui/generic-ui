/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { StructureId } from '../../../core/domain/structure.id';
import { FilterCommandInvoker } from '../../domain-api/filter.command-invoker';
export class ActiveFilterListComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} filterWarehouse
     * @param {?} filterCommandDispatcher
     */
    constructor(changeDetectorRef, structureId, filterWarehouse, filterCommandDispatcher) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterCommandDispatcher = filterCommandDispatcher;
        this.activeFilters = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filterWarehouse
            .onActiveFilters(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} activeFilters
         * @return {?}
         */
        (activeFilters) => {
            this.activeFilters = activeFilters;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    removeFilter(filter) {
        this.filterCommandDispatcher.removeFilter(filter.getFilterId(), this.structureId);
    }
}
ActiveFilterListComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-active-filter-list',
                template: `

		<div *ngFor="let filter of activeFilters">
			{{filter.getText()}}
			<span (click)="removeFilter(filter)">X</span>
		</div>

		<gui-active-search></gui-active-search>


	`
            }] }
];
/** @nocollapse */
ActiveFilterListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: StructureId },
    { type: FilterWarehouse },
    { type: FilterCommandInvoker }
];
if (false) {
    /** @type {?} */
    ActiveFilterListComponent.prototype.activeFilters;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterListComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterListComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterListComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    ActiveFilterListComponent.prototype.filterCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFpQi9FLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjOzs7Ozs7O0lBSTVELFlBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyx1QkFBNkM7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFKb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUxqRSxrQkFBYSxHQUFpQyxFQUFFLENBQUM7SUFPakQsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZUFBZTthQUNsQixlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLGFBQTJDLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUE2QjtRQUN6QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7O1lBckNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7RUFVVDthQUNEOzs7O1lBdEJRLGlCQUFpQjtZQUtqQixXQUFXO1lBRlgsZUFBZTtZQUdmLG9CQUFvQjs7OztJQW1CNUIsa0RBQWlEOzs7OztJQUVyQyxzREFBcUQ7Ozs7O0lBQzlELGdEQUF5Qzs7Ozs7SUFDekMsb0RBQWlEOzs7OztJQUNqRCw0REFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYWN0aXZlLWZpbHRlci1saXN0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgKm5nRm9yPVwibGV0IGZpbHRlciBvZiBhY3RpdmVGaWx0ZXJzXCI+XG5cdFx0XHR7e2ZpbHRlci5nZXRUZXh0KCl9fVxuXHRcdFx0PHNwYW4gKGNsaWNrKT1cInJlbW92ZUZpbHRlcihmaWx0ZXIpXCI+WDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxndWktYWN0aXZlLXNlYXJjaD48L2d1aS1hY3RpdmUtc2VhcmNoPlxuXG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29tbWFuZERpc3BhdGNoZXI6IEZpbHRlckNvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoYWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPSBhY3RpdmVGaWx0ZXJzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKGZpbHRlcjogQWN0aXZlRmlsdGVyUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5yZW1vdmVGaWx0ZXIoZmlsdGVyLmdldEZpbHRlcklkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=