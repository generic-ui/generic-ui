/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { UniqueValue } from './unique-value';
import { UniqueValueIdGenerator } from './unique-value.id-generator';
var UniqueValueCollection = /** @class */ (function () {
    function UniqueValueCollection(values, field) {
        var e_1, _a;
        this.values = [];
        try {
            for (var values_1 = tslib_1.__values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                var value = values_1_1.value;
                this.values.push(new UniqueValue(UniqueValueIdGenerator.generate(), value, field.getDisplayValue(value), true));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    /**
     * @return {?}
     */
    UniqueValueCollection.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    /**
     * @return {?}
     */
    UniqueValueCollection.prototype.isAllSelected = /**
     * @return {?}
     */
    function () {
        return this.allSelected;
    };
    /**
     * @return {?}
     */
    UniqueValueCollection.prototype.isAllDisabled = /**
     * @return {?}
     */
    function () {
        return this.allDisabled;
    };
    /**
     * @return {?}
     */
    UniqueValueCollection.prototype.getNotSelected = /**
     * @return {?}
     */
    function () {
        return this.values.filter((/**
         * @param {?} uv
         * @return {?}
         */
        function (uv) { return uv.isDisabled(); }));
    };
    /**
     * @return {?}
     */
    UniqueValueCollection.prototype.selectAll = /**
     * @return {?}
     */
    function () {
        this.values.forEach((/**
         * @param {?} uv
         * @return {?}
         */
        function (uv) {
            uv.select();
        }));
        this.allSelected = true;
        this.allDisabled = false;
    };
    /**
     * @param {?} uniqueValueId
     * @return {?}
     */
    UniqueValueCollection.prototype.select = /**
     * @param {?} uniqueValueId
     * @return {?}
     */
    function (uniqueValueId) {
        this.values
            .filter((/**
         * @param {?} uv
         * @return {?}
         */
        function (uv) { return uv.getId().equals(uniqueValueId); }))
            .forEach((/**
         * @param {?} uv
         * @return {?}
         */
        function (uv) {
            uv.select();
        }));
        this.calculateAllSelected();
        this.calculateAllDisabled();
    };
    /**
     * @return {?}
     */
    UniqueValueCollection.prototype.unselectAll = /**
     * @return {?}
     */
    function () {
        this.values.forEach((/**
         * @param {?} uv
         * @return {?}
         */
        function (uv) {
            uv.unselect();
        }));
        this.allSelected = false;
        this.allDisabled = true;
    };
    /**
     * @param {?} uniqueValueId
     * @return {?}
     */
    UniqueValueCollection.prototype.unselect = /**
     * @param {?} uniqueValueId
     * @return {?}
     */
    function (uniqueValueId) {
        this.values
            .filter((/**
         * @param {?} uv
         * @return {?}
         */
        function (uv) { return uv.getId().equals(uniqueValueId); }))
            .forEach((/**
         * @param {?} uv
         * @return {?}
         */
        function (uv) {
            uv.unselect();
        }));
        this.calculateAllSelected();
        this.calculateAllDisabled();
    };
    /**
     * @private
     * @return {?}
     */
    UniqueValueCollection.prototype.calculateAllSelected = /**
     * @private
     * @return {?}
     */
    function () {
        this.allSelected = !this.values.some((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.isDisabled(); }));
    };
    /**
     * @private
     * @return {?}
     */
    UniqueValueCollection.prototype.calculateAllDisabled = /**
     * @private
     * @return {?}
     */
    function () {
        this.allDisabled = !this.values.some((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.isEnabled(); }));
    };
    return UniqueValueCollection;
}());
export { UniqueValueCollection };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueValueCollection.prototype.values;
    /**
     * @type {?}
     * @private
     */
    UniqueValueCollection.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    UniqueValueCollection.prototype.allDisabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUtY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUlyRTtJQVFDLCtCQUFZLE1BQWtCLEVBQzNCLEtBQVk7O1FBUEUsV0FBTSxHQUF1QixFQUFFLENBQUM7O1lBU2hELEtBQWtCLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXJCLElBQUksS0FBSyxtQkFBQTtnQkFFYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZixJQUFJLFdBQVcsQ0FDZCxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsRUFDakMsS0FBSyxFQUNMLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQzVCLElBQUksQ0FDSixDQUNELENBQUM7YUFDRjs7Ozs7Ozs7O1FBRUQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHNDQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsNkNBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDhDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxFQUFlLElBQUssT0FBQSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQWYsQ0FBZSxFQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELHlDQUFTOzs7SUFBVDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBZTtZQUNuQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsc0NBQU07Ozs7SUFBTixVQUFPLGFBQTRCO1FBRWxDLElBQUksQ0FBQyxNQUFNO2FBQ1QsTUFBTTs7OztRQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBaEMsQ0FBZ0MsRUFBQzthQUNoRCxPQUFPOzs7O1FBQUMsVUFBQyxFQUFlO1lBQ3hCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBZTtZQUNuQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLGFBQTRCO1FBRXBDLElBQUksQ0FBQyxNQUFNO2FBQ1QsTUFBTTs7OztRQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBaEMsQ0FBZ0MsRUFBQzthQUNoRCxPQUFPOzs7O1FBQUMsVUFBQyxFQUFlO1lBQ3hCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTyxvREFBb0I7Ozs7SUFBNUI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxDQUFjLElBQUssT0FBQSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQWQsQ0FBYyxFQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFTyxvREFBb0I7Ozs7SUFBNUI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxDQUFjLElBQUssT0FBQSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDekUsQ0FBQztJQUVGLDRCQUFDO0FBQUQsQ0FBQyxBQTNGRCxJQTJGQzs7Ozs7OztJQXpGQSx1Q0FBaUQ7Ozs7O0lBRWpELDRDQUE2Qjs7Ozs7SUFFN0IsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVW5pcXVlVmFsdWUgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUuaWQtZ2VuZXJhdG9yJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkJztcblxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZXM6IEFycmF5PFVuaXF1ZVZhbHVlPiA9IFtdO1xuXG5cdHByaXZhdGUgYWxsU2VsZWN0ZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBhbGxEaXNhYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcih2YWx1ZXM6IEFycmF5PGFueT4sXG5cdFx0XHRcdGZpZWxkOiBGaWVsZCkge1xuXG5cdFx0Zm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG5cblx0XHRcdHRoaXMudmFsdWVzLnB1c2goXG5cdFx0XHRcdG5ldyBVbmlxdWVWYWx1ZShcblx0XHRcdFx0XHRVbmlxdWVWYWx1ZUlkR2VuZXJhdG9yLmdlbmVyYXRlKCksXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0ZmllbGQuZ2V0RGlzcGxheVZhbHVlKHZhbHVlKSxcblx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxTZWxlY3RlZCgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlQWxsRGlzYWJsZWQoKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxVbmlxdWVWYWx1ZT4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcztcblx0fVxuXG5cdGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsU2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0FsbERpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbERpc2FibGVkO1xuXHR9XG5cblx0Z2V0Tm90U2VsZWN0ZWQoKTogQXJyYXk8VW5pcXVlVmFsdWU+IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuZmlsdGVyKCh1djogVW5pcXVlVmFsdWUpID0+IHV2LmlzRGlzYWJsZWQoKSk7XG5cdH1cblxuXHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHR1di5zZWxlY3QoKTtcblx0XHR9KTtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gdHJ1ZTtcblx0XHR0aGlzLmFsbERpc2FibGVkID0gZmFsc2U7XG5cdH1cblxuXHRzZWxlY3QodW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy52YWx1ZXNcblx0XHRcdC5maWx0ZXIoKHV2KSA9PiB1di5nZXRJZCgpLmVxdWFscyh1bmlxdWVWYWx1ZUlkKSlcblx0XHRcdC5mb3JFYWNoKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdFx0dXYuc2VsZWN0KCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZUFsbERpc2FibGVkKCk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5mb3JFYWNoKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdHV2LnVuc2VsZWN0KCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdHRoaXMuYWxsRGlzYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0dW5zZWxlY3QodW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy52YWx1ZXNcblx0XHRcdC5maWx0ZXIoKHV2KSA9PiB1di5nZXRJZCgpLmVxdWFscyh1bmlxdWVWYWx1ZUlkKSlcblx0XHRcdC5mb3JFYWNoKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdFx0dXYudW5zZWxlY3QoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxTZWxlY3RlZCgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlQWxsRGlzYWJsZWQoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9ICF0aGlzLnZhbHVlcy5zb21lKChmOiBVbmlxdWVWYWx1ZSkgPT4gZi5pc0Rpc2FibGVkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVBbGxEaXNhYmxlZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFsbERpc2FibGVkID0gIXRoaXMudmFsdWVzLnNvbWUoKGY6IFVuaXF1ZVZhbHVlKSA9PiBmLmlzRW5hYmxlZCgpKTtcblx0fVxuXG59XG4iXX0=