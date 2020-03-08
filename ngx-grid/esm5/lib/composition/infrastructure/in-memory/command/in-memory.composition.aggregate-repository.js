/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CompositionAggregateRepository } from '../../../domain/command/composition.aggregate-repository';
import { InMemoryCompositionAggregateStore } from './in-memory.composition.aggregate-store';
var InMemoryCompositionAggregateRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionAggregateRepository, _super);
    function InMemoryCompositionAggregateRepository(inMemoryCompositionAggregateStore) {
        var _this = _super.call(this) || this;
        _this.inMemoryCompositionAggregateStore = inMemoryCompositionAggregateStore;
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryCompositionAggregateRepository.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.inMemoryCompositionAggregateStore.getById(aggregateId);
    };
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryCompositionAggregateRepository.prototype.save = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        this.inMemoryCompositionAggregateStore.save(aggregate);
    };
    InMemoryCompositionAggregateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionAggregateRepository.ctorParameters = function () { return [
        { type: InMemoryCompositionAggregateStore }
    ]; };
    return InMemoryCompositionAggregateRepository;
}(CompositionAggregateRepository));
export { InMemoryCompositionAggregateRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionAggregateRepository.prototype.inMemoryCompositionAggregateStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbW1hbmQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUk1RjtJQUM0RCxrRUFBOEI7SUFFekYsZ0RBQW9CLGlDQUFvRTtRQUF4RixZQUNDLGlCQUFPLFNBQ1A7UUFGbUIsdUNBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQzs7SUFFeEYsQ0FBQzs7Ozs7SUFFRCx3REFBTzs7OztJQUFQLFVBQVEsV0FBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRUQscURBQUk7Ozs7SUFBSixVQUFLLFNBQStCO1FBQ25DLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFKRixpQ0FBaUM7O0lBbUIxQyw2Q0FBQztDQUFBLEFBZkQsQ0FDNEQsOEJBQThCLEdBY3pGO1NBZFksc0NBQXNDOzs7Ozs7SUFFdEMsbUZBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSBleHRlbmRzIENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0c2F2ZShhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUuc2F2ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==