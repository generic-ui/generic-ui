/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class AggregateId {
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
     * @param {?} aggregateId
     * @return {?}
     */
    equals(aggregateId) {
        return this.uid === aggregateId.getId();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateId.prototype.uid;
    /**
     * @abstract
     * @return {?}
     */
    AggregateId.prototype.toReadModelRootId = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2FnZ3JlZ2F0ZS1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTSxPQUFnQixXQUFXOzs7OztJQUloQyxZQUFzQixHQUFXO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFJRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUNEOzs7Ozs7SUFuQkEsMEJBQTZCOzs7OztJQU03QiwwREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9yZWFkL3JlYWQtbW9kZWwtcm9vdC1pZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGVJZCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1aWQ6IHN0cmluZztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IodWlkOiBzdHJpbmcpIHtcblx0XHR0aGlzLnVpZCA9IHVpZDtcblx0fVxuXG5cdGFic3RyYWN0IHRvUmVhZE1vZGVsUm9vdElkKCk6IFJlYWRNb2RlbFJvb3RJZDtcblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnVpZDtcblx0fVxuXG5cdGdldElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudWlkO1xuXHR9XG5cblx0ZXF1YWxzKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnVpZCA9PT0gYWdncmVnYXRlSWQuZ2V0SWQoKTtcblx0fVxufVxuIl19