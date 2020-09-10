/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var AddFilterCommand = /** @class */ (function (_super) {
    tslib_1.__extends(AddFilterCommand, _super);
    function AddFilterCommand(structureId, fieldId, filterTypeId, value) {
        var _this = _super.call(this, structureId, 'AddFilterCommand') || this;
        _this.fieldId = fieldId;
        _this.filterTypeId = filterTypeId;
        _this.value = value;
        return _this;
    }
    /**
     * @return {?}
     */
    AddFilterCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    AddFilterCommand.prototype.getFilterTypeId = /**
     * @return {?}
     */
    function () {
        return this.filterTypeId;
    };
    /**
     * @return {?}
     */
    AddFilterCommand.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    return AddFilterCommand;
}(Command));
export { AddFilterCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    AddFilterCommand.prototype.filterTypeId;
    /**
     * @type {?}
     * @private
     */
    AddFilterCommand.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi9jb3JlL2FkZC9hZGQtZmlsdGVyLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPN0M7SUFBc0MsNENBQU87SUFFNUMsMEJBQVksV0FBd0IsRUFDaEIsT0FBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsS0FBVTtRQUg5QixZQUlDLGtCQUFNLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxTQUN0QztRQUptQixhQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQUssR0FBTCxLQUFLLENBQUs7O0lBRTlCLENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDBDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUFyQkQsQ0FBc0MsT0FBTyxHQXFCNUM7Ozs7Ozs7SUFsQkcsbUNBQWlDOzs7OztJQUNqQyx3Q0FBMkM7Ozs7O0lBQzNDLGlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEFkZEZpbHRlckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZTogYW55KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdBZGRGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWVsZElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkSWQ7XG5cdH1cblxuXHRnZXRGaWx0ZXJUeXBlSWQoKTogRmlsdGVyVHlwZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJUeXBlSWQ7XG5cdH1cblxuXHRnZXRWYWx1ZSgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cbn1cbiJdfQ==