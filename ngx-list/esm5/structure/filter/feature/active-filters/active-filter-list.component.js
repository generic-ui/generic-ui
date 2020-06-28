/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { FilterCommandDispatcher } from '../../domain-api/filter.command-dispatcher';
var ActiveFilterListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveFilterListComponent, _super);
    function ActiveFilterListComponent(changeDetectorRef, structureId, filterWarehouse, filterCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.filterWarehouse = filterWarehouse;
        _this.filterCommandDispatcher = filterCommandDispatcher;
        _this.activeFilters = [];
        return _this;
    }
    /**
     * @return {?}
     */
    ActiveFilterListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filterWarehouse
            .onActiveFilters(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} activeFilters
         * @return {?}
         */
        function (activeFilters) {
            _this.activeFilters = activeFilters;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    ActiveFilterListComponent.prototype.removeFilter = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.filterCommandDispatcher.removeFilter(filter.getFilterId(), this.structureId);
    };
    ActiveFilterListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-active-filter-list',
                    template: "\n\n\t\t<div *ngFor=\"let filter of activeFilters\">\n\t\t\t{{filter.getText()}}\n\t\t\t<span (click)=\"removeFilter(filter)\">X</span>\n\t\t</div>\n\n\t\t<gui-active-search></gui-active-search>\n\n\n\t"
                }] }
    ];
    /** @nocollapse */
    ActiveFilterListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: FilterWarehouse },
        { type: FilterCommandDispatcher }
    ]; };
    return ActiveFilterListComponent;
}(SmartComponent));
export { ActiveFilterListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBR3JGO0lBYytDLHFEQUFjO0lBSTVELG1DQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsdUJBQWdEO1FBSHBFLFlBSUMsaUJBQU8sU0FDUDtRQUw0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBTHBFLG1CQUFhLEdBQWlDLEVBQUUsQ0FBQzs7SUFPakQsQ0FBQzs7OztJQUVELDRDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLGVBQWU7YUFDbEIsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxhQUEyQztZQUN0RCxLQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdEQUFZOzs7O0lBQVosVUFBYSxNQUE2QjtRQUN6QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Z0JBckNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsNE1BVVQ7aUJBQ0Q7Ozs7Z0JBdEJRLGlCQUFpQjtnQkFLakIsV0FBVztnQkFGWCxlQUFlO2dCQUdmLHVCQUF1Qjs7SUF5Q2hDLGdDQUFDO0NBQUEsQUF0Q0QsQ0FjK0MsY0FBYyxHQXdCNUQ7U0F4QlkseUJBQXlCOzs7SUFFckMsa0RBQWlEOzs7OztJQUVyQyxzREFBcUQ7Ozs7O0lBQzlELGdEQUF5Qzs7Ozs7SUFDekMsb0RBQWlEOzs7OztJQUNqRCw0REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYWN0aXZlLWZpbHRlci1saXN0Jyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXYgKm5nRm9yPVwibGV0IGZpbHRlciBvZiBhY3RpdmVGaWx0ZXJzXCI+XG5cdFx0XHR7e2ZpbHRlci5nZXRUZXh0KCl9fVxuXHRcdFx0PHNwYW4gKGNsaWNrKT1cInJlbW92ZUZpbHRlcihmaWx0ZXIpXCI+WDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxndWktYWN0aXZlLXNlYXJjaD48L2d1aS1hY3RpdmUtc2VhcmNoPlxuXG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGFjdGl2ZUZpbHRlcnM6IEFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29tbWFuZERpc3BhdGNoZXI6IEZpbHRlckNvbW1hbmREaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoYWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPSBhY3RpdmVGaWx0ZXJzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKGZpbHRlcjogQWN0aXZlRmlsdGVyUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5yZW1vdmVGaWx0ZXIoZmlsdGVyLmdldEZpbHRlcklkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=