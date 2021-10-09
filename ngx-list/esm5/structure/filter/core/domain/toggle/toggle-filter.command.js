/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../core/domain/structure.command';
var ToggleFilterCommand = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleFilterCommand, _super);
    function ToggleFilterCommand(structureId, fieldId, externalFilterId, filterValue) {
        var _this = _super.call(this, structureId, 'ToggleFilterCommand') || this;
        _this.fieldId = fieldId;
        _this.externalFilterId = externalFilterId;
        _this.filterValue = filterValue;
        return _this;
    }
    /**
     * @return {?}
     */
    ToggleFilterCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    ToggleFilterCommand.prototype.getExternalFilterId = /**
     * @return {?}
     */
    function () {
        return this.externalFilterId;
    };
    /**
     * @return {?}
     */
    ToggleFilterCommand.prototype.getFilterValue = /**
     * @return {?}
     */
    function () {
        return this.filterValue;
    };
    return ToggleFilterCommand;
}(StructureCommand));
export { ToggleFilterCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommand.prototype.externalFilterId;
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommand.prototype.filterValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3RvZ2dsZS90b2dnbGUtZmlsdGVyLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUc3RTtJQUF5QywrQ0FBZ0I7SUFFeEQsNkJBQVksV0FBd0IsRUFDaEIsT0FBZ0IsRUFDaEIsZ0JBQXdCLEVBQ3hCLFdBQW1CO1FBSHZDLFlBSUMsa0JBQU0sV0FBVyxFQUFFLHFCQUFxQixDQUFDLFNBQ3pDO1FBSm1CLGFBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQ3hCLGlCQUFXLEdBQVgsV0FBVyxDQUFROztJQUV2QyxDQUFDOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxpREFBbUI7OztJQUFuQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVGLDBCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUF5QyxnQkFBZ0IsR0FxQnhEOzs7Ozs7O0lBbEJHLHNDQUFpQzs7Ozs7SUFDakMsK0NBQXlDOzs7OztJQUN6QywwQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVGaWx0ZXJDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZXh0ZXJuYWxGaWx0ZXJJZDogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1RvZ2dsZUZpbHRlckNvbW1hbmQnKTtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRJZDtcblx0fVxuXG5cdGdldEV4dGVybmFsRmlsdGVySWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5leHRlcm5hbEZpbHRlcklkO1xuXHR9XG5cblx0Z2V0RmlsdGVyVmFsdWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZTtcblx0fVxuXG59XG4iXX0=