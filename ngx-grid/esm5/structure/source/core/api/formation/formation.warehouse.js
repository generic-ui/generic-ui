/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { hermesMap } from '@generic-ui/hermes';
import { RowSelectedRepository } from './row-selected/row-selected.repository';
import { RowSelectionModeRepository } from './mode/row-selection-mode.repository';
import { SelectedRow } from './selected-row';
import { SourceWarehouse } from '../source.warehouse';
var FormationWarehouse = /** @class */ (function () {
    function FormationWarehouse(rowSelectedRepository, rowSelectionModeRepository, sourceWarehouse) {
        this.rowSelectedRepository = rowSelectedRepository;
        this.rowSelectionModeRepository = rowSelectionModeRepository;
        this.sourceWarehouse = sourceWarehouse;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.getSelectedRows = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        /** @type {?} */
        var items = this.sourceWarehouse.getPreparedEntities(structureId);
        /** @type {?} */
        var selectedItemIds = this.getSelectedItemIds(structureId);
        /** @type {?} */
        var selectedItems = [];
        /** @type {?} */
        var length = items.length;
        var _loop_1 = function (i) {
            /** @type {?} */
            var item = items[i];
            if (selectedItemIds.some((/**
             * @param {?} itemId
             * @return {?}
             */
            function (itemId) { return itemId === item.getId().toString(); }))) {
                selectedItems.push(new SelectedRow(item.getData(), i, item.getId()));
            }
        };
        for (var i = 0; i < length; i += 1) {
            _loop_1(i);
        }
        return selectedItems;
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.onRowSelectedReadModel = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.rowSelectedRepository
            .on(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.getSelectedItemIds = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.rowSelectedRepository.get(structureId).getValueOrNullOrThrowError().getAll();
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.onSelectedRows = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.rowSelectedRepository
            .on(structureId)
            .pipe(hermesMap((/**
         * @param {?} rm
         * @return {?}
         */
        function (rm) {
            return rm.getAll();
        })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.onMode = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.rowSelectionModeRepository.on(structureId);
    };
    FormationWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationWarehouse.ctorParameters = function () { return [
        { type: RowSelectedRepository },
        { type: RowSelectionModeRepository },
        { type: SourceWarehouse }
    ]; };
    return FormationWarehouse;
}());
export { FormationWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationWarehouse.prototype.rowSelectedRepository;
    /**
     * @type {?}
     * @private
     */
    FormationWarehouse.prototype.rowSelectionModeRepository;
    /**
     * @type {?}
     * @private
     */
    FormationWarehouse.prototype.sourceWarehouse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUErQixNQUFNLG9CQUFvQixDQUFDO0FBRzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRS9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdEQ7SUFHQyw0QkFBNkIscUJBQTRDLEVBQ3JELDBCQUFzRCxFQUN0RCxlQUFnQztRQUZ2QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3JELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3BELENBQUM7Ozs7O0lBRUQsNENBQWU7Ozs7SUFBZixVQUFnQixXQUF3Qjs7WUFFakMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDOztZQUNsRSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7WUFFakQsYUFBYSxHQUFHLEVBQUU7O1lBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtnQ0FFYixDQUFDOztnQkFFSCxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVyQixJQUFJLGVBQWUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxNQUFNLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFsQyxDQUFrQyxFQUFDLEVBQUU7Z0JBQ2pGLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JFOztRQU5GLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQXpCLENBQUM7U0FPVDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsbURBQXNCOzs7O0lBQXRCLFVBQXVCLFdBQXdCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCwrQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsV0FBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLDBCQUEwQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUYsQ0FBQzs7Ozs7SUFFRCwyQ0FBYzs7OztJQUFkLFVBQWUsV0FBd0I7UUFDdEMsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJLENBQ0osU0FBUzs7OztRQUFDLFVBQUMsRUFBd0I7WUFDbEMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsbUNBQU07Ozs7SUFBTixVQUFPLFdBQXdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFoREQsVUFBVTs7OztnQkFSRixxQkFBcUI7Z0JBRXJCLDBCQUEwQjtnQkFHMUIsZUFBZTs7SUFxRHhCLHlCQUFDO0NBQUEsQUFsREQsSUFrREM7U0FqRFksa0JBQWtCOzs7Ozs7SUFFbEIsbURBQTZEOzs7OztJQUN0RSx3REFBdUU7Ozs7O0lBQ3ZFLDZDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL21vZGUvcm93LXNlbGVjdGlvbi1tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi9zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGVkUmVwb3NpdG9yeTogUm93U2VsZWN0ZWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5OiBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PFNlbGVjdGVkUm93PiB7XG5cblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuc291cmNlV2FyZWhvdXNlLmdldFByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2VsZWN0ZWRJdGVtSWRzID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW1JZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0bGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbaV07XG5cblx0XHRcdGlmIChzZWxlY3RlZEl0ZW1JZHMuc29tZSgoaXRlbUlkOiBzdHJpbmcpID0+IGl0ZW1JZCA9PT0gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaChuZXcgU2VsZWN0ZWRSb3coaXRlbS5nZXREYXRhKCksIGksIGl0ZW0uZ2V0SWQoKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtcztcblx0fVxuXG5cdG9uUm93U2VsZWN0ZWRSZWFkTW9kZWwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSb3dTZWxlY3RlZFJlYWRNb2RlbD4ge1xuXHRcdHJldHVybiB0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRJdGVtSWRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeS5nZXQoc3RydWN0dXJlSWQpLmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkuZ2V0QWxsKCk7XG5cdH1cblxuXHRvblNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3RlZFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHJtOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHJtLmdldEFsbCgpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbk1vZGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSb3dTZWxlY3Rpb25Nb2RlPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==