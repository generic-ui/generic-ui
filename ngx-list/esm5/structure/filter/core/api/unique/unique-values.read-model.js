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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtJQVFDLCtCQUFZLEdBQTZDO1FBTnhDLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBdUMsQ0FBQztRQUVyRCxnQkFBVyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUUvRCxnQkFBVyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUcvRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQseUNBQVM7Ozs7SUFBVCxVQUFVLE9BQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsT0FBZ0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM5QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsa0RBQWtCOzs7O0lBQWxCLFVBQW1CLE9BQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsT0FBZ0I7UUFDL0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFTyxrREFBa0I7Ozs7SUFBMUI7OztZQUVDLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBeEMsSUFBSSxHQUFHLFdBQUE7O29CQUVMLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBRWhDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUNuQixHQUFHLEVBQ0gsQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztnQkFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFkLENBQWMsRUFBQyxDQUNuQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUNuQixHQUFHLEVBQ0gsQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztnQkFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBYixDQUFhLEVBQUMsQ0FDbEMsQ0FBQzthQUNGOzs7Ozs7Ozs7SUFDRixDQUFDO0lBQ0YsNEJBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDOzs7Ozs7O0lBaERBLG9DQUFzRTs7Ozs7SUFFdEUsNENBQWdGOzs7OztJQUVoRiw0Q0FBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVSZWFkTW9kZWwgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS5yZWFkLW1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWxsU2VsZWN0ZWQ6IE1hcDxzdHJpbmcsIGJvb2xlYW4+ID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhbGxEaXNhYmxlZDogTWFwPHN0cmluZywgYm9vbGVhbj4gPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcblxuXHRjb25zdHJ1Y3RvcihtYXA6IE1hcDxzdHJpbmcsIEFycmF5PFVuaXF1ZVZhbHVlUmVhZE1vZGVsPj4pIHtcblx0XHR0aGlzLm1hcCA9IG1hcDtcblx0XHR0aGlzLmNhbGN1bGF0ZVNlbGVjdGlvbigpO1xuXHR9XG5cblx0Z2V0VmFsdWVzKGZpZWxkSWQ6IEZpZWxkSWQpOiBBcnJheTxVbmlxdWVWYWx1ZVJlYWRNb2RlbD4ge1xuXHRcdHJldHVybiB0aGlzLm1hcC5nZXQoZmllbGRJZC50b1N0cmluZygpKTtcblx0fVxuXG5cdGFyZUFsbFNlbGVjdGVkKGZpZWxkSWQ6IEZpZWxkSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxTZWxlY3RlZC5nZXQoZmllbGRJZC50b1N0cmluZygpKTtcblx0fVxuXG5cdGFyZUFsbERpc2FibGVkKGZpZWxkSWQ6IEZpZWxkSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxEaXNhYmxlZC5nZXQoZmllbGRJZC50b1N0cmluZygpKTtcblx0fVxuXG5cdGlzU2VsZWN0QWxsQ2hlY2tlZChmaWVsZElkOiBGaWVsZElkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYXJlQWxsU2VsZWN0ZWQoZmllbGRJZCk7XG5cdH1cblxuXHRpc0luZGV0ZXJtaW5hdGUoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhKHRoaXMuYXJlQWxsU2VsZWN0ZWQoZmllbGRJZCkgfHwgdGhpcy5hcmVBbGxEaXNhYmxlZChmaWVsZElkKSk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZVNlbGVjdGlvbigpOiB2b2lkIHtcblxuXHRcdGZvciAobGV0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMubWFwLmtleXMoKSkpIHtcblxuXHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy5tYXAuZ2V0KGtleSk7XG5cblx0XHRcdHRoaXMuYWxsU2VsZWN0ZWQuc2V0KFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdCF2YWx1ZXMuc29tZSgocikgPT4gIXIuaXNFbmFibGVkKCkpXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmFsbERpc2FibGVkLnNldChcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHQhdmFsdWVzLnNvbWUoKHIpID0+IHIuaXNFbmFibGVkKCkpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuIl19