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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2luaXQvZmllbGRzLWluaXRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVFqRDtJQUF1Qyw2Q0FBd0I7SUFFOUQsMkJBQVksV0FBd0IsRUFDakIsYUFBNEIsRUFDNUIsT0FBNEIsRUFBRSxhQUFhO0lBQzFDLE1BQXdCO1FBSDVDLFlBSUMsa0JBQU0sV0FBVyxFQUFFLG1CQUFtQixDQUFDLFNBQ3ZDO1FBSmtCLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGFBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzNCLFlBQU0sR0FBTixNQUFNLENBQWtCOztJQUU1QyxDQUFDOzs7O0lBRUQscUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFaRCxDQUF1QyxXQUFXLEdBWWpEOzs7O0lBVEcsMENBQTRDOztJQUM1QyxvQ0FBNEM7Ozs7O0lBQzVDLG1DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZHNJbml0ZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwdWJsaWMgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHVibGljIHJlYWRvbmx5IGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4sIC8vIFRPRE8gbWVyZ2Vcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0ZpZWxkc0luaXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRGaWVsZHMoKTogQXJyYXk8VHlwZUZpZWxkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzO1xuXHR9XG59XG4iXX0=