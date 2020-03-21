/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FabricInlineDialogService } from '../../layout/inline-dialog/fabric-inline-dialog.service';
export class FabricDatePickerInlineDialogService {
    /**
     * @param {?} fabricInlineDialogService
     */
    constructor(fabricInlineDialogService) {
        this.fabricInlineDialogService = fabricInlineDialogService;
    }
    /**
     * @param {?} element
     * @param {?} component
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    open(element, component, injector, placement, offset) {
        this.fabricInlineDialogService.open(element, component);
    }
    /**
     * @return {?}
     */
    close() {
        this.fabricInlineDialogService.close();
    }
    /**
     * @return {?}
     */
    isOpened() {
        return this.fabricInlineDialogService.isOpened();
    }
    /**
     * @return {?}
     */
    onOpened() {
        return this.fabricInlineDialogService.onOpened();
    }
}
FabricDatePickerInlineDialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FabricDatePickerInlineDialogService.ctorParameters = () => [
    { type: FabricInlineDialogService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerInlineDialogService.prototype.fabricInlineDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFJcEcsTUFBTSxPQUFPLG1DQUFtQzs7OztJQUUvQyxZQUE2Qix5QkFBb0Q7UUFBcEQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUNqRixDQUFDOzs7Ozs7Ozs7SUFFRCxJQUFJLENBQUMsT0FBbUIsRUFBRSxTQUFvQixFQUFFLFFBQW1CLEVBQUUsU0FBaUMsRUFBRSxNQUFlO1FBQ3RILElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7WUFwQkQsVUFBVTs7OztZQUhGLHlCQUF5Qjs7Ozs7OztJQU1yQix3RUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBJbmxpbmVEaWFsb2dQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvaW5saW5lLWRpYWxvZy9wbGFjZW1lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmFicmljSW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkge1xuXHR9XG5cblx0b3BlbihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnQ6IFR5cGU8YW55PiwgaW5qZWN0b3I/OiBJbmplY3RvciwgcGxhY2VtZW50PzogSW5saW5lRGlhbG9nUGxhY2VtZW50LCBvZmZzZXQ/OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2Uub3BlbihlbGVtZW50LCBjb21wb25lbnQpO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRpc09wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLmlzT3BlbmVkKCk7XG5cdH1cblxuXHRvbk9wZW5lZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLm9uT3BlbmVkKCk7XG5cdH1cblxufVxuIl19