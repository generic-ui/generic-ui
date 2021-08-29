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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbEUsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUUxQyxZQUE2QixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUN6RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsZUFBd0M7UUFFOUMsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7O2tCQUV2RCxlQUFlLEdBQUcsSUFBSSxvQkFBb0IsQ0FDL0MsZUFBZSxDQUFDLGVBQWUsRUFBRSxFQUNqQyxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQy9CLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FDakM7WUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7OztZQXRCRCxVQUFVOzs7O1lBTEYscUJBQXFCOzs7Ozs7O0lBUWpCLCtEQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yb3ctc2VsZWN0ZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4uL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0ZWRSZXBvc2l0b3J5OiBSb3dTZWxlY3RlZFJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTZWxlY3RlZFJvd0NoYW5nZWRFdmVudD4ge1xuXHRcdHJldHVybiBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShyb3dDaGFuZ2VkRXZlbnQ6IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAocm93Q2hhbmdlZEV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NlbGVjdGVkUm93Q2hhbmdlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3Qgcm93U2VsZWN0ZWRSZWFkID0gbmV3IFJvd1NlbGVjdGVkUmVhZE1vZGVsKFxuXHRcdFx0XHRyb3dDaGFuZ2VkRXZlbnQuZ2V0U2VsZWN0ZWRSb3dzKCksXG5cdFx0XHRcdHJvd0NoYW5nZWRFdmVudC5pc0FsbFNlbGVjdGVkKCksXG5cdFx0XHRcdHJvd0NoYW5nZWRFdmVudC5pc0FsbFVuc2VsZWN0ZWQoKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5yb3dTZWxlY3RlZFJlcG9zaXRvcnkubmV4dChyb3dDaGFuZ2VkRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgcm93U2VsZWN0ZWRSZWFkKTtcblx0XHR9XG5cdH1cblxufVxuIl19