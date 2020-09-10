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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUc3RTtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFYQSw0Q0FBTzs7OztJQUFQLFVBQVEsaUJBQW9DOztZQUVyQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxFQUFFOztZQUM1QyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxFQUFFOztZQUM1QyxZQUFZLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxFQUFFOztZQUNsRCxjQUFjLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7O1lBQ3RELFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7UUFFN0MsT0FBTyxJQUFJLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRyxDQUFDOztnQkFaRCxVQUFVOztJQWNYLGlDQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVhZC1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvbik6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKSxcblx0XHRcdHRvcE1hcmdpbiA9IHZlcnRpY2FsRm9ybWF0aW9uLmdldFRvcE1hcmdpbigpLFxuXHRcdFx0c291cmNlSGVpZ2h0ID0gdmVydGljYWxGb3JtYXRpb24uZ2V0U291cmNlSGVpZ2h0KCksXG5cdFx0XHR2aWV3cG9ydEhlaWdodCA9IHZlcnRpY2FsRm9ybWF0aW9uLmdldFZpZXdQb3J0SGVpZ2h0KCksXG5cdFx0XHRyb3dIZWlnaHQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRSb3dIZWlnaHQoKTtcblxuXHRcdHJldHVybiBuZXcgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwoZW5hYmxlZCwgdG9wTWFyZ2luLCBzb3VyY2VIZWlnaHQsIHZpZXdwb3J0SGVpZ2h0LCByb3dIZWlnaHQpO1xuXHR9XG5cbn1cbiJdfQ==