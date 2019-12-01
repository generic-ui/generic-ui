/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryAggregateStore, AggregateStoreRegister, AggregateId } from '@generic-ui/hermes';
import { Override } from '../../../../../../common/cdk/decorators';
import { CompositionAggregate } from '../../../../domain/composition/command/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
export class InMemoryCompositionAggregateStore extends InMemoryAggregateStore {
    /**
     * @param {?} inMemoryCompositionStore
     * @param {?} aggregateStoreRegister
     */
    constructor(inMemoryCompositionStore, aggregateStoreRegister) {
        super(inMemoryCompositionStore, aggregateStoreRegister);
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        /** @type {?} */
        let composition = super.getById(aggregateId);
        if (composition) {
            return composition.clone();
        }
        else {
            return null;
        }
    }
}
InMemoryCompositionAggregateStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionAggregateStore.ctorParameters = () => [
    { type: InMemoryCompositionStore },
    { type: AggregateStoreRegister }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AggregateId]),
    tslib_1.__metadata("design:returntype", CompositionAggregate)
], InMemoryCompositionAggregateStore.prototype, "getById", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvY29tcG9zaXRpb24vY29tbWFuZC9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRXBHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSTFFLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxzQkFBNEM7Ozs7O0lBRWxHLFlBQVksd0JBQWtELEVBQzNELHNCQUE4QztRQUNoRCxLQUFLLENBQUMsd0JBQXdCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUdELE9BQU8sQ0FBQyxXQUF3Qjs7WUFDM0IsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRTVDLElBQUksV0FBVyxFQUFFO1lBQ2hCLE9BQU8sV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBRUYsQ0FBQzs7O1lBbEJELFVBQVU7Ozs7WUFIRix3QkFBd0I7WUFOQSxzQkFBc0I7O0FBa0J0RDtJQURDLFFBQVE7OzZDQUNZLFdBQVc7NENBQUcsb0JBQW9CO2dFQVN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZSwgQWdncmVnYXRlU3RvcmVSZWdpc3RlciwgQWdncmVnYXRlSWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnN0b3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlIGV4dGVuZHMgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlLFxuXHRcdFx0XHRhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlLCBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IENvbXBvc2l0aW9uQWdncmVnYXRlIHtcblx0XHRsZXQgY29tcG9zaXRpb24gPSBzdXBlci5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdGlmIChjb21wb3NpdGlvbikge1xuXHRcdFx0cmV0dXJuIGNvbXBvc2l0aW9uLmNsb25lKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=