/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '../../../common/random-string.generator';
/**
 * @abstract
 * @template I
 */
var /**
 * @abstract
 * @template I
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
 * @template I
 */
export { Message };
if (false) {
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL21lc3NhZ2UvbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7O0FBRWhGOzs7OztJQUVDLGlCQUF1QyxXQUFjLEVBQzNCLFdBQW1CLEVBQ3JCLFNBQW9EO1FBQXBELDBCQUFBLEVBQUEsWUFBb0IscUJBQXFCLENBQUMsUUFBUSxFQUFFO1FBRnJDLGdCQUFXLEdBQVgsV0FBVyxDQUFHO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ3JCLGNBQVMsR0FBVCxTQUFTLENBQTJDO0lBQzVFLENBQUM7Ozs7SUFFRCxnQ0FBYzs7O0lBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGdDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsOEJBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCwwQkFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCw4QkFBWTs7OztJQUFaLFVBQWEsT0FBbUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsd0JBQU07Ozs7SUFBTixVQUFPLE9BQW1CO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7OztJQUlELCtCQUFhOzs7O0lBQWIsVUFBYyxHQUEyQjtRQUF6QyxpQkFXQztRQVRBLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBRWpCLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsV0FBbUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQS9CLENBQStCLEVBQUM7WUFFaEYsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBRWY7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7OztJQUVPLCtCQUFhOzs7OztJQUFyQixVQUFzQixXQUFtQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxXQUFXLENBQUM7SUFDOUMsQ0FBQztJQUNGLGNBQUM7QUFBRCxDQUFDLEFBakRELElBaURDOzs7Ozs7Ozs7OztJQS9Dc0IsOEJBQStCOzs7OztJQUM5Qyw4QkFBc0M7Ozs7O0lBQ3RDLDRCQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXNzYWdlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWVzc2FnZVR5cGU6IHN0cmluZyxcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlSWQ6IHN0cmluZyA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSB7XG5cdH1cblxuXHRnZXRNZXNzYWdlVHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VUeXBlO1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlSWQoKTogSSB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRNZXNzYWdlSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlSWQ7XG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VUeXBlO1xuXHR9XG5cblx0ZXF1YWxzQnlUeXBlKG1lc3NhZ2U6IE1lc3NhZ2U8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRlcXVhbHMobWVzc2FnZTogTWVzc2FnZTxJPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAodGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCkpICYmICh0aGlzLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZS5tZXNzYWdlSWQpO1xuXHR9XG5cblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogYm9vbGVhbjtcblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuO1xuXHRvZk1lc3NhZ2VUeXBlKGFyZzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXG5cdFx0XHRjb25zdCBmb3VuZCA9IGFyZy5maW5kKChtZXNzYWdlVHlwZTogc3RyaW5nKSA9PiB0aGlzLmlzTWVzc2FnZVR5cGUobWVzc2FnZVR5cGUpKTtcblxuXHRcdFx0cmV0dXJuICEhZm91bmQ7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNNZXNzYWdlVHlwZShhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZVR5cGUoKSA9PT0gbWVzc2FnZVR5cGU7XG5cdH1cbn1cbiJdfQ==