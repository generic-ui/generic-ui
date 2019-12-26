/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Source } from './read/source';
var SourceConverter = /** @class */ (function () {
    function SourceConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    SourceConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return new Source(aggregate.isLoading());
    };
    SourceConverter.decorators = [
        { type: Injectable }
    ];
    return SourceConverter;
}());
export { SourceConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL3NvdXJjZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2QztJQUFBO0lBT0EsQ0FBQzs7Ozs7SUFKQSxpQ0FBTzs7OztJQUFQLFVBQVEsU0FBd0I7UUFDL0IsT0FBTyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFMRCxVQUFVOztJQU9YLHNCQUFDO0NBQUEsQUFQRCxJQU9DO1NBTlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi9yZWFkL3NvdXJjZSc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi9jb21tYW5kL3NvdXJjZS5tYW5hZ2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbnZlcnRlciB7XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IFNvdXJjZU1hbmFnZXIpOiBTb3VyY2Uge1xuXHRcdHJldHVybiBuZXcgU291cmNlKGFnZ3JlZ2F0ZS5pc0xvYWRpbmcoKSk7XG5cdH1cblxufVxuIl19