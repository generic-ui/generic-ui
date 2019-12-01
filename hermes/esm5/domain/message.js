/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '../common/random-string.generator';
/**
 * @abstract
 */
var /**
 * @abstract
 */
Message = /** @class */ (function () {
    function Message(aggregateId, messageType, messageId) {
        if (messageId === void 0) { messageId = RandomStringGenerator.generate(); }
        this.aggregateId = aggregateId;
        this.messageType = messageType;
        this.messageId = messageId;
    }
    /**
     * @return {?}
     */
    Message.prototype.getMessageType = /**
     * @return {?}
     */
    function () {
        return this.messageType;
    };
    /**
     * @return {?}
     */
    Message.prototype.getAggregateId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    Message.prototype.getMessageId = /**
     * @return {?}
     */
    function () {
        return this.messageId;
    };
    /**
     * @return {?}
     */
    Message.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.messageType;
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Message.prototype.equalsByType = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        return this.getMessageType() === message.getMessageType();
    };
    /**
     * @param {?} message
     * @return {?}
     */
    Message.prototype.equals = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        return (this.getMessageType() === message.getMessageType()) && (this.messageId === message.messageId);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    Message.prototype.ofMessageType = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        var _this = this;
        if (Array.isArray(arg)) {
            /** @type {?} */
            var found = arg.find((/**
             * @param {?} messageType
             * @return {?}
             */
            function (messageType) { return _this.isMessageType(messageType); }));
            return !!found;
        }
        else {
            return this.isMessageType(arg);
        }
    };
    /**
     * @private
     * @param {?} messageType
     * @return {?}
     */
    Message.prototype.isMessageType = /**
     * @private
     * @param {?} messageType
     * @return {?}
     */
    function (messageType) {
        return this.getMessageType() === messageType;
    };
    return Message;
}());
/**
 * @abstract
 */
export { Message };
if (false) {
    /** @type {?} */
    Message.prototype.aggregateId;
    /**
     * @type {?}
     * @protected
     */
    Message.prototype.messageType;
    /**
     * @type {?}
     * @private
     */
    Message.prototype.messageId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUUxRTs7OztJQUVDLGlCQUE2QixXQUF3QixFQUMzQixXQUFtQixFQUNyQixTQUFvRDtRQUFwRCwwQkFBQSxFQUFBLFlBQW9CLHFCQUFxQixDQUFDLFFBQVEsRUFBRTtRQUYvQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUEyQztJQUM1RSxDQUFDOzs7O0lBRUQsZ0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxnQ0FBYzs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDhCQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsMEJBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsOEJBQVk7Ozs7SUFBWixVQUFhLE9BQWdCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELHdCQUFNOzs7O0lBQU4sVUFBTyxPQUFnQjtRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Ozs7SUFJRCwrQkFBYTs7OztJQUFiLFVBQWMsR0FBMkI7UUFBekMsaUJBV0M7UUFUQSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUVuQixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFdBQW1CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUEvQixDQUErQixFQUFDO1lBRTlFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUVmO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7Ozs7SUFFTywrQkFBYTs7Ozs7SUFBckIsVUFBc0IsV0FBbUI7UUFDeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssV0FBVyxDQUFDO0lBQzlDLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQzs7Ozs7OztJQS9Dc0IsOEJBQStCOzs7OztJQUM5Qyw4QkFBc0M7Ozs7O0lBQ3RDLDRCQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICcuLi9jb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3InO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVzc2FnZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHB1YmxpYyBhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBtZXNzYWdlVHlwZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IG1lc3NhZ2VJZDogc3RyaW5nID0gUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpIHtcblx0fVxuXG5cdGdldE1lc3NhZ2VUeXBlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZVR5cGU7XG5cdH1cblxuXHRnZXRBZ2dyZWdhdGVJZCgpOiBBZ2dyZWdhdGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRNZXNzYWdlSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlSWQ7XG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VUeXBlO1xuXHR9XG5cblx0ZXF1YWxzQnlUeXBlKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRlcXVhbHMobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAodGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCkpICYmICh0aGlzLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZS5tZXNzYWdlSWQpO1xuXHR9XG5cblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogYm9vbGVhbjtcblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuO1xuXHRvZk1lc3NhZ2VUeXBlKGFyZzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXG5cdFx0XHRsZXQgZm91bmQgPSBhcmcuZmluZCgobWVzc2FnZVR5cGU6IHN0cmluZykgPT4gdGhpcy5pc01lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlKSk7XG5cblx0XHRcdHJldHVybiAhIWZvdW5kO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmlzTWVzc2FnZVR5cGUoYXJnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzTWVzc2FnZVR5cGUobWVzc2FnZVR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2VUeXBlO1xuXHR9XG59XG4iXX0=