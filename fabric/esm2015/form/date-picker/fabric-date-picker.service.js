/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class FabricDatePickerService {
    constructor() {
        this.selectedDate = new Date();
        this.selectedDate$ = new BehaviorSubject(this.selectedDate);
    }
    /**
     * @return {?}
     */
    observeSelectedDate() {
        return this.selectedDate$.asObservable();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    dateSelected(date) {
        this.selectedDate = new Date(date.getTime());
        this.setSelectedDateTime();
        this.selectedDate$.next(this.selectedDate);
    }
    /**
     * @param {?} timeValues
     * @param {?} date
     * @return {?}
     */
    changeTime(timeValues, date) {
        this.selectedTime = timeValues;
        if (!this.selectedDate) {
            this.selectedDate = date;
        }
        this.setSelectedDateTime();
    }
    /**
     * @return {?}
     */
    next() {
        this.dateSelected(this.selectedDate);
    }
    /**
     * @private
     * @return {?}
     */
    setSelectedDateTime() {
        if (this.selectedTime) {
            this.selectedDate.setHours(this.selectedTime.hours);
            this.selectedDate.setMinutes(this.selectedTime.minutes);
            this.selectedDate.setSeconds(this.selectedTime.seconds);
        }
    }
}
FabricDatePickerService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJmb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFJbkQsTUFBTSxPQUFPLHVCQUF1QjtJQURwQztRQUdTLGlCQUFZLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUl2QixrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQStCekUsQ0FBQzs7OztJQTdCQSxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVU7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLFVBQTRCLEVBQUUsSUFBVTtRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTyxtQkFBbUI7UUFDMUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hEO0lBQ0YsQ0FBQzs7O1lBckNELFVBQVU7Ozs7Ozs7SUFHViwrQ0FBd0M7Ozs7O0lBRXhDLCtDQUF1Qzs7Ozs7SUFFdkMsZ0RBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWJyaWNUaW1lVmFsdWVzIH0gZnJvbSAnLi9tb2RlbHMvZmFicmljLXRpbWUtdmFsdWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHNlbGVjdGVkRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZFRpbWU6IEZhYnJpY1RpbWVWYWx1ZXM7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZERhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cblx0b2JzZXJ2ZVNlbGVjdGVkRGF0ZSgpOiBPYnNlcnZhYmxlPERhdGU+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZERhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0ZGF0ZVNlbGVjdGVkKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcblx0XHR0aGlzLnNldFNlbGVjdGVkRGF0ZVRpbWUoKTtcblx0XHR0aGlzLnNlbGVjdGVkRGF0ZSQubmV4dCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cdH1cblxuXHRjaGFuZ2VUaW1lKHRpbWVWYWx1ZXM6IEZhYnJpY1RpbWVWYWx1ZXMsIGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHR0aGlzLnNlbGVjdGVkVGltZSA9IHRpbWVWYWx1ZXM7XG5cdFx0aWYgKCF0aGlzLnNlbGVjdGVkRGF0ZSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuXHRcdH1cblx0XHR0aGlzLnNldFNlbGVjdGVkRGF0ZVRpbWUoKTtcblx0fVxuXG5cdG5leHQoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRlU2VsZWN0ZWQodGhpcy5zZWxlY3RlZERhdGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTZWxlY3RlZERhdGVUaW1lKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkVGltZSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZERhdGUuc2V0SG91cnModGhpcy5zZWxlY3RlZFRpbWUuaG91cnMpO1xuXHRcdFx0dGhpcy5zZWxlY3RlZERhdGUuc2V0TWludXRlcyh0aGlzLnNlbGVjdGVkVGltZS5taW51dGVzKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlLnNldFNlY29uZHModGhpcy5zZWxlY3RlZFRpbWUuc2Vjb25kcyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=