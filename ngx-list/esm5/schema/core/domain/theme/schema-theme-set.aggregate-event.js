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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFO0lBQWtELHdEQUFvQjtJQUVyRSxzQ0FBWSxRQUFrQixFQUNWLEtBQWtCO1FBRHRDLFlBRUMsa0JBQU0sUUFBUSxFQUFFLDhCQUE4QixDQUFDLFNBQy9DO1FBRm1CLFdBQUssR0FBTCxLQUFLLENBQWE7O0lBRXRDLENBQUM7Ozs7SUFFRCxvREFBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0YsbUNBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBa0Qsb0JBQW9CLEdBVXJFOzs7Ozs7O0lBUEcsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2FwaS9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9zY2hlbWEuYWdncmVnYXRlLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYVRoZW1lU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBTY2hlbWFUaGVtZSkge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hVGhlbWVTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMudGhlbWUpO1xuXHR9XG59XG4iXX0=