/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureAggregateRepository } from '../../../../domain/structure/command/structure-aggregate.repository';
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
        return this.inMemoryStructureAggregateStore.getById(aggregateId).getValueOrNullOrThrowError();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvc3RydWN0dXJlL2NvbW1hZC9pbi1tZW1vcnkuc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBR25ILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSXhGLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSw0QkFBNEI7Ozs7SUFFckYsWUFBb0IsK0JBQWdFO1FBQ25GLEtBQUssRUFBRSxDQUFDO1FBRFcsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUVwRixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxXQUF3QjtRQUMvQixPQUFPLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUMvRixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxTQUE2QjtRQUNqQyxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQWJELFVBQVU7Ozs7WUFIRiwrQkFBK0I7Ozs7Ozs7SUFNM0IsK0VBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5zdHJ1Y3R1cmUuYWdncmVnYXRlLXN0b3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogU3RydWN0dXJlQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlLmdldEJ5SWQoYWdncmVnYXRlSWQpLmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCk7XG5cdH1cblxuXHRzYXZlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlLnNhdmUoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=