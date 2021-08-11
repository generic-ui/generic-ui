/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterCommandInvoker } from '../../../../filter/core/api/filter.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
var StructureHeaderFiltersComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureHeaderFiltersComponent, _super);
    function StructureHeaderFiltersComponent(structureFilterCommandService, formBuilder, cd, elementRef, structureId) {
        var _a;
        var _this = _super.call(this, elementRef) || this;
        _this.structureFilterCommandService = structureFilterCommandService;
        _this.formBuilder = formBuilder;
        _this.cd = cd;
        _this.structureId = structureId;
        _this.closed = new EventEmitter();
        _this.filterFieldName = 'phrase';
        _this.filterMode = false;
        _this.filterForm = _this.formBuilder.group((_a = {},
            _a[_this.filterFieldName] = [''],
            _a));
        return _this;
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
    /**
     * @protected
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return '';
    };
    StructureHeaderFiltersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-header-filters][columns]',
                    template: "\n\n\t\t<ng-container *ngIf=\"!filterMode\">\n\n\t\t\t<div *ngFor=\"let cell of columns\"\n\t\t\t\t [style.width.px]=\"cell.width\"\n\t\t\t\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t\t\t\t<!--\t\t\t\t<gui-structure-header-filter [column]=\"cell\">-->\n\t\t\t\t<!--\t\t\t\t</gui-structure-header-filter>-->\n\n\t\t\t\t<button (click)=\"turnOnFilterMode()\">Add Filter</button>\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"filterMode\">\n\n\t\t\t<gui-select [options]=\"['has value', 'is the same as', 'starts with', 'ends with']\" [selected]=\"'has value'\">\n\n\t\t\t</gui-select>\n\n\t\t\t<form [formGroup]=\"filterForm\">\n\t\t\t\t<input type=\"text\" [formControlName]=\"filterFieldName\" gui-input/>\n\t\t\t</form>\n\n\t\t\t<button gui-button (click)=\"clearFilters()\">Clear All</button>\n\t\t\t<button gui-button (click)=\"turnOffFilterMode()\">Close</button>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderFiltersComponent.ctorParameters = function () { return [
        { type: FilterCommandInvoker },
        { type: FormBuilder },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId }
    ]; };
    StructureHeaderFiltersComponent.propDecorators = {
        columns: [{ type: Input }],
        closed: [{ type: Output }]
    };
    return StructureHeaderFiltersComponent;
}(PureComponent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFHbkY7SUF3Q3FELDJEQUFhO0lBY2pFLHlDQUE2Qiw2QkFBbUQsRUFDNUQsV0FBd0IsRUFDeEIsRUFBcUIsRUFDdEMsVUFBc0IsRUFDTCxXQUF3Qjs7UUFKNUMsWUFLQyxrQkFBTSxVQUFVLENBQUMsU0FLakI7UUFWNEIsbUNBQTZCLEdBQTdCLDZCQUE2QixDQUFzQjtRQUM1RCxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixRQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUVyQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVo1QyxZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV6QixxQkFBZSxHQUFHLFFBQVEsQ0FBQztRQUlwQyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQVEzQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSztZQUN2QyxHQUFDLEtBQUksQ0FBQyxlQUFlLElBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7O0lBRUosQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLFVBQVU7YUFDYixZQUFZO1lBQ2IsU0FBUztZQUNULG9CQUFvQjtZQUNwQixJQUFJO2FBQ0gsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNaLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnREFBTTs7OztJQUFOLFVBQU8sTUFBYztRQUVwQixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUM1QyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFFRCw2R0FBNkc7SUFDOUcsQ0FBQzs7OztJQUVELHNEQUFZOzs7SUFBWjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsMkRBQWlCOzs7SUFBakI7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRVMseURBQWU7Ozs7SUFBekI7UUFDQyxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2dCQXRHRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRDQUE0QztvQkFDdEQsUUFBUSxFQUFFLGdqQ0FrQ1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkE3Q1Esb0JBQW9CO2dCQUZwQixXQUFXO2dCQVRuQixpQkFBaUI7Z0JBRWpCLFVBQVU7Z0JBVUYsV0FBVzs7OzBCQStDbEIsS0FBSzt5QkFHTCxNQUFNOztJQTJEUixzQ0FBQztDQUFBLEFBeEdELENBd0NxRCxhQUFhLEdBZ0VqRTtTQWhFWSwrQkFBK0I7OztJQUUzQyxrREFDd0M7O0lBRXhDLGlEQUNrQzs7SUFFbEMsMERBQW9DOztJQUVwQyxxREFBc0I7O0lBRXRCLHFEQUE0Qjs7Ozs7SUFFaEIsd0VBQW9FOzs7OztJQUM3RSxzREFBeUM7Ozs7O0lBQ3pDLDZDQUFzQzs7Ozs7SUFFdEMsc0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZpbHRlckNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3B1cmUtY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyc11bY29sdW1uc10nLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWx0ZXJNb2RlXCI+XG5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IGNlbGwgb2YgY29sdW1uc1wiXG5cdFx0XHRcdCBbc3R5bGUud2lkdGgucHhdPVwiY2VsbC53aWR0aFwiXG5cdFx0XHRcdCBjbGFzcz1cImd1aS1oZWFkZXItY2VsbCBndWktZmxleCBndWktanVzdGlmeS1iZXR3ZWVuXG5cXHQgZ3VpLW92ZXJmbG93LWhpZGRlbiBndWktcmVsYXRpdmUgZ3VpLXB5LTAgZ3VpLXB4LTYgZ3VpLWJveC1ib3JkZXJcblxcdCBndWktbGVhZGluZy00IGd1aS13aGl0ZXNwYWNlLW5vd3JhcCBndWktb3ZlcmZsb3ctZWxsaXBzaXNcIj5cblxuXHRcdFx0XHQ8IS0tXHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1oZWFkZXItZmlsdGVyIFtjb2x1bW5dPVwiY2VsbFwiPi0tPlxuXHRcdFx0XHQ8IS0tXHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcj4tLT5cblxuXHRcdFx0XHQ8YnV0dG9uIChjbGljayk9XCJ0dXJuT25GaWx0ZXJNb2RlKClcIj5BZGQgRmlsdGVyPC9idXR0b24+XG5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsdGVyTW9kZVwiPlxuXG5cdFx0XHQ8Z3VpLXNlbGVjdCBbb3B0aW9uc109XCJbJ2hhcyB2YWx1ZScsICdpcyB0aGUgc2FtZSBhcycsICdzdGFydHMgd2l0aCcsICdlbmRzIHdpdGgnXVwiIFtzZWxlY3RlZF09XCInaGFzIHZhbHVlJ1wiPlxuXG5cdFx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0XHRcdDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlsdGVyRm9ybVwiPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpbHRlckZpZWxkTmFtZVwiIGd1aS1pbnB1dC8+XG5cdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbiAoY2xpY2spPVwiY2xlYXJGaWx0ZXJzKClcIj5DbGVhciBBbGw8L2J1dHRvbj5cblx0XHRcdDxidXR0b24gZ3VpLWJ1dHRvbiAoY2xpY2spPVwidHVybk9mZkZpbHRlck1vZGUoKVwiPkNsb3NlPC9idXR0b24+XG5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+O1xuXG5cdEBPdXRwdXQoKVxuXHRjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0cmVhZG9ubHkgZmlsdGVyRmllbGROYW1lID0gJ3BocmFzZSc7XG5cblx0ZmlsdGVyRm9ybTogRm9ybUdyb3VwO1xuXG5cdGZpbHRlck1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCkge1xuXHRcdHN1cGVyKGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0W3RoaXMuZmlsdGVyRmllbGROYW1lXTogWycnXVxuXHRcdH0pO1xuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZpbHRlckZvcm1cblx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdC8vIC5waXBlKFxuXHRcdFx0Ly8gZGVib3VuY2VUaW1lKDUwMClcblx0XHRcdC8vIClcblx0XHRcdC5zdWJzY3JpYmUoKGYpID0+IHtcblx0XHRcdFx0dGhpcy5maWx0ZXIoZlt0aGlzLmZpbHRlckZpZWxkTmFtZV0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRmaWx0ZXIocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmIChwaHJhc2UgPT09IHVuZGVmaW5lZCB8fCBwaHJhc2UgPT09IG51bGwpIHtcblx0XHRcdHBocmFzZSA9ICcnO1xuXHRcdH1cblxuXHRcdC8vIHRoaXMuc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UuYWRkRmlsdGVyKHRoaXMuY29sdW1uc1swXS5nZXRGaWVsZElkKCksICcxJywgcGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGNsZWFyRmlsdGVycygpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlckZvcm0ucmVzZXQoKTtcblx0fVxuXG5cdHR1cm5PbkZpbHRlck1vZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNb2RlID0gdHJ1ZTtcblx0XHR0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHR1cm5PZmZGaWx0ZXJNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG59XG4iXX0=