/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var UniqueValuesReadModel = /** @class */ (function () {
    function UniqueValuesReadModel(map) {
        this.map = new Map();
        this.allSelected = new Map();
        this.allDisabled = new Map();
        this.map = map;
        this.calculateSelection();
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    UniqueValuesReadModel.prototype.getValues = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        return this.map.get(fieldId.toString());
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    UniqueValuesReadModel.prototype.areAllSelected = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        return this.allSelected.get(fieldId.toString());
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    UniqueValuesReadModel.prototype.areAllDisabled = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        return this.allDisabled.get(fieldId.toString());
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    UniqueValuesReadModel.prototype.isSelectAllChecked = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        return this.areAllSelected(fieldId);
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    UniqueValuesReadModel.prototype.isIndeterminate = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        return !(this.areAllSelected(fieldId) || this.areAllDisabled(fieldId));
    };
    /**
     * @private
     * @return {?}
     */
    UniqueValuesReadModel.prototype.calculateSelection = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Array.from(this.map.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                /** @type {?} */
                var values = this.map.get(key);
                this.allSelected.set(key, !values.some((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) { return !r.isEnabled(); })));
                this.allDisabled.set(key, !values.some((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) { return r.isEnabled(); })));
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
    return UniqueValuesReadModel;
}());
export { UniqueValuesReadModel };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueValuesReadModel.prototype.map;
    /**
     * @type {?}
     * @private
     */
    UniqueValuesReadModel.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    UniqueValuesReadModel.prototype.allDisabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi1hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBO0lBUUMsK0JBQVksR0FBNkM7UUFOeEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUF1QyxDQUFDO1FBRXJELGdCQUFXLEdBQXlCLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRS9ELGdCQUFXLEdBQXlCLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRy9FLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCx5Q0FBUzs7OztJQUFULFVBQVUsT0FBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM5QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLE9BQWdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxrREFBa0I7Ozs7SUFBbEIsVUFBbUIsT0FBZ0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixPQUFnQjtRQUMvQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVPLGtEQUFrQjs7OztJQUExQjs7O1lBRUMsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUF4QyxJQUFJLEdBQUcsV0FBQTs7b0JBRUwsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFFaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ25CLEdBQUcsRUFDSCxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQWQsQ0FBYyxFQUFDLENBQ25DLENBQUM7Z0JBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ25CLEdBQUcsRUFDSCxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFiLENBQWEsRUFBQyxDQUNsQyxDQUFDO2FBQ0Y7Ozs7Ozs7OztJQUNGLENBQUM7SUFDRiw0QkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7Ozs7Ozs7SUFoREEsb0NBQXNFOzs7OztJQUV0RSw0Q0FBZ0Y7Ozs7O0lBRWhGLDRDQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLnJlYWQtbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxVbmlxdWVWYWx1ZVJlYWRNb2RlbD4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogTWFwPHN0cmluZywgYm9vbGVhbj4gPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFsbERpc2FibGVkOiBNYXA8c3RyaW5nLCBib29sZWFuPiA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKG1hcDogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+Pikge1xuXHRcdHRoaXMubWFwID0gbWFwO1xuXHRcdHRoaXMuY2FsY3VsYXRlU2VsZWN0aW9uKCk7XG5cdH1cblxuXHRnZXRWYWx1ZXMoZmllbGRJZDogRmllbGRJZCk6IEFycmF5PFVuaXF1ZVZhbHVlUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0YXJlQWxsU2VsZWN0ZWQoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0YXJlQWxsRGlzYWJsZWQoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbERpc2FibGVkLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0aXNTZWxlY3RBbGxDaGVja2VkKGZpZWxkSWQ6IEZpZWxkSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hcmVBbGxTZWxlY3RlZChmaWVsZElkKTtcblx0fVxuXG5cdGlzSW5kZXRlcm1pbmF0ZShmaWVsZElkOiBGaWVsZElkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5hcmVBbGxTZWxlY3RlZChmaWVsZElkKSB8fCB0aGlzLmFyZUFsbERpc2FibGVkKGZpZWxkSWQpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU2VsZWN0aW9uKCk6IHZvaWQge1xuXG5cdFx0Zm9yIChsZXQga2V5IG9mIEFycmF5LmZyb20odGhpcy5tYXAua2V5cygpKSkge1xuXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLm1hcC5nZXQoa2V5KTtcblxuXHRcdFx0dGhpcy5hbGxTZWxlY3RlZC5zZXQoXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0IXZhbHVlcy5zb21lKChyKSA9PiAhci5pc0VuYWJsZWQoKSlcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuYWxsRGlzYWJsZWQuc2V0KFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdCF2YWx1ZXMuc29tZSgocikgPT4gci5pc0VuYWJsZWQoKSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=