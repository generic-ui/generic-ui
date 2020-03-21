/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FabricInlineDialogService } from '../../layout/inline-dialog/fabric-inline-dialog.service';
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
        this.fabricInlineDialogService.open(element, component);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHcEc7SUFHQyw2Q0FBNkIseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDakYsQ0FBQzs7Ozs7Ozs7O0lBRUQsa0RBQUk7Ozs7Ozs7O0lBQUosVUFBSyxPQUFtQixFQUFFLFNBQW9CLEVBQUUsUUFBbUIsRUFBRSxTQUFpQyxFQUFFLE1BQWU7UUFDdEgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELG1EQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsc0RBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELHNEQUFROzs7SUFBUjtRQUNDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xELENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQUhGLHlCQUF5Qjs7SUF5QmxDLDBDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksbUNBQW1DOzs7Ozs7SUFFbkMsd0VBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2xheW91dC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vbGF5b3V0L2lubGluZS1kaWFsb2cvcGxhY2VtZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2U6IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UpIHtcblx0fVxuXG5cdG9wZW4oZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50OiBUeXBlPGFueT4sIGluamVjdG9yPzogSW5qZWN0b3IsIHBsYWNlbWVudD86IElubGluZURpYWxvZ1BsYWNlbWVudCwgb2Zmc2V0PzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLm9wZW4oZWxlbWVudCwgY29tcG9uZW50KTtcblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMuZmFicmljSW5saW5lRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0aXNPcGVuZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmFicmljSW5saW5lRGlhbG9nU2VydmljZS5pc09wZW5lZCgpO1xuXHR9XG5cblx0b25PcGVuZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmFicmljSW5saW5lRGlhbG9nU2VydmljZS5vbk9wZW5lZCgpO1xuXHR9XG5cbn1cbiJdfQ==