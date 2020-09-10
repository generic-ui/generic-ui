/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SelectionModeSetEvent } from '../../../domain/formation/mode/selection-mode-set.event';
import { RowSelectionModeRepository } from './row-selection-mode.repository';
var SelectionModeSetEventHandler = /** @class */ (function () {
    function SelectionModeSetEventHandler(rowSelectionModeRepository) {
        this.rowSelectionModeRepository = rowSelectionModeRepository;
    }
    /**
     * @return {?}
     */
    SelectionModeSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return SelectionModeSetEvent;
    };
    /**
     * @param {?} modeSetEvent
     * @return {?}
     */
    SelectionModeSetEventHandler.prototype.handle = /**
     * @param {?} modeSetEvent
     * @return {?}
     */
    function (modeSetEvent) {
        if (modeSetEvent.ofMessageType('SelectionModeSetEvent')) {
            this.rowSelectionModeRepository.next(modeSetEvent.getAggregateId(), modeSetEvent.getMode());
        }
    };
    SelectionModeSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectionModeSetEventHandler.ctorParameters = function () { return [
        { type: RowSelectionModeRepository }
    ]; };
    return SelectionModeSetEventHandler;
}());
export { SelectionModeSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectionModeSetEventHandler.prototype.rowSelectionModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vbW9kZS9zZWxlY3Rpb24tbW9kZS1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RTtJQUdDLHNDQUE2QiwwQkFBc0Q7UUFBdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUNuRixDQUFDOzs7O0lBRUQsK0NBQVE7OztJQUFSO1FBQ0MsT0FBTyxxQkFBcUIsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDZDQUFNOzs7O0lBQU4sVUFBTyxZQUFtQztRQUV6QyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsRUFBRSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM1RjtJQUNGLENBQUM7O2dCQWZELFVBQVU7Ozs7Z0JBRkYsMEJBQTBCOztJQW1CbkMsbUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSw0QkFBNEI7Ozs7OztJQUU1QixrRUFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZVNldEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9tb2RlL3NlbGVjdGlvbi1tb2RlLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4vcm93LXNlbGVjdGlvbi1tb2RlLnJlcG9zaXRvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZVNldEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU2VsZWN0aW9uTW9kZVNldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeTogUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTZWxlY3Rpb25Nb2RlU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU2VsZWN0aW9uTW9kZVNldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKG1vZGVTZXRFdmVudDogU2VsZWN0aW9uTW9kZVNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAobW9kZVNldEV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1NlbGVjdGlvbk1vZGVTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLnJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5Lm5leHQobW9kZVNldEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIG1vZGVTZXRFdmVudC5nZXRNb2RlKCkpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=