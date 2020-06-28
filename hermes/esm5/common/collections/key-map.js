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
        if (internalKey) {
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
        /** @type {?} */
        var internalKey = this.getInternalKey(key);
        this.values.set(internalKey, value);
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
        /** @type {?} */
        var realKey = this.keys.get(key.toString());
        if (!realKey) {
            this.keys.set(key.toString(), key);
            return key;
        }
        else {
            return realKey;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LW1hcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9jb2xsZWN0aW9ucy9rZXktbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRXZDOzs7O0lBQUE7UUFFa0IsU0FBSSxHQUFHLElBQUksR0FBRyxFQUFhLENBQUM7UUFFNUIsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUF1Qy9DLENBQUM7Ozs7O0lBckNBLG9CQUFHOzs7O0lBQUgsVUFBSSxHQUFNOztZQUVILFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztRQUU1QyxJQUFJLFdBQVcsRUFBRTtZQUNoQixPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ04sT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7OztJQUVELG9CQUFHOzs7O0lBQUgsVUFBSSxHQUFNOztZQUVILFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztRQUU1QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVELG9CQUFHOzs7OztJQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7O1lBRWIsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTywrQkFBYzs7Ozs7SUFBdEIsVUFBdUIsR0FBTTs7WUFFdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU3QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sR0FBRyxDQUFDO1NBQ1g7YUFBTTtZQUNOLE9BQU8sT0FBTyxDQUFDO1NBQ2Y7SUFDRixDQUFDO0lBRUYsYUFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7Ozs7Ozs7Ozs7SUF6Q0Esc0JBQTZDOzs7OztJQUU3Qyx3QkFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXkgfSBmcm9tICcuL2tleSc7XG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJy4uL29wdGlvbmFsJztcblxuZXhwb3J0IGNsYXNzIEtleU1hcDxLIGV4dGVuZHMgS2V5LCBUPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBrZXlzID0gbmV3IE1hcDxzdHJpbmcsIEs+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXMgPSBuZXcgV2Vha01hcDxLLCBUPigpO1xuXG5cdGdldChrZXk6IEspOiBPcHRpb25hbDxUPiB7XG5cblx0XHRjb25zdCBpbnRlcm5hbEtleSA9IHRoaXMuZ2V0SW50ZXJuYWxLZXkoa2V5KTtcblxuXHRcdGlmIChpbnRlcm5hbEtleSkge1xuXHRcdFx0cmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMudmFsdWVzLmdldChpbnRlcm5hbEtleSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblx0XHR9XG5cdH1cblxuXHRoYXMoa2V5OiBLKTogYm9vbGVhbiB7XG5cblx0XHRjb25zdCBpbnRlcm5hbEtleSA9IHRoaXMuZ2V0SW50ZXJuYWxLZXkoa2V5KTtcblxuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oYXMoaW50ZXJuYWxLZXkpO1xuXHR9XG5cblx0c2V0KGtleTogSywgdmFsdWU6IFQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGludGVybmFsS2V5ID0gdGhpcy5nZXRJbnRlcm5hbEtleShrZXkpO1xuXG5cdFx0dGhpcy52YWx1ZXMuc2V0KGludGVybmFsS2V5LCB2YWx1ZSk7XG5cdH1cblxuXHRwcml2YXRlIGdldEludGVybmFsS2V5KGtleTogSyk6IEsge1xuXG5cdFx0Y29uc3QgcmVhbEtleSA9IHRoaXMua2V5cy5nZXQoa2V5LnRvU3RyaW5nKCkpO1xuXG5cdFx0aWYgKCFyZWFsS2V5KSB7XG5cdFx0XHR0aGlzLmtleXMuc2V0KGtleS50b1N0cmluZygpLCBrZXkpO1xuXHRcdFx0cmV0dXJuIGtleTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHJlYWxLZXk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==