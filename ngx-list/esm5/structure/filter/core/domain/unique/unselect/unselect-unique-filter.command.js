/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../../core/domain/structure.command';
var UnselectUniqueFilterCommand = /** @class */ (function (_super) {
    tslib_1.__extends(UnselectUniqueFilterCommand, _super);
    function UnselectUniqueFilterCommand(structureId, fieldId, uniqueValueId) {
        var _this = _super.call(this, structureId, 'UnselectUniqueFilterCommand') || this;
        _this.fieldId = fieldId;
        _this.uniqueValueId = uniqueValueId;
        return _this;
    }
    /**
     * @return {?}
     */
    UnselectUniqueFilterCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    UnselectUniqueFilterCommand.prototype.getUniqueValueId = /**
     * @return {?}
     */
    function () {
        return this.uniqueValueId;
    };
    return UnselectUniqueFilterCommand;
}(StructureCommand));
export { UnselectUniqueFilterCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnselectUniqueFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    UnselectUniqueFilterCommand.prototype.uniqueValueId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bnNlbGVjdC91bnNlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUdoRjtJQUFpRCx1REFBZ0I7SUFFaEUscUNBQVksV0FBd0IsRUFDaEIsT0FBZ0IsRUFDaEIsYUFBNEI7UUFGaEQsWUFHQyxrQkFBTSxXQUFXLEVBQUUsNkJBQTZCLENBQUMsU0FDakQ7UUFIbUIsYUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFFaEQsQ0FBQzs7OztJQUVELGdEQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsc0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVGLGtDQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFpRCxnQkFBZ0IsR0FnQmhFOzs7Ozs7O0lBYkcsOENBQWlDOzs7OztJQUNqQyxvREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4uL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdVbnNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQnKTtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRJZDtcblx0fVxuXG5cdGdldFVuaXF1ZVZhbHVlSWQoKTogVW5pcXVlVmFsdWVJZCB7XG5cdFx0cmV0dXJuIHRoaXMudW5pcXVlVmFsdWVJZDtcblx0fVxuXG59XG4iXX0=