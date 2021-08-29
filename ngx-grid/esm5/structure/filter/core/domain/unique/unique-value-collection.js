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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSXJFO0lBUUMsK0JBQVksTUFBa0IsRUFDM0IsS0FBWTs7UUFQRSxXQUFNLEdBQXVCLEVBQUUsQ0FBQzs7WUFTaEQsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBdkIsSUFBTSxLQUFLLG1CQUFBO2dCQUVmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNmLElBQUksV0FBVyxDQUNkLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxFQUNqQyxLQUFLLEVBQ0wsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFDNUIsSUFBSSxDQUNKLENBQ0QsQ0FBQzthQUNGOzs7Ozs7Ozs7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsc0NBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDZDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsOENBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQWUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBZixDQUFlLEVBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFlO1lBQ25DLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxzQ0FBTTs7OztJQUFOLFVBQU8sYUFBNEI7UUFFbEMsSUFBSSxDQUFDLE1BQU07YUFDVCxNQUFNOzs7O1FBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFoQyxDQUFnQyxFQUFDO2FBQ2hELE9BQU87Ozs7UUFBQyxVQUFDLEVBQWU7WUFDeEIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFlO1lBQ25DLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCx3Q0FBUTs7OztJQUFSLFVBQVMsYUFBNEI7UUFFcEMsSUFBSSxDQUFDLE1BQU07YUFDVCxNQUFNOzs7O1FBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFoQyxDQUFnQyxFQUFDO2FBQ2hELE9BQU87Ozs7UUFBQyxVQUFDLEVBQWU7WUFDeEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVPLG9EQUFvQjs7OztJQUE1QjtRQUNDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLENBQWMsSUFBSyxPQUFBLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBZCxDQUFjLEVBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVPLG9EQUFvQjs7OztJQUE1QjtRQUNDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLENBQWMsSUFBSyxPQUFBLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBYixDQUFhLEVBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUYsNEJBQUM7QUFBRCxDQUFDLEFBM0ZELElBMkZDOzs7Ozs7O0lBekZBLHVDQUFpRDs7Ozs7SUFFakQsNENBQTZCOzs7OztJQUU3Qiw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbmlxdWVWYWx1ZSB9IGZyb20gJy4vdW5pcXVlLXZhbHVlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWRHZW5lcmF0b3IgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS5pZC1nZW5lcmF0b3InO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWU+ID0gW107XG5cblx0cHJpdmF0ZSBhbGxTZWxlY3RlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGFsbERpc2FibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogQXJyYXk8YW55Pixcblx0XHRcdFx0ZmllbGQ6IEZpZWxkKSB7XG5cblx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuXG5cdFx0XHR0aGlzLnZhbHVlcy5wdXNoKFxuXHRcdFx0XHRuZXcgVW5pcXVlVmFsdWUoXG5cdFx0XHRcdFx0VW5pcXVlVmFsdWVJZEdlbmVyYXRvci5nZW5lcmF0ZSgpLFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdGZpZWxkLmdldERpc3BsYXlWYWx1ZSh2YWx1ZSksXG5cdFx0XHRcdFx0dHJ1ZVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZUFsbERpc2FibGVkKCk7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8VW5pcXVlVmFsdWU+IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXM7XG5cdH1cblxuXHRpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkO1xuXHR9XG5cblx0aXNBbGxEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxEaXNhYmxlZDtcblx0fVxuXG5cdGdldE5vdFNlbGVjdGVkKCk6IEFycmF5PFVuaXF1ZVZhbHVlPiB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmZpbHRlcigodXY6IFVuaXF1ZVZhbHVlKSA9PiB1di5pc0Rpc2FibGVkKCkpO1xuXHR9XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzLmZvckVhY2goKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0dXYuc2VsZWN0KCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IHRydWU7XG5cdFx0dGhpcy5hbGxEaXNhYmxlZCA9IGZhbHNlO1xuXHR9XG5cblx0c2VsZWN0KHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVzXG5cdFx0XHQuZmlsdGVyKCh1dikgPT4gdXYuZ2V0SWQoKS5lcXVhbHModW5pcXVlVmFsdWVJZCkpXG5cdFx0XHQuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHRcdHV2LnNlbGVjdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxEaXNhYmxlZCgpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHR1di51bnNlbGVjdCgpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmFsbERpc2FibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHVuc2VsZWN0KHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVzXG5cdFx0XHQuZmlsdGVyKCh1dikgPT4gdXYuZ2V0SWQoKS5lcXVhbHModW5pcXVlVmFsdWVJZCkpXG5cdFx0XHQuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHRcdHV2LnVuc2VsZWN0KCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZUFsbERpc2FibGVkKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSAhdGhpcy52YWx1ZXMuc29tZSgoZjogVW5pcXVlVmFsdWUpID0+IGYuaXNEaXNhYmxlZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQWxsRGlzYWJsZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxEaXNhYmxlZCA9ICF0aGlzLnZhbHVlcy5zb21lKChmOiBVbmlxdWVWYWx1ZSkgPT4gZi5pc0VuYWJsZWQoKSk7XG5cdH1cblxufVxuIl19