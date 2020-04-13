/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFieldUiModel } from './structure.field.ui-model';
var StructureFieldUiConverter = /** @class */ (function () {
    function StructureFieldUiConverter() {
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    StructureFieldUiConverter.prototype.convert = /**
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
    StructureFieldUiConverter.prototype.convertOne = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new StructureFieldUiModel(field.getId(), field.getDataType());
    };
    StructureFieldUiConverter.decorators = [
        { type: Injectable }
    ];
    return StructureFieldUiConverter;
}());
export { StructureFieldUiConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUluRTtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFWQSwyQ0FBTzs7OztJQUFQLFVBQVEsTUFBd0I7UUFBaEMsaUJBSUM7UUFIQSxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFnQjtZQUNsQyxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyw4Q0FBVTs7Ozs7SUFBbEIsVUFBbUIsS0FBZ0I7UUFFbEMsT0FBTyxJQUFJLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkFaRCxVQUFVOztJQWFYLGdDQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1tb2RlbCc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmllbGRVaUNvbnZlcnRlciB7XG5cblx0Y29udmVydChmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4pOiBBcnJheTxTdHJ1Y3R1cmVGaWVsZFVpTW9kZWw+IHtcblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IFR5cGVGaWVsZCkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydE9uZShmaWVsZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRPbmUoZmllbGQ6IFR5cGVGaWVsZCk6IFN0cnVjdHVyZUZpZWxkVWlNb2RlbCB7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUZpZWxkVWlNb2RlbChmaWVsZC5nZXRJZCgpLCBmaWVsZC5nZXREYXRhVHlwZSgpKTtcblx0fVxufVxuIl19