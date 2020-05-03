/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationReadModel } from './vertical-formation.read-model';
var VerticalFormationConverter = /** @class */ (function () {
    function VerticalFormationConverter() {
    }
    /**
     * @param {?} verticalFormation
     * @return {?}
     */
    VerticalFormationConverter.prototype.convert = /**
     * @param {?} verticalFormation
     * @return {?}
     */
    function (verticalFormation) {
        /** @type {?} */
        var enabled = verticalFormation.isEnabled();
        /** @type {?} */
        var topMargin = verticalFormation.getTopMargin();
        /** @type {?} */
        var sourceHeight = verticalFormation.getSourceHeight();
        /** @type {?} */
        var viewportHeight = verticalFormation.getViewPortHeight();
        /** @type {?} */
        var rowHeight = verticalFormation.getRowHeight();
        return new VerticalFormationReadModel(enabled, topMargin, sourceHeight, viewportHeight, rowHeight);
    };
    VerticalFormationConverter.decorators = [
        { type: Injectable }
    ];
    return VerticalFormationConverter;
}());
export { VerticalFormationConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUc3RTtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFYQSw0Q0FBTzs7OztJQUFQLFVBQVEsaUJBQW9DOztZQUVyQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxFQUFFOztZQUM1QyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxFQUFFOztZQUM1QyxZQUFZLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxFQUFFOztZQUNsRCxjQUFjLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7O1lBQ3RELFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7UUFFN0MsT0FBTyxJQUFJLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRyxDQUFDOztnQkFaRCxVQUFVOztJQWNYLGlDQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB7XG5cblx0Y29udmVydCh2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24pOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gdmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCksXG5cdFx0XHR0b3BNYXJnaW4gPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRUb3BNYXJnaW4oKSxcblx0XHRcdHNvdXJjZUhlaWdodCA9IHZlcnRpY2FsRm9ybWF0aW9uLmdldFNvdXJjZUhlaWdodCgpLFxuXHRcdFx0dmlld3BvcnRIZWlnaHQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRWaWV3UG9ydEhlaWdodCgpLFxuXHRcdFx0cm93SGVpZ2h0ID0gdmVydGljYWxGb3JtYXRpb24uZ2V0Um93SGVpZ2h0KCk7XG5cblx0XHRyZXR1cm4gbmV3IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKGVuYWJsZWQsIHRvcE1hcmdpbiwgc291cmNlSGVpZ2h0LCB2aWV3cG9ydEhlaWdodCwgcm93SGVpZ2h0KTtcblx0fVxuXG59XG4iXX0=