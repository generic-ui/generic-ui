/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class Optional {
    /**
     * @private
     * @param {?} value
     */
    constructor(value) {
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
    static empty() {
        return new Optional(null);
    }
    /**
     * @template U
     * @param {?} value
     * @return {?}
     */
    static of(value) {
        return new Optional(value);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    static isValueEmpty(value) {
        return typeof value === 'undefined' || value === null;
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return Optional.isValueEmpty(this.value);
    }
    /**
     * @return {?}
     */
    isPresent() {
        return !this.isEmpty();
    }
    /**
     * @param {?} filterer
     * @return {?}
     */
    filter(filterer) {
        if (this.isPresent() && filterer(this.value)) {
            return this;
        }
        return Optional.empty();
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    forEach(callback) {
        if (this.isPresent()) {
            callback(this.value);
        }
    }
    /**
     * @template U
     * @param {?} mapper
     * @return {?}
     */
    map(mapper) {
        if (this.isPresent()) {
            return new Optional(mapper(this.value));
        }
        return Optional.empty();
    }
    /**
     * @deprecated
     * @return {?}
     */
    getValueOrNullOrThrowError() {
        return this.value;
    }
    /**
     * @return {?}
     */
    getOrThrow() {
        if (this.isEmpty()) {
            throw new Error('Called getOrThrow on an empty Optional');
        }
        return this.value;
    }
    /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    getOrElse(other) {
        if (this.isPresent()) {
            return this.value;
        }
        return other();
    }
    /**
     * @param {?} method
     * @return {?}
     */
    ifPresent(method) {
        if (this.isPresent()) {
            method(this.value);
        }
    }
    /**
     * @param {?} method
     * @return {?}
     */
    ifEmpty(method) {
        if (this.isEmpty()) {
            method();
        }
    }
    /**
     * @template U
     * @param {?} other
     * @return {?}
     */
    orElse(other) {
        if (this.isPresent()) {
            return this;
        }
        return other();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Optional.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vb3B0aW9uYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sT0FBTyxRQUFROzs7OztJQWdCcEIsWUFBb0IsS0FBUTtRQUUzQixJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbEI7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25CO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7O0lBdkJELE1BQU0sQ0FBQyxLQUFLO1FBQ1gsT0FBTyxJQUFJLFFBQVEsQ0FBTSxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBRSxDQUFJLEtBQVE7UUFDcEIsT0FBTyxJQUFJLFFBQVEsQ0FBSSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQVU7UUFDckMsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztJQUN2RCxDQUFDOzs7O0lBZUQsT0FBTztRQUNOLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQStCO1FBQ3JDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFFBQTJCO1FBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUksTUFBdUI7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsT0FBTyxJQUFJLFFBQVEsQ0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUtELDBCQUEwQjtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFjLEtBQWM7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUEwQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBa0I7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkIsTUFBTSxFQUFFLENBQUM7U0FDVDtJQUNGLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBYyxLQUF3QjtRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNaO1FBQ0QsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBRUQ7Ozs7OztJQWpGQSx5QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuXG5cdHN0YXRpYyBlbXB0eSgpOiBPcHRpb25hbDxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9wdGlvbmFsPGFueT4obnVsbCk7XG5cdH1cblxuXHRzdGF0aWMgb2Y8VT4odmFsdWU6IFUpOiBPcHRpb25hbDxVPiB7XG5cdFx0cmV0dXJuIG5ldyBPcHRpb25hbDxVPih2YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpc1ZhbHVlRW1wdHkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZTogVDtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKHZhbHVlOiBUKSB7XG5cblx0XHRpZiAoT3B0aW9uYWwuaXNWYWx1ZUVtcHR5KHZhbHVlKSkge1xuXHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlzRW1wdHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIE9wdGlvbmFsLmlzVmFsdWVFbXB0eSh0aGlzLnZhbHVlKTtcblx0fVxuXG5cdGlzUHJlc2VudCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuaXNFbXB0eSgpO1xuXHR9XG5cblx0ZmlsdGVyKGZpbHRlcmVyOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pOiBPcHRpb25hbDxUPiB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkgJiYgZmlsdGVyZXIodGhpcy52YWx1ZSkpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblx0fVxuXG5cdGZvckVhY2goY2FsbGJhY2s6ICh2YWx1ZTogVCkgPT4gYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkpIHtcblx0XHRcdGNhbGxiYWNrKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdG1hcDxVPihtYXBwZXI6ICh2YWx1ZTogVCkgPT4gVSk6IE9wdGlvbmFsPFU+IHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBPcHRpb25hbDxVPihtYXBwZXIodGhpcy52YWx1ZSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxuXHRnZXRPclRocm93KCk6IFQge1xuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgZ2V0T3JUaHJvdyBvbiBhbiBlbXB0eSBPcHRpb25hbCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdGdldE9yRWxzZTxVIGV4dGVuZHMgVD4ob3RoZXI6ICgpID0+IFUpOiBUIHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiBvdGhlcigpO1xuXHR9XG5cblx0aWZQcmVzZW50KG1ldGhvZDogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkpIHtcblx0XHRcdG1ldGhvZCh0aGlzLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRpZkVtcHR5KG1ldGhvZDogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkge1xuXHRcdFx0bWV0aG9kKCk7XG5cdFx0fVxuXHR9XG5cblx0b3JFbHNlPFUgZXh0ZW5kcyBUPihvdGhlcjogKCkgPT4gT3B0aW9uYWw8VT4pOiBPcHRpb25hbDxUPiB7XG5cdFx0aWYgKHRoaXMuaXNQcmVzZW50KCkpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gb3RoZXIoKTtcblx0fVxuXG59XG4iXX0=