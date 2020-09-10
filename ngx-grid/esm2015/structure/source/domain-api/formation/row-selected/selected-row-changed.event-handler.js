/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SelectedRowChangedEvent } from '../../../domain/formation/selected-row-changed.event';
import { RowSelectedRepository } from './row-selected.repository';
import { RowSelectedReadModel } from '../row-selected.read-model';
export class SelectedRowChangedEventHandler {
    /**
     * @param {?} rowSelectedRepository
     */
    constructor(rowSelectedRepository) {
        this.rowSelectedRepository = rowSelectedRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return SelectedRowChangedEvent;
    }
    /**
     * @param {?} rowChangedEvent
     * @return {?}
     */
    handle(rowChangedEvent) {
        if (rowChangedEvent.ofMessageType('SelectedRowChangedEvent')) {
            /** @type {?} */
            const rowSelectedRead = new RowSelectedReadModel(rowChangedEvent.getSelectedRows(), rowChangedEvent.isAllSelected(), rowChangedEvent.isAllUnselected());
            this.rowSelectedRepository.next(rowChangedEvent.getAggregateId(), rowSelectedRead);
        }
    }
}
SelectedRowChangedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectedRowChangedEventHandler.ctorParameters = () => [
    { type: RowSelectedRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedEventHandler.prototype.rowSelectedRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQvc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUlsRSxNQUFNLE9BQU8sOEJBQThCOzs7O0lBRTFDLFlBQTZCLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ3pFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxlQUF3QztRQUU5QyxJQUFJLGVBQWUsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsRUFBRTs7a0JBRXZELGVBQWUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQUUsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXZKLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7O1lBbEJELFVBQVU7Ozs7WUFMRixxQkFBcUI7Ozs7Ozs7SUFRakIsK0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi4vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3RlZFJlcG9zaXRvcnk6IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKHJvd0NoYW5nZWRFdmVudDogU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChyb3dDaGFuZ2VkRXZlbnQub2ZNZXNzYWdlVHlwZSgnU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCByb3dTZWxlY3RlZFJlYWQgPSBuZXcgUm93U2VsZWN0ZWRSZWFkTW9kZWwocm93Q2hhbmdlZEV2ZW50LmdldFNlbGVjdGVkUm93cygpLCByb3dDaGFuZ2VkRXZlbnQuaXNBbGxTZWxlY3RlZCgpLCByb3dDaGFuZ2VkRXZlbnQuaXNBbGxVbnNlbGVjdGVkKCkpO1xuXG5cdFx0XHR0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeS5uZXh0KHJvd0NoYW5nZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCByb3dTZWxlY3RlZFJlYWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=