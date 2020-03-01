/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../common/optional';
/**
 * @abstract
 * @template S
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
        return Array.from(this.state.values());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUVqRCxNQUFNLE9BQWdCLGFBQWE7SUFBbkM7UUFFa0IsVUFBSyxHQUFtQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBZ0NwRCxDQUFDOzs7OztJQTlCQSxHQUFHLENBQUMsU0FBWTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxVQUFvQjtRQUMzQixVQUFVLENBQUMsT0FBTzs7OztRQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLFdBQXdCO1FBQzNCLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxXQUF3QjtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBRUQ7Ozs7OztJQWhDQSw4QkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5U3RvcmU8UyBleHRlbmRzIEFnZ3JlZ2F0ZT4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RhdGU6IE1hcDxzdHJpbmcsIFM+ID0gbmV3IE1hcCgpO1xuXG5cdHNldChhZ2dyZWdhdGU6IFMpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLnNldChhZ2dyZWdhdGUuZ2V0SWQoKS50b1N0cmluZygpLCBhZ2dyZWdhdGUpO1xuXHR9XG5cblx0c2V0TWFueShhZ2dyZWdhdGVzOiBBcnJheTxTPik6IHZvaWQge1xuXHRcdGFnZ3JlZ2F0ZXMuZm9yRWFjaCgoYWdncmVnYXRlOiBTKSA9PiB7XG5cdFx0XHR0aGlzLnNldChhZ2dyZWdhdGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPFM+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5zdGF0ZS5nZXQoYWdncmVnYXRlSWQudG9TdHJpbmcoKSkpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFM+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLnZhbHVlcygpKTtcblx0fVxuXG5cdGhhcyhhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5oYXMoYWdncmVnYXRlSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRkZWxldGUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5kZWxldGUoYWdncmVnYXRlSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLmNsZWFyKCk7XG5cdH1cblxufVxuIl19