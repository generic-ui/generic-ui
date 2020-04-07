/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class CompositionChangeSortStatusEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} activeColumns
     */
    constructor(aggregateId, activeColumns) {
        super(aggregateId, 'CompositionChangeSortStatusEvent');
        this.activeColumns = activeColumns;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.getAggregateId();
    }
    /**
     * @return {?}
     */
    getActiveColumns() {
        return this.activeColumns;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEvent.prototype.activeColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWpELE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxXQUFXOzs7OztJQUVoRSxZQUFZLFdBQTBCLEVBQ2xCLGFBQXdDO1FBQzNELEtBQUssQ0FBQyxXQUFXLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBMkI7SUFFNUQsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztDQUVEOzs7Ozs7SUFaRyx5REFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNFdmVudCcpO1xuXHR9XG5cblx0Z2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBZ2dyZWdhdGVJZCgpO1xuXHR9XG5cblx0Z2V0QWN0aXZlQ29sdW1ucygpOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hY3RpdmVDb2x1bW5zO1xuXHR9XG5cbn1cbiJdfQ==