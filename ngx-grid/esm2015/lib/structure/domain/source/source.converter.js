/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Source } from './query/source';
export class SourceConverter {
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        return new Source(aggregate.isLoading());
    }
}
SourceConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL3NvdXJjZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXhDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUUzQixPQUFPLENBQUMsU0FBNEI7UUFDbkMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFMRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuL3F1ZXJ5L3NvdXJjZSc7XG5pbXBvcnQgeyBTb3VyY2VDb29yZGluYXRvciB9IGZyb20gJy4vY29tbWFuZC9zb3VyY2UtY29vcmRpbmF0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogU291cmNlQ29vcmRpbmF0b3IpOiBTb3VyY2Uge1xuXHRcdHJldHVybiBuZXcgU291cmNlKGFnZ3JlZ2F0ZS5pc0xvYWRpbmcoKSk7XG5cdH1cblxufVxuIl19