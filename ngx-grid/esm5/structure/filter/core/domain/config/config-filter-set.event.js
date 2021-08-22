/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var ConfigFilterSetEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ConfigFilterSetEvent, _super);
    function ConfigFilterSetEvent(aggregateId, enabled) {
        var _this = _super.call(this, aggregateId, enabled, 'ConfigFilterSetEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    ConfigFilterSetEvent.prototype.getEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return ConfigFilterSetEvent;
}(StructureDomainEvent));
export { ConfigFilterSetEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigFilterSetEvent.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZpbHRlci1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vY29uZmlnL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEY7SUFBMEMsZ0RBQW9CO0lBRTdELDhCQUFZLFdBQXdCLEVBQ2hCLE9BQWdCO1FBRHBDLFlBRUMsa0JBQU0sV0FBVyxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxTQUNuRDtRQUZtQixhQUFPLEdBQVAsT0FBTyxDQUFTOztJQUVwQyxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRiwyQkFBQztBQUFELENBQUMsQUFYRCxDQUEwQyxvQkFBb0IsR0FXN0Q7Ozs7Ozs7SUFSRyx1Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnRmlsdGVyU2V0RXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgZW5hYmxlZCwgJ0NvbmZpZ0ZpbHRlclNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19