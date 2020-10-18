/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.resolver = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) { return value; });
        this.translation = new Map();
    }
    /**
     * @param {?} change
     * @return {?}
     */
    Dictionary.prototype.changeTranslation = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Object.keys(change)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                this.translation.set(key, change[key]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    Dictionary.prototype.getTranslation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/** @type {?} */ (Array.from(this.translation)
            .reduce((/**
         * @param {?} obj
         * @param {?} __1
         * @return {?}
         */
        function (obj, _a) {
            var _b;
            var _c = tslib_1.__read(_a, 2), key = _c[0], value = _c[1];
            return (Object.assign(obj, (_b = {}, _b[key] = _this.resolver(key, value), _b)));
        }), {})));
    };
    /**
     * @param {?} resolver
     * @return {?}
     */
    Dictionary.prototype.setResolver = /**
     * @param {?} resolver
     * @return {?}
     */
    function (resolver) {
        this.resolver = resolver;
    };
    return Dictionary;
}());
export { Dictionary };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Dictionary.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    Dictionary.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibDEwbi9jb3JlL2RvbWFpbi9kaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7SUFBQTtRQUVTLGFBQVE7Ozs7O1FBQTJDLFVBQUMsR0FBVyxFQUFFLEtBQWEsSUFBSyxPQUFBLEtBQUssRUFBTCxDQUFLLEVBQUM7UUFFaEYsZ0JBQVcsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFtQi9FLENBQUM7Ozs7O0lBakJBLHNDQUFpQjs7OztJQUFqQixVQUFrQixNQUF1Qzs7O1lBQ3hELEtBQWtCLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUFsQyxJQUFNLEdBQUcsV0FBQTtnQkFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7Ozs7Ozs7OztJQUNGLENBQUM7Ozs7SUFFRCxtQ0FBYzs7O0lBQWQ7UUFBQSxpQkFLQztRQUpBLE9BQU8sbUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQy9CLE1BQU07Ozs7O1FBQUMsVUFBQyxHQUFHLEVBQUUsRUFBWTs7Z0JBQVosMEJBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztZQUFNLE9BQUEsQ0FDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQUksR0FBQyxHQUFHLElBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQUcsQ0FDeEQ7UUFGOEIsQ0FFOUIsR0FBRSxFQUFFLENBQUMsRUFBZSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsZ0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWdEO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRixpQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7Ozs7Ozs7SUFyQkEsOEJBQWlHOzs7OztJQUVqRyxpQ0FBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGlvbkNoYW5nZSB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbi1jaGFuZ2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSB7XG5cblx0cHJpdmF0ZSByZXNvbHZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb246IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5cdGNoYW5nZVRyYW5zbGF0aW9uKGNoYW5nZTogVHJhbnNsYXRpb25DaGFuZ2UgfCBUcmFuc2xhdGlvbik6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGNoYW5nZSkpIHtcblx0XHRcdHRoaXMudHJhbnNsYXRpb24uc2V0KGtleSwgY2hhbmdlW2tleV0pO1xuXHRcdH1cblx0fVxuXG5cdGdldFRyYW5zbGF0aW9uKCk6IFRyYW5zbGF0aW9uIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnRyYW5zbGF0aW9uKVxuXHRcdFx0XHRcdC5yZWR1Y2UoKG9iaiwgW2tleSwgdmFsdWVdKSA9PiAoXG5cdFx0XHRcdFx0XHRPYmplY3QuYXNzaWduKG9iaiwgeyBba2V5XTogdGhpcy5yZXNvbHZlcihrZXksIHZhbHVlKSB9KVxuXHRcdFx0XHRcdCksIHt9KSBhcyBUcmFuc2xhdGlvbjtcblx0fVxuXG5cdHNldFJlc29sdmVyKHJlc29sdmVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcblx0fVxuXG59XG4iXX0=