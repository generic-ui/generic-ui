/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/feature-api/composition.warehouse';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9maWx0ZXIvY29sdW1uLXNlbGVjdG9yL3N0cnVjdHVyZS5jb2x1bW4tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUdqRztJQWFzRCw0REFBYztJQVNuRSwwQ0FBNkIsb0JBQTBDO1FBQXZFLFlBQ0MsaUJBQU8sU0FDUDtRQUY0QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTnZFLG9CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU1QyxhQUFPLEdBQW1DLEVBQUUsQ0FBQztRQUU3QyxhQUFPLEdBQWtCLEVBQUUsQ0FBQzs7SUFJNUIsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLG9CQUFvQjthQUN2QixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN0QixTQUFTOzs7O1FBQUMsVUFBQyxPQUF1QztZQUNsRCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUV2QixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxNQUErQixJQUFLLE9BQUEsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQXpDLENBQXlDLEVBQUMsQ0FBQztRQUM1RyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQseURBQWM7Ozs7SUFBZCxVQUFlLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQXZDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFLGtJQU9UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBZlEsb0JBQW9COzs7aUNBa0IzQixNQUFNOztJQXlCUix1Q0FBQztDQUFBLEFBeENELENBYXNELGNBQWMsR0EyQm5FO1NBM0JZLGdDQUFnQzs7O0lBRTVDLDBEQUM0Qzs7SUFFNUMsbURBQTZDOztJQUU3QyxtREFBNEI7Ozs7O0lBRWhCLGdFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9mZWF0dXJlLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbHVtbi1zZWxlY3RvcicsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLXNlbGVjdFxuXHRcdFx0XHRbb3B0aW9uc109XCJvcHRpb25zXCJcblx0XHRcdFx0KG9wdGlvbkNoYW5nZWQpPVwib25TZWxlY3RDaGFuZ2UoJGV2ZW50KVwiPlxuXHRcdDwvZ3VpLXNlbGVjdD5cblxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5TZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRjb2x1bW5zOiBBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4gPSBbXTtcblxuXHRvcHRpb25zOiBBcnJheTxzdHJpbmc+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uSGVhZGVyQ29sdW1ucygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uczogQXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+KSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cblx0XHRcdFx0dGhpcy5vcHRpb25zID0gY29sdW1ucy5tYXAoKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpID0+IGNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKS50b1N0cmluZygpKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25TZWxlY3RDaGFuZ2UoY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY29sdW1uU2VsZWN0ZWQuZW1pdChjb2x1bW5JZCk7XG5cdH1cbn1cbiJdfQ==