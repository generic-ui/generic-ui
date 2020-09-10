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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4vb3JpZ2luL3NldC1vcmlnaW4vb3JpZ2luLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU1qRDtJQUFvQywwQ0FBd0I7SUFFM0Qsd0JBQVksV0FBd0IsRUFDaEIsTUFBK0I7UUFEbkQsWUFFQyxrQkFBTSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsU0FDcEM7UUFGbUIsWUFBTSxHQUFOLE1BQU0sQ0FBeUI7O0lBRW5ELENBQUM7Ozs7SUFFRCxrQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQVZELENBQW9DLFdBQVcsR0FVOUM7Ozs7Ozs7SUFQRyxnQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBPcmlnaW5TZXRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG9yaWdpbjogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ09yaWdpblNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRPcmlnaW4oKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLm9yaWdpbjtcblx0fVxufVxuIl19