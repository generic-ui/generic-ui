/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReactiveService } from '../../../common/reactive.service';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
/**
 * @abstract
 * @template R, I
 */
export class EventRepository extends ReactiveService {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super();
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
            .pipe(hermesFilter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvYXBpL2V2ZW50L2V2ZW50LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7Ozs7O0FBRzdFLE1BQU0sT0FBZ0IsZUFBa0UsU0FBUSxlQUFlOzs7OztJQUU5RyxZQUF1QyxjQUE4QjtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQUQ4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFFckUsQ0FBQzs7Ozs7OztJQUVTLE9BQU8sQ0FBQyxXQUFjLEVBQUUsU0FBK0I7UUFFaEUsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsbUJBQUEsU0FBUyxFQUFPLENBQ2hCO2FBQ0EsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FDL0csQ0FBQztJQUNSLENBQUM7Q0FDRDs7Ozs7O0lBZHNCLHlDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBSZWFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVhY3RpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBoZXJtZXNGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFdmVudFJlcG9zaXRvcnk8UiBleHRlbmRzIFJlYWRNb2RlbFJvb3RJZCwgSSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIFJlYWN0aXZlU2VydmljZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkV2ZW50KGFnZ3JlZ2F0ZUlkOiBSLCBldmVudFR5cGU6IFR5cGU8RG9tYWluRXZlbnQ8ST4+KTogSGVybWVzT2JzZXJ2YWJsZTxEb21haW5FdmVudDxhbnk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBldmVudFR5cGUgYXMgYW55XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==