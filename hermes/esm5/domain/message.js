/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '../common/random-string.generator';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7QUFFMUU7Ozs7O0lBRUMsaUJBQXVDLFdBQWMsRUFDM0IsV0FBbUIsRUFDckIsU0FBb0Q7UUFBcEQsMEJBQUEsRUFBQSxZQUFvQixxQkFBcUIsQ0FBQyxRQUFRLEVBQUU7UUFGckMsZ0JBQVcsR0FBWCxXQUFXLENBQUc7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBMkM7SUFDNUUsQ0FBQzs7OztJQUVELGdDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw4QkFBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDBCQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDhCQUFZOzs7O0lBQVosVUFBYSxPQUFtQjtRQUMvQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCx3QkFBTTs7OztJQUFOLFVBQU8sT0FBbUI7UUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7O0lBSUQsK0JBQWE7Ozs7SUFBYixVQUFjLEdBQTJCO1FBQXpDLGlCQVdDO1FBVEEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFFbkIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxXQUFtQixJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBL0IsQ0FBK0IsRUFBQztZQUU5RSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FFZjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sK0JBQWE7Ozs7O0lBQXJCLFVBQXNCLFdBQW1CO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLFdBQVcsQ0FBQztJQUM5QyxDQUFDO0lBQ0YsY0FBQztBQUFELENBQUMsQUFqREQsSUFpREM7Ozs7Ozs7Ozs7O0lBL0NzQiw4QkFBK0I7Ozs7O0lBQzlDLDhCQUFzQzs7Ozs7SUFDdEMsNEJBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXNzYWdlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWVzc2FnZVR5cGU6IHN0cmluZyxcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlSWQ6IHN0cmluZyA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSB7XG5cdH1cblxuXHRnZXRNZXNzYWdlVHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VUeXBlO1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlSWQoKTogSSB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRNZXNzYWdlSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlSWQ7XG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VUeXBlO1xuXHR9XG5cblx0ZXF1YWxzQnlUeXBlKG1lc3NhZ2U6IE1lc3NhZ2U8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRlcXVhbHMobWVzc2FnZTogTWVzc2FnZTxJPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAodGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCkpICYmICh0aGlzLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZS5tZXNzYWdlSWQpO1xuXHR9XG5cblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogYm9vbGVhbjtcblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuO1xuXHRvZk1lc3NhZ2VUeXBlKGFyZzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXG5cdFx0XHRsZXQgZm91bmQgPSBhcmcuZmluZCgobWVzc2FnZVR5cGU6IHN0cmluZykgPT4gdGhpcy5pc01lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlKSk7XG5cblx0XHRcdHJldHVybiAhIWZvdW5kO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmlzTWVzc2FnZVR5cGUoYXJnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzTWVzc2FnZVR5cGUobWVzc2FnZVR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2VUeXBlO1xuXHR9XG59XG4iXX0=