/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '../optional';
/**
 * @template K, T
 */
export class KeyMap {
    constructor() {
        this.keys = new Map();
        this.values = new WeakMap();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        /** @type {?} */
        const internalKey = this.getInternalKey(key);
        if (internalKey !== undefined) {
            return Optional.of(this.values.get(internalKey));
        }
        else {
            return Optional.empty();
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    has(key) {
        /** @type {?} */
        const internalKey = this.getInternalKey(key);
        return this.values.has(internalKey);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        this.keys.set(key.toString(), key);
        this.values.set(key, value);
    }
    /**
     * @return {?}
     */
    size() {
        return this.keys.size;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        if (this.hasInternalKey(key)) {
            this.keys.delete(key.toString());
            this.values.delete(key);
        }
    }
    /**
     * @return {?}
     */
    removeAll() {
        this.keys.forEach((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.values.delete(value);
        }));
        this.keys.clear();
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    getInternalKey(key) {
        return this.keys.get(key.toString());
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    hasInternalKey(key) {
        return this.keys.has(key.toString());
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LW1hcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9jb2xsZWN0aW9ucy9rZXktbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRXZDLE1BQU0sT0FBTyxNQUFNO0lBQW5CO1FBRWtCLFNBQUksR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFDO1FBRTVCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBbUQvQyxDQUFDOzs7OztJQWpEQSxHQUFHLENBQUMsR0FBTTs7Y0FFSCxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzlCLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTixPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtJQUNGLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQU07O2NBRUgsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1FBRTVDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQU0sRUFBRSxLQUFRO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQUk7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQU07UUFDWixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxHQUFNO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEdBQU07UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBRUQ7Ozs7OztJQXJEQSxzQkFBNkM7Ozs7O0lBRTdDLHdCQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleSB9IGZyb20gJy4va2V5JztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vb3B0aW9uYWwnO1xuXG5leHBvcnQgY2xhc3MgS2V5TWFwPEsgZXh0ZW5kcyBLZXksIFQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGtleXMgPSBuZXcgTWFwPHN0cmluZywgSz4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlcyA9IG5ldyBXZWFrTWFwPEssIFQ+KCk7XG5cblx0Z2V0KGtleTogSyk6IE9wdGlvbmFsPFQ+IHtcblxuXHRcdGNvbnN0IGludGVybmFsS2V5ID0gdGhpcy5nZXRJbnRlcm5hbEtleShrZXkpO1xuXG5cdFx0aWYgKGludGVybmFsS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBPcHRpb25hbC5vZih0aGlzLnZhbHVlcy5nZXQoaW50ZXJuYWxLZXkpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG5cdFx0fVxuXHR9XG5cblx0aGFzKGtleTogSyk6IGJvb2xlYW4ge1xuXG5cdFx0Y29uc3QgaW50ZXJuYWxLZXkgPSB0aGlzLmdldEludGVybmFsS2V5KGtleSk7XG5cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaGFzKGludGVybmFsS2V5KTtcblx0fVxuXG5cdHNldChrZXk6IEssIHZhbHVlOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5rZXlzLnNldChrZXkudG9TdHJpbmcoKSwga2V5KTtcblx0XHR0aGlzLnZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG5cdH1cblxuXHRzaXplKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMua2V5cy5zaXplO1xuXHR9XG5cblx0cmVtb3ZlKGtleTogSyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmhhc0ludGVybmFsS2V5KGtleSkpIHtcblx0XHRcdHRoaXMua2V5cy5kZWxldGUoa2V5LnRvU3RyaW5nKCkpO1xuXHRcdFx0dGhpcy52YWx1ZXMuZGVsZXRlKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlQWxsKCk6IHZvaWQge1xuXHRcdHRoaXMua2V5cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZXMuZGVsZXRlKHZhbHVlKTtcblx0XHR9KTtcblx0XHR0aGlzLmtleXMuY2xlYXIoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0SW50ZXJuYWxLZXkoa2V5OiBLKTogSyB7XG5cdFx0cmV0dXJuIHRoaXMua2V5cy5nZXQoa2V5LnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBoYXNJbnRlcm5hbEtleShrZXk6IEspOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5rZXlzLmhhcyhrZXkudG9TdHJpbmcoKSk7XG5cdH1cblxufVxuIl19