/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionAggregateRepository } from '../../../../domain/composition/command/composition.aggregate-repository';
import { InMemoryCompositionAggregateStore } from './in-memory.composition.aggregate-store';
export class InMemoryCompositionAggregateRepository extends CompositionAggregateRepository {
    /**
     * @param {?} inMemoryCompositionAggregateStore
     */
    constructor(inMemoryCompositionAggregateStore) {
        super();
        this.inMemoryCompositionAggregateStore = inMemoryCompositionAggregateStore;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        return this.inMemoryCompositionAggregateStore.getById(aggregateId);
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    save(aggregate) {
        this.inMemoryCompositionAggregateStore.save(aggregate);
    }
}
InMemoryCompositionAggregateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionAggregateRepository.ctorParameters = () => [
    { type: InMemoryCompositionAggregateStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionAggregateRepository.prototype.inMemoryCompositionAggregateStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21wb3NpdGlvbi9jb21tYW5kL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUs1RixNQUFNLE9BQU8sc0NBQXVDLFNBQVEsOEJBQThCOzs7O0lBRXpGLFlBQW9CLGlDQUFvRTtRQUN2RixLQUFLLEVBQUUsQ0FBQztRQURXLHNDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7SUFFeEYsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsV0FBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFNBQStCO1FBQ25DLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQUpGLGlDQUFpQzs7Ozs7OztJQU83QixtRkFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgZXh0ZW5kcyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0c2F2ZShhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUuc2F2ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==