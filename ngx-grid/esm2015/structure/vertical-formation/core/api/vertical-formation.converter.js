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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTdFLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBRXRDLE9BQU8sQ0FBQyxpQkFBb0M7O2NBRXJDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7O2NBQzVDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7O2NBQzVDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUU7O2NBQ2xELGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTs7Y0FDdEQsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRTtRQUU3QyxPQUFPLElBQUksMEJBQTBCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7OztZQVpELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi4vZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB7XG5cblx0Y29udmVydCh2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24pOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gdmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCksXG5cdFx0XHR0b3BNYXJnaW4gPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRUb3BNYXJnaW4oKSxcblx0XHRcdHNvdXJjZUhlaWdodCA9IHZlcnRpY2FsRm9ybWF0aW9uLmdldFNvdXJjZUhlaWdodCgpLFxuXHRcdFx0dmlld3BvcnRIZWlnaHQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRWaWV3UG9ydEhlaWdodCgpLFxuXHRcdFx0cm93SGVpZ2h0ID0gdmVydGljYWxGb3JtYXRpb24uZ2V0Um93SGVpZ2h0KCk7XG5cblx0XHRyZXR1cm4gbmV3IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKGVuYWJsZWQsIHRvcE1hcmdpbiwgc291cmNlSGVpZ2h0LCB2aWV3cG9ydEhlaWdodCwgcm93SGVpZ2h0KTtcblx0fVxuXG59XG4iXX0=