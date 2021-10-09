/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class HermesSubscription {
    /**
     * @param {?=} finalize
     * @param {?=} isClosed
     */
    constructor(finalize, isClosed) {
        this.closed = false;
        this.finalize = (/**
         * @return {?}
         */
        () => {
        });
        if (finalize !== undefined && finalize !== null &&
            typeof finalize === 'function') {
            this.finalize = finalize;
        }
        if (isClosed !== undefined && isClosed !== null) {
            this.closed = isClosed;
        }
    }
    /**
     * @return {?}
     */
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        this.finalize();
    }
    /**
     * @return {?}
     */
    getFinalize() {
        return this.finalize;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesSubscription.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    HermesSubscription.prototype.finalize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJlYW0vc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBTzlCLFlBQVksUUFBcUIsRUFBRSxRQUFrQjtRQUw3QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRWYsYUFBUTs7O1FBQWUsR0FBRyxFQUFFO1FBQzdDLENBQUMsRUFBQztRQUlELElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSTtZQUM5QyxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDekI7UUFFRCxJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztTQUN2QjtJQUNGLENBQUM7Ozs7SUFFRCxXQUFXO1FBRVYsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0NBQ0Q7Ozs7OztJQTlCQSxvQ0FBZ0M7Ozs7O0lBRWhDLHNDQUNFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0cHJpdmF0ZSBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbmFsaXplOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKGZpbmFsaXplPzogKCkgPT4gdm9pZCwgaXNDbG9zZWQ/OiBib29sZWFuKSB7XG5cblx0XHRpZiAoZmluYWxpemUgIT09IHVuZGVmaW5lZCAmJiBmaW5hbGl6ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIGZpbmFsaXplID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLmZpbmFsaXplID0gZmluYWxpemU7XG5cdFx0fVxuXG5cdFx0aWYgKGlzQ2xvc2VkICE9PSB1bmRlZmluZWQgJiYgaXNDbG9zZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuY2xvc2VkID0gaXNDbG9zZWQ7XG5cdFx0fVxuXHR9XG5cblx0dW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5jbG9zZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNsb3NlZCA9IHRydWU7XG5cdFx0dGhpcy5maW5hbGl6ZSgpO1xuXHR9XG5cblx0Z2V0RmluYWxpemUoKTogKCkgPT4gdm9pZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmluYWxpemU7XG5cdH1cbn1cbiJdfQ==