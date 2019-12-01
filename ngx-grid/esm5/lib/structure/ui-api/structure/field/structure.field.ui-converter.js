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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbkU7SUFBQTtJQWFBLENBQUM7Ozs7O0lBVkEsMkNBQU87Ozs7SUFBUCxVQUFRLE1BQW9CO1FBQTVCLGlCQUlDO1FBSEEsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsS0FBWTtZQUM5QixPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyw4Q0FBVTs7Ozs7SUFBbEIsVUFBbUIsS0FBWTtRQUU5QixPQUFPLElBQUkscUJBQXFCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7O2dCQVpELFVBQVU7O0lBYVgsZ0NBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpZWxkVWlDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxTdHJ1Y3R1cmVGaWVsZFVpTW9kZWw+IHtcblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0T25lKGZpZWxkKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydE9uZShmaWVsZDogRmllbGQpOiBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwge1xuXG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwoZmllbGQuZ2V0SWQoKSwgZmllbGQuZ2V0RGF0YVR5cGUoKSk7XG5cdH1cbn1cbiJdfQ==