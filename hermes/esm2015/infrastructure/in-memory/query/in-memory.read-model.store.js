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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcXVlcnkvaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFLN0UsTUFBTSxPQUFnQixzQkFBaUUsU0FBUSxjQUFpQjs7Ozs7SUFFL0csWUFBdUMsYUFBK0I7UUFDckUsS0FBSyxFQUFFLENBQUM7UUFEOEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBRXRFLENBQUM7Ozs7O0lBSUQsT0FBTyxDQUFDLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDbkIsTUFBTSxFQUFFO2FBQ1IsR0FBRzs7OztRQUFDLENBQUMsU0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLFdBQXdCOztjQUNsQyxZQUFZLEdBQWdCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVyRSxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBRUQ7Ozs7OztJQXRCc0IsK0NBQWdEOzs7Ozs7SUFJdEUsd0VBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7IFJlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9yZWFkL3JlYWQtbW9kZWwnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9yZWFkL3N0b3JlL3JlYWQtbW9kZWwuc3RvcmUnO1xuXG5pbXBvcnQgeyBJbk1lbW9yeVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0b3JlJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8UiBleHRlbmRzIFJlYWRNb2RlbCwgRCBleHRlbmRzIEFnZ3JlZ2F0ZT4gZXh0ZW5kcyBSZWFkTW9kZWxTdG9yZTxSPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5NZW1vcnlTdG9yZTogSW5NZW1vcnlTdG9yZTxEPikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRhYnN0cmFjdCB0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IEQpOiBSO1xuXG5cdGdldEJ5SWQoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT3B0aW9uYWw8Uj4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdGdldEFsbCgpOiBSZWFkb25seUFycmF5PFI+IHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVN0b3JlXG5cdFx0XHRcdCAgIC5nZXRBbGwoKVxuXHRcdFx0XHQgICAubWFwKChhZ2dyZWdhdGU6IEQpID0+IHRoaXMudG9SZWFkTW9kZWwoYWdncmVnYXRlKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldFZhbHVlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPFI+IHtcblx0XHRjb25zdCBvcHRBZ2dyZWdhdGU6IE9wdGlvbmFsPEQ+ID0gdGhpcy5pbk1lbW9yeVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRyZXR1cm4gb3B0QWdncmVnYXRlLm1hcCh0aGlzLnRvUmVhZE1vZGVsLmJpbmQodGhpcykpO1xuXHR9XG5cbn1cbiJdfQ==