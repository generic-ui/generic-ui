/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class EntityId {
    /**
     * @protected
     * @param {?} uid
     */
    constructor(uid) {
        this.uid = uid;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.uid;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.uid;
    }
    /**
     * @param {?} entityId
     * @return {?}
     */
    equals(entityId) {
        return this.uid === entityId.getId();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    EntityId.prototype.uid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL3RhY3RpY2FsL2VudGl0eS1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTSxPQUFnQixRQUFROzs7OztJQUk3QixZQUFzQixHQUFXO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWtCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUVEOzs7Ozs7SUFsQkEsdUJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eUlkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVpZDogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih1aWQ6IHN0cmluZykge1xuXHRcdHRoaXMudWlkID0gdWlkO1xuXHR9XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy51aWQ7XG5cdH1cblxuXHRnZXRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnVpZDtcblx0fVxuXG5cdGVxdWFscyhlbnRpdHlJZDogRW50aXR5SWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy51aWQgPT09IGVudGl0eUlkLmdldElkKCk7XG5cdH1cblxufVxuIl19