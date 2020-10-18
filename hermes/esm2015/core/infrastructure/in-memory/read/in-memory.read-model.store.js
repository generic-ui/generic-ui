/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelStore } from '../../../api/read/store/read-model.store';
/**
 * @abstract
 * @template I, R, B, A
 */
export class InMemoryReadModelStore extends ReadModelStore {
    /**
     * @protected
     * @param {?} inMemoryStore
     */
    constructor(inMemoryStore) {
        super();
        this.inMemoryStore = inMemoryStore;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    getById(aggregateId) {
        // const aggregateId = readModelRootId.toAggregateId() as B; // TODO remove as
        return this.getValue(aggregateId);
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.inMemoryStore
            .getAll()
            .map((/**
         * @param {?} aggregate
         * @return {?}
         */
        (aggregate) => this.toReadModel(aggregate)));
    }
    /**
     * @private
     * @param {?} aggregateId
     * @return {?}
     */
    getValue(aggregateId) {
        /** @type {?} */
        const optAggregate = this.inMemoryStore.get(aggregateId);
        return optAggregate.map(this.toReadModel.bind(this));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryReadModelStore.prototype.inMemoryStore;
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryReadModelStore.prototype.toReadModel = function (aggregate) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9yZWFkL2luLW1lbW9yeS5yZWFkLW1vZGVsLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7O0FBTzFFLE1BQU0sT0FBZ0Isc0JBR08sU0FBUSxjQUFvQjs7Ozs7SUFFeEQsWUFBdUMsYUFBa0M7UUFDeEUsS0FBSyxFQUFFLENBQUM7UUFEOEIsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBRXpFLENBQUM7Ozs7O0lBSUQsT0FBTyxDQUFDLFdBQWM7UUFFckIsOEVBQThFO1FBRTlFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDbkIsTUFBTSxFQUFFO2FBQ1IsR0FBRzs7OztRQUFDLENBQUMsU0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLFdBQWM7O2NBQ3hCLFlBQVksR0FBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJFLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FFRDs7Ozs7O0lBekJzQiwrQ0FBbUQ7Ozs7OztJQUl6RSx3RUFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcblxuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4uLy4uLy4uL2FwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdCc7XG5cbmltcG9ydCB7IFJlYWRNb2RlbFN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RvcmUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZTxJIGV4dGVuZHMgUmVhZE1vZGVsUm9vdElkLFxuXHRSIGV4dGVuZHMgUmVhZE1vZGVsUm9vdDxJPixcblx0QiBleHRlbmRzIEFnZ3JlZ2F0ZUlkLFxuXHRBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxCPj4gZXh0ZW5kcyBSZWFkTW9kZWxTdG9yZTxJLCBSPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdG9yZTogSW5NZW1vcnlTdG9yZTxCLCBBPikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IEEpOiBSO1xuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEIpOiBPcHRpb25hbDxSPiB7XG5cblx0XHQvLyBjb25zdCBhZ2dyZWdhdGVJZCA9IHJlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkgYXMgQjsgLy8gVE9ETyByZW1vdmUgYXNcblxuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdGdldEFsbCgpOiBSZWFkb25seUFycmF5PFI+IHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVN0b3JlXG5cdFx0XHRcdCAgIC5nZXRBbGwoKVxuXHRcdFx0XHQgICAubWFwKChhZ2dyZWdhdGU6IEEpID0+IHRoaXMudG9SZWFkTW9kZWwoYWdncmVnYXRlKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBCKTogT3B0aW9uYWw8Uj4ge1xuXHRcdGNvbnN0IG9wdEFnZ3JlZ2F0ZTogT3B0aW9uYWw8QT4gPSB0aGlzLmluTWVtb3J5U3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHJldHVybiBvcHRBZ2dyZWdhdGUubWFwKHRoaXMudG9SZWFkTW9kZWwuYmluZCh0aGlzKSk7XG5cdH1cblxufVxuIl19