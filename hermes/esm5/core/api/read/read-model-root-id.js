/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
ReadModelRootId = /** @class */ (function () {
    function ReadModelRootId(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    ReadModelRootId.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @return {?}
     */
    ReadModelRootId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @param {?} entityId
     * @return {?}
     */
    ReadModelRootId.prototype.equals = /**
     * @param {?} entityId
     * @return {?}
     */
    function (entityId) {
        return this.uid === entityId.getId();
    };
    return ReadModelRootId;
}());
/**
 * @abstract
 */
export { ReadModelRootId };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReadModelRootId.prototype.uid;
    /**
     * @abstract
     * @return {?}
     */
    ReadModelRootId.prototype.toAggregateId = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb2RlbC1yb290LWlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QtaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7O0lBSUMseUJBQXNCLEdBQVc7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQzs7OztJQUlELGtDQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsK0JBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLFFBQXlCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQzs7Ozs7Ozs7OztJQXBCQSw4QkFBNkI7Ozs7O0lBTTdCLDBEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVhZE1vZGVsUm9vdElkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVpZDogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih1aWQ6IHN0cmluZykge1xuXHRcdHRoaXMudWlkID0gdWlkO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9BZ2dyZWdhdGVJZCgpOiBBZ2dyZWdhdGVJZDtcblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnVpZDtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudWlkO1xuXHR9XG5cblx0ZXF1YWxzKGVudGl0eUlkOiBSZWFkTW9kZWxSb290SWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy51aWQgPT09IGVudGl0eUlkLmdldElkKCk7XG5cdH1cblxufVxuIl19