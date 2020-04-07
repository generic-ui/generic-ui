/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainEvent } from '@generic-ui/hermes';
var FieldsInitedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldsInitedEvent, _super);
    function FieldsInitedEvent(aggregateId, compositionId, columns, // TODO merge
    fields) {
        var _this = _super.call(this, aggregateId, 'FieldsInitedEvent') || this;
        _this.compositionId = compositionId;
        _this.columns = columns;
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
    FieldsInitedEvent.prototype.compositionId;
    /** @type {?} */
    FieldsInitedEvent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEvent.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2luaXQvZmllbGRzLWluaXRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVFqRDtJQUF1Qyw2Q0FBVztJQUVqRCwyQkFBWSxXQUF3QixFQUNqQixhQUE0QixFQUM1QixPQUE0QixFQUFFLGFBQWE7SUFDMUMsTUFBd0I7UUFINUMsWUFJQyxrQkFBTSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsU0FDdkM7UUFKa0IsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDM0IsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7O0lBRTVDLENBQUM7Ozs7SUFFRCxxQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQVpELENBQXVDLFdBQVcsR0FZakQ7Ozs7SUFURywwQ0FBNEM7O0lBQzVDLG9DQUE0Qzs7Ozs7SUFDNUMsbUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEV2ZW50IGV4dGVuZHMgRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCAvLyBUT0RPIG1lcmdlXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzOiBBcnJheTxUeXBlRmllbGQ+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdGaWVsZHNJbml0ZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0RmllbGRzKCk6IEFycmF5PFR5cGVGaWVsZD4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkcztcblx0fVxufVxuIl19