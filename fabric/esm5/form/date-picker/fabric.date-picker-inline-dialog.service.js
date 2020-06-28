/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FabricInlineDialogService } from '../../modal/inline-dialog/fabric-inline-dialog.service';
import { InlineDialogPlacement } from '../../modal/inline-dialog/placement';
var FabricDatePickerInlineDialogService = /** @class */ (function () {
    function FabricDatePickerInlineDialogService(fabricInlineDialogService) {
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
    FabricDatePickerInlineDialogService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @param {?=} injector
     * @param {?=} placement
     * @param {?=} offset
     * @return {?}
     */
    function (element, component, injector, placement, offset) {
        this.fabricInlineDialogService.open(element, component, { placement: InlineDialogPlacement.Bottom, offset: 0 });
    };
    /**
     * @return {?}
     */
    FabricDatePickerInlineDialogService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.fabricInlineDialogService.close();
    };
    /**
     * @return {?}
     */
    FabricDatePickerInlineDialogService.prototype.isOpened = /**
     * @return {?}
     */
    function () {
        return this.fabricInlineDialogService.isOpened();
    };
    /**
     * @return {?}
     */
    FabricDatePickerInlineDialogService.prototype.onOpened = /**
     * @return {?}
     */
    function () {
        return this.fabricInlineDialogService.onOpened();
    };
    FabricDatePickerInlineDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricDatePickerInlineDialogService.ctorParameters = function () { return [
        { type: FabricInlineDialogService }
    ]; };
    return FabricDatePickerInlineDialogService;
}());
export { FabricDatePickerInlineDialogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerInlineDialogService.prototype.fabricInlineDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFNUU7SUFHQyw2Q0FBNkIseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDakYsQ0FBQzs7Ozs7Ozs7O0lBRUQsa0RBQUk7Ozs7Ozs7O0lBQUosVUFBSyxPQUFtQixFQUFFLFNBQW9CLEVBQUUsUUFBbUIsRUFBRSxTQUFpQyxFQUFFLE1BQWU7UUFDdEgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqSCxDQUFDOzs7O0lBRUQsbURBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxzREFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsc0RBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Z0JBcEJELFVBQVU7Ozs7Z0JBSEYseUJBQXlCOztJQXlCbEMsMENBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSxtQ0FBbUM7Ozs7OztJQUVuQyx3RUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kYWwvaW5saW5lLWRpYWxvZy9mYWJyaWMtaW5saW5lLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IElubGluZURpYWxvZ1BsYWNlbWVudCB9IGZyb20gJy4uLy4uL21vZGFsL2lubGluZS1kaWFsb2cvcGxhY2VtZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UpIHtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPGFueT4sIGluamVjdG9yPzogSW5qZWN0b3IsIHBsYWNlbWVudD86IElubGluZURpYWxvZ1BsYWNlbWVudCwgb2Zmc2V0PzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLm9wZW4oZWxlbWVudCwgY29tcG9uZW50LCB7IHBsYWNlbWVudDogSW5saW5lRGlhbG9nUGxhY2VtZW50LkJvdHRvbSwgb2Zmc2V0OiAwIH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRpc09wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLmlzT3BlbmVkKCk7XG5cdH1cblxuXHRvbk9wZW5lZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLm9uT3BlbmVkKCk7XG5cdH1cblxufVxuIl19