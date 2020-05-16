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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi1hcGkvZXZlbnQvZXZlbnQucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLE1BQU0sRUFBTyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU83QyxNQUFNLE9BQWdCLGVBQWU7Ozs7O0lBRXBDLFlBQXVDLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7Ozs7Ozs7SUFFL0QsT0FBTyxDQUFDLFdBQWMsRUFBRSxTQUErQjtRQUNoRSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxtQkFBQSxTQUFTLEVBQU8sQ0FDaEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUN6RyxDQUFDO0lBQ1IsQ0FBQztDQUNEOzs7Ozs7SUFYc0IseUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFdmVudFJlcG9zaXRvcnk8UiBleHRlbmRzIFJlYWRNb2RlbFJvb3RJZCwgSSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7fVxuXG5cdHByb3RlY3RlZCBvbkV2ZW50KGFnZ3JlZ2F0ZUlkOiBSLCBldmVudFR5cGU6IFR5cGU8RG9tYWluRXZlbnQ8ST4+KTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxJPj4ge1xuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIGV2ZW50VHlwZSBhcyBhbnlcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gYWdncmVnYXRlSWQudG9TdHJpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19