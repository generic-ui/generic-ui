/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AggregateEvent } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from './schema-theme-set.event';
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
}(AggregateEvent));
export { SchemaThemeSetAggregateEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaThemeSetAggregateEvent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBSWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9EO0lBQWtELHdEQUF3QjtJQUV6RSxzQ0FBWSxRQUFrQixFQUNWLEtBQWtCO1FBRHRDLFlBRUMsa0JBQU0sUUFBUSxFQUFFLDhCQUE4QixDQUFDLFNBQy9DO1FBRm1CLFdBQUssR0FBTCxLQUFLLENBQWE7O0lBRXRDLENBQUM7Ozs7SUFFRCxvREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0YsbUNBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBa0QsY0FBYyxHQVUvRDs7Ozs7OztJQVBHLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWVTZXRFdmVudCB9IGZyb20gJy4vc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFUaGVtZVNldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U2NoZW1hSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdGhlbWU6IFNjaGVtYVRoZW1lKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdTY2hlbWFUaGVtZVNldEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBTY2hlbWFUaGVtZVNldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy50aGVtZSk7XG5cdH1cbn1cbiJdfQ==