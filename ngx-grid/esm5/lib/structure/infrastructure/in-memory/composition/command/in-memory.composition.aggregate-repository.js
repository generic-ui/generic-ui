/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CompositionAggregateRepository } from '../../../../domain/composition/command/composition.aggregate-repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21wb3NpdGlvbi9jb21tYW5kL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDekgsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFJNUY7SUFDNEQsa0VBQThCO0lBRXpGLGdEQUFvQixpQ0FBb0U7UUFBeEYsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLHVDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7O0lBRXhGLENBQUM7Ozs7O0lBRUQsd0RBQU87Ozs7SUFBUCxVQUFRLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUVELHFEQUFJOzs7O0lBQUosVUFBSyxTQUErQjtRQUNuQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBSkYsaUNBQWlDOztJQW1CMUMsNkNBQUM7Q0FBQSxBQWZELENBQzRELDhCQUE4QixHQWN6RjtTQWRZLHNDQUFzQzs7Ozs7O0lBRXRDLG1GQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSBleHRlbmRzIENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IENvbXBvc2l0aW9uQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRzYXZlKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZS5zYXZlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19