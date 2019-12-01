/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '../common/random-string.generator';
/**
 * @abstract
 */
export class Message {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} messageType
     * @param {?=} messageId
     */
    constructor(aggregateId, messageType, messageId = RandomStringGenerator.generate()) {
        this.aggregateId = aggregateId;
        this.messageType = messageType;
        this.messageId = messageId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUUxRSxNQUFNLE9BQWdCLE9BQU87Ozs7Ozs7SUFFNUIsWUFBNkIsV0FBd0IsRUFDM0IsV0FBbUIsRUFDckIsWUFBb0IscUJBQXFCLENBQUMsUUFBUSxFQUFFO1FBRi9DLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ3JCLGNBQVMsR0FBVCxTQUFTLENBQTJDO0lBQzVFLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQWdCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFnQjtRQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Ozs7SUFJRCxhQUFhLENBQUMsR0FBMkI7UUFFeEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFFbkIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDO1lBRTlFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUVmO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBbUI7UUFDeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssV0FBVyxDQUFDO0lBQzlDLENBQUM7Q0FDRDs7O0lBL0NzQiw4QkFBK0I7Ozs7O0lBQzlDLDhCQUFzQzs7Ozs7SUFDdEMsNEJBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXNzYWdlIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHVibGljIGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCxcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IG1lc3NhZ2VUeXBlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZUlkOiBzdHJpbmcgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSkge1xuXHR9XG5cblx0Z2V0TWVzc2FnZVR5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlVHlwZTtcblx0fVxuXG5cdGdldEFnZ3JlZ2F0ZUlkKCk6IEFnZ3JlZ2F0ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy5hZ2dyZWdhdGVJZDtcblx0fVxuXG5cdGdldE1lc3NhZ2VJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VJZDtcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZVR5cGU7XG5cdH1cblxuXHRlcXVhbHNCeVR5cGUobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2UuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdGVxdWFscyhtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICh0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2UuZ2V0TWVzc2FnZVR5cGUoKSkgJiYgKHRoaXMubWVzc2FnZUlkID09PSBtZXNzYWdlLm1lc3NhZ2VJZCk7XG5cdH1cblxuXHRvZk1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlOiBzdHJpbmcpOiBib29sZWFuO1xuXHRvZk1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW47XG5cdG9mTWVzc2FnZVR5cGUoYXJnOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cblx0XHRcdGxldCBmb3VuZCA9IGFyZy5maW5kKChtZXNzYWdlVHlwZTogc3RyaW5nKSA9PiB0aGlzLmlzTWVzc2FnZVR5cGUobWVzc2FnZVR5cGUpKTtcblxuXHRcdFx0cmV0dXJuICEhZm91bmQ7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuaXNNZXNzYWdlVHlwZShhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZVR5cGUoKSA9PT0gbWVzc2FnZVR5cGU7XG5cdH1cbn1cbiJdfQ==