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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1zdGF0ZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlL3BlcnNpc3QvcGVyc2lzdC1zdGF0ZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUtqRCxNQUFNLE9BQWdCLGlCQUFpQjtJQUF2QztRQUVrQixVQUFLLEdBQW1CLElBQUksR0FBRyxFQUFFLENBQUM7SUF1QnBELENBQUM7Ozs7O0lBckJBLEdBQUcsQ0FBQyxNQUFTO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQWlCO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFTLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsV0FBd0I7UUFDM0IsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0Q7Ozs7OztJQXZCQSxrQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzaXN0QW5lbWlhIH0gZnJvbSAnLi9wZXJzaXN0LWFuZW1pYSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9vcHRpb25hbCc7XG5pbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9yZWFkL3JlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0U3RhdGVTdG9yZTxJIGV4dGVuZHMgUmVhZE1vZGVsUm9vdElkLCBBIGV4dGVuZHMgUGVyc2lzdEFuZW1pYTxJPj4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RhdGU6IE1hcDxzdHJpbmcsIEE+ID0gbmV3IE1hcCgpO1xuXG5cdHNldChhbmVtaWE6IEEpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLnNldChhbmVtaWEuZ2V0SWQoKSwgYW5lbWlhKTtcblx0fVxuXG5cdHNldE1hbnkoYW5lbWlhczogQXJyYXk8QT4pOiB2b2lkIHtcblx0XHRhbmVtaWFzLmZvckVhY2goKGFuZW1pYTogQSkgPT4ge1xuXHRcdFx0dGhpcy5zZXQoYW5lbWlhKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBPcHRpb25hbDxBPiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuc3RhdGUuZ2V0KGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxBPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zdGF0ZS52YWx1ZXMoKSk7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnN0YXRlLmNsZWFyKCk7XG5cdH1cbn1cbiJdfQ==