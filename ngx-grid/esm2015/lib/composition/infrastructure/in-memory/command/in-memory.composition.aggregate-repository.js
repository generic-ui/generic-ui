/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CompositionAggregateRepository } from '../../../domain/command/composition.aggregate-repository';
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
        return this.inMemoryCompositionAggregateStore.getById(aggregateId).getValueOrNullOrThrowError();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbW1hbmQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBSzVGLE1BQU0sT0FBTyxzQ0FBdUMsU0FBUSw4QkFBOEI7Ozs7SUFFekYsWUFBb0IsaUNBQW9FO1FBQ3ZGLEtBQUssRUFBRSxDQUFDO1FBRFcsc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztJQUV4RixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxXQUF3QjtRQUMvQixPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUNqRyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxTQUErQjtRQUNuQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7OztZQWJELFVBQVU7Ozs7WUFKRixpQ0FBaUM7Ozs7Ozs7SUFPN0IsbUZBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCwgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSBleHRlbmRzIENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IENvbXBvc2l0aW9uQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlU3RvcmUuZ2V0QnlJZChhZ2dyZWdhdGVJZCkuZ2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKTtcblx0fVxuXG5cdHNhdmUoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlLnNhdmUoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=