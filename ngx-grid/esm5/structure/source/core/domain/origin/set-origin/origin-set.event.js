/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
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
}(StructureDomainEvent));
export { OriginSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OriginSetEvent.prototype.origin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vc2V0LW9yaWdpbi9vcmlnaW4tc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHekY7SUFBb0MsMENBQW9CO0lBRXZELHdCQUFZLFdBQXdCLEVBQ2hCLE1BQStCO1FBRG5ELFlBRUMsa0JBQU0sV0FBVyxFQUFFLGdCQUFnQixDQUFDLFNBQ3BDO1FBRm1CLFlBQU0sR0FBTixNQUFNLENBQXlCOztJQUVuRCxDQUFDOzs7O0lBRUQsa0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUFWRCxDQUFvQyxvQkFBb0IsR0FVdkQ7Ozs7Ozs7SUFQRyxnQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIE9yaWdpblNldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBvcmlnaW46IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdPcmlnaW5TZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0T3JpZ2luKCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5vcmlnaW47XG5cdH1cbn1cbiJdfQ==