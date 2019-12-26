/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StructureFilterCommandService } from '../../../ui-api/structure/filter/structure.filter.command.service';
import { StructureId } from '../../../domain/structure-id';
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
        this.structureFilterCommandService.addFilter(this.columns[0].getFieldId(), '1', phrase, this.structureId);
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
                    template: "\n\t\t\n\t\t<ng-container *ngIf=\"!filterMode\">\n\n\t\t\t<div *ngFor=\"let cell of columns\"\n\t\t\t\t [style.width.px]=\"cell.width\"\n\t\t\t\t class=\"gui-header-cell\">\n\n\t\t\t\t<!--\t\t\t\t<gui-structure-header-filter [column]=\"cell\">-->\n\t\t\t\t<!--\t\t\t\t</gui-structure-header-filter>-->\n\n\t\t\t\t<button (click)=\"turnOnFilterMode()\">Add Filter</button>\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"filterMode\">\n\n\t\t\t<gui-select [options]=\"['has value', 'is the same as', 'starts with', 'ends with']\" [selected]=\"'has value'\" >\n\n\t\t\t</gui-select>\n\n\t\t\t<form [formGroup]=\"filterForm\">\n\t\t\t\t<input type=\"text\" [formControlName]=\"filterFieldName\" gui-input/>\n\t\t\t</form>\n\n\t\t\t<button gui-button (click)=\"clearFilters()\">Clear All</button>\n\t\t\t<button gui-button (click)=\"turnOffFilterMode()\">Close</button>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderFiltersComponent.ctorParameters = function () { return [
        { type: StructureFilterCommandService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1maWx0ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJM0Q7SUFvREMseUNBQW9CLDZCQUE0RCxFQUNyRSxXQUF3QixFQUN4QixFQUFxQixFQUNyQixXQUF3Qjs7UUFIZixrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQStCO1FBQ3JFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBWG5DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXpCLG9CQUFlLEdBQUcsUUFBUSxDQUFDO1FBSXBDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFNM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDdkMsR0FBQyxJQUFJLENBQUMsZUFBZSxJQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO0lBRUosQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLFVBQVU7YUFDYixZQUFZO1lBQ2IsU0FBUztZQUNULG9CQUFvQjtZQUNwQixJQUFJO2FBQ0gsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNaLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnREFBTTs7OztJQUFOLFVBQU8sTUFBYztRQUVwQixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUM1QyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFFRCxJQUFJLENBQUMsNkJBQTZCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7OztJQUVELHNEQUFZOzs7SUFBWjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsMkRBQWlCOzs7SUFBakI7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQTlGRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLG81QkFnQ1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkExQ1EsNkJBQTZCO2dCQUY3QixXQUFXO2dCQURjLGlCQUFpQjtnQkFJMUMsV0FBVzs7OzBCQTRDbEIsS0FBSzt5QkFHTCxNQUFNOztJQXFEUixzQ0FBQztDQUFBLEFBaEdELElBZ0dDO1NBMURZLCtCQUErQjs7O0lBRTNDLGtEQUN3Qzs7SUFFeEMsaURBQ2tDOztJQUVsQywwREFBb0M7O0lBRXBDLHFEQUFzQjs7SUFFdEIscURBQTRCOzs7OztJQUVoQix3RUFBb0U7Ozs7O0lBQzdFLHNEQUFnQzs7Ozs7SUFDaEMsNkNBQTZCOzs7OztJQUM3QixzREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLmNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXJzJyxcblx0dGVtcGxhdGU6IGBcblx0XHRcblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpbHRlck1vZGVcIj5cblxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgY2VsbCBvZiBjb2x1bW5zXCJcblx0XHRcdFx0IFtzdHlsZS53aWR0aC5weF09XCJjZWxsLndpZHRoXCJcblx0XHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1jZWxsXCI+XG5cblx0XHRcdFx0PCEtLVx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtaGVhZGVyLWZpbHRlciBbY29sdW1uXT1cImNlbGxcIj4tLT5cblx0XHRcdFx0PCEtLVx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWhlYWRlci1maWx0ZXI+LS0+XG5cblx0XHRcdFx0PGJ1dHRvbiAoY2xpY2spPVwidHVybk9uRmlsdGVyTW9kZSgpXCI+QWRkIEZpbHRlcjwvYnV0dG9uPlxuXG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbHRlck1vZGVcIj5cblxuXHRcdFx0PGd1aS1zZWxlY3QgW29wdGlvbnNdPVwiWydoYXMgdmFsdWUnLCAnaXMgdGhlIHNhbWUgYXMnLCAnc3RhcnRzIHdpdGgnLCAnZW5kcyB3aXRoJ11cIiBbc2VsZWN0ZWRdPVwiJ2hhcyB2YWx1ZSdcIiA+XG5cblx0XHRcdDwvZ3VpLXNlbGVjdD5cblxuXHRcdFx0PGZvcm0gW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCI+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmlsdGVyRmllbGROYW1lXCIgZ3VpLWlucHV0Lz5cblx0XHRcdDwvZm9ybT5cblxuXHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uIChjbGljayk9XCJjbGVhckZpbHRlcnMoKVwiPkNsZWFyIEFsbDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvbiBndWktYnV0dG9uIChjbGljayk9XCJ0dXJuT2ZmRmlsdGVyTW9kZSgpXCI+Q2xvc2U8L2J1dHRvbj5cblxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PjtcblxuXHRAT3V0cHV0KClcblx0Y2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHJlYWRvbmx5IGZpbHRlckZpZWxkTmFtZSA9ICdwaHJhc2UnO1xuXG5cdGZpbHRlckZvcm06IEZvcm1Hcm91cDtcblxuXHRmaWx0ZXJNb2RlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogU3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpIHtcblx0XHR0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdFt0aGlzLmZpbHRlckZpZWxkTmFtZV06IFsnJ11cblx0XHR9KTtcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtXG5cdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHQvLyAucGlwZShcblx0XHRcdC8vIGRlYm91bmNlVGltZSg1MDApXG5cdFx0XHQvLyApXG5cdFx0XHQuc3Vic2NyaWJlKChmKSA9PiB7XG5cdFx0XHRcdHRoaXMuZmlsdGVyKGZbdGhpcy5maWx0ZXJGaWVsZE5hbWVdKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0ZmlsdGVyKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAocGhyYXNlID09PSB1bmRlZmluZWQgfHwgcGhyYXNlID09PSBudWxsKSB7XG5cdFx0XHRwaHJhc2UgPSAnJztcblx0XHR9XG5cblx0XHR0aGlzLnN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLmFkZEZpbHRlcih0aGlzLmNvbHVtbnNbMF0uZ2V0RmllbGRJZCgpLCAnMScsIHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRjbGVhckZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJGb3JtLnJlc2V0KCk7XG5cdH1cblxuXHR0dXJuT25GaWx0ZXJNb2RlKCk6IHZvaWQge1xuXHRcdHRoaXMuZmlsdGVyTW9kZSA9IHRydWU7XG5cdFx0dGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHR0dXJuT2ZmRmlsdGVyTW9kZSgpOiB2b2lkIHtcblx0XHR0aGlzLmZpbHRlck1vZGUgPSBmYWxzZTtcblx0XHR0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG59XG4iXX0=