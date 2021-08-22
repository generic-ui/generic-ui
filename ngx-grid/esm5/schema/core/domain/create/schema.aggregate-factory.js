/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaAggregate } from '../schema.aggregate';
var SchemaAggregateFactory = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaAggregateFactory, _super);
    function SchemaAggregateFactory() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    SchemaAggregateFactory.prototype.create = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return new SchemaAggregate(aggregateId);
    };
    SchemaAggregateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaAggregateFactory.ctorParameters = function () { return []; };
    return SchemaAggregateFactory;
}(AggregateFactory));
export { SchemaAggregateFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vY3JlYXRlL3NjaGVtYS5hZ2dyZWdhdGUtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXREO0lBQzRDLGtEQUEyQztJQUV0RjtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sV0FBcUI7UUFDM0IsT0FBTyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkFURCxVQUFVOzs7O0lBVVgsNkJBQUM7Q0FBQSxBQVZELENBQzRDLGdCQUFnQixHQVMzRDtTQVRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uL3NjaGVtYS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9zY2hlbWEuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFBZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxTY2hlbWFJZCwgU2NoZW1hQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGNyZWF0ZShhZ2dyZWdhdGVJZDogU2NoZW1hSWQpOiBTY2hlbWFBZ2dyZWdhdGUge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hQWdncmVnYXRlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxufVxuIl19