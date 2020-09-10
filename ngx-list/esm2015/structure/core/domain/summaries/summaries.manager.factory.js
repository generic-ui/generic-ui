/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { SUMMARIES_CALCULATORS } from './calculation/summaries.calculators.token';
import { SummariesManager } from './summaries.manager';
export class SummariesManagerFactory {
    /**
     * @param {?} calculators
     */
    constructor(calculators) {
        this.calculators = calculators;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    create(structureId) {
        return new SummariesManager(structureId, this.calculators);
    }
}
SummariesManagerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SummariesManagerFactory.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [SUMMARIES_CALCULATORS,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SummariesManagerFactory.prototype.calculators;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluL3N1bW1hcmllcy9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUdsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl2RCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBRW5DLFlBQW1ELFdBQWlEO1FBQWpELGdCQUFXLEdBQVgsV0FBVyxDQUFzQztJQUNwRyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUF3QjtRQUM5QixPQUFPLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFSRCxVQUFVOzs7O1lBR3NELEtBQUssdUJBQXhELE1BQU0sU0FBQyxxQkFBcUI7Ozs7Ozs7SUFBN0IsOENBQXdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNVTU1BUklFU19DQUxDVUxBVE9SUyB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3JzLnRva2VuJztcbmltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL3N1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXIgfSBmcm9tICcuL3N1bW1hcmllcy5tYW5hZ2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzTWFuYWdlckZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoU1VNTUFSSUVTX0NBTENVTEFUT1JTKSBwcml2YXRlIGNhbGN1bGF0b3JzOiBBcnJheTxTdW1tYXJpZXNDYWxjdWxhdG9yPGFueSwgYW55Pj4pIHtcblx0fVxuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBTdW1tYXJpZXNNYW5hZ2VyIHtcblx0XHRyZXR1cm4gbmV3IFN1bW1hcmllc01hbmFnZXIoc3RydWN0dXJlSWQsIHRoaXMuY2FsY3VsYXRvcnMpO1xuXHR9XG5cbn1cbiJdfQ==