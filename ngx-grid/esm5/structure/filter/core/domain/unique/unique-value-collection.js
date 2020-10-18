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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSXJFO0lBUUMsK0JBQVksTUFBa0IsRUFDM0IsS0FBWTs7UUFQRSxXQUFNLEdBQXVCLEVBQUUsQ0FBQzs7WUFTaEQsS0FBa0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBckIsSUFBSSxLQUFLLG1CQUFBO2dCQUViLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNmLElBQUksV0FBVyxDQUNkLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxFQUNqQyxLQUFLLEVBQ0wsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFDNUIsSUFBSSxDQUNKLENBQ0QsQ0FBQzthQUNGOzs7Ozs7Ozs7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsc0NBQU07OztJQUFOO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELDZDQUFhOzs7SUFBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsOENBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQWUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBZixDQUFlLEVBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFlO1lBQ25DLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxzQ0FBTTs7OztJQUFOLFVBQU8sYUFBNEI7UUFFbEMsSUFBSSxDQUFDLE1BQU07YUFDVCxNQUFNOzs7O1FBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFoQyxDQUFnQyxFQUFDO2FBQ2hELE9BQU87Ozs7UUFBQyxVQUFDLEVBQWU7WUFDeEIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFlO1lBQ25DLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCx3Q0FBUTs7OztJQUFSLFVBQVMsYUFBNEI7UUFFcEMsSUFBSSxDQUFDLE1BQU07YUFDVCxNQUFNOzs7O1FBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFoQyxDQUFnQyxFQUFDO2FBQ2hELE9BQU87Ozs7UUFBQyxVQUFDLEVBQWU7WUFDeEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVPLG9EQUFvQjs7OztJQUE1QjtRQUNDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLENBQWMsSUFBSyxPQUFBLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBZCxDQUFjLEVBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVPLG9EQUFvQjs7OztJQUE1QjtRQUNDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLENBQWMsSUFBSyxPQUFBLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBYixDQUFhLEVBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUYsNEJBQUM7QUFBRCxDQUFDLEFBM0ZELElBMkZDOzs7Ozs7O0lBekZBLHVDQUFpRDs7Ozs7SUFFakQsNENBQTZCOzs7OztJQUU3Qiw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbmlxdWVWYWx1ZSB9IGZyb20gJy4vdW5pcXVlLXZhbHVlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWRHZW5lcmF0b3IgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS5pZC1nZW5lcmF0b3InO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWU+ID0gW107XG5cblx0cHJpdmF0ZSBhbGxTZWxlY3RlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGFsbERpc2FibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogQXJyYXk8YW55Pixcblx0XHRcdFx0ZmllbGQ6IEZpZWxkKSB7XG5cblx0XHRmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcblxuXHRcdFx0dGhpcy52YWx1ZXMucHVzaChcblx0XHRcdFx0bmV3IFVuaXF1ZVZhbHVlKFxuXHRcdFx0XHRcdFVuaXF1ZVZhbHVlSWRHZW5lcmF0b3IuZ2VuZXJhdGUoKSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRmaWVsZC5nZXREaXNwbGF5VmFsdWUodmFsdWUpLFxuXHRcdFx0XHRcdHRydWVcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxEaXNhYmxlZCgpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFVuaXF1ZVZhbHVlPiB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzO1xuXHR9XG5cblx0aXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxTZWxlY3RlZDtcblx0fVxuXG5cdGlzQWxsRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsRGlzYWJsZWQ7XG5cdH1cblxuXHRnZXROb3RTZWxlY3RlZCgpOiBBcnJheTxVbmlxdWVWYWx1ZT4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5maWx0ZXIoKHV2OiBVbmlxdWVWYWx1ZSkgPT4gdXYuaXNEaXNhYmxlZCgpKTtcblx0fVxuXG5cdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5mb3JFYWNoKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdHV2LnNlbGVjdCgpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSB0cnVlO1xuXHRcdHRoaXMuYWxsRGlzYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdHNlbGVjdCh1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnZhbHVlc1xuXHRcdFx0LmZpbHRlcigodXYpID0+IHV2LmdldElkKCkuZXF1YWxzKHVuaXF1ZVZhbHVlSWQpKVxuXHRcdFx0LmZvckVhY2goKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0XHR1di5zZWxlY3QoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxTZWxlY3RlZCgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlQWxsRGlzYWJsZWQoKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzLmZvckVhY2goKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0dXYudW5zZWxlY3QoKTtcblx0XHR9KTtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gZmFsc2U7XG5cdFx0dGhpcy5hbGxEaXNhYmxlZCA9IHRydWU7XG5cdH1cblxuXHR1bnNlbGVjdCh1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnZhbHVlc1xuXHRcdFx0LmZpbHRlcigodXYpID0+IHV2LmdldElkKCkuZXF1YWxzKHVuaXF1ZVZhbHVlSWQpKVxuXHRcdFx0LmZvckVhY2goKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0XHR1di51bnNlbGVjdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxEaXNhYmxlZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVBbGxTZWxlY3RlZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gIXRoaXMudmFsdWVzLnNvbWUoKGY6IFVuaXF1ZVZhbHVlKSA9PiBmLmlzRGlzYWJsZWQoKSk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUFsbERpc2FibGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWxsRGlzYWJsZWQgPSAhdGhpcy52YWx1ZXMuc29tZSgoZjogVW5pcXVlVmFsdWUpID0+IGYuaXNFbmFibGVkKCkpO1xuXHR9XG5cbn1cbiJdfQ==