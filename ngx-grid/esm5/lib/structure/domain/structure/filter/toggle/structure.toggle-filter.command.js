/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var StructureToggleFilterCommand = /** @class */ (function (_super) {
    tslib_1.__extends(StructureToggleFilterCommand, _super);
    function StructureToggleFilterCommand(structureId, fieldId, externalFilterId, filterValue) {
        var _this = _super.call(this, structureId, 'StructureToggleFilterCommand') || this;
        _this.fieldId = fieldId;
        _this.externalFilterId = externalFilterId;
        _this.filterValue = filterValue;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureToggleFilterCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    StructureToggleFilterCommand.prototype.getExternalFilterId = /**
     * @return {?}
     */
    function () {
        return this.externalFilterId;
    };
    /**
     * @return {?}
     */
    StructureToggleFilterCommand.prototype.getFilterValue = /**
     * @return {?}
     */
    function () {
        return this.filterValue;
    };
    return StructureToggleFilterCommand;
}(Command));
export { StructureToggleFilterCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommand.prototype.externalFilterId;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommand.prototype.filterValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU03QztJQUFrRCx3REFBTztJQUV4RCxzQ0FBWSxXQUF3QixFQUNoQixPQUFnQixFQUNoQixnQkFBd0IsRUFDeEIsV0FBbUI7UUFIdkMsWUFJQyxrQkFBTSxXQUFXLEVBQUUsOEJBQThCLENBQUMsU0FDbEQ7UUFKbUIsYUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFDeEIsaUJBQVcsR0FBWCxXQUFXLENBQVE7O0lBRXZDLENBQUM7Ozs7SUFFRCxpREFBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDBEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELHFEQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDO0lBRUYsbUNBQUM7QUFBRCxDQUFDLEFBckJELENBQWtELE9BQU8sR0FxQnhEOzs7Ozs7O0lBbEJHLCtDQUFpQzs7Ozs7SUFDakMsd0RBQXlDOzs7OztJQUN6QyxtREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2ZpZWxkLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRFeHRlcm5hbEZpbHRlcklkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZXh0ZXJuYWxGaWx0ZXJJZDtcblx0fVxuXG5cdGdldEZpbHRlclZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxufVxuIl19