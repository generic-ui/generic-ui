/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../../common/optional';
/**
 * @abstract
 * @template I, A
 */
export class PersistStateStore {
    constructor() {
        this.state = new Map();
    }
    /**
     * @param {?} anemia
     * @return {?}
     */
    set(anemia) {
        this.state.set(anemia.getId(), anemia);
    }
    /**
     * @param {?} anemias
     * @return {?}
     */
    setMany(anemias) {
        anemias.forEach((/**
         * @param {?} anemia
         * @return {?}
         */
        (anemia) => {
            this.set(anemia);
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
    PersistStateStore.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1zdGF0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL3BlcnNpc3QvcGVyc2lzdC1zdGF0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUtqRCxNQUFNLE9BQWdCLGlCQUFpQjtJQUF2QztRQUVrQixVQUFLLEdBQW1CLElBQUksR0FBRyxFQUFFLENBQUM7SUF1QnBELENBQUM7Ozs7O0lBckJBLEdBQUcsQ0FBQyxNQUFTO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQWlCO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFTLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsV0FBd0I7UUFDM0IsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0Q7Ozs7OztJQXZCQSxrQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzaXN0QW5lbWlhIH0gZnJvbSAnLi9wZXJzaXN0LWFuZW1pYSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5pbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNpc3RTdGF0ZVN0b3JlPEkgZXh0ZW5kcyBSZWFkTW9kZWxSb290SWQsIEEgZXh0ZW5kcyBQZXJzaXN0QW5lbWlhPEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZTogTWFwPHN0cmluZywgQT4gPSBuZXcgTWFwKCk7XG5cblx0c2V0KGFuZW1pYTogQSk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuc2V0KGFuZW1pYS5nZXRJZCgpLCBhbmVtaWEpO1xuXHR9XG5cblx0c2V0TWFueShhbmVtaWFzOiBBcnJheTxBPik6IHZvaWQge1xuXHRcdGFuZW1pYXMuZm9yRWFjaCgoYW5lbWlhOiBBKSA9PiB7XG5cdFx0XHR0aGlzLnNldChhbmVtaWEpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0KGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IE9wdGlvbmFsPEE+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5zdGF0ZS5nZXQoYWdncmVnYXRlSWQudG9TdHJpbmcoKSkpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PEE+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLnZhbHVlcygpKTtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RhdGUuY2xlYXIoKTtcblx0fVxufVxuIl19