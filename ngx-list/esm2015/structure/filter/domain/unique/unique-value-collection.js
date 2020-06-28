/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UniqueValue } from './unique-value';
import { UniqueValueIdGenerator } from './unique-value.id-generator';
export class UniqueValueCollection {
    /**
     * @param {?} values
     * @param {?} field
     */
    constructor(values, field) {
        this.values = [];
        for (let value of values) {
            this.values.push(new UniqueValue(UniqueValueIdGenerator.generate(), value, field.getDisplayValue(value), true));
        }
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.values;
    }
    /**
     * @return {?}
     */
    isAllSelected() {
        return this.allSelected;
    }
    /**
     * @return {?}
     */
    isAllDisabled() {
        return this.allDisabled;
    }
    /**
     * @return {?}
     */
    getNotSelected() {
        return this.values.filter((/**
         * @param {?} uv
         * @return {?}
         */
        (uv) => uv.isDisabled()));
    }
    /**
     * @return {?}
     */
    selectAll() {
        this.values.forEach((/**
         * @param {?} uv
         * @return {?}
         */
        (uv) => {
            uv.select();
        }));
        this.allSelected = true;
        this.allDisabled = false;
    }
    /**
     * @param {?} uniqueValueId
     * @return {?}
     */
    select(uniqueValueId) {
        this.values
            .filter((/**
         * @param {?} uv
         * @return {?}
         */
        (uv) => uv.getId().equals(uniqueValueId)))
            .forEach((/**
         * @param {?} uv
         * @return {?}
         */
        (uv) => {
            uv.select();
        }));
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    /**
     * @return {?}
     */
    unselectAll() {
        this.values.forEach((/**
         * @param {?} uv
         * @return {?}
         */
        (uv) => {
            uv.unselect();
        }));
        this.allSelected = false;
        this.allDisabled = true;
    }
    /**
     * @param {?} uniqueValueId
     * @return {?}
     */
    unselect(uniqueValueId) {
        this.values
            .filter((/**
         * @param {?} uv
         * @return {?}
         */
        (uv) => uv.getId().equals(uniqueValueId)))
            .forEach((/**
         * @param {?} uv
         * @return {?}
         */
        (uv) => {
            uv.unselect();
        }));
        this.calculateAllSelected();
        this.calculateAllDisabled();
    }
    /**
     * @private
     * @return {?}
     */
    calculateAllSelected() {
        this.allSelected = !this.values.some((/**
         * @param {?} f
         * @return {?}
         */
        (f) => f.isDisabled()));
    }
    /**
     * @private
     * @return {?}
     */
    calculateAllDisabled() {
        this.allDisabled = !this.values.some((/**
         * @param {?} f
         * @return {?}
         */
        (f) => f.isEnabled()));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUtY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSXJFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBUWpDLFlBQVksTUFBa0IsRUFDM0IsS0FBWTtRQVBFLFdBQU0sR0FBdUIsRUFBRSxDQUFDO1FBU2hELEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBRXpCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNmLElBQUksV0FBVyxDQUNkLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxFQUNqQyxLQUFLLEVBQ0wsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFDNUIsSUFBSSxDQUNKLENBQ0QsQ0FBQztTQUNGO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsRUFBZSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLENBQUMsRUFBZSxFQUFFLEVBQUU7WUFDdkMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxhQUE0QjtRQUVsQyxJQUFJLENBQUMsTUFBTTthQUNULE1BQU07Ozs7UUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQzthQUNoRCxPQUFPOzs7O1FBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtZQUM1QixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtZQUN2QyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLGFBQTRCO1FBRXBDLElBQUksQ0FBQyxNQUFNO2FBQ1QsTUFBTTs7OztRQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDO2FBQ2hELE9BQU87Ozs7UUFBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO1lBQzVCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTyxvQkFBb0I7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVPLG9CQUFvQjtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDO0lBQ3pFLENBQUM7Q0FFRDs7Ozs7O0lBekZBLHVDQUFpRDs7Ozs7SUFFakQsNENBQTZCOzs7OztJQUU3Qiw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbmlxdWVWYWx1ZSB9IGZyb20gJy4vdW5pcXVlLXZhbHVlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWRHZW5lcmF0b3IgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS5pZC1nZW5lcmF0b3InO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWU+ID0gW107XG5cblx0cHJpdmF0ZSBhbGxTZWxlY3RlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIGFsbERpc2FibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHZhbHVlczogQXJyYXk8YW55Pixcblx0XHRcdFx0ZmllbGQ6IEZpZWxkKSB7XG5cblx0XHRmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcblxuXHRcdFx0dGhpcy52YWx1ZXMucHVzaChcblx0XHRcdFx0bmV3IFVuaXF1ZVZhbHVlKFxuXHRcdFx0XHRcdFVuaXF1ZVZhbHVlSWRHZW5lcmF0b3IuZ2VuZXJhdGUoKSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRmaWVsZC5nZXREaXNwbGF5VmFsdWUodmFsdWUpLFxuXHRcdFx0XHRcdHRydWVcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxEaXNhYmxlZCgpO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFVuaXF1ZVZhbHVlPiB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzO1xuXHR9XG5cblx0aXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxTZWxlY3RlZDtcblx0fVxuXG5cdGlzQWxsRGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsRGlzYWJsZWQ7XG5cdH1cblxuXHRnZXROb3RTZWxlY3RlZCgpOiBBcnJheTxVbmlxdWVWYWx1ZT4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5maWx0ZXIoKHV2OiBVbmlxdWVWYWx1ZSkgPT4gdXYuaXNEaXNhYmxlZCgpKTtcblx0fVxuXG5cdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5mb3JFYWNoKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdHV2LnNlbGVjdCgpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSB0cnVlO1xuXHRcdHRoaXMuYWxsRGlzYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdHNlbGVjdCh1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnZhbHVlc1xuXHRcdFx0LmZpbHRlcigodXYpID0+IHV2LmdldElkKCkuZXF1YWxzKHVuaXF1ZVZhbHVlSWQpKVxuXHRcdFx0LmZvckVhY2goKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0XHR1di5zZWxlY3QoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxTZWxlY3RlZCgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlQWxsRGlzYWJsZWQoKTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzLmZvckVhY2goKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0dXYudW5zZWxlY3QoKTtcblx0XHR9KTtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gZmFsc2U7XG5cdFx0dGhpcy5hbGxEaXNhYmxlZCA9IHRydWU7XG5cdH1cblxuXHR1bnNlbGVjdCh1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnZhbHVlc1xuXHRcdFx0LmZpbHRlcigodXYpID0+IHV2LmdldElkKCkuZXF1YWxzKHVuaXF1ZVZhbHVlSWQpKVxuXHRcdFx0LmZvckVhY2goKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0XHR1di51bnNlbGVjdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxEaXNhYmxlZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVBbGxTZWxlY3RlZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gIXRoaXMudmFsdWVzLnNvbWUoKGY6IFVuaXF1ZVZhbHVlKSA9PiBmLmlzRGlzYWJsZWQoKSk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUFsbERpc2FibGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWxsRGlzYWJsZWQgPSAhdGhpcy52YWx1ZXMuc29tZSgoZjogVW5pcXVlVmFsdWUpID0+IGYuaXNFbmFibGVkKCkpO1xuXHR9XG5cbn1cbiJdfQ==