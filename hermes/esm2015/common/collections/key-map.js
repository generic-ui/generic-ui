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
        if (internalKey) {
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
        /** @type {?} */
        const internalKey = this.getInternalKey(key);
        this.values.set(internalKey, value);
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    getInternalKey(key) {
        /** @type {?} */
        const realKey = this.keys.get(key.toString());
        if (!realKey) {
            this.keys.set(key.toString(), key);
            return key;
        }
        else {
            return realKey;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LW1hcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9jb2xsZWN0aW9ucy9rZXktbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRXZDLE1BQU0sT0FBTyxNQUFNO0lBQW5CO1FBRWtCLFNBQUksR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFDO1FBRTVCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBdUMvQyxDQUFDOzs7OztJQXJDQSxHQUFHLENBQUMsR0FBTTs7Y0FFSCxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxXQUFXLEVBQUU7WUFDaEIsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNOLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBTTs7Y0FFSCxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7UUFFNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBTSxFQUFFLEtBQVE7O2NBRWIsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsR0FBTTs7Y0FFdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU3QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sR0FBRyxDQUFDO1NBQ1g7YUFBTTtZQUNOLE9BQU8sT0FBTyxDQUFDO1NBQ2Y7SUFDRixDQUFDO0NBRUQ7Ozs7OztJQXpDQSxzQkFBNkM7Ozs7O0lBRTdDLHdCQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleSB9IGZyb20gJy4va2V5JztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vb3B0aW9uYWwnO1xuXG5leHBvcnQgY2xhc3MgS2V5TWFwPEsgZXh0ZW5kcyBLZXksIFQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGtleXMgPSBuZXcgTWFwPHN0cmluZywgSz4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlcyA9IG5ldyBXZWFrTWFwPEssIFQ+KCk7XG5cblx0Z2V0KGtleTogSyk6IE9wdGlvbmFsPFQ+IHtcblxuXHRcdGNvbnN0IGludGVybmFsS2V5ID0gdGhpcy5nZXRJbnRlcm5hbEtleShrZXkpO1xuXG5cdFx0aWYgKGludGVybmFsS2V5KSB7XG5cdFx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy52YWx1ZXMuZ2V0KGludGVybmFsS2V5KSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXHRcdH1cblx0fVxuXG5cdGhhcyhrZXk6IEspOiBib29sZWFuIHtcblxuXHRcdGNvbnN0IGludGVybmFsS2V5ID0gdGhpcy5nZXRJbnRlcm5hbEtleShrZXkpO1xuXG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmhhcyhpbnRlcm5hbEtleSk7XG5cdH1cblxuXHRzZXQoa2V5OiBLLCB2YWx1ZTogVCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaW50ZXJuYWxLZXkgPSB0aGlzLmdldEludGVybmFsS2V5KGtleSk7XG5cblx0XHR0aGlzLnZhbHVlcy5zZXQoaW50ZXJuYWxLZXksIHZhbHVlKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0SW50ZXJuYWxLZXkoa2V5OiBLKTogSyB7XG5cblx0XHRjb25zdCByZWFsS2V5ID0gdGhpcy5rZXlzLmdldChrZXkudG9TdHJpbmcoKSk7XG5cblx0XHRpZiAoIXJlYWxLZXkpIHtcblx0XHRcdHRoaXMua2V5cy5zZXQoa2V5LnRvU3RyaW5nKCksIGtleSk7XG5cdFx0XHRyZXR1cm4ga2V5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gcmVhbEtleTtcblx0XHR9XG5cdH1cblxufVxuIl19