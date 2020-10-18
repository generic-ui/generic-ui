/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var ActiveFiltersSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveFiltersSetEvent, _super);
    function ActiveFiltersSetEvent(structureId, filters) {
        var _this = _super.call(this, structureId, 'ActiveFiltersSetEvent') || this;
        _this.filters = filters;
        return _this;
    }
    /**
     * @return {?}
     */
    ActiveFiltersSetEvent.prototype.getFilters = /**
     * @return {?}
     */
    function () {
        return this.filters;
    };
    return ActiveFiltersSetEvent;
}(StructureDomainEvent));
export { ActiveFiltersSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveFiltersSetEvent.prototype.filters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBMkMsaURBQW9CO0lBRTlELCtCQUFZLFdBQXdCLEVBQ2hCLE9BQTZDO1FBRGpFLFlBRUMsa0JBQU0sV0FBVyxFQUFFLHVCQUF1QixDQUFDLFNBQzNDO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQXNDOztJQUVqRSxDQUFDOzs7O0lBRUQsMENBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRiw0QkFBQztBQUFELENBQUMsQUFYRCxDQUEyQyxvQkFBb0IsR0FXOUQ7Ozs7Ozs7SUFSRyx3Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyc1NldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJzOiBSZWFkb25seUFycmF5PEFjdGl2ZUZpbHRlclJlYWRNb2RlbD4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ0FjdGl2ZUZpbHRlcnNTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0RmlsdGVycygpOiBSZWFkb25seUFycmF5PGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcnM7XG5cdH1cblxufVxuIl19