/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Source } from './source';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NvdXJjZS9zb3VyY2UuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHbEM7SUFBQTtJQU9BLENBQUM7Ozs7O0lBSkEsaUNBQU87Ozs7SUFBUCxVQUFRLFNBQXdCO1FBQy9CLE9BQU8sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBTEQsVUFBVTs7SUFPWCxzQkFBQztDQUFBLEFBUEQsSUFPQztTQU5ZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4vc291cmNlJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL3NvdXJjZS5tYW5hZ2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbnZlcnRlciB7XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IFNvdXJjZU1hbmFnZXIpOiBTb3VyY2Uge1xuXHRcdHJldHVybiBuZXcgU291cmNlKGFnZ3JlZ2F0ZS5pc0xvYWRpbmcoKSk7XG5cdH1cblxufVxuIl19