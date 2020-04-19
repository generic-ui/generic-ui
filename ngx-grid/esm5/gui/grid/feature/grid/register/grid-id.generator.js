/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var GridIdGenerator = /** @class */ (function () {
    function GridIdGenerator() {
    }
    /**
     * @return {?}
     */
    GridIdGenerator.prototype.generateId = /**
     * @return {?}
     */
    function () {
        GridIdGenerator.index++;
        return GridIdGenerator.PREFIX + GridIdGenerator.index;
    };
    GridIdGenerator.PREFIX = 'gui-grid-';
    GridIdGenerator.index = 0;
    GridIdGenerator.decorators = [
        { type: Injectable }
    ];
    return GridIdGenerator;
}());
export { GridIdGenerator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.PREFIX;
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1pZC5nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9yZWdpc3Rlci9ncmlkLWlkLmdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO0lBWUEsQ0FBQzs7OztJQUxBLG9DQUFVOzs7SUFBVjtRQUNDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV4QixPQUFPLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUN2RCxDQUFDO0lBUnVCLHNCQUFNLEdBQUcsV0FBVyxDQUFDO0lBRTlCLHFCQUFLLEdBQUcsQ0FBQyxDQUFDOztnQkFMekIsVUFBVTs7SUFZWCxzQkFBQztDQUFBLEFBWkQsSUFZQztTQVhZLGVBQWU7Ozs7OztJQUUzQix1QkFBNkM7Ozs7O0lBRTdDLHNCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyaWRJZEdlbmVyYXRvciB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUFJFRklYID0gJ2d1aS1ncmlkLSc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5kZXggPSAwO1xuXG5cdGdlbmVyYXRlSWQoKTogc3RyaW5nIHtcblx0XHRHcmlkSWRHZW5lcmF0b3IuaW5kZXgrKztcblxuXHRcdHJldHVybiBHcmlkSWRHZW5lcmF0b3IuUFJFRklYICsgR3JpZElkR2VuZXJhdG9yLmluZGV4O1xuXHR9XG59XG4iXX0=