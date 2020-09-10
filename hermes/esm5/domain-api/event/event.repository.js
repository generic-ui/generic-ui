/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { filter } from 'rxjs/operators';
import { ReactiveService } from '../../common/reactive.service';
/**
 * @abstract
 * @template R, I
 */
var /**
 * @abstract
 * @template R, I
 */
EventRepository = /** @class */ (function (_super) {
    tslib_1.__extends(EventRepository, _super);
    function EventRepository(domainEventBus) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        return _this;
    }
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} eventType
     * @return {?}
     */
    EventRepository.prototype.onEvent = /**
     * @protected
     * @param {?} aggregateId
     * @param {?} eventType
     * @return {?}
     */
    function (aggregateId, eventType) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (eventType)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === aggregateId.toString(); })), this.takeUntil());
    };
    return EventRepository;
}(ReactiveService));
/**
 * @abstract
 * @template R, I
 */
export { EventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventRepository.prototype.domainEventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi1hcGkvZXZlbnQvZXZlbnQucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU14QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBRWhFOzs7OztJQUFnRywyQ0FBZTtJQUU5Ryx5QkFBdUMsY0FBOEI7UUFBckUsWUFDQyxpQkFBTyxTQUNQO1FBRnNDLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjs7SUFFckUsQ0FBQzs7Ozs7OztJQUVTLGlDQUFPOzs7Ozs7SUFBakIsVUFBa0IsV0FBYyxFQUFFLFNBQStCO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDcEIsT0FBTyxDQUNQLG1CQUFBLFNBQVMsRUFBTyxDQUNoQjthQUNBLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxLQUErQixJQUFLLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBNUQsQ0FBNEQsRUFBQyxFQUN6RyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCLENBQUM7SUFDUixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBaEJELENBQWdHLGVBQWUsR0FnQjlHOzs7Ozs7Ozs7OztJQWRzQix5Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBSZWFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vcmVhY3RpdmUuc2VydmljZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFdmVudFJlcG9zaXRvcnk8UiBleHRlbmRzIFJlYWRNb2RlbFJvb3RJZCwgSSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIFJlYWN0aXZlU2VydmljZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkV2ZW50KGFnZ3JlZ2F0ZUlkOiBSLCBldmVudFR5cGU6IFR5cGU8RG9tYWluRXZlbnQ8ST4+KTogT2JzZXJ2YWJsZTxEb21haW5FdmVudDxhbnk+PiB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgZXZlbnRUeXBlIGFzIGFueVxuXHRcdFx0XHQgICApXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGZpbHRlcigoZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKS50b1N0cmluZygpID09PSBhZ2dyZWdhdGVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICB0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==