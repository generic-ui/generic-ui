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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL3RvZ2dsZS9zdHJ1Y3R1cmUudG9nZ2xlLWZpbHRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTTdDO0lBQWtELHdEQUFPO0lBRXhELHNDQUFZLFdBQXdCLEVBQ2hCLE9BQWdCLEVBQ2hCLGdCQUF3QixFQUN4QixXQUFtQjtRQUh2QyxZQUlDLGtCQUFNLFdBQVcsRUFBRSw4QkFBOEIsQ0FBQyxTQUNsRDtRQUptQixhQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUN4QixpQkFBVyxHQUFYLFdBQVcsQ0FBUTs7SUFFdkMsQ0FBQzs7OztJQUVELGlEQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsMERBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQscURBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRixtQ0FBQztBQUFELENBQUMsQUFyQkQsQ0FBa0QsT0FBTyxHQXFCeEQ7Ozs7Ozs7SUFsQkcsK0NBQWlDOzs7OztJQUNqQyx3REFBeUM7Ozs7O0lBQ3pDLG1EQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9nZ2xlRmlsdGVyQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTdHJ1Y3R1cmVUb2dnbGVGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRFeHRlcm5hbEZpbHRlcklkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZXh0ZXJuYWxGaWx0ZXJJZDtcblx0fVxuXG5cdGdldEZpbHRlclZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxufVxuIl19