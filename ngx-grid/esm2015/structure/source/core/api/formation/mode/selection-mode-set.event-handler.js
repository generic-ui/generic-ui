/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SelectionModeSetEvent } from '../../../domain/formation/mode/selection-mode-set.event';
import { RowSelectionModeRepository } from './row-selection-mode.repository';
export class SelectionModeSetEventHandler {
    /**
     * @param {?} rowSelectionModeRepository
     */
    constructor(rowSelectionModeRepository) {
        this.rowSelectionModeRepository = rowSelectionModeRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return SelectionModeSetEvent;
    }
    /**
     * @param {?} modeSetEvent
     * @return {?}
     */
    handle(modeSetEvent) {
        if (modeSetEvent.ofMessageType('SelectionModeSetEvent')) {
            this.rowSelectionModeRepository.next(modeSetEvent.getAggregateId(), modeSetEvent.getMode());
        }
    }
}
SelectionModeSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectionModeSetEventHandler.ctorParameters = () => [
    { type: RowSelectionModeRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectionModeSetEventHandler.prototype.rowSelectionModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL21vZGUvc2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHN0UsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUV4QyxZQUE2QiwwQkFBc0Q7UUFBdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUNuRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsWUFBbUM7UUFFekMsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDNUY7SUFDRixDQUFDOzs7WUFmRCxVQUFVOzs7O1lBRkYsMEJBQTBCOzs7Ozs7O0lBS3RCLGtFQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlU2V0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL21vZGUvc2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50JztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9yb3ctc2VsZWN0aW9uLW1vZGUucmVwb3NpdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Nb2RlU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTZWxlY3Rpb25Nb2RlU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5OiBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFNlbGVjdGlvbk1vZGVTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTZWxlY3Rpb25Nb2RlU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUobW9kZVNldEV2ZW50OiBTZWxlY3Rpb25Nb2RlU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChtb2RlU2V0RXZlbnQub2ZNZXNzYWdlVHlwZSgnU2VsZWN0aW9uTW9kZVNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMucm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkubmV4dChtb2RlU2V0RXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgbW9kZVNldEV2ZW50LmdldE1vZGUoKSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==