/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
var StructureColumnSelectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnSelectorComponent, _super);
    function StructureColumnSelectorComponent(compositionWarehouse) {
        var _this = _super.call(this) || this;
        _this.compositionWarehouse = compositionWarehouse;
        _this.columnSelected = new EventEmitter();
        _this.columns = [];
        _this.options = [];
        return _this;
    }
    /**
     * @return {?}
     */
    StructureColumnSelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.compositionWarehouse
            .onHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.columns = columns;
            _this.options = columns.map((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return column.getColumnDefinitionId().toString(); }));
        }));
    };
    /**
     * @param {?} columnId
     * @return {?}
     */
    StructureColumnSelectorComponent.prototype.onSelectChange = /**
     * @param {?} columnId
     * @return {?}
     */
    function (columnId) {
        this.columnSelected.emit(columnId);
    };
    StructureColumnSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-selector',
                    template: "\n\n\t\t<gui-select\n\t\t\t\t[options]=\"options\"\n\t\t\t\t(optionChanged)=\"onSelectChange($event)\">\n\t\t</gui-select>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureColumnSelectorComponent.ctorParameters = function () { return [
        { type: CompositionWarehouse }
    ]; };
    StructureColumnSelectorComponent.propDecorators = {
        columnSelected: [{ type: Output }]
    };
    return StructureColumnSelectorComponent;
}(SmartComponent));
export { StructureColumnSelectorComponent };
if (false) {
    /** @type {?} */
    StructureColumnSelectorComponent.prototype.columnSelected;
    /** @type {?} */
    StructureColumnSelectorComponent.prototype.columns;
    /** @type {?} */
    StructureColumnSelectorComponent.prototype.options;
    /**
     * @type {?}
     * @private
     */
    StructureColumnSelectorComponent.prototype.compositionWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9maWx0ZXIvY29sdW1uLXNlbGVjdG9yL3N0cnVjdHVyZS5jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUdoRztJQWFzRCw0REFBYztJQVNuRSwwQ0FBNkIsb0JBQTBDO1FBQXZFLFlBQ0MsaUJBQU8sU0FDUDtRQUY0QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTnZFLG9CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU1QyxhQUFPLEdBQW1DLEVBQUUsQ0FBQztRQUU3QyxhQUFPLEdBQWtCLEVBQUUsQ0FBQzs7SUFJNUIsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLG9CQUFvQjthQUN2QixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxPQUF1QztZQUNsRCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUV2QixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxNQUErQixJQUFLLE9BQUEsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQXpDLENBQXlDLEVBQUMsQ0FBQztRQUM1RyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQseURBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQXZDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFLGtJQU9UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBZlEsb0JBQW9COzs7aUNBa0IzQixNQUFNOztJQXlCUix1Q0FBQztDQUFBLEFBeENELENBYXNELGNBQWMsR0EyQm5FO1NBM0JZLGdDQUFnQzs7O0lBRTVDLDBEQUM0Qzs7SUFFNUMsbURBQTZDOztJQUU3QyxtREFBNEI7Ozs7O0lBRWhCLGdFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tc2VsZWN0b3InLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1zZWxlY3Rcblx0XHRcdFx0W29wdGlvbnNdPVwib3B0aW9uc1wiXG5cdFx0XHRcdChvcHRpb25DaGFuZ2VkKT1cIm9uU2VsZWN0Q2hhbmdlKCRldmVudClcIj5cblx0XHQ8L2d1aS1zZWxlY3Q+XG5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uU2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtblNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0Y29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+ID0gW107XG5cblx0b3B0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vbkhlYWRlckNvbHVtbnMoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbHVtbnM6IEFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0PikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXG5cdFx0XHRcdHRoaXMub3B0aW9ucyA9IGNvbHVtbnMubWFwKChjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSA9PiBjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCkudG9TdHJpbmcoKSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uU2VsZWN0Q2hhbmdlKGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtblNlbGVjdGVkLmVtaXQoY29sdW1uSWQpO1xuXHR9XG59XG4iXX0=