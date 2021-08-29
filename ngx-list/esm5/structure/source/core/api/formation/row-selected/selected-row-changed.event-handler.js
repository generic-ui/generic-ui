/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SelectedRowChangedEvent } from '../../../domain/formation/selected-row-changed.event';
import { RowSelectedRepository } from './row-selected.repository';
import { RowSelectedReadModel } from '../row-selected.read-model';
var SelectedRowChangedEventHandler = /** @class */ (function () {
    function SelectedRowChangedEventHandler(rowSelectedRepository) {
        this.rowSelectedRepository = rowSelectedRepository;
    }
    /**
     * @return {?}
     */
    SelectedRowChangedEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return SelectedRowChangedEvent;
    };
    /**
     * @param {?} rowChangedEvent
     * @return {?}
     */
    SelectedRowChangedEventHandler.prototype.handle = /**
     * @param {?} rowChangedEvent
     * @return {?}
     */
    function (rowChangedEvent) {
        if (rowChangedEvent.ofMessageType('SelectedRowChangedEvent')) {
            /** @type {?} */
            var rowSelectedRead = new RowSelectedReadModel(rowChangedEvent.getSelectedRows(), rowChangedEvent.isAllSelected(), rowChangedEvent.isAllUnselected());
            this.rowSelectedRepository.next(rowChangedEvent.getAggregateId(), rowSelectedRead);
        }
    };
    SelectedRowChangedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectedRowChangedEventHandler.ctorParameters = function () { return [
        { type: RowSelectedRepository }
    ]; };
    return SelectedRowChangedEventHandler;
}());
export { SelectedRowChangedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedEventHandler.prototype.rowSelectedRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbEU7SUFHQyx3Q0FBNkIscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDekUsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCwrQ0FBTTs7OztJQUFOLFVBQU8sZUFBd0M7UUFFOUMsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7O2dCQUV2RCxlQUFlLEdBQUcsSUFBSSxvQkFBb0IsQ0FDL0MsZUFBZSxDQUFDLGVBQWUsRUFBRSxFQUNqQyxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQy9CLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FDakM7WUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7O2dCQXRCRCxVQUFVOzs7O2dCQUxGLHFCQUFxQjs7SUE2QjlCLHFDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksOEJBQThCOzs7Ozs7SUFFOUIsK0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3RlZFJlcG9zaXRvcnk6IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKHJvd0NoYW5nZWRFdmVudDogU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChyb3dDaGFuZ2VkRXZlbnQub2ZNZXNzYWdlVHlwZSgnU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCByb3dTZWxlY3RlZFJlYWQgPSBuZXcgUm93U2VsZWN0ZWRSZWFkTW9kZWwoXG5cdFx0XHRcdHJvd0NoYW5nZWRFdmVudC5nZXRTZWxlY3RlZFJvd3MoKSxcblx0XHRcdFx0cm93Q2hhbmdlZEV2ZW50LmlzQWxsU2VsZWN0ZWQoKSxcblx0XHRcdFx0cm93Q2hhbmdlZEV2ZW50LmlzQWxsVW5zZWxlY3RlZCgpXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeS5uZXh0KHJvd0NoYW5nZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCByb3dTZWxlY3RlZFJlYWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=