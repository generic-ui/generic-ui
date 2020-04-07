/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { AGGREGATION_CALCULATORS } from './calculation/aggregation.calculators.token';
import { AggregationManager } from './aggregation.manager';
export class AggregationManagerFactory {
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
        return new AggregationManager(structureId, this.calculators);
    }
}
AggregationManagerFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AggregationManagerFactory.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [AGGREGATION_CALCULATORS,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregationManagerFactory.prototype.calculators;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRpb24ubWFuYWdlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvYWdncmVnYXRpb24vYWdncmVnYXRpb24ubWFuYWdlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUd0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUkzRCxNQUFNLE9BQU8seUJBQXlCOzs7O0lBRXJDLFlBQXFELFdBQW1EO1FBQW5ELGdCQUFXLEdBQVgsV0FBVyxDQUF3QztJQUN4RyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUF3QjtRQUM5QixPQUFPLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUFSRCxVQUFVOzs7O1lBR3dELEtBQUssdUJBQTFELE1BQU0sU0FBQyx1QkFBdUI7Ozs7Ozs7SUFBL0IsZ0RBQTRGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFHR1JFR0FUSU9OX0NBTENVTEFUT1JTIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9hZ2dyZWdhdGlvbi5jYWxjdWxhdG9ycy50b2tlbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkNhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2FnZ3JlZ2F0aW9uLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25NYW5hZ2VyIH0gZnJvbSAnLi9hZ2dyZWdhdGlvbi5tYW5hZ2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWdncmVnYXRpb25NYW5hZ2VyRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChBR0dSRUdBVElPTl9DQUxDVUxBVE9SUykgcHJpdmF0ZSBjYWxjdWxhdG9yczogQXJyYXk8QWdncmVnYXRpb25DYWxjdWxhdG9yPGFueSwgYW55Pj4pIHtcblx0fVxuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBZ2dyZWdhdGlvbk1hbmFnZXIge1xuXHRcdHJldHVybiBuZXcgQWdncmVnYXRpb25NYW5hZ2VyKHN0cnVjdHVyZUlkLCB0aGlzLmNhbGN1bGF0b3JzKTtcblx0fVxuXG59XG4iXX0=