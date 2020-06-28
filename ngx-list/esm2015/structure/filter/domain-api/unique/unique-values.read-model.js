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
        for (let key of Array.from(this.map.keys())) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi1hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTSxPQUFPLHFCQUFxQjs7OztJQVFqQyxZQUFZLEdBQTZDO1FBTnhDLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBdUMsQ0FBQztRQUVyRCxnQkFBVyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUUvRCxnQkFBVyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUcvRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFnQjtRQUM5QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsT0FBZ0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQWdCO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBRXpCLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7O2tCQUV0QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBRWhDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUNuQixHQUFHLEVBQ0gsQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUNuQyxDQUFDO1lBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ25CLEdBQUcsRUFDSCxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUNsQyxDQUFDO1NBQ0Y7SUFDRixDQUFDO0NBQ0Q7Ozs7OztJQWhEQSxvQ0FBc0U7Ozs7O0lBRXRFLDRDQUFnRjs7Ozs7SUFFaEYsNENBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlUmVhZE1vZGVsIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUucmVhZC1tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PFVuaXF1ZVZhbHVlUmVhZE1vZGVsPj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFsbFNlbGVjdGVkOiBNYXA8c3RyaW5nLCBib29sZWFuPiA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWxsRGlzYWJsZWQ6IE1hcDxzdHJpbmcsIGJvb2xlYW4+ID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IobWFwOiBNYXA8c3RyaW5nLCBBcnJheTxVbmlxdWVWYWx1ZVJlYWRNb2RlbD4+KSB7XG5cdFx0dGhpcy5tYXAgPSBtYXA7XG5cdFx0dGhpcy5jYWxjdWxhdGVTZWxlY3Rpb24oKTtcblx0fVxuXG5cdGdldFZhbHVlcyhmaWVsZElkOiBGaWVsZElkKTogQXJyYXk8VW5pcXVlVmFsdWVSZWFkTW9kZWw+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXAuZ2V0KGZpZWxkSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRhcmVBbGxTZWxlY3RlZChmaWVsZElkOiBGaWVsZElkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsU2VsZWN0ZWQuZ2V0KGZpZWxkSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRhcmVBbGxEaXNhYmxlZChmaWVsZElkOiBGaWVsZElkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsRGlzYWJsZWQuZ2V0KGZpZWxkSWQudG9TdHJpbmcoKSk7XG5cdH1cblxuXHRpc1NlbGVjdEFsbENoZWNrZWQoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFyZUFsbFNlbGVjdGVkKGZpZWxkSWQpO1xuXHR9XG5cblx0aXNJbmRldGVybWluYXRlKGZpZWxkSWQ6IEZpZWxkSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISh0aGlzLmFyZUFsbFNlbGVjdGVkKGZpZWxkSWQpIHx8IHRoaXMuYXJlQWxsRGlzYWJsZWQoZmllbGRJZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVTZWxlY3Rpb24oKTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBrZXkgb2YgQXJyYXkuZnJvbSh0aGlzLm1hcC5rZXlzKCkpKSB7XG5cblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMubWFwLmdldChrZXkpO1xuXG5cdFx0XHR0aGlzLmFsbFNlbGVjdGVkLnNldChcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHQhdmFsdWVzLnNvbWUoKHIpID0+ICFyLmlzRW5hYmxlZCgpKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5hbGxEaXNhYmxlZC5zZXQoXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0IXZhbHVlcy5zb21lKChyKSA9PiByLmlzRW5hYmxlZCgpKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==