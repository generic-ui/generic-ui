/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { filter } from 'rxjs/operators';
import { ReactiveService } from '../../../common/reactive.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvYXBpL2V2ZW50L2V2ZW50LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7OztBQUVuRTs7Ozs7SUFBZ0csMkNBQWU7SUFFOUcseUJBQXVDLGNBQThCO1FBQXJFLFlBQ0MsaUJBQU8sU0FDUDtRQUZzQyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7O0lBRXJFLENBQUM7Ozs7Ozs7SUFFUyxpQ0FBTzs7Ozs7O0lBQWpCLFVBQWtCLFdBQWMsRUFBRSxTQUErQjtRQUNoRSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxtQkFBQSxTQUFTLEVBQU8sQ0FDaEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQTVELENBQTRELEVBQUMsRUFDekcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQixDQUFDO0lBQ1IsQ0FBQztJQUNGLHNCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFnRyxlQUFlLEdBZ0I5Rzs7Ozs7Ozs7Ozs7SUFkc0IseUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9yZWFkL3JlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IFJlYWN0aXZlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yZWFjdGl2ZS5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV2ZW50UmVwb3NpdG9yeTxSIGV4dGVuZHMgUmVhZE1vZGVsUm9vdElkLCBJIGV4dGVuZHMgQWdncmVnYXRlSWQ+IGV4dGVuZHMgUmVhY3RpdmVTZXJ2aWNlIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIG9uRXZlbnQoYWdncmVnYXRlSWQ6IFIsIGV2ZW50VHlwZTogVHlwZTxEb21haW5FdmVudDxJPj4pOiBPYnNlcnZhYmxlPERvbWFpbkV2ZW50PGFueT4+IHtcblx0XHRyZXR1cm4gdGhpcy5kb21haW5FdmVudEJ1c1xuXHRcdFx0XHQgICAub2ZFdmVudChcblx0XHRcdFx0XHQgICBldmVudFR5cGUgYXMgYW55XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IGFnZ3JlZ2F0ZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19