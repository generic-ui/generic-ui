/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SchemaDomainEvent } from '../../schema.domain-event';
var SchemaVerticalGridSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaVerticalGridSetEvent, _super);
    function SchemaVerticalGridSetEvent(schemaId, verticalGrid) {
        var _this = _super.call(this, schemaId, 'SchemaVerticalGridSetEvent') || this;
        _this.verticalGrid = verticalGrid;
        return _this;
    }
    /**
     * @return {?}
     */
    SchemaVerticalGridSetEvent.prototype.getVerticalGrid = /**
     * @return {?}
     */
    function () {
        return this.verticalGrid;
    };
    return SchemaVerticalGridSetEvent;
}(SchemaDomainEvent));
export { SchemaVerticalGridSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaVerticalGridSetEvent.prototype.verticalGrid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvY29yZS9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU5RDtJQUFnRCxzREFBaUI7SUFFaEUsb0NBQVksUUFBa0IsRUFDVixZQUFxQjtRQUR6QyxZQUVDLGtCQUFNLFFBQVEsRUFBRSw0QkFBNEIsQ0FBQyxTQUM3QztRQUZtQixrQkFBWSxHQUFaLFlBQVksQ0FBUzs7SUFFekMsQ0FBQzs7OztJQUVELG9EQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBQ0YsaUNBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBZ0QsaUJBQWlCLEdBVWhFOzs7Ozs7O0lBUEcsa0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vc2NoZW1hLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCBleHRlbmRzIFNjaGVtYURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxHcmlkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxHcmlkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsR3JpZDtcblx0fVxufVxuIl19