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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2FnZ3JlZ2F0ZS1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTSxPQUFnQixXQUFXOzs7OztJQUloQyxZQUFzQixHQUFXO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFJRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUNEOzs7Ozs7SUFuQkEsMEJBQTZCOzs7OztJQU03QiwwREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9kb21haW4tYXBpL3JlYWQvcmVhZC1tb2RlbC1yb290LWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZUlkIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVpZDogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih1aWQ6IHN0cmluZykge1xuXHRcdHRoaXMudWlkID0gdWlkO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9SZWFkTW9kZWxSb290SWQoKTogUmVhZE1vZGVsUm9vdElkO1xuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMudWlkO1xuXHR9XG5cblx0Z2V0SWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy51aWQ7XG5cdH1cblxuXHRlcXVhbHMoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudWlkID09PSBhZ2dyZWdhdGVJZC5nZXRJZCgpO1xuXHR9XG59XG4iXX0=