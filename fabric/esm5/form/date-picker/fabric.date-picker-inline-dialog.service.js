/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FabricInlineDialogService } from '../../modal/inline-dialog/fabric-inline-dialog.service';
import { Theme } from '../../themes/theme';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
var FabricDatePickerInlineDialogService = /** @class */ (function () {
    function FabricDatePickerInlineDialogService(fabricInlineDialogService) {
        this.fabricInlineDialogService = fabricInlineDialogService;
    }
    /**
     * @param {?} element
     * @param {?} component
     * @param {?=} datePickerThem
     * @return {?}
     */
    FabricDatePickerInlineDialogService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @param {?=} datePickerThem
     * @return {?}
     */
    function (element, component, datePickerThem) {
        /** @type {?} */
        var theme = Theme.FABRIC;
        if (datePickerThem) {
            theme = datePickerThem;
        }
        this.fabricInlineDialogService.open(element, component, { placement: FabricPlacement.BOTTOM, offset: 0, theme: theme });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTVFO0lBR0MsNkNBQTZCLHlCQUFvRDtRQUFwRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ2pGLENBQUM7Ozs7Ozs7SUFFRCxrREFBSTs7Ozs7O0lBQUosVUFBSyxPQUFtQixFQUN0QixTQUFvQixFQUNwQixjQUFzQjs7WUFDbkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBRXhCLElBQUksY0FBYyxFQUFFO1lBQ25CLEtBQUssR0FBRyxjQUFjLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztJQUNsSCxDQUFDOzs7O0lBRUQsbURBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxzREFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsc0RBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Z0JBNUJELFVBQVU7Ozs7Z0JBSkYseUJBQXlCOztJQWtDbEMsMENBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSxtQ0FBbUM7Ozs7OztJQUVuQyx3RUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RhbC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgRmFicmljUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1wbGFjZW1lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmFicmljSW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkge1xuXHR9XG5cblx0b3BlbihlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdCBjb21wb25lbnQ6IFR5cGU8YW55Pixcblx0XHQgZGF0ZVBpY2tlclRoZW0/OiBUaGVtZSk6IHZvaWQge1xuXHRcdGxldCB0aGVtZSA9IFRoZW1lLkZBQlJJQztcblxuXHRcdGlmIChkYXRlUGlja2VyVGhlbSkge1xuXHRcdFx0dGhlbWUgPSBkYXRlUGlja2VyVGhlbTtcblx0XHR9XG5cblx0XHR0aGlzLmZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2Uub3BlbihlbGVtZW50LCBjb21wb25lbnQsIHsgcGxhY2VtZW50OiBGYWJyaWNQbGFjZW1lbnQuQk9UVE9NLCBvZmZzZXQ6IDAsIHRoZW1lIH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRpc09wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLmlzT3BlbmVkKCk7XG5cdH1cblxuXHRvbk9wZW5lZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLm9uT3BlbmVkKCk7XG5cdH1cblxufVxuIl19