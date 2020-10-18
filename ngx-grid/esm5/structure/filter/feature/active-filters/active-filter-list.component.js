/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
var ActiveFilterListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveFilterListComponent, _super);
    function ActiveFilterListComponent(changeDetectorRef, structureId, filterWarehouse, filterCommandDispatcher) {
        var _this = _super.call(this, changeDetectorRef) || this;
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
        { type: FilterCommandInvoker }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzdFO0lBYytDLHFEQUFjO0lBSTVELG1DQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsdUJBQTZDO1FBSGpFLFlBSUMsa0JBQU0saUJBQWlCLENBQUMsU0FDeEI7UUFMNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtRQUxqRSxtQkFBYSxHQUFpQyxFQUFFLENBQUM7O0lBT2pELENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBBLElBQUksQ0FBQyxlQUFlO2FBQ2xCLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLFVBQUMsYUFBMkM7WUFDdEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnREFBWTs7OztJQUFaLFVBQWEsTUFBNkI7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O2dCQXJDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLDRNQVVUO2lCQUNEOzs7O2dCQXRCUSxpQkFBaUI7Z0JBS2pCLFdBQVc7Z0JBRlgsZUFBZTtnQkFHZixvQkFBb0I7O0lBeUM3QixnQ0FBQztDQUFBLEFBdENELENBYytDLGNBQWMsR0F3QjVEO1NBeEJZLHlCQUF5Qjs7O0lBRXJDLGtEQUFpRDs7Ozs7SUFFckMsc0RBQXFEOzs7OztJQUM5RCxnREFBeUM7Ozs7O0lBQ3pDLG9EQUFpRDs7Ozs7SUFDakQsNERBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWFjdGl2ZS1maWx0ZXItbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBmaWx0ZXIgb2YgYWN0aXZlRmlsdGVyc1wiPlxuXHRcdFx0e3tmaWx0ZXIuZ2V0VGV4dCgpfX1cblx0XHRcdDxzcGFuIChjbGljayk9XCJyZW1vdmVGaWx0ZXIoZmlsdGVyKVwiPlg8L3NwYW4+XG5cdFx0PC9kaXY+XG5cblx0XHQ8Z3VpLWFjdGl2ZS1zZWFyY2g+PC9ndWktYWN0aXZlLXNlYXJjaD5cblxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyTGlzdENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRhY3RpdmVGaWx0ZXJzOiBBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckNvbW1hbmREaXNwYXRjaGVyOiBGaWx0ZXJDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlXG5cdFx0XHQub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoYWN0aXZlRmlsdGVyczogQXJyYXk8QWN0aXZlRmlsdGVyUmVhZE1vZGVsPikgPT4ge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUZpbHRlcnMgPSBhY3RpdmVGaWx0ZXJzO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlRmlsdGVyKGZpbHRlcjogQWN0aXZlRmlsdGVyUmVhZE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kRGlzcGF0Y2hlci5yZW1vdmVGaWx0ZXIoZmlsdGVyLmdldEZpbHRlcklkKCksIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=