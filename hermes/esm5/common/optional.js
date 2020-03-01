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
        if (!Optional.isEmpty(value) && Optional.isEmpty(value)) {
            return Optional.empty();
        }
        this.value = value;
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
    Optional.isEmpty = /**
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
        return Optional.isEmpty(this.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vb3B0aW9uYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBZ0JDLGtCQUFvQixLQUFRO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7SUFwQk0sY0FBSzs7O0lBQVo7UUFDQyxPQUFPLElBQUksUUFBUSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVNLFdBQUU7Ozs7O0lBQVQsVUFBYSxLQUFRO1FBQ3BCLE9BQU8sSUFBSSxRQUFRLENBQUksS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRWMsZ0JBQU87Ozs7O0lBQXRCLFVBQXVCLEtBQVU7UUFDaEMsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztJQUN2RCxDQUFDOzs7O0lBWUQsMEJBQU87OztJQUFQO1FBQ0MsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsNEJBQVM7OztJQUFUO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELHlCQUFNOzs7O0lBQU4sVUFBTyxRQUErQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDBCQUFPOzs7O0lBQVAsVUFBUSxRQUEyQjtRQUNsQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsc0JBQUc7Ozs7O0lBQUgsVUFBTyxNQUF1QjtRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixPQUFPLElBQUksUUFBUSxDQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw2Q0FBMEI7Ozs7SUFBMUI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDZCQUFVOzs7SUFBVjtRQUNDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFRCw0QkFBUzs7Ozs7SUFBVCxVQUF1QixLQUFjO1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQjtRQUNELE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCw0QkFBUzs7OztJQUFULFVBQVUsTUFBMEI7UUFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtJQUNGLENBQUM7Ozs7O0lBRUQsMEJBQU87Ozs7SUFBUCxVQUFRLE1BQWtCO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE1BQU0sRUFBRSxDQUFDO1NBQ1Q7SUFDRixDQUFDOzs7Ozs7SUFFRCx5QkFBTTs7Ozs7SUFBTixVQUFvQixLQUF3QjtRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNaO1FBQ0QsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUYsZUFBQztBQUFELENBQUMsQUE1RkQsSUE0RkM7Ozs7Ozs7Ozs7SUE5RUEseUJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE9wdGlvbmFsPFQ+IHtcblxuXHRzdGF0aWMgZW1wdHkoKTogT3B0aW9uYWw8YW55PiB7XG5cdFx0cmV0dXJuIG5ldyBPcHRpb25hbDxhbnk+KG51bGwpO1xuXHR9XG5cblx0c3RhdGljIG9mPFU+KHZhbHVlOiBVKTogT3B0aW9uYWw8VT4ge1xuXHRcdHJldHVybiBuZXcgT3B0aW9uYWw8VT4odmFsdWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaXNFbXB0eSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGw7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBUO1xuXG5cdHByaXZhdGUgY29uc3RydWN0b3IodmFsdWU6IFQpIHtcblx0XHRpZiAoIU9wdGlvbmFsLmlzRW1wdHkodmFsdWUpICYmIE9wdGlvbmFsLmlzRW1wdHkodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblx0XHR9XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aXNFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gT3B0aW9uYWwuaXNFbXB0eSh0aGlzLnZhbHVlKTtcblx0fVxuXG5cdGlzUHJlc2VudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuaXNFbXB0eSgpO1xuXHR9XG5cblx0ZmlsdGVyKGZpbHRlcmVyOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkgJiYgZmlsdGVyZXIodGhpcy52YWx1ZSkpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblx0fVxuXG5cdGZvckVhY2goY2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkpIHtcblx0XHRcdGNhbGxiYWNrKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdG1hcDxVPihtYXBwZXI6ICh2YWx1ZTogVCkgPT4gVSk6IE9wdGlvbmFsPFU+IHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBPcHRpb25hbDxVPihtYXBwZXIodGhpcy52YWx1ZSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRnZXRPclRocm93KCk6IFQge1xuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgZ2V0T3JUaHJvdyBvbiBhbiBlbXB0eSBPcHRpb25hbCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdGdldE9yRWxzZTxVIGV4dGVuZHMgVD4ob3RoZXI6ICgpID0+IFUpOiBUIHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiBvdGhlcigpO1xuXHR9XG5cblx0aWZQcmVzZW50KG1ldGhvZDogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkpIHtcblx0XHRcdG1ldGhvZCh0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRpZkVtcHR5KG1ldGhvZDogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkge1xuXHRcdFx0bWV0aG9kKCk7XG5cdFx0fVxuXHR9XG5cblx0b3JFbHNlPFUgZXh0ZW5kcyBUPihvdGhlcjogKCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUPiB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gb3RoZXIoKTtcblx0fVxuXG59XG4iXX0=