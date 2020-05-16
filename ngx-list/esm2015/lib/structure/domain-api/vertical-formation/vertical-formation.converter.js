/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationReadModel } from './vertical-formation.read-model';
export class VerticalFormationConverter {
    /**
     * @param {?} verticalFormation
     * @return {?}
     */
    convert(verticalFormation) {
        /** @type {?} */
        const enabled = verticalFormation.isEnabled();
        /** @type {?} */
        const topMargin = verticalFormation.getTopMargin();
        /** @type {?} */
        const sourceHeight = verticalFormation.getSourceHeight();
        /** @type {?} */
        const viewportHeight = verticalFormation.getViewPortHeight();
        /** @type {?} */
        const rowHeight = verticalFormation.getRowHeight();
        return new VerticalFormationReadModel(enabled, topMargin, sourceHeight, viewportHeight, rowHeight);
    }
}
VerticalFormationConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTdFLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBRXRDLE9BQU8sQ0FBQyxpQkFBb0M7O2NBRXJDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7O2NBQzVDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7O2NBQzVDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUU7O2NBQ2xELGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTs7Y0FDdEQsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRTtRQUU3QyxPQUFPLElBQUksMEJBQTBCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7OztZQVpELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVhZC1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KHZlcnRpY2FsRm9ybWF0aW9uOiBWZXJ0aWNhbEZvcm1hdGlvbik6IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5pc0VuYWJsZWQoKSxcblx0XHRcdHRvcE1hcmdpbiA9IHZlcnRpY2FsRm9ybWF0aW9uLmdldFRvcE1hcmdpbigpLFxuXHRcdFx0c291cmNlSGVpZ2h0ID0gdmVydGljYWxGb3JtYXRpb24uZ2V0U291cmNlSGVpZ2h0KCksXG5cdFx0XHR2aWV3cG9ydEhlaWdodCA9IHZlcnRpY2FsRm9ybWF0aW9uLmdldFZpZXdQb3J0SGVpZ2h0KCksXG5cdFx0XHRyb3dIZWlnaHQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRSb3dIZWlnaHQoKTtcblxuXHRcdHJldHVybiBuZXcgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwoZW5hYmxlZCwgdG9wTWFyZ2luLCBzb3VyY2VIZWlnaHQsIHZpZXdwb3J0SGVpZ2h0LCByb3dIZWlnaHQpO1xuXHR9XG5cbn1cbiJdfQ==