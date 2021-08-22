/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../optional';
/**
 * @template K, T
 */
var /**
 * @template K, T
 */
KeyMap = /** @class */ (function () {
    function KeyMap() {
        this.keys = new Map();
        this.values = new WeakMap();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var internalKey = this.getInternalKey(key);
        if (internalKey !== undefined) {
            return Optional.of(this.values.get(internalKey));
        }
        else {
            return Optional.empty();
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.has = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var internalKey = this.getInternalKey(key);
        return this.values.has(internalKey);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    KeyMap.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.keys.set(key.toString(), key);
        this.values.set(key, value);
    };
    /**
     * @return {?}
     */
    KeyMap.prototype.size = /**
     * @return {?}
     */
    function () {
        return this.keys.size;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.hasInternalKey(key)) {
            this.keys.delete(key.toString());
            this.values.delete(key);
        }
    };
    /**
     * @return {?}
     */
    KeyMap.prototype.removeAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.keys.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.values.delete(value);
        }));
        this.keys.clear();
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.getInternalKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.keys.get(key.toString());
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    KeyMap.prototype.hasInternalKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.keys.has(key.toString());
    };
    return KeyMap;
}());
/**
 * @template K, T
 */
export { KeyMap };
if (false) {
    /**
     * @type {?}
     * @private
     */
    KeyMap.prototype.keys;
    /**
     * @type {?}
     * @private
     */
    KeyMap.prototype.values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LW1hcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9jb2xsZWN0aW9ucy9rZXktbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRXZDOzs7O0lBQUE7UUFFa0IsU0FBSSxHQUFHLElBQUksR0FBRyxFQUFhLENBQUM7UUFFNUIsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFtRC9DLENBQUM7Ozs7O0lBakRBLG9CQUFHOzs7O0lBQUgsVUFBSSxHQUFNOztZQUVILFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztRQUU1QyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDOUIsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNOLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxvQkFBRzs7OztJQUFILFVBQUksR0FBTTs7WUFFSCxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7UUFFNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxvQkFBRzs7Ozs7SUFBSCxVQUFJLEdBQU0sRUFBRSxLQUFRO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHFCQUFJOzs7SUFBSjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCx1QkFBTTs7OztJQUFOLFVBQU8sR0FBTTtRQUNaLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QjtJQUNGLENBQUM7Ozs7SUFFRCwwQkFBUzs7O0lBQVQ7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBSztZQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU8sK0JBQWM7Ozs7O0lBQXRCLFVBQXVCLEdBQU07UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFTywrQkFBYzs7Ozs7SUFBdEIsVUFBdUIsR0FBTTtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRixhQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQzs7Ozs7Ozs7OztJQXJEQSxzQkFBNkM7Ozs7O0lBRTdDLHdCQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleSB9IGZyb20gJy4va2V5JztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vb3B0aW9uYWwnO1xuXG5leHBvcnQgY2xhc3MgS2V5TWFwPEsgZXh0ZW5kcyBLZXksIFQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGtleXMgPSBuZXcgTWFwPHN0cmluZywgSz4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlcyA9IG5ldyBXZWFrTWFwPEssIFQ+KCk7XG5cblx0Z2V0KGtleTogSyk6IE9wdGlvbmFsPFQ+IHtcblxuXHRcdGNvbnN0IGludGVybmFsS2V5ID0gdGhpcy5nZXRJbnRlcm5hbEtleShrZXkpO1xuXG5cdFx0aWYgKGludGVybmFsS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLnZhbHVlcy5nZXQoaW50ZXJuYWxLZXkpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG5cdFx0fVxuXHR9XG5cblx0aGFzKGtleTogSyk6IGJvb2xlYW4ge1xuXG5cdFx0Y29uc3QgaW50ZXJuYWxLZXkgPSB0aGlzLmdldEludGVybmFsS2V5KGtleSk7XG5cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaGFzKGludGVybmFsS2V5KTtcblx0fVxuXG5cdHNldChrZXk6IEssIHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5rZXlzLnNldChrZXkudG9TdHJpbmcoKSwga2V5KTtcblx0XHR0aGlzLnZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG5cdH1cblxuXHRzaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMua2V5cy5zaXplO1xuXHR9XG5cblx0cmVtb3ZlKGtleTogSyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmhhc0ludGVybmFsS2V5KGtleSkpIHtcblx0XHRcdHRoaXMua2V5cy5kZWxldGUoa2V5LnRvU3RyaW5nKCkpO1xuXHRcdFx0dGhpcy52YWx1ZXMuZGVsZXRlKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlQWxsKCk6IHZvaWQge1xuXHRcdHRoaXMua2V5cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZXMuZGVsZXRlKHZhbHVlKTtcblx0XHR9KVxuXHRcdHRoaXMua2V5cy5jbGVhcigpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRJbnRlcm5hbEtleShrZXk6IEspOiBLIHtcblx0XHRyZXR1cm4gdGhpcy5rZXlzLmdldChrZXkudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRwcml2YXRlIGhhc0ludGVybmFsS2V5KGtleTogSyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmtleXMuaGFzKGtleS50b1N0cmluZygpKTtcblx0fVxuXG59XG4iXX0=