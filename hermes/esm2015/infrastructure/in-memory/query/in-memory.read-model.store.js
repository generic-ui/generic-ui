/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
/**
 * @abstract
 * @template R, D
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcXVlcnkvaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFLN0UsTUFBTSxPQUFnQixzQkFBaUUsU0FBUSxjQUFpQjs7Ozs7SUFFL0csWUFBdUMsYUFBK0I7UUFDckUsS0FBSyxFQUFFLENBQUM7UUFEOEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBRXRFLENBQUM7Ozs7O0lBSUQsT0FBTyxDQUFDLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDbkIsTUFBTSxFQUFFO2FBQ1IsR0FBRzs7OztRQUFDLENBQUMsU0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLFdBQXdCOztjQUNsQyxZQUFZLEdBQWdCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVyRSxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBRUQ7Ozs7OztJQXRCc0IsK0NBQWdEOzs7Ozs7SUFJdEUsd0VBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9yZWFkLW1vZGVsJztcblxuaW1wb3J0IHsgUmVhZE1vZGVsU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9zdG9yZS9yZWFkLW1vZGVsLnN0b3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdG9yZSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPFIgZXh0ZW5kcyBSZWFkTW9kZWwsIEQgZXh0ZW5kcyBBZ2dyZWdhdGU+IGV4dGVuZHMgUmVhZE1vZGVsU3RvcmU8Uj4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluTWVtb3J5U3RvcmU6IEluTWVtb3J5U3RvcmU8RD4pIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9SZWFkTW9kZWwoYWdncmVnYXRlOiBEKTogUjtcblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPFI+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRnZXRBbGwoKTogUmVhZG9ubHlBcnJheTxSPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5NZW1vcnlTdG9yZVxuXHRcdFx0XHQgICAuZ2V0QWxsKClcblx0XHRcdFx0ICAgLm1hcCgoYWdncmVnYXRlOiBEKSA9PiB0aGlzLnRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRWYWx1ZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxSPiB7XG5cdFx0Y29uc3Qgb3B0QWdncmVnYXRlOiBPcHRpb25hbDxEPiA9IHRoaXMuaW5NZW1vcnlTdG9yZS5nZXQoYWdncmVnYXRlSWQpO1xuXG5cdFx0cmV0dXJuIG9wdEFnZ3JlZ2F0ZS5tYXAodGhpcy50b1JlYWRNb2RlbC5iaW5kKHRoaXMpKTtcblx0fVxuXG59XG4iXX0=