/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureAggregateRepository } from '../../../domain/structure-aggregate.repository';
import { InMemoryStructureAggregateStore } from './in-memory.structure.aggregate-store';
export class InMemoryStructureAggregateRepository extends StructureAggregateRepository {
    /**
     * @param {?} inMemoryStructureAggregateStore
     */
    constructor(inMemoryStructureAggregateStore) {
        super();
        this.inMemoryStructureAggregateStore = inMemoryStructureAggregateStore;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        return this.inMemoryStructureAggregateStore.getById(aggregateId);
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    save(aggregate) {
        this.inMemoryStructureAggregateStore.save(aggregate);
    }
}
InMemoryStructureAggregateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureAggregateRepository.ctorParameters = () => [
    { type: InMemoryStructureAggregateStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureAggregateRepository.prototype.inMemoryStructureAggregateStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRzlGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBS3hGLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSw0QkFBNEI7Ozs7SUFFckYsWUFBb0IsK0JBQWdFO1FBQ25GLEtBQUssRUFBRSxDQUFDO1FBRFcsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUVwRixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxXQUF3QjtRQUMvQixPQUFPLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsU0FBNkI7UUFDakMsSUFBSSxDQUFDLCtCQUErQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBSkYsK0JBQStCOzs7Ozs7O0lBTzNCLCtFQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5zdHJ1Y3R1cmUuYWdncmVnYXRlLXN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCk6IE9wdGlvbmFsPFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRzYXZlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlLnNhdmUoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=