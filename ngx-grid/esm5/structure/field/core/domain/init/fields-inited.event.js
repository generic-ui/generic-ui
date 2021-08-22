/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
var FieldsInitedEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FieldsInitedEvent, _super);
    function FieldsInitedEvent(aggregateId, fieldConfigs, // TODO merge
    fields) {
        var _this = _super.call(this, aggregateId, { fieldConfigs: fieldConfigs, fields: fields }, 'FieldsInitedEvent') || this;
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
}(StructureDomainEvent));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBR3RGO0lBQXVDLDZDQUFvQjtJQUUxRCwyQkFBWSxXQUF3QixFQUNqQixZQUFnQyxFQUFFLGFBQWE7SUFDOUMsTUFBb0I7UUFGeEMsWUFHQyxrQkFBTSxXQUFXLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLFNBQ2pFO1FBSGtCLGtCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUMvQixZQUFNLEdBQU4sTUFBTSxDQUFjOztJQUV4QyxDQUFDOzs7O0lBRUQscUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFYRCxDQUF1QyxvQkFBb0IsR0FXMUQ7Ozs7SUFSRyx5Q0FBZ0Q7Ozs7O0lBQ2hELG1DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+LCAvLyBUT0RPIG1lcmdlXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzOiBBcnJheTxGaWVsZD4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgeyBmaWVsZENvbmZpZ3MsIGZpZWxkcyB9LCAnRmllbGRzSW5pdGVkRXZlbnQnKTtcblx0fVxuXG5cdGdldEZpZWxkcygpOiBBcnJheTxGaWVsZD4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkcztcblx0fVxufVxuIl19