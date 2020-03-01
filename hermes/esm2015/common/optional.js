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
        if (!Optional.isEmpty(value) && Optional.isEmpty(value)) {
            return Optional.empty();
        }
        this.value = value;
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
    static isEmpty(value) {
        return typeof value === 'undefined' || value === null;
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return Optional.isEmpty(this.value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vb3B0aW9uYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sT0FBTyxRQUFROzs7OztJQWdCcEIsWUFBb0IsS0FBUTtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hELE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7O0lBcEJELE1BQU0sQ0FBQyxLQUFLO1FBQ1gsT0FBTyxJQUFJLFFBQVEsQ0FBTSxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBRSxDQUFJLEtBQVE7UUFDcEIsT0FBTyxJQUFJLFFBQVEsQ0FBSSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQVU7UUFDaEMsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztJQUN2RCxDQUFDOzs7O0lBWUQsT0FBTztRQUNOLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQStCO1FBQ3JDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFFBQTJCO1FBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUksTUFBdUI7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsT0FBTyxJQUFJLFFBQVEsQ0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUtELDBCQUEwQjtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFjLEtBQWM7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUEwQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBa0I7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkIsTUFBTSxFQUFFLENBQUM7U0FDVDtJQUNGLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBYyxLQUF3QjtRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNaO1FBQ0QsT0FBTyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBRUQ7Ozs7OztJQTlFQSx5QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT3B0aW9uYWw8VD4ge1xuXG5cdHN0YXRpYyBlbXB0eSgpOiBPcHRpb25hbDxhbnk+IHtcblx0XHRyZXR1cm4gbmV3IE9wdGlvbmFsPGFueT4obnVsbCk7XG5cdH1cblxuXHRzdGF0aWMgb2Y8VT4odmFsdWU6IFUpOiBPcHRpb25hbDxVPiB7XG5cdFx0cmV0dXJuIG5ldyBPcHRpb25hbDxVPih2YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBpc0VtcHR5KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbDtcblx0fVxuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IFQ7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcih2YWx1ZTogVCkge1xuXHRcdGlmICghT3B0aW9uYWwuaXNFbXB0eSh2YWx1ZSkgJiYgT3B0aW9uYWwuaXNFbXB0eSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXHRcdH1cblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpc0VtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBPcHRpb25hbC5pc0VtcHR5KHRoaXMudmFsdWUpO1xuXHR9XG5cblx0aXNQcmVzZW50KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5pc0VtcHR5KCk7XG5cdH1cblxuXHRmaWx0ZXIoZmlsdGVyZXI6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IE9wdGlvbmFsPFQ+IHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSAmJiBmaWx0ZXJlcih0aGlzLnZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXHR9XG5cblx0Zm9yRWFjaChjYWxsYmFjazogKHZhbHVlOiBUKSA9PiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0Y2FsbGJhY2sodGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0bWFwPFU+KG1hcHBlcjogKHZhbHVlOiBUKSA9PiBVKTogT3B0aW9uYWw8VT4ge1xuXHRcdGlmICh0aGlzLmlzUHJlc2VudCgpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE9wdGlvbmFsPFU+KG1hcHBlcih0aGlzLnZhbHVlKSk7XG5cdFx0fVxuXHRcdHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdGdldE9yVGhyb3coKTogVCB7XG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NhbGxlZCBnZXRPclRocm93IG9uIGFuIGVtcHR5IE9wdGlvbmFsJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cblx0Z2V0T3JFbHNlPFUgZXh0ZW5kcyBUPihvdGhlcjogKCkgPT4gVSk6IFQge1xuXHRcdGlmICh0aGlzLmlzUHJlc2VudCgpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIG90aGVyKCk7XG5cdH1cblxuXHRpZlByZXNlbnQobWV0aG9kOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0bWV0aG9kKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGlmRW1wdHkobWV0aG9kOiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7XG5cdFx0XHRtZXRob2QoKTtcblx0XHR9XG5cdH1cblxuXHRvckVsc2U8VSBleHRlbmRzIFQ+KG90aGVyOiAoKSA9PiBPcHRpb25hbDxVPik6IE9wdGlvbmFsPFQ+IHtcblx0XHRpZiAodGhpcy5pc1ByZXNlbnQoKSkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiBvdGhlcigpO1xuXHR9XG5cbn1cbiJdfQ==