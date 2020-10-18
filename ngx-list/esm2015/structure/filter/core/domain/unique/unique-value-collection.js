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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJckUsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFRakMsWUFBWSxNQUFrQixFQUMzQixLQUFZO1FBUEUsV0FBTSxHQUF1QixFQUFFLENBQUM7UUFTaEQsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFFekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2YsSUFBSSxXQUFXLENBQ2Qsc0JBQXNCLENBQUMsUUFBUSxFQUFFLEVBQ2pDLEtBQUssRUFDTCxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUM1QixJQUFJLENBQ0osQ0FDRCxDQUFDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtZQUN2QyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGFBQTRCO1FBRWxDLElBQUksQ0FBQyxNQUFNO2FBQ1QsTUFBTTs7OztRQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDO2FBQ2hELE9BQU87Ozs7UUFBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO1lBQzVCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO1lBQ3ZDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsYUFBNEI7UUFFcEMsSUFBSSxDQUFDLE1BQU07YUFDVCxNQUFNOzs7O1FBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUM7YUFDaEQsT0FBTzs7OztRQUFDLENBQUMsRUFBZSxFQUFFLEVBQUU7WUFDNUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVPLG9CQUFvQjtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQUM7SUFDekUsQ0FBQztDQUVEOzs7Ozs7SUF6RkEsdUNBQWlEOzs7OztJQUVqRCw0Q0FBNkI7Ozs7O0lBRTdCLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZEdlbmVyYXRvciB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLmlkLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzOiBBcnJheTxVbmlxdWVWYWx1ZT4gPSBbXTtcblxuXHRwcml2YXRlIGFsbFNlbGVjdGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgYWxsRGlzYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IodmFsdWVzOiBBcnJheTxhbnk+LFxuXHRcdFx0XHRmaWVsZDogRmllbGQpIHtcblxuXHRcdGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuXG5cdFx0XHR0aGlzLnZhbHVlcy5wdXNoKFxuXHRcdFx0XHRuZXcgVW5pcXVlVmFsdWUoXG5cdFx0XHRcdFx0VW5pcXVlVmFsdWVJZEdlbmVyYXRvci5nZW5lcmF0ZSgpLFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdGZpZWxkLmdldERpc3BsYXlWYWx1ZSh2YWx1ZSksXG5cdFx0XHRcdFx0dHJ1ZVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZUFsbERpc2FibGVkKCk7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8VW5pcXVlVmFsdWU+IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXM7XG5cdH1cblxuXHRpc0FsbFNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkO1xuXHR9XG5cblx0aXNBbGxEaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxEaXNhYmxlZDtcblx0fVxuXG5cdGdldE5vdFNlbGVjdGVkKCk6IEFycmF5PFVuaXF1ZVZhbHVlPiB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmZpbHRlcigodXY6IFVuaXF1ZVZhbHVlKSA9PiB1di5pc0Rpc2FibGVkKCkpO1xuXHR9XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdHRoaXMudmFsdWVzLmZvckVhY2goKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0dXYuc2VsZWN0KCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IHRydWU7XG5cdFx0dGhpcy5hbGxEaXNhYmxlZCA9IGZhbHNlO1xuXHR9XG5cblx0c2VsZWN0KHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVzXG5cdFx0XHQuZmlsdGVyKCh1dikgPT4gdXYuZ2V0SWQoKS5lcXVhbHModW5pcXVlVmFsdWVJZCkpXG5cdFx0XHQuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHRcdHV2LnNlbGVjdCgpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLmNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxEaXNhYmxlZCgpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHR1di51bnNlbGVjdCgpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLmFsbERpc2FibGVkID0gdHJ1ZTtcblx0fVxuXG5cdHVuc2VsZWN0KHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudmFsdWVzXG5cdFx0XHQuZmlsdGVyKCh1dikgPT4gdXYuZ2V0SWQoKS5lcXVhbHModW5pcXVlVmFsdWVJZCkpXG5cdFx0XHQuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHRcdHV2LnVuc2VsZWN0KCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZUFsbERpc2FibGVkKCk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUFsbFNlbGVjdGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuYWxsU2VsZWN0ZWQgPSAhdGhpcy52YWx1ZXMuc29tZSgoZjogVW5pcXVlVmFsdWUpID0+IGYuaXNEaXNhYmxlZCgpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQWxsRGlzYWJsZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxEaXNhYmxlZCA9ICF0aGlzLnZhbHVlcy5zb21lKChmOiBVbmlxdWVWYWx1ZSkgPT4gZi5pc0VuYWJsZWQoKSk7XG5cdH1cblxufVxuIl19