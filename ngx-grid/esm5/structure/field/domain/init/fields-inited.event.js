/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var FieldsInitedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldsInitedEvent, _super);
    function FieldsInitedEvent(aggregateId, fieldConfigs, // TODO merge
    fields) {
        var _this = _super.call(this, aggregateId, 'FieldsInitedEvent') || this;
        _this.fieldConfigs = fieldConfigs;
        _this.fields = fields;
        return _this;
    }
    /**
     * @return {?}
     */
    FieldsInitedEvent.prototype.getFields = /**
     * @return {?}
     */
    function () {
        return this.fields;
    };
    return FieldsInitedEvent;
}(DomainEvent));
export { FieldsInitedEvent };
if (false) {
    /** @type {?} */
    FieldsInitedEvent.prototype.fieldConfigs;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPakQ7SUFBdUMsNkNBQXdCO0lBRTlELDJCQUFZLFdBQXdCLEVBQ2pCLFlBQWdDLEVBQUUsYUFBYTtJQUM5QyxNQUFvQjtRQUZ4QyxZQUdDLGtCQUFNLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxTQUN2QztRQUhrQixrQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDL0IsWUFBTSxHQUFOLE1BQU0sQ0FBYzs7SUFFeEMsQ0FBQzs7OztJQUVELHFDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBdUMsV0FBVyxHQVdqRDs7OztJQVJHLHlDQUFnRDs7Ozs7SUFDaEQsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2NvcmUvZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSBmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPiwgLy8gVE9ETyBtZXJnZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkczogQXJyYXk8RmllbGQ+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdGaWVsZHNJbml0ZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0RmllbGRzKCk6IEFycmF5PEZpZWxkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzO1xuXHR9XG59XG4iXX0=