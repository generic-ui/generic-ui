/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @abstract
 * @template I
 */
var /**
 * @abstract
 * @template I
 */
AggregateRoot = /** @class */ (function () {
    function AggregateRoot(aggregateId, type) {
        this.type = type;
        this.aggregateId = aggregateId;
        this.events = [];
    }
    /**
     * @return {?}
     */
    AggregateRoot.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    AggregateRoot.prototype.getType = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    /**
     * @return {?}
     */
    AggregateRoot.prototype.getEvents = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.events));
    };
    /**
     * @param {?} args
     * @return {?}
     */
    AggregateRoot.prototype.addEvent = /**
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
    AggregateRoot.prototype.clearEvents = /**
     * @return {?}
     */
    function () {
        this.events.length = 0;
    };
    /**
     * @param {?} aggregate
     * @return {?}
     */
    AggregateRoot.prototype.equals = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return aggregate.getId().toString() === this.getId().toString();
    };
    return AggregateRoot;
}());
/**
 * @abstract
 * @template I
 */
export { AggregateRoot };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateRoot.prototype.aggregateId;
    /**
     * @type {?}
     * @private
     */
    AggregateRoot.prototype.events;
    /**
     * @type {?}
     * @private
     */
    AggregateRoot.prototype.type;
    /**
     * @abstract
     * @return {?}
     */
    AggregateRoot.prototype.createEvent = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLXJvb3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7Ozs7O0lBTUMsdUJBQXNCLFdBQWMsRUFDWixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBSUQsNkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCwrQkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGlDQUFTOzs7SUFBVDtRQUNDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBb0MsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUlELGdDQUFROzs7O0lBQVIsVUFBUyxJQUFrRDs7UUFFMUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDeEIsS0FBb0IsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtvQkFBckIsSUFBTSxPQUFLLGlCQUFBO29CQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDO2lCQUN4Qjs7Ozs7Ozs7O1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksRUFBcUIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0YsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELDhCQUFNOzs7O0lBQU4sVUFBTyxTQUEyQjtRQUNqQyxPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQzs7Ozs7Ozs7Ozs7SUE1Q0Esb0NBQWdDOzs7OztJQUVoQywrQkFBa0Q7Ozs7O0lBRzNDLDZCQUE2Qjs7Ozs7SUFLcEMsc0RBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50VHlwZSB9IGZyb20gJy4vYWdncmVnYXRlLWV2ZW50LXR5cGUnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBZ2dyZWdhdGVSb290PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlSWQ6IEk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBldmVudHM6IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PEk+PjtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEksXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgdHlwZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5hZ2dyZWdhdGVJZCA9IGFnZ3JlZ2F0ZUlkO1xuXHRcdHRoaXMuZXZlbnRzID0gW107XG5cdH1cblxuXHRhYnN0cmFjdCBjcmVhdGVFdmVudCgpOiBBZ2dyZWdhdGVFdmVudFR5cGU8QWdncmVnYXRlRXZlbnQ8ST4+O1xuXG5cdGdldElkKCk6IEkge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0ZUlkO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxuXHRnZXRFdmVudHMoKTogUmVhZG9ubHlBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj4ge1xuXHRcdHJldHVybiB0aGlzLmV2ZW50cyBhcyBSZWFkb25seUFycmF5PEFnZ3JlZ2F0ZUV2ZW50PEk+Pjtcblx0fVxuXG5cdGFkZEV2ZW50KGV2ZW50OiBBZ2dyZWdhdGVFdmVudDxJPik6IHZvaWQ7XG5cdGFkZEV2ZW50KGV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8ST4+KTogdm9pZDtcblx0YWRkRXZlbnQoYXJnczogQWdncmVnYXRlRXZlbnQ8ST4gfCBBcnJheTxBZ2dyZWdhdGVFdmVudDxJPj4pOiB2b2lkIHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGV2ZW50IG9mIGFyZ3MpIHtcblx0XHRcdFx0dGhpcy5ldmVudHMucHVzaChldmVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXZlbnRzLnB1c2goYXJncyBhcyBBZ2dyZWdhdGVFdmVudDxJPik7XG5cdFx0fVxuXHR9XG5cblx0Y2xlYXJFdmVudHMoKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudHMubGVuZ3RoID0gMDtcblx0fVxuXG5cdGVxdWFscyhhZ2dyZWdhdGU6IEFnZ3JlZ2F0ZVJvb3Q8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYWdncmVnYXRlLmdldElkKCkudG9TdHJpbmcoKSA9PT0gdGhpcy5nZXRJZCgpLnRvU3RyaW5nKCk7XG5cdH1cbn1cbiJdfQ==