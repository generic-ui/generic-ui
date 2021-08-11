/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var FabricDatePickerService = /** @class */ (function () {
    function FabricDatePickerService() {
        this.selectedDate = new Date();
        this.selectedDate$ = new BehaviorSubject(this.selectedDate);
    }
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.observeSelectedDate = /**
     * @return {?}
     */
    function () {
        return this.selectedDate$.asObservable();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerService.prototype.dateSelected = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectedDate = new Date(date.getTime());
        this.setSelectedDateTime();
        this.selectedDate$.next(this.selectedDate);
    };
    /**
     * @param {?} timeValues
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerService.prototype.changeTime = /**
     * @param {?} timeValues
     * @param {?} date
     * @return {?}
     */
    function (timeValues, date) {
        this.selectedTime = timeValues;
        if (!this.selectedDate) {
            this.selectedDate = date;
        }
        this.setSelectedDateTime();
    };
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.next = /**
     * @return {?}
     */
    function () {
        this.dateSelected(this.selectedDate);
    };
    /**
     * @private
     * @return {?}
     */
    FabricDatePickerService.prototype.setSelectedDateTime = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.selectedTime) {
            this.selectedDate.setHours(this.selectedTime.hours);
            this.selectedDate.setMinutes(this.selectedTime.minutes);
            this.selectedDate.setSeconds(this.selectedTime.seconds);
        }
    };
    FabricDatePickerService.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerService;
}());
export { FabricDatePickerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.selectedDate;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.selectedTime;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.selectedDate$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHbkQ7SUFBQTtRQUdTLGlCQUFZLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUl2QixrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQStCekUsQ0FBQzs7OztJQTdCQSxxREFBbUI7OztJQUFuQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELDhDQUFZOzs7O0lBQVosVUFBYSxJQUFVO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVELDRDQUFVOzs7OztJQUFWLFVBQVcsVUFBNEIsRUFBRSxJQUFVO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHNDQUFJOzs7SUFBSjtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRU8scURBQW1COzs7O0lBQTNCO1FBQ0MsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hEO0lBQ0YsQ0FBQzs7Z0JBckNELFVBQVU7O0lBc0NYLDhCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FyQ1ksdUJBQXVCOzs7Ozs7SUFFbkMsK0NBQXdDOzs7OztJQUV4QywrQ0FBdUM7Ozs7O0lBRXZDLGdEQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmFicmljVGltZVZhbHVlcyB9IGZyb20gJy4vbW9kZWxzL2ZhYnJpYy10aW1lLXZhbHVlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdHByaXZhdGUgc2VsZWN0ZWRUaW1lOiBGYWJyaWNUaW1lVmFsdWVzO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0ZWREYXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5zZWxlY3RlZERhdGUpO1xuXG5cdG9ic2VydmVTZWxlY3RlZERhdGUoKTogT2JzZXJ2YWJsZTxEYXRlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWREYXRlJC5hc09ic2VydmFibGUoKTtcblx0fVxuXG5cdGRhdGVTZWxlY3RlZChkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG5cdFx0dGhpcy5zZXRTZWxlY3RlZERhdGVUaW1lKCk7XG5cdFx0dGhpcy5zZWxlY3RlZERhdGUkLm5leHQodGhpcy5zZWxlY3RlZERhdGUpO1xuXHR9XG5cblx0Y2hhbmdlVGltZSh0aW1lVmFsdWVzOiBGYWJyaWNUaW1lVmFsdWVzLCBkYXRlOiBEYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFRpbWUgPSB0aW1lVmFsdWVzO1xuXHRcdGlmICghdGhpcy5zZWxlY3RlZERhdGUpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTZWxlY3RlZERhdGVUaW1lKCk7XG5cdH1cblxuXHRuZXh0KCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVNlbGVjdGVkKHRoaXMuc2VsZWN0ZWREYXRlKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0U2VsZWN0ZWREYXRlVGltZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zZWxlY3RlZFRpbWUpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlLnNldEhvdXJzKHRoaXMuc2VsZWN0ZWRUaW1lLmhvdXJzKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlLnNldE1pbnV0ZXModGhpcy5zZWxlY3RlZFRpbWUubWludXRlcyk7XG5cdFx0XHR0aGlzLnNlbGVjdGVkRGF0ZS5zZXRTZWNvbmRzKHRoaXMuc2VsZWN0ZWRUaW1lLnNlY29uZHMpO1xuXHRcdH1cblx0fVxufVxuIl19