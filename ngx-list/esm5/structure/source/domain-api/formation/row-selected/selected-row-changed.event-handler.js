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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQvc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdsRTtJQUdDLHdDQUE2QixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUN6RSxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQ0MsT0FBTyx1QkFBdUIsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELCtDQUFNOzs7O0lBQU4sVUFBTyxlQUF3QztRQUU5QyxJQUFJLGVBQWUsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsRUFBRTs7Z0JBRXZELGVBQWUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQUUsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXZKLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBTEYscUJBQXFCOztJQXlCOUIscUNBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSw4QkFBOEI7Ozs7OztJQUU5QiwrREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vcm93LXNlbGVjdGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuLi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGVkUmVwb3NpdG9yeTogUm93U2VsZWN0ZWRSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQ+IHtcblx0XHRyZXR1cm4gU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUocm93Q2hhbmdlZEV2ZW50OiBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKHJvd0NoYW5nZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHJvd1NlbGVjdGVkUmVhZCA9IG5ldyBSb3dTZWxlY3RlZFJlYWRNb2RlbChyb3dDaGFuZ2VkRXZlbnQuZ2V0U2VsZWN0ZWRSb3dzKCksIHJvd0NoYW5nZWRFdmVudC5pc0FsbFNlbGVjdGVkKCksIHJvd0NoYW5nZWRFdmVudC5pc0FsbFVuc2VsZWN0ZWQoKSk7XG5cblx0XHRcdHRoaXMucm93U2VsZWN0ZWRSZXBvc2l0b3J5Lm5leHQocm93Q2hhbmdlZEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHJvd1NlbGVjdGVkUmVhZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==