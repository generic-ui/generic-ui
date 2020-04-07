/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../common/optional';
/**
 * @abstract
 * @template I, S
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUVqRCxNQUFNLE9BQWdCLGFBQWE7SUFBbkM7UUFFa0IsVUFBSyxHQUFtQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBZ0NwRCxDQUFDOzs7OztJQTlCQSxHQUFHLENBQUMsU0FBWTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxVQUFvQjtRQUMzQixVQUFVLENBQUMsT0FBTzs7OztRQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLFdBQWM7UUFDakIsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLFdBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxXQUFjO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBRUQ7Ozs7OztJQWhDQSw4QkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeVN0b3JlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgUyBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBNYXA8c3RyaW5nLCBTPiA9IG5ldyBNYXAoKTtcblxuXHRzZXQoYWdncmVnYXRlOiBTKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQoYWdncmVnYXRlLmdldElkKCkudG9TdHJpbmcoKSwgYWdncmVnYXRlKTtcblx0fVxuXG5cdHNldE1hbnkoYWdncmVnYXRlczogQXJyYXk8Uz4pOiB2b2lkIHtcblx0XHRhZ2dyZWdhdGVzLmZvckVhY2goKGFnZ3JlZ2F0ZTogUykgPT4ge1xuXHRcdFx0dGhpcy5zZXQoYWdncmVnYXRlKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldChhZ2dyZWdhdGVJZDogSSk6IE9wdGlvbmFsPFM+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5zdGF0ZS5nZXQoYWdncmVnYXRlSWQudG9TdHJpbmcoKSkpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFM+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLnZhbHVlcygpKTtcblx0fVxuXG5cdGhhcyhhZ2dyZWdhdGVJZDogSSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmhhcyhhZ2dyZWdhdGVJZC50b1N0cmluZygpKTtcblx0fVxuXG5cdGRlbGV0ZShhZ2dyZWdhdGVJZDogSSk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuZGVsZXRlKGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5jbGVhcigpO1xuXHR9XG5cbn1cbiJdfQ==