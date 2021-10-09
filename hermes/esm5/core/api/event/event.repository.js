/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReactiveService } from '../../../common/reactive.service';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
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
            .pipe(hermesFilter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === aggregateId.toString(); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvYXBpL2V2ZW50L2V2ZW50LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7OztBQUc3RTs7Ozs7SUFBZ0csMkNBQWU7SUFFOUcseUJBQXVDLGNBQThCO1FBQXJFLFlBQ0MsaUJBQU8sU0FDUDtRQUZzQyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7O0lBRXJFLENBQUM7Ozs7Ozs7SUFFUyxpQ0FBTzs7Ozs7O0lBQWpCLFVBQWtCLFdBQWMsRUFBRSxTQUErQjtRQUVoRSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxtQkFBQSxTQUFTLEVBQU8sQ0FDaEI7YUFDQSxJQUFJLENBQ0osWUFBWTs7OztRQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQTVELENBQTRELEVBQUMsQ0FDL0csQ0FBQztJQUNSLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFoQkQsQ0FBZ0csZUFBZSxHQWdCOUc7Ozs7Ozs7Ozs7O0lBZHNCLHlDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMgfSBmcm9tICcuLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmJ1cyc7XG5pbXBvcnQgeyBSZWFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vcmVhY3RpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBoZXJtZXNGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFdmVudFJlcG9zaXRvcnk8UiBleHRlbmRzIFJlYWRNb2RlbFJvb3RJZCwgSSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIFJlYWN0aXZlU2VydmljZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvbkV2ZW50KGFnZ3JlZ2F0ZUlkOiBSLCBldmVudFR5cGU6IFR5cGU8RG9tYWluRXZlbnQ8ST4+KTogSGVybWVzT2JzZXJ2YWJsZTxEb21haW5FdmVudDxhbnk+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBldmVudFR5cGUgYXMgYW55XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzRmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiJdfQ==