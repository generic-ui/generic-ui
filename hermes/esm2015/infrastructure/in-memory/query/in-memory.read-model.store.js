/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelStore } from '../../../domain/read/store/read-model.store';
/**
 * @abstract
 * @template T, S
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
        return this.inMemoryStore.getAll()
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
        const aggregate = this.inMemoryStore.get(aggregateId);
        if (aggregate) {
            return this.toReadModel(aggregate);
        }
        else {
            return null;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcXVlcnkvaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQVdBLE9BQU8sRUFDTixjQUFjLEVBQ2QsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7QUFJckQsTUFBTSxPQUFnQixzQkFBaUUsU0FBUSxjQUFpQjs7Ozs7SUFFL0csWUFBdUMsYUFBK0I7UUFDckUsS0FBSyxFQUFFLENBQUM7UUFEOEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBRXRFLENBQUM7Ozs7O0lBSUQsT0FBTyxDQUFDLFdBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7YUFDNUIsR0FBRzs7OztRQUFDLENBQUMsU0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLFdBQXdCOztjQUNsQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXJELElBQUksU0FBUyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7SUF6QnNCLCtDQUFnRDs7Ozs7O0lBSXRFLHdFQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFnZ3JlZ2F0ZUlkXG59IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHtcblx0QWdncmVnYXRlXG59IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZSc7XG5cbmltcG9ydCB7XG5cdFJlYWRNb2RlbFxufSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9yZWFkLW1vZGVsJztcblxuaW1wb3J0IHtcblx0UmVhZE1vZGVsU3RvcmVcbn0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvc3RvcmUvcmVhZC1tb2RlbC5zdG9yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZTxUIGV4dGVuZHMgUmVhZE1vZGVsLCBTIGV4dGVuZHMgQWdncmVnYXRlPiBleHRlbmRzIFJlYWRNb2RlbFN0b3JlPFQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbk1lbW9yeVN0b3JlOiBJbk1lbW9yeVN0b3JlPFM+KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogUyk6IFQ7XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZShhZ2dyZWdhdGVJZCk7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8VD4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U3RvcmUuZ2V0QWxsKClcblx0XHRcdFx0ICAgLm1hcCgoYWdncmVnYXRlOiBTKSA9PiB0aGlzLnRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRWYWx1ZShhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBUIHtcblx0XHRjb25zdCBhZ2dyZWdhdGUgPSB0aGlzLmluTWVtb3J5U3RvcmUuZ2V0KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdGlmIChhZ2dyZWdhdGUpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=