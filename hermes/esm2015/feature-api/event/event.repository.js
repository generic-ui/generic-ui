/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter } from 'rxjs/operators';
/**
 * @abstract
 * @template R, I
 */
export class EventRepository {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} eventType
     * @return {?}
     */
    onEvent(aggregateId, eventType) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (eventType)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === aggregateId.toString())));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImZlYXR1cmUtYXBpL2V2ZW50L2V2ZW50LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFPN0MsTUFBTSxPQUFnQixlQUFlOzs7OztJQUVwQyxZQUF1QyxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDOzs7Ozs7O0lBRS9ELE9BQU8sQ0FBQyxXQUFjLEVBQUUsU0FBK0I7UUFDaEUsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsbUJBQUEsU0FBUyxFQUFPLENBQ2hCO2FBQ0EsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FDekcsQ0FBQztJQUNSLENBQUM7Q0FDRDs7Ozs7O0lBWHNCLHlDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC5idXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXZlbnRSZXBvc2l0b3J5PFIgZXh0ZW5kcyBSZWFkTW9kZWxSb290SWQsIEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge31cblxuXHRwcm90ZWN0ZWQgb25FdmVudChhZ2dyZWdhdGVJZDogUiwgZXZlbnRUeXBlOiBUeXBlPERvbWFpbkV2ZW50PEk+Pik6IE9ic2VydmFibGU8RG9tYWluRXZlbnQ8ST4+IHtcblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBldmVudFR5cGUgYXMgYW55XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==