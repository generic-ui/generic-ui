/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../../common/optional';
/**
 * @abstract
 * @template I, A
 */
export class InMemoryStore {
    constructor() {
        this.state = new Map();
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    set(aggregate) {
        this.state.set(aggregate.getId().toString(), aggregate);
    }
    /**
     * @param {?} aggregates
     * @return {?}
     */
    setMany(aggregates) {
        aggregates.forEach((/**
         * @param {?} aggregate
         * @return {?}
         */
        (aggregate) => {
            this.set(aggregate);
        }));
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    get(aggregateId) {
        return Optional.of(this.state.get(aggregateId.toString()));
    }
    /**
     * @return {?}
     */
    getAll() {
        return Array.from(this.state.values()).map((/**
         * @param {?} v
         * @return {?}
         */
        v => Optional.of(v)));
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    has(aggregateId) {
        return this.state.has(aggregateId.toString());
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    delete(aggregateId) {
        this.state.delete(aggregateId.toString());
    }
    /**
     * @return {?}
     */
    clear() {
        this.state.clear();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStore.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBRXBELE1BQU0sT0FBZ0IsYUFBYTtJQUFuQztRQUVrQixVQUFLLEdBQW1CLElBQUksR0FBRyxFQUFFLENBQUM7SUFnQ3BELENBQUM7Ozs7O0lBOUJBLEdBQUcsQ0FBQyxTQUFZO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFVBQW9CO1FBQzNCLFVBQVUsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxTQUFZLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsV0FBYztRQUNqQixPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLFdBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUFjO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBRUQ7Ozs7OztJQWhDQSw4QkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5U3RvcmU8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RhdGU6IE1hcDxzdHJpbmcsIEE+ID0gbmV3IE1hcCgpO1xuXG5cdHNldChhZ2dyZWdhdGU6IEEpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLnNldChhZ2dyZWdhdGUuZ2V0SWQoKS50b1N0cmluZygpLCBhZ2dyZWdhdGUpO1xuXHR9XG5cblx0c2V0TWFueShhZ2dyZWdhdGVzOiBBcnJheTxBPik6IHZvaWQge1xuXHRcdGFnZ3JlZ2F0ZXMuZm9yRWFjaCgoYWdncmVnYXRlOiBBKSA9PiB7XG5cdFx0XHR0aGlzLnNldChhZ2dyZWdhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0KGFnZ3JlZ2F0ZUlkOiBJKTogT3B0aW9uYWw8QT4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLnN0YXRlLmdldChhZ2dyZWdhdGVJZC50b1N0cmluZygpKSk7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8T3B0aW9uYWw8QT4+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLnZhbHVlcygpKS5tYXAodiA9PiBPcHRpb25hbC5vZih2KSk7XG5cdH1cblxuXHRoYXMoYWdncmVnYXRlSWQ6IEkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5oYXMoYWdncmVnYXRlSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRkZWxldGUoYWdncmVnYXRlSWQ6IEkpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLmRlbGV0ZShhZ2dyZWdhdGVJZC50b1N0cmluZygpKTtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuY2xlYXIoKTtcblx0fVxuXG59XG4iXX0=