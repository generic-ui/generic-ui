/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterCommandInvoker } from '../../../../filter/core/api/filter.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
var StructureHeaderFiltersComponent = /** @class */ (function () {
    function StructureHeaderFiltersComponent(structureFilterCommandService, formBuilder, cd, structureId) {
        var _a;
        this.structureFilterCommandService = structureFilterCommandService;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.structureId = structureId;
        this.closed = new EventEmitter();
        this.filterFieldName = 'phrase';
        this.filterMode = false;
        this.filterForm = this.formBuilder.group((_a = {},
            _a[this.filterFieldName] = [''],
            _a));
    }
    /**
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filterForm
            .valueChanges
            // .pipe(
            // debounceTime(500)
            // )
            .subscribe((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            _this.filter(f[_this.filterFieldName]);
        }));
    };
    /**
     * @param {?} phrase
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.filter = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        if (phrase === undefined || phrase === null) {
            phrase = '';
        }
        // this.structureFilterCommandService.addFilter(this.columns[0].getFieldId(), '1', phrase, this.structureId);
    };
    /**
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.clearFilters = /**
     * @return {?}
     */
    function () {
        this.filterForm.reset();
    };
    /**
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.turnOnFilterMode = /**
     * @return {?}
     */
    function () {
        this.filterMode = true;
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.turnOffFilterMode = /**
     * @return {?}
     */
    function () {
        this.filterMode = false;
        this.cd.detectChanges();
    };
    StructureHeaderFiltersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header-filters',
                    template: "\n\n\t\t<ng-container *ngIf=\"!filterMode\">\n\n\t\t\t<div *ngFor=\"let cell of columns\"\n\t\t\t\t [style.width.px]=\"cell.width\"\n\t\t\t\t class=\"gui-header-cell\">\n\n\t\t\t\t<!--\t\t\t\t<gui-structure-header-filter [column]=\"cell\">-->\n\t\t\t\t<!--\t\t\t\t</gui-structure-header-filter>-->\n\n\t\t\t\t<button (click)=\"turnOnFilterMode()\">Add Filter</button>\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"filterMode\">\n\n\t\t\t<gui-select [options]=\"['has value', 'is the same as', 'starts with', 'ends with']\" [selected]=\"'has value'\">\n\n\t\t\t</gui-select>\n\n\t\t\t<form [formGroup]=\"filterForm\">\n\t\t\t\t<input type=\"text\" [formControlName]=\"filterFieldName\" gui-input/>\n\t\t\t</form>\n\n\t\t\t<button gui-button (click)=\"clearFilters()\">Clear All</button>\n\t\t\t<button gui-button (click)=\"turnOffFilterMode()\">Close</button>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderFiltersComponent.ctorParameters = function () { return [
        { type: FilterCommandInvoker },
        { type: FormBuilder },
        { type: ChangeDetectorRef },
        { type: StructureId }
    ]; };
    StructureHeaderFiltersComponent.propDecorators = {
        columns: [{ type: Input }],
        closed: [{ type: Output }]
    };
    return StructureHeaderFiltersComponent;
}());
export { StructureHeaderFiltersComponent };
if (false) {
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.columns;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.closed;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterFieldName;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterForm;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterMode;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFJaEU7SUFvREMseUNBQW9CLDZCQUFtRCxFQUM1RCxXQUF3QixFQUN4QixFQUFxQixFQUNyQixXQUF3Qjs7UUFIZixrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQXNCO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBWG5DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXpCLG9CQUFlLEdBQUcsUUFBUSxDQUFDO1FBSXBDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFNM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDdkMsR0FBQyxJQUFJLENBQUMsZUFBZSxJQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO0lBRUosQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLFVBQVU7YUFDYixZQUFZO1lBQ2IsU0FBUztZQUNULG9CQUFvQjtZQUNwQixJQUFJO2FBQ0gsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNaLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnREFBTTs7OztJQUFOLFVBQU8sTUFBYztRQUVwQixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUM1QyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFFRCw2R0FBNkc7SUFDOUcsQ0FBQzs7OztJQUVELHNEQUFZOzs7SUFBWjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsMkRBQWlCOzs7SUFBakI7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQTlGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLCs0QkFnQ1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkExQ1Esb0JBQW9CO2dCQUZwQixXQUFXO2dCQURjLGlCQUFpQjtnQkFJMUMsV0FBVzs7OzBCQTRDbEIsS0FBSzt5QkFHTCxNQUFNOztJQXFEUixzQ0FBQztDQUFBLEFBaEdELElBZ0dDO1NBMURZLCtCQUErQjs7O0lBRTNDLGtEQUN3Qzs7SUFFeEMsaURBQ2tDOztJQUVsQywwREFBb0M7O0lBRXBDLHFEQUFzQjs7SUFFdEIscURBQTRCOzs7OztJQUVoQix3RUFBMkQ7Ozs7O0lBQ3BFLHNEQUFnQzs7Ozs7SUFDaEMsNkNBQTZCOzs7OztJQUM3QixzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVycycsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpbHRlck1vZGVcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgY2VsbCBvZiBjb2x1bW5zXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJjZWxsLndpZHRoXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1jZWxsXCI+XG5cblx0XHRcdFx0PCEtLVx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlciBbY29sdW1uXT1cImNlbGxcIj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXI+LS0+XG5cblx0XHRcdFx0PGJ1dHRvbiAoY2xpY2spPVwidHVybk9uRmlsdGVyTW9kZSgpXCI+QWRkIEZpbHRlcjwvYnV0dG9uPlxuXG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbHRlck1vZGVcIj5cblxuXHRcdFx0PGd1aS1zZWxlY3QgW29wdGlvbnNdPVwiWydoYXMgdmFsdWUnLCAnaXMgdGhlIHNhbWUgYXMnLCAnc3RhcnRzIHdpdGgnLCAnZW5kcyB3aXRoJ11cIiBbc2VsZWN0ZWRdPVwiJ2hhcyB2YWx1ZSdcIj5cblxuXHRcdFx0PC9ndWktc2VsZWN0PlxuXG5cdFx0XHQ8Zm9ybSBbZm9ybUdyb3VwXT1cImZpbHRlckZvcm1cIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWx0ZXJGaWVsZE5hbWVcIiBndWktaW5wdXQvPlxuXHRcdFx0PC9mb3JtPlxuXG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b24gKGNsaWNrKT1cImNsZWFyRmlsdGVycygpXCI+Q2xlYXIgQWxsPC9idXR0b24+XG5cdFx0XHQ8YnV0dG9uIGd1aS1idXR0b24gKGNsaWNrKT1cInR1cm5PZmZGaWx0ZXJNb2RlKClcIj5DbG9zZTwvYnV0dG9uPlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSGVhZGVyRmlsdGVyc0NvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdEBPdXRwdXQoKVxuXHRjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ3BocmFzZSc7XG5cblx0ZmlsdGVyRm9ybTogRm9ybUdyb3VwO1xuXG5cdGZpbHRlck1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0W3RoaXMuZmlsdGVyRmllbGROYW1lXTogWycnXVxuXHRcdH0pO1xuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZpbHRlckZvcm1cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC8vIC5waXBlKFxuXHRcdFx0Ly8gZGVib3VuY2VUaW1lKDUwMClcblx0XHRcdC8vIClcblx0XHRcdC5zdWJzY3JpYmUoKGYpID0+IHtcblx0XHRcdFx0dGhpcy5maWx0ZXIoZlt0aGlzLmZpbHRlckZpZWxkTmFtZV0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRmaWx0ZXIocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmIChwaHJhc2UgPT09IHVuZGVmaW5lZCB8fCBwaHJhc2UgPT09IG51bGwpIHtcblx0XHRcdHBocmFzZSA9ICcnO1xuXHRcdH1cblxuXHRcdC8vIHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UuYWRkRmlsdGVyKHRoaXMuY29sdW1uc1swXS5nZXRGaWVsZElkKCksICcxJywgcGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckZvcm0ucmVzZXQoKTtcblx0fVxuXG5cdHR1cm5PbkZpbHRlck1vZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNb2RlID0gdHJ1ZTtcblx0XHR0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHR1cm5PZmZGaWx0ZXJNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cbn1cbiJdfQ==