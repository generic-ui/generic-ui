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
        const containerHeight = verticalFormation.calcFullHeight();
        /** @type {?} */
        const viewportHeight = verticalFormation.getViewPortHeight();
        return new VerticalFormationReadModel(enabled, topMargin, containerHeight, viewportHeight);
    }
}
VerticalFormationConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3F1ZXJ5L3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTdFLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBRXRDLE9BQU8sQ0FBQyxpQkFBb0M7O2NBRXJDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7O2NBQzVDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7O2NBQzVDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUU7O2NBQ3BELGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtRQUV2RCxPQUFPLElBQUksMEJBQTBCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7O1lBWEQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuLi8uLi9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24nO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQodmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uKTogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IHZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpLFxuXHRcdFx0dG9wTWFyZ2luID0gdmVydGljYWxGb3JtYXRpb24uZ2V0VG9wTWFyZ2luKCksXG5cdFx0XHRjb250YWluZXJIZWlnaHQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5jYWxjRnVsbEhlaWdodCgpLFxuXHRcdFx0dmlld3BvcnRIZWlnaHQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRWaWV3UG9ydEhlaWdodCgpO1xuXG5cdFx0cmV0dXJuIG5ldyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbChlbmFibGVkLCB0b3BNYXJnaW4sIGNvbnRhaW5lckhlaWdodCwgdmlld3BvcnRIZWlnaHQpO1xuXHR9XG5cbn1cbiJdfQ==