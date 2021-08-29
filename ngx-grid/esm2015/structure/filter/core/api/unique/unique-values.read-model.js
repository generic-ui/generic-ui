/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class UniqueValuesReadModel {
    /**
     * @param {?} map
     */
    constructor(map) {
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
    getValues(fieldId) {
        return this.map.get(fieldId.toString());
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    areAllSelected(fieldId) {
        return this.allSelected.get(fieldId.toString());
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    areAllDisabled(fieldId) {
        return this.allDisabled.get(fieldId.toString());
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    isSelectAllChecked(fieldId) {
        return this.areAllSelected(fieldId);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    isIndeterminate(fieldId) {
        return !(this.areAllSelected(fieldId) || this.areAllDisabled(fieldId));
    }
    /**
     * @private
     * @return {?}
     */
    calculateSelection() {
        for (const key of Array.from(this.map.keys())) {
            /** @type {?} */
            const values = this.map.get(key);
            this.allSelected.set(key, !values.some((/**
             * @param {?} r
             * @return {?}
             */
            (r) => !r.isEnabled())));
            this.allDisabled.set(key, !values.some((/**
             * @param {?} r
             * @return {?}
             */
            (r) => r.isEnabled())));
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFRakMsWUFBWSxHQUE2QztRQU54QyxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQXVDLENBQUM7UUFFckQsZ0JBQVcsR0FBeUIsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFFL0QsZ0JBQVcsR0FBeUIsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFHL0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxPQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQWdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE9BQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxPQUFnQjtRQUMvQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUV6QixLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFOztrQkFFeEMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUVoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDbkIsR0FBRyxFQUNILENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FDbkMsQ0FBQztZQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUNuQixHQUFHLEVBQ0gsQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FDbEMsQ0FBQztTQUNGO0lBQ0YsQ0FBQztDQUNEOzs7Ozs7SUFoREEsb0NBQXNFOzs7OztJQUV0RSw0Q0FBZ0Y7Ozs7O0lBRWhGLDRDQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLnJlYWQtbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxVbmlxdWVWYWx1ZVJlYWRNb2RlbD4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogTWFwPHN0cmluZywgYm9vbGVhbj4gPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFsbERpc2FibGVkOiBNYXA8c3RyaW5nLCBib29sZWFuPiA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdGNvbnN0cnVjdG9yKG1hcDogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+Pikge1xuXHRcdHRoaXMubWFwID0gbWFwO1xuXHRcdHRoaXMuY2FsY3VsYXRlU2VsZWN0aW9uKCk7XG5cdH1cblxuXHRnZXRWYWx1ZXMoZmllbGRJZDogRmllbGRJZCk6IEFycmF5PFVuaXF1ZVZhbHVlUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0YXJlQWxsU2VsZWN0ZWQoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0YXJlQWxsRGlzYWJsZWQoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbERpc2FibGVkLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0aXNTZWxlY3RBbGxDaGVja2VkKGZpZWxkSWQ6IEZpZWxkSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hcmVBbGxTZWxlY3RlZChmaWVsZElkKTtcblx0fVxuXG5cdGlzSW5kZXRlcm1pbmF0ZShmaWVsZElkOiBGaWVsZElkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5hcmVBbGxTZWxlY3RlZChmaWVsZElkKSB8fCB0aGlzLmFyZUFsbERpc2FibGVkKGZpZWxkSWQpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU2VsZWN0aW9uKCk6IHZvaWQge1xuXG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbSh0aGlzLm1hcC5rZXlzKCkpKSB7XG5cblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMubWFwLmdldChrZXkpO1xuXG5cdFx0XHR0aGlzLmFsbFNlbGVjdGVkLnNldChcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHQhdmFsdWVzLnNvbWUoKHIpID0+ICFyLmlzRW5hYmxlZCgpKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5hbGxEaXNhYmxlZC5zZXQoXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0IXZhbHVlcy5zb21lKChyKSA9PiByLmlzRW5hYmxlZCgpKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==