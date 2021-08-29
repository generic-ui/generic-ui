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
        for (const value of values) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJckUsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFRakMsWUFBWSxNQUFrQixFQUMzQixLQUFZO1FBUEUsV0FBTSxHQUF1QixFQUFFLENBQUM7UUFTaEQsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFFM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2YsSUFBSSxXQUFXLENBQ2Qsc0JBQXNCLENBQUMsUUFBUSxFQUFFLEVBQ2pDLEtBQUssRUFDTCxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUM1QixJQUFJLENBQ0osQ0FDRCxDQUFDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtZQUN2QyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGFBQTRCO1FBRWxDLElBQUksQ0FBQyxNQUFNO2FBQ1QsTUFBTTs7OztRQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDO2FBQ2hELE9BQU87Ozs7UUFBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO1lBQzVCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO1lBQ3ZDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsYUFBNEI7UUFFcEMsSUFBSSxDQUFDLE1BQU07YUFDVCxNQUFNOzs7O1FBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUM7YUFDaEQsT0FBTzs7OztRQUFDLENBQUMsRUFBZSxFQUFFLEVBQUU7WUFDNUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVPLG9CQUFvQjtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQUM7SUFDekUsQ0FBQztDQUVEOzs7Ozs7SUF6RkEsdUNBQWlEOzs7OztJQUVqRCw0Q0FBNkI7Ozs7O0lBRTdCLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZEdlbmVyYXRvciB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLmlkLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzOiBBcnJheTxVbmlxdWVWYWx1ZT4gPSBbXTtcblxuXHRwcml2YXRlIGFsbFNlbGVjdGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgYWxsRGlzYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IodmFsdWVzOiBBcnJheTxhbnk+LFxuXHRcdFx0XHRmaWVsZDogRmllbGQpIHtcblxuXHRcdGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG5cblx0XHRcdHRoaXMudmFsdWVzLnB1c2goXG5cdFx0XHRcdG5ldyBVbmlxdWVWYWx1ZShcblx0XHRcdFx0XHRVbmlxdWVWYWx1ZUlkR2VuZXJhdG9yLmdlbmVyYXRlKCksXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0ZmllbGQuZ2V0RGlzcGxheVZhbHVlKHZhbHVlKSxcblx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxTZWxlY3RlZCgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlQWxsRGlzYWJsZWQoKTtcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxVbmlxdWVWYWx1ZT4ge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcztcblx0fVxuXG5cdGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsU2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0FsbERpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbERpc2FibGVkO1xuXHR9XG5cblx0Z2V0Tm90U2VsZWN0ZWQoKTogQXJyYXk8VW5pcXVlVmFsdWU+IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuZmlsdGVyKCh1djogVW5pcXVlVmFsdWUpID0+IHV2LmlzRGlzYWJsZWQoKSk7XG5cdH1cblxuXHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy52YWx1ZXMuZm9yRWFjaCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHR1di5zZWxlY3QoKTtcblx0XHR9KTtcblx0XHR0aGlzLmFsbFNlbGVjdGVkID0gdHJ1ZTtcblx0XHR0aGlzLmFsbERpc2FibGVkID0gZmFsc2U7XG5cdH1cblxuXHRzZWxlY3QodW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy52YWx1ZXNcblx0XHRcdC5maWx0ZXIoKHV2KSA9PiB1di5nZXRJZCgpLmVxdWFscyh1bmlxdWVWYWx1ZUlkKSlcblx0XHRcdC5mb3JFYWNoKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdFx0dXYuc2VsZWN0KCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTtcblx0XHR0aGlzLmNhbGN1bGF0ZUFsbERpc2FibGVkKCk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHR0aGlzLnZhbHVlcy5mb3JFYWNoKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdHV2LnVuc2VsZWN0KCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdHRoaXMuYWxsRGlzYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0dW5zZWxlY3QodW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy52YWx1ZXNcblx0XHRcdC5maWx0ZXIoKHV2KSA9PiB1di5nZXRJZCgpLmVxdWFscyh1bmlxdWVWYWx1ZUlkKSlcblx0XHRcdC5mb3JFYWNoKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdFx0dXYudW5zZWxlY3QoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jYWxjdWxhdGVBbGxTZWxlY3RlZCgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlQWxsRGlzYWJsZWQoKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlQWxsU2VsZWN0ZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hbGxTZWxlY3RlZCA9ICF0aGlzLnZhbHVlcy5zb21lKChmOiBVbmlxdWVWYWx1ZSkgPT4gZi5pc0Rpc2FibGVkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVBbGxEaXNhYmxlZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFsbERpc2FibGVkID0gIXRoaXMudmFsdWVzLnNvbWUoKGY6IFVuaXF1ZVZhbHVlKSA9PiBmLmlzRW5hYmxlZCgpKTtcblx0fVxuXG59XG4iXX0=