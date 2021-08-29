/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
Optional = /** @class */ (function () {
    function Optional(value) {
        if (Optional.isValueEmpty(value)) {
            this.value = null;
        }
        else {
            this.value = value;
        }
        return this;
    }
    /**
     * @return {?}
     */
    Optional.empty = /**
     * @return {?}
     */
    function () {
        return new Optional(null);
    };
    /**
     * @template U
     * @param {?} value
     * @return {?}
     */
    Optional.of = /**
     * @template U
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return new Optional(value);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    Optional.isValueEmpty = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'undefined' || value === null;
    };
    /**
     * @return {?}
     */
    Optional.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return Optional.isValueEmpty(this.value);
    };
    /**
     * @return {?}
     */
    Optional.prototype.isPresent = /**
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * @param {?} filterer
     * @return {?}
     */
    Optional.prototype.filter = /**
     * @param {?} filterer
     * @return {?}
     */
    function (filterer) {
        if (this.isPresent() && filterer(this.value)) {
            return this;
        }
        return Optional.empty();
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    Optional.prototype.forEach = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        if (this.isPresent()) {
            callback(this.value);
        }
    };
    /**
     * @template U
     * @param {?} mapper
     * @return {?}
     */
    Optional.prototype.map = /**
     * @template U
     * @param {?} mapper
     * @return {?}
     */
    function (mapper) {
        if (this.isPresent()) {
            return new Optional(mapper(this.value));
        }
        return Optional.empty();
    };
    /**
     * @deprecated
     */
    /**
     * @deprecated
     * @return {?}
     */
    Optional.prototype.getValueOrNullOrThrowError = /**
     * @deprecated
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @return {?}
     */
    Optional.prototype.getOrThrow = /**
     * @return {?}
     */
    function () {
        if (this.isEmpty()) {
            throw new Error('Called getOrThrow on an empty Optional');
        }
        return this.value;
    };
    /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    Optional.prototype.getOrElse = /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    function (other) {
        if (this.isPresent()) {
            return this.value;
        }
        return other();
    };
    /**
     * @param {?} method
     * @return {?}
     */
    Optional.prototype.ifPresent = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        if (this.isPresent()) {
            method(this.value);
        }
    };
    /**
     * @param {?} method
     * @return {?}
     */
    Optional.prototype.ifEmpty = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        if (this.isEmpty()) {
            method();
        }
    };
    /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    Optional.prototype.orElse = /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    function (other) {
        if (this.isPresent()) {
            return this;
        }
        return other();
    };
    return Optional;
}());
/**
 * @template T
 */
export { Optional };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Optional.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vb3B0aW9uYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBZ0JDLGtCQUFvQixLQUFRO1FBRTNCLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNsQjthQUFNO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7SUF2Qk0sY0FBSzs7O0lBQVo7UUFDQyxPQUFPLElBQUksUUFBUSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVNLFdBQUU7Ozs7O0lBQVQsVUFBYSxLQUFRO1FBQ3BCLE9BQU8sSUFBSSxRQUFRLENBQUksS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRWMscUJBQVk7Ozs7O0lBQTNCLFVBQTRCLEtBQVU7UUFDckMsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztJQUN2RCxDQUFDOzs7O0lBZUQsMEJBQU87OztJQUFQO1FBQ0MsT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsNEJBQVM7OztJQUFUO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELHlCQUFNOzs7O0lBQU4sVUFBTyxRQUErQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDBCQUFPOzs7O0lBQVAsVUFBUSxRQUEyQjtRQUNsQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsc0JBQUc7Ozs7O0lBQUgsVUFBTyxNQUF1QjtRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixPQUFPLElBQUksUUFBUSxDQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw2Q0FBMEI7Ozs7SUFBMUI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDZCQUFVOzs7SUFBVjtRQUNDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFRCw0QkFBUzs7Ozs7SUFBVCxVQUF1QixLQUFjO1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQjtRQUNELE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCw0QkFBUzs7OztJQUFULFVBQVUsTUFBMEI7UUFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7Ozs7O0lBRUQsMEJBQU87Ozs7SUFBUCxVQUFRLE1BQWtCO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE1BQU0sRUFBRSxDQUFDO1NBQ1Q7SUFDRixDQUFDOzs7Ozs7SUFFRCx5QkFBTTs7Ozs7SUFBTixVQUFvQixLQUF3QjtRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNaO1FBQ0QsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUYsZUFBQztBQUFELENBQUMsQUEvRkQsSUErRkM7Ozs7Ozs7Ozs7SUFqRkEseUJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE9wdGlvbmFsPFQ+IHtcblxuXHRzdGF0aWMgZW1wdHkoKTogT3B0aW9uYWw8YW55PiB7XG5cdFx0cmV0dXJuIG5ldyBPcHRpb25hbDxhbnk+KG51bGwpO1xuXHR9XG5cblx0c3RhdGljIG9mPFU+KHZhbHVlOiBVKTogT3B0aW9uYWw8VT4ge1xuXHRcdHJldHVybiBuZXcgT3B0aW9uYWw8VT4odmFsdWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaXNWYWx1ZUVtcHR5KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IFQ7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcih2YWx1ZTogVCkge1xuXG5cdFx0aWYgKE9wdGlvbmFsLmlzVmFsdWVFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpc0VtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5pc1ZhbHVlRW1wdHkodGhpcy52YWx1ZSk7XG5cdH1cblxuXHRpc1ByZXNlbnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICF0aGlzLmlzRW1wdHkoKTtcblx0fVxuXG5cdGZpbHRlcihmaWx0ZXJlcjogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogT3B0aW9uYWw8VD4ge1xuXHRcdGlmICh0aGlzLmlzUHJlc2VudCgpICYmIGZpbHRlcmVyKHRoaXMudmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0cmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG5cdH1cblxuXHRmb3JFYWNoKGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IGFueSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzUHJlc2VudCgpKSB7XG5cdFx0XHRjYWxsYmFjayh0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRtYXA8VT4obWFwcGVyOiAodmFsdWU6IFQpID0+IFUpOiBPcHRpb25hbDxVPiB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkpIHtcblx0XHRcdHJldHVybiBuZXcgT3B0aW9uYWw8VT4obWFwcGVyKHRoaXMudmFsdWUpKTtcblx0XHR9XG5cdFx0cmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCk6IFQge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cblx0Z2V0T3JUaHJvdygpOiBUIHtcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ2FsbGVkIGdldE9yVGhyb3cgb24gYW4gZW1wdHkgT3B0aW9uYWwnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRnZXRPckVsc2U8VSBleHRlbmRzIFQ+KG90aGVyOiAoKSA9PiBVKTogVCB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4gb3RoZXIoKTtcblx0fVxuXG5cdGlmUHJlc2VudChtZXRob2Q6ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzUHJlc2VudCgpKSB7XG5cdFx0XHRtZXRob2QodGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0aWZFbXB0eShtZXRob2Q6ICgpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHtcblx0XHRcdG1ldGhvZCgpO1xuXHRcdH1cblx0fVxuXG5cdG9yRWxzZTxVIGV4dGVuZHMgVD4ob3RoZXI6ICgpID0+IE9wdGlvbmFsPFU+KTogT3B0aW9uYWw8VD4ge1xuXHRcdGlmICh0aGlzLmlzUHJlc2VudCgpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0cmV0dXJuIG90aGVyKCk7XG5cdH1cblxufVxuIl19