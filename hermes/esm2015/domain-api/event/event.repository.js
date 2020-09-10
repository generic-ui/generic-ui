/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter } from 'rxjs/operators';
import { ReactiveService } from '../../common/reactive.service';
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
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.getAggregateId().toString() === aggregateId.toString())), this.takeUntil());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi1hcGkvZXZlbnQvZXZlbnQucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXhDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFFaEUsTUFBTSxPQUFnQixlQUFrRSxTQUFRLGVBQWU7Ozs7O0lBRTlHLFlBQXVDLGNBQThCO1FBQ3BFLEtBQUssRUFBRSxDQUFDO1FBRDhCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUVyRSxDQUFDOzs7Ozs7O0lBRVMsT0FBTyxDQUFDLFdBQWMsRUFBRSxTQUErQjtRQUNoRSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxtQkFBQSxTQUFTLEVBQU8sQ0FDaEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUN6RyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCLENBQUM7SUFDUixDQUFDO0NBQ0Q7Ozs7OztJQWRzQix5Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBSZWFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vcmVhY3RpdmUuc2VydmljZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFdmVudFJlcG9zaXRvcnk8UiBleHRlbmRzIFJlYWRNb2RlbFJvb3RJZCwgSSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIFJlYWN0aXZlU2VydmljZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkV2ZW50KGFnZ3JlZ2F0ZUlkOiBSLCBldmVudFR5cGU6IFR5cGU8RG9tYWluRXZlbnQ8ST4+KTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxhbnk+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgZXZlbnRUeXBlIGFzIGFueVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBhZ2dyZWdhdGVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==