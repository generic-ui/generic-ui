/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SchemaThemeSetEvent } from './schema-theme-set.event';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
var SchemaThemeSetAggregateEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaThemeSetAggregateEvent, _super);
    function SchemaThemeSetAggregateEvent(schemaId, theme) {
        var _this = _super.call(this, schemaId, 'SchemaThemeSetAggregateEvent') || this;
        _this.theme = theme;
        return _this;
    }
    /**
     * @return {?}
     */
    SchemaThemeSetAggregateEvent.prototype.toDomainEvent = /**
     * @return {?}
     */
    function () {
        return new SchemaThemeSetEvent(this.getAggregateId(), this.theme);
    };
    return SchemaThemeSetAggregateEvent;
}(SchemaAggregateEvent));
export { SchemaThemeSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetAggregateEvent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFO0lBQWtELHdEQUFvQjtJQUVyRSxzQ0FBWSxRQUFrQixFQUNWLEtBQWtCO1FBRHRDLFlBRUMsa0JBQU0sUUFBUSxFQUFFLDhCQUE4QixDQUFDLFNBQy9DO1FBRm1CLFdBQUssR0FBTCxLQUFLLENBQWE7O0lBRXRDLENBQUM7Ozs7SUFFRCxvREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0YsbUNBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBa0Qsb0JBQW9CLEdBVXJFOzs7Ozs7O0lBUEcsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4vc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL3NjaGVtYS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFNjaGVtYUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdGhlbWU6IFNjaGVtYVRoZW1lKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdTY2hlbWFUaGVtZVNldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFUaGVtZVNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy50aGVtZSk7XG5cdH1cbn1cbiJdfQ==