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
        /** @type {?} */
        const rowHeight = verticalFormation.getRowHeight();
        return new VerticalFormationReadModel(enabled, topMargin, containerHeight, viewportHeight, rowHeight);
    }
}
VerticalFormationConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3JlYWQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJN0UsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFFdEMsT0FBTyxDQUFDLGlCQUFvQzs7Y0FFckMsT0FBTyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsRUFBRTs7Y0FDNUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRTs7Y0FDNUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsRUFBRTs7Y0FDcEQsY0FBYyxHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFOztjQUN0RCxTQUFTLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxFQUFFO1FBRTdDLE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7O1lBWkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuLi8uLi9jb21tYW5kL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24nO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZWFkLW1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQodmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uKTogVmVydGljYWxGb3JtYXRpb25SZWFkTW9kZWwge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IHZlcnRpY2FsRm9ybWF0aW9uLmlzRW5hYmxlZCgpLFxuXHRcdFx0dG9wTWFyZ2luID0gdmVydGljYWxGb3JtYXRpb24uZ2V0VG9wTWFyZ2luKCksXG5cdFx0XHRjb250YWluZXJIZWlnaHQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5jYWxjRnVsbEhlaWdodCgpLFxuXHRcdFx0dmlld3BvcnRIZWlnaHQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRWaWV3UG9ydEhlaWdodCgpLFxuXHRcdFx0cm93SGVpZ2h0ID0gdmVydGljYWxGb3JtYXRpb24uZ2V0Um93SGVpZ2h0KCk7XG5cblx0XHRyZXR1cm4gbmV3IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKGVuYWJsZWQsIHRvcE1hcmdpbiwgY29udGFpbmVySGVpZ2h0LCB2aWV3cG9ydEhlaWdodCwgcm93SGVpZ2h0KTtcblx0fVxuXG59XG4iXX0=