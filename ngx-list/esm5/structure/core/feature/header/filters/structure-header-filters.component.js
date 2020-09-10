/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterCommandInvoker } from '../../../../filter/domain-api/filter.command-invoker';
import { StructureId } from '../../../domain/structure.id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJM0Q7SUFvREMseUNBQW9CLDZCQUFtRCxFQUM1RCxXQUF3QixFQUN4QixFQUFxQixFQUNyQixXQUF3Qjs7UUFIZixrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQXNCO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBWG5DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXpCLG9CQUFlLEdBQUcsUUFBUSxDQUFDO1FBSXBDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFNM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDdkMsR0FBQyxJQUFJLENBQUMsZUFBZSxJQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO0lBRUosQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLFVBQVU7YUFDYixZQUFZO1lBQ2IsU0FBUztZQUNULG9CQUFvQjtZQUNwQixJQUFJO2FBQ0gsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNaLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnREFBTTs7OztJQUFOLFVBQU8sTUFBYztRQUVwQixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUM1QyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFFRCw2R0FBNkc7SUFDOUcsQ0FBQzs7OztJQUVELHNEQUFZOzs7SUFBWjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsMkRBQWlCOzs7SUFBakI7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQTlGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLCs0QkFnQ1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkExQ1Esb0JBQW9CO2dCQUZwQixXQUFXO2dCQURjLGlCQUFpQjtnQkFJMUMsV0FBVzs7OzBCQTRDbEIsS0FBSzt5QkFHTCxNQUFNOztJQXFEUixzQ0FBQztDQUFBLEFBaEdELElBZ0dDO1NBMURZLCtCQUErQjs7O0lBRTNDLGtEQUN3Qzs7SUFFeEMsaURBQ2tDOztJQUVsQywwREFBb0M7O0lBRXBDLHFEQUFzQjs7SUFFdEIscURBQTRCOzs7OztJQUVoQix3RUFBMkQ7Ozs7O0lBQ3BFLHNEQUFnQzs7Ozs7SUFDaEMsNkNBQTZCOzs7OztJQUM3QixzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmlsdGVyQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvZG9tYWluLWFwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlsdGVyTW9kZVwiPlxuXG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBjZWxsIG9mIGNvbHVtbnNcIlxuXHRcdFx0XHQgW3N0eWxlLndpZHRoLnB4XT1cImNlbGwud2lkdGhcIlxuXHRcdFx0XHQgY2xhc3M9XCJndWktaGVhZGVyLWNlbGxcIj5cblxuXHRcdFx0XHQ8IS0tXHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyIFtjb2x1bW5dPVwiY2VsbFwiPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcj4tLT5cblxuXHRcdFx0XHQ8YnV0dG9uIChjbGljayk9XCJ0dXJuT25GaWx0ZXJNb2RlKClcIj5BZGQgRmlsdGVyPC9idXR0b24+XG5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsdGVyTW9kZVwiPlxuXG5cdFx0XHQ8Z3VpLXNlbGVjdCBbb3B0aW9uc109XCJbJ2hhcyB2YWx1ZScsICdpcyB0aGUgc2FtZSBhcycsICdzdGFydHMgd2l0aCcsICdlbmRzIHdpdGgnXVwiIFtzZWxlY3RlZF09XCInaGFzIHZhbHVlJ1wiPlxuXG5cdFx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0XHRcdDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlsdGVyRm9ybVwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiIGd1aS1pbnB1dC8+XG5cdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbiAoY2xpY2spPVwiY2xlYXJGaWx0ZXJzKClcIj5DbGVhciBBbGw8L2J1dHRvbj5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbiAoY2xpY2spPVwidHVybk9mZkZpbHRlck1vZGUoKVwiPkNsb3NlPC9idXR0b24+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD47XG5cblx0QE91dHB1dCgpXG5cdGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRyZWFkb25seSBmaWx0ZXJGaWVsZE5hbWUgPSAncGhyYXNlJztcblxuXHRmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG5cblx0ZmlsdGVyTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRbdGhpcy5maWx0ZXJGaWVsZE5hbWVdOiBbJyddXG5cdFx0fSk7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZmlsdGVyRm9ybVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0Ly8gLnBpcGUoXG5cdFx0XHQvLyBkZWJvdW5jZVRpbWUoNTAwKVxuXHRcdFx0Ly8gKVxuXHRcdFx0LnN1YnNjcmliZSgoZikgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbHRlcihmW3RoaXMuZmlsdGVyRmllbGROYW1lXSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGZpbHRlcihwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKHBocmFzZSA9PT0gdW5kZWZpbmVkIHx8IHBocmFzZSA9PT0gbnVsbCkge1xuXHRcdFx0cGhyYXNlID0gJyc7XG5cdFx0fVxuXG5cdFx0Ly8gdGhpcy5zdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZS5hZGRGaWx0ZXIodGhpcy5jb2x1bW5zWzBdLmdldEZpZWxkSWQoKSwgJzEnLCBwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Y2xlYXJGaWx0ZXJzKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyRm9ybS5yZXNldCgpO1xuXHR9XG5cblx0dHVybk9uRmlsdGVyTW9kZSgpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1vZGUgPSB0cnVlO1xuXHRcdHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0dHVybk9mZkZpbHRlck1vZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNb2RlID0gZmFsc2U7XG5cdFx0dGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxufVxuIl19