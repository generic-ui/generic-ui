/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaAggregate } from './schema.aggregate';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JEO0lBQzRDLGtEQUEyQztJQUV0RjtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx1Q0FBTTs7OztJQUFOLFVBQU8sV0FBcUI7UUFDM0IsT0FBTyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkFURCxVQUFVOzs7O0lBVVgsNkJBQUM7Q0FBQSxBQVZELENBQzRDLGdCQUFnQixHQVMzRDtTQVRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi9zY2hlbWEuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8U2NoZW1hSWQsIFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoYWdncmVnYXRlSWQ6IFNjaGVtYUlkKTogU2NoZW1hQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUFnZ3JlZ2F0ZShhZ2dyZWdhdGVJZCk7XG5cdH1cbn1cbiJdfQ==