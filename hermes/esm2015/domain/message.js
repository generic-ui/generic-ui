/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getUuidV4String } from './uuid';
/**
 * @abstract
 */
export class Message {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} messageType
     */
    constructor(aggregateId, messageType) {
        this.aggregateId = aggregateId;
        this.messageType = messageType;
        this.messageId = getUuidV4String();
    }
    /**
     * @return {?}
     */
    getMessageType() {
        return this.messageType;
    }
    /**
     * @return {?}
     */
    getAggregateId() {
        return this.aggregateId;
    }
    /**
     * @return {?}
     */
    getMessageId() {
        return this.messageId;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.messageType;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    equalsByType(message) {
        return this.getMessageType() === message.getMessageType();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    equals(message) {
        return (this.getMessageType() === message.getMessageType()) && (this.messageId === message.messageId);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    ofMessageType(arg) {
        if (Array.isArray(arg)) {
            /** @type {?} */
            let found = arg.find((/**
             * @param {?} messageType
             * @return {?}
             */
            (messageType) => this.isMessageType(messageType)));
            return !!found;
        }
        else {
            return this.isMessageType(arg);
        }
    }
    /**
     * @private
     * @param {?} messageType
     * @return {?}
     */
    isMessageType(messageType) {
        return this.getMessageType() === messageType;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Message.prototype.messageId;
    /** @type {?} */
    Message.prototype.aggregateId;
    /**
     * @type {?}
     * @protected
     */
    Message.prototype.messageType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7O0FBR3pDLE1BQU0sT0FBZ0IsT0FBTzs7Ozs7O0lBSTVCLFlBQTZCLFdBQXdCLEVBQzNCLFdBQW1CO1FBRGhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBSDVCLGNBQVMsR0FBVyxlQUFlLEVBQUUsQ0FBQztJQUl2RCxDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFnQjtRQUM1QixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBZ0I7UUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7O0lBSUQsYUFBYSxDQUFDLEdBQTJCO1FBRXhDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBRW5CLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSTs7OztZQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBQztZQUU5RSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FFZjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLFdBQW1CO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLFdBQVcsQ0FBQztJQUM5QyxDQUFDO0NBQ0Q7Ozs7OztJQWhEQSw0QkFBdUQ7O0lBRWpDLDhCQUErQjs7Ozs7SUFDOUMsOEJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VXVpZFY0U3RyaW5nIH0gZnJvbSAnLi91dWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi9hZ2dyZWdhdGUtaWQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVzc2FnZSB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtZXNzYWdlSWQ6IHN0cmluZyA9IGdldFV1aWRWNFN0cmluZygpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihwdWJsaWMgYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWVzc2FnZVR5cGU6IHN0cmluZykge1xuXHR9XG5cblx0Z2V0TWVzc2FnZVR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlVHlwZTtcblx0fVxuXG5cdGdldEFnZ3JlZ2F0ZUlkKCk6IEFnZ3JlZ2F0ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldE1lc3NhZ2VJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VJZDtcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZVR5cGU7XG5cdH1cblxuXHRlcXVhbHNCeVR5cGUobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2UuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdGVxdWFscyhtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICh0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2UuZ2V0TWVzc2FnZVR5cGUoKSkgJiYgKHRoaXMubWVzc2FnZUlkID09PSBtZXNzYWdlLm1lc3NhZ2VJZCk7XG5cdH1cblxuXHRvZk1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlOiBzdHJpbmcpOiBib29sZWFuO1xuXHRvZk1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW47XG5cdG9mTWVzc2FnZVR5cGUoYXJnOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cblx0XHRcdGxldCBmb3VuZCA9IGFyZy5maW5kKChtZXNzYWdlVHlwZTogc3RyaW5nKSA9PiB0aGlzLmlzTWVzc2FnZVR5cGUobWVzc2FnZVR5cGUpKTtcblxuXHRcdFx0cmV0dXJuICEhZm91bmQ7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNNZXNzYWdlVHlwZShhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZVR5cGUoKSA9PT0gbWVzc2FnZVR5cGU7XG5cdH1cbn1cbiJdfQ==