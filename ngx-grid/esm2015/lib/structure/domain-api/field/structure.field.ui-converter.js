/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFieldUiModel } from './structure.field.ui-model';
export class StructureFieldUiConverter {
    /**
     * @param {?} fields
     * @return {?}
     */
    convert(fields) {
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            return this.convertOne(field);
        }));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    convertOne(field) {
        return new StructureFieldUiModel(field.getId(), field.getDataType());
    }
}
StructureFieldUiConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLbkUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFFckMsT0FBTyxDQUFDLE1BQXdCO1FBQy9CLE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsS0FBZ0I7UUFFbEMsT0FBTyxJQUFJLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFaRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1tb2RlbCc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRmllbGRVaUNvbnZlcnRlciB7XG5cblx0Y29udmVydChmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4pOiBBcnJheTxTdHJ1Y3R1cmVGaWVsZFVpTW9kZWw+IHtcblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IFR5cGVGaWVsZCkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydE9uZShmaWVsZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRPbmUoZmllbGQ6IFR5cGVGaWVsZCk6IFN0cnVjdHVyZUZpZWxkVWlNb2RlbCB7XG5cblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUZpZWxkVWlNb2RlbChmaWVsZC5nZXRJZCgpLCBmaWVsZC5nZXREYXRhVHlwZSgpKTtcblx0fVxufVxuIl19