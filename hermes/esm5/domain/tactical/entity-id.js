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
EntityId = /** @class */ (function () {
    function EntityId(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    EntityId.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @return {?}
     */
    EntityId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.uid;
    };
    /**
     * @param {?} entityId
     * @return {?}
     */
    EntityId.prototype.equals = /**
     * @param {?} entityId
     * @return {?}
     */
    function (entityId) {
        return this.uid === entityId.getId();
    };
    return EntityId;
}());
/**
 * @abstract
 */
export { EntityId };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityId.prototype.uid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL3RhY3RpY2FsL2VudGl0eS1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7SUFJQyxrQkFBc0IsR0FBVztRQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsMkJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCx3QkFBSzs7O0lBQUw7UUFDQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCx5QkFBTTs7OztJQUFOLFVBQU8sUUFBa0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUYsZUFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7Ozs7Ozs7Ozs7SUFsQkEsdUJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eUlkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVpZDogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih1aWQ6IHN0cmluZykge1xuXHRcdHRoaXMudWlkID0gdWlkO1xuXHR9XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy51aWQ7XG5cdH1cblxuXHRnZXRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnVpZDtcblx0fVxuXG5cdGVxdWFscyhlbnRpdHlJZDogRW50aXR5SWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy51aWQgPT09IGVudGl0eUlkLmdldElkKCk7XG5cdH1cblxufVxuIl19