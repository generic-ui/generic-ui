/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var OriginSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(OriginSetEvent, _super);
    function OriginSetEvent(aggregateId, origin) {
        var _this = _super.call(this, aggregateId, 'OriginSetEvent') || this;
        _this.origin = origin;
        return _this;
    }
    /**
     * @return {?}
     */
    OriginSetEvent.prototype.getOrigin = /**
     * @return {?}
     */
    function () {
        return this.origin;
    };
    return OriginSetEvent;
}(DomainEvent));
export { OriginSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OriginSetEvent.prototype.origin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc291cmNlL29yaWdpbi9zZXQtb3JpZ2luL29yaWdpbi1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLOUQ7SUFBb0MsMENBQVc7SUFFOUMsd0JBQVksV0FBd0IsRUFDaEIsTUFBK0I7UUFEbkQsWUFFQyxrQkFBTSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsU0FDcEM7UUFGbUIsWUFBTSxHQUFOLE1BQU0sQ0FBeUI7O0lBRW5ELENBQUM7Ozs7SUFFRCxrQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQVZELENBQW9DLFdBQVcsR0FVOUM7Ozs7Ozs7SUFQRyxnQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgT3JpZ2luU2V0RXZlbnQgZXh0ZW5kcyBEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ09yaWdpblNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRPcmlnaW4oKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbjtcblx0fVxufVxuIl19