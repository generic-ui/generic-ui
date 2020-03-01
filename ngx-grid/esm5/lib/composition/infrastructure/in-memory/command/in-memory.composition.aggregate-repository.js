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
        return this.inMemoryCompositionAggregateStore.getById(aggregateId).getValueOrNullOrThrowError();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbW1hbmQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUk1RjtJQUM0RCxrRUFBOEI7SUFFekYsZ0RBQW9CLGlDQUFvRTtRQUF4RixZQUNDLGlCQUFPLFNBQ1A7UUFGbUIsdUNBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQzs7SUFFeEYsQ0FBQzs7Ozs7SUFFRCx3REFBTzs7OztJQUFQLFVBQVEsV0FBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDakcsQ0FBQzs7Ozs7SUFFRCxxREFBSTs7OztJQUFKLFVBQUssU0FBK0I7UUFDbkMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFiRCxVQUFVOzs7O2dCQUpGLGlDQUFpQzs7SUFtQjFDLDZDQUFDO0NBQUEsQUFmRCxDQUM0RCw4QkFBOEIsR0FjekY7U0FkWSxzQ0FBc0M7Ozs7OztJQUV0QyxtRkFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IGV4dGVuZHMgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogQ29tcG9zaXRpb25BZ2dyZWdhdGUge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpO1xuXHR9XG5cblx0c2F2ZShhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUuc2F2ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==