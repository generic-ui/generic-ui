/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @abstract
 */
var /**
 * @abstract
 */
Aggregate = /** @class */ (function () {
    function Aggregate(aggregateId) {
        this.aggregateId = aggregateId;
        this.events = [];
    }
    /**
     * @return {?}
     */
    Aggregate.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    Aggregate.prototype.getEvents = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.events));
    };
    /**
     * @param {?} args
     * @return {?}
     */
    Aggregate.prototype.addEvent = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var e_1, _a;
        if (Array.isArray(args)) {
            try {
                for (var args_1 = tslib_1.__values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                    var event_1 = args_1_1.value;
                    this.events.push(event_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            this.events.push((/** @type {?} */ (args)));
        }
    };
    /**
     * @return {?}
     */
    Aggregate.prototype.clearEvents = /**
     * @return {?}
     */
    function () {
        this.events.length = 0;
    };
    return Aggregate;
}());
/**
 * @abstract
 */
export { Aggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Aggregate.prototype.aggregateId;
    /**
     * @type {?}
     * @private
     */
    Aggregate.prototype.events;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7Ozs7SUFNQyxtQkFBc0IsV0FBd0I7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHlCQUFLOzs7SUFBTDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsNkJBQVM7OztJQUFUO1FBQ0MsT0FBTyxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFpQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBSUQsNEJBQVE7Ozs7SUFBUixVQUFTLElBQTRDOztRQUVwRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUN4QixLQUFrQixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO29CQUFuQixJQUFJLE9BQUssaUJBQUE7b0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBSyxDQUFDLENBQUM7aUJBQ3hCOzs7Ozs7Ozs7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxFQUFrQixDQUFDLENBQUM7U0FDekM7SUFDRixDQUFDOzs7O0lBRUQsK0JBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRixnQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7Ozs7Ozs7Ozs7SUFqQ0EsZ0NBQTBDOzs7OztJQUUxQywyQkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vYWdncmVnYXRlLWlkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFnZ3JlZ2F0ZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKSB7XG5cdFx0dGhpcy5hZ2dyZWdhdGVJZCA9IGFnZ3JlZ2F0ZUlkO1xuXHRcdHRoaXMuZXZlbnRzID0gW107XG5cdH1cblxuXHRnZXRJZCgpOiBBZ2dyZWdhdGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRFdmVudHMoKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudD4ge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50cyBhcyBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50Pjtcblx0fVxuXG5cdGFkZEV2ZW50KGV2ZW50OiBBZ2dyZWdhdGVFdmVudCk6IHZvaWQ7XG5cdGFkZEV2ZW50KGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ+KTogdm9pZDtcblx0YWRkRXZlbnQoYXJnczogQWdncmVnYXRlRXZlbnQgfCBBcnJheTxBZ2dyZWdhdGVFdmVudD4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0XHRmb3IgKGxldCBldmVudCBvZiBhcmdzKSB7XG5cdFx0XHRcdHRoaXMuZXZlbnRzLnB1c2goZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmV2ZW50cy5wdXNoKGFyZ3MgYXMgQWdncmVnYXRlRXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdGNsZWFyRXZlbnRzKCk6IHZvaWQge1xuXHRcdHRoaXMuZXZlbnRzLmxlbmd0aCA9IDA7XG5cdH1cbn1cbiJdfQ==