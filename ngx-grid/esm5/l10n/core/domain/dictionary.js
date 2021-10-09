/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.translation = new Map();
        this.resolver = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) { return value; });
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
    Dictionary.prototype.translation;
    /**
     * @type {?}
     * @private
     */
    Dictionary.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibDEwbi9jb3JlL2RvbWFpbi9kaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7SUFBQTtRQUVrQixnQkFBVyxHQUF3QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUV0RSxhQUFROzs7OztRQUEyQyxVQUFDLEdBQVcsRUFBRSxLQUFhLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFDO0lBbUJsRyxDQUFDOzs7OztJQWpCQSxzQ0FBaUI7Ozs7SUFBakIsVUFBa0IsTUFBdUM7OztZQUN4RCxLQUFrQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbEMsSUFBTSxHQUFHLFdBQUE7Z0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDOzs7Ozs7Ozs7SUFDRixDQUFDOzs7O0lBRUQsbUNBQWM7OztJQUFkO1FBQUEsaUJBS0M7UUFKQSxPQUFPLG1CQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMvQixNQUFNOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLEVBQVk7O2dCQUFaLDBCQUFZLEVBQVgsV0FBRyxFQUFFLGFBQUs7WUFBTSxPQUFBLENBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFJLEdBQUMsR0FBRyxJQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFHLENBQ3hEO1FBRjhCLENBRTlCLEdBQUUsRUFBRSxDQUFDLEVBQWUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGdDQUFXOzs7O0lBQVgsVUFBWSxRQUFnRDtRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUYsaUJBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDOzs7Ozs7O0lBckJBLGlDQUE4RTs7Ozs7SUFFOUUsOEJBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25DaGFuZ2UgfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24tY2hhbmdlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vYXBpL3RyYW5zbGF0aW9uJztcblxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnkge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb246IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5cdHByaXZhdGUgcmVzb2x2ZXI6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZTtcblxuXHRjaGFuZ2VUcmFuc2xhdGlvbihjaGFuZ2U6IFRyYW5zbGF0aW9uQ2hhbmdlIHwgVHJhbnNsYXRpb24pOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjaGFuZ2UpKSB7XG5cdFx0XHR0aGlzLnRyYW5zbGF0aW9uLnNldChrZXksIGNoYW5nZVtrZXldKTtcblx0XHR9XG5cdH1cblxuXHRnZXRUcmFuc2xhdGlvbigpOiBUcmFuc2xhdGlvbiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy50cmFuc2xhdGlvbilcblx0XHRcdFx0XHQucmVkdWNlKChvYmosIFtrZXksIHZhbHVlXSkgPT4gKFxuXHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihvYmosIHsgW2tleV06IHRoaXMucmVzb2x2ZXIoa2V5LCB2YWx1ZSkgfSlcblx0XHRcdFx0XHQpLCB7fSkgYXMgVHJhbnNsYXRpb247XG5cdH1cblxuXHRzZXRSZXNvbHZlcihyZXNvbHZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG5cdH1cblxufVxuIl19