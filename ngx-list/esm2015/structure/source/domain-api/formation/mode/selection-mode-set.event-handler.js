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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vbW9kZS9zZWxlY3Rpb24tbW9kZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUc3RSxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBRXhDLFlBQTZCLDBCQUFzRDtRQUF0RCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBQ25GLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxZQUFtQztRQUV6QyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsRUFBRSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM1RjtJQUNGLENBQUM7OztZQWZELFVBQVU7Ozs7WUFGRiwwQkFBMEI7Ozs7Ozs7SUFLdEIsa0VBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVTZXRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vbW9kZS9zZWxlY3Rpb24tbW9kZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFNlbGVjdGlvbk1vZGVTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnk6IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U2VsZWN0aW9uTW9kZVNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFNlbGVjdGlvbk1vZGVTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShtb2RlU2V0RXZlbnQ6IFNlbGVjdGlvbk1vZGVTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKG1vZGVTZXRFdmVudC5vZk1lc3NhZ2VUeXBlKCdTZWxlY3Rpb25Nb2RlU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5yb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeS5uZXh0KG1vZGVTZXRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBtb2RlU2V0RXZlbnQuZ2V0TW9kZSgpKTtcblx0XHR9XG5cdH1cblxufVxuIl19