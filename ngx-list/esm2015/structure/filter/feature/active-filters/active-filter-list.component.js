/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export class ActiveFilterListComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} structureId
     * @param {?} filterWarehouse
     * @param {?} filterCommandDispatcher
     */
    constructor(changeDetectorRef, structureId, filterWarehouse, filterCommandDispatcher) {
        super(changeDetectorRef);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFpQjdFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxjQUFjOzs7Ozs7O0lBSTVELFlBQTZCLGlCQUFvQyxFQUM3QyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyx1QkFBNkM7UUFDaEUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFKRyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXNCO1FBTGpFLGtCQUFhLEdBQWlDLEVBQUUsQ0FBQztJQU9qRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlO2FBQ2xCLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsYUFBMkMsRUFBRSxFQUFFO1lBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQTZCO1FBQ3pDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7WUFyQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7OztFQVVUO2FBQ0Q7Ozs7WUF0QlEsaUJBQWlCO1lBS2pCLFdBQVc7WUFGWCxlQUFlO1lBR2Ysb0JBQW9COzs7O0lBbUI1QixrREFBaUQ7Ozs7O0lBRXJDLHNEQUFxRDs7Ozs7SUFDOUQsZ0RBQXlDOzs7OztJQUN6QyxvREFBaUQ7Ozs7O0lBQ2pELDREQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1hY3RpdmUtZmlsdGVyLWxpc3QnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdiAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIGFjdGl2ZUZpbHRlcnNcIj5cblx0XHRcdHt7ZmlsdGVyLmdldFRleHQoKX19XG5cdFx0XHQ8c3BhbiAoY2xpY2spPVwicmVtb3ZlRmlsdGVyKGZpbHRlcilcIj5YPC9zcGFuPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGd1aS1hY3RpdmUtc2VhcmNoPjwvZ3VpLWFjdGl2ZS1zZWFyY2g+XG5cblxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlckxpc3RDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0YWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kRGlzcGF0Y2hlcjogRmlsdGVyQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0Lm9uQWN0aXZlRmlsdGVycyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pID0+IHtcblx0XHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzID0gYWN0aXZlRmlsdGVycztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZUZpbHRlcihmaWx0ZXI6IEFjdGl2ZUZpbHRlclJlYWRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyQ29tbWFuZERpc3BhdGNoZXIucmVtb3ZlRmlsdGVyKGZpbHRlci5nZXRGaWx0ZXJJZCgpLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19