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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUVqRCxNQUFNLE9BQWdCLGFBQWE7SUFBbkM7UUFFa0IsVUFBSyxHQUFtQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBZ0NwRCxDQUFDOzs7OztJQTlCQSxHQUFHLENBQUMsU0FBWTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxVQUFvQjtRQUMzQixVQUFVLENBQUMsT0FBTzs7OztRQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLFdBQXdCO1FBQzNCLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxXQUF3QjtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBRUQ7Ozs7OztJQWhDQSw4QkFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbk1lbW9yeVN0b3JlPFMgZXh0ZW5kcyBBZ2dyZWdhdGU+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBNYXA8c3RyaW5nLCBTPiA9IG5ldyBNYXAoKTtcblxuXHRzZXQoYWdncmVnYXRlOiBTKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5zZXQoYWdncmVnYXRlLmdldElkKCkudG9TdHJpbmcoKSwgYWdncmVnYXRlKTtcblx0fVxuXG5cdHNldE1hbnkoYWdncmVnYXRlczogQXJyYXk8Uz4pOiB2b2lkIHtcblx0XHRhZ2dyZWdhdGVzLmZvckVhY2goKGFnZ3JlZ2F0ZTogUykgPT4ge1xuXHRcdFx0dGhpcy5zZXQoYWdncmVnYXRlKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxTPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuc3RhdGUuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxTPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zdGF0ZS52YWx1ZXMoKSk7XG5cdH1cblxuXHRoYXMoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGFzKGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0ZGVsZXRlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuZGVsZXRlKGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZS5jbGVhcigpO1xuXHR9XG5cbn1cbiJdfQ==