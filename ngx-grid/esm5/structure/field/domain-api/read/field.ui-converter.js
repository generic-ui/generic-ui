/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldUiModel } from './field.ui-model';
var FieldUiConverter = /** @class */ (function () {
    function FieldUiConverter() {
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    FieldUiConverter.prototype.convert = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            return _this.convertOne(field);
        }));
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FieldUiConverter.prototype.convertOne = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new FieldUiModel(field.getId(), field.getDataType());
    };
    FieldUiConverter.decorators = [
        { type: Injectable }
    ];
    return FieldUiConverter;
}());
export { FieldUiConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudWktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9yZWFkL2ZpZWxkLnVpLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJaEQ7SUFBQTtJQWFBLENBQUM7Ozs7O0lBVkEsa0NBQU87Ozs7SUFBUCxVQUFRLE1BQXdCO1FBQWhDLGlCQUlDO1FBSEEsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsS0FBZ0I7WUFDbEMsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8scUNBQVU7Ozs7O0lBQWxCLFVBQW1CLEtBQWdCO1FBRWxDLE9BQU8sSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7O2dCQVpELFVBQVU7O0lBYVgsdUJBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkVWlNb2RlbCB9IGZyb20gJy4vZmllbGQudWktbW9kZWwnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRVaUNvbnZlcnRlciB7XG5cblx0Y29udmVydChmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4pOiBBcnJheTxGaWVsZFVpTW9kZWw+IHtcblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IFR5cGVGaWVsZCkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydE9uZShmaWVsZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRPbmUoZmllbGQ6IFR5cGVGaWVsZCk6IEZpZWxkVWlNb2RlbCB7XG5cblx0XHRyZXR1cm4gbmV3IEZpZWxkVWlNb2RlbChmaWVsZC5nZXRJZCgpLCBmaWVsZC5nZXREYXRhVHlwZSgpKTtcblx0fVxufVxuIl19