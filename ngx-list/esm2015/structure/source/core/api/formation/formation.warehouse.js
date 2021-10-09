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
export class FormationWarehouse {
    /**
     * @param {?} rowSelectedRepository
     * @param {?} rowSelectionModeRepository
     * @param {?} sourceWarehouse
     */
    constructor(rowSelectedRepository, rowSelectionModeRepository, sourceWarehouse) {
        this.rowSelectedRepository = rowSelectedRepository;
        this.rowSelectionModeRepository = rowSelectionModeRepository;
        this.sourceWarehouse = sourceWarehouse;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    getSelectedRows(structureId) {
        /** @type {?} */
        const items = this.sourceWarehouse.getPreparedEntities(structureId);
        /** @type {?} */
        const selectedItemIds = this.getSelectedItemIds(structureId);
        /** @type {?} */
        const selectedItems = [];
        /** @type {?} */
        const length = items.length;
        for (let i = 0; i < length; i += 1) {
            /** @type {?} */
            const item = items[i];
            if (selectedItemIds.some((/**
             * @param {?} itemId
             * @return {?}
             */
            (itemId) => itemId === item.getId().toString()))) {
                selectedItems.push(new SelectedRow(item.getData(), i, item.getId()));
            }
        }
        return selectedItems;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onRowSelectedReadModel(structureId) {
        return this.rowSelectedRepository
            .on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    getSelectedItemIds(structureId) {
        return this.rowSelectedRepository.get(structureId).getValueOrNullOrThrowError().getAll();
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSelectedRows(structureId) {
        return this.rowSelectedRepository
            .on(structureId)
            .pipe(hermesMap((/**
         * @param {?} rm
         * @return {?}
         */
        (rm) => {
            return rm.getAll();
        })));
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onMode(structureId) {
        return this.rowSelectionModeRepository.on(structureId);
    }
}
FormationWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormationWarehouse.ctorParameters = () => [
    { type: RowSelectedRepository },
    { type: RowSelectionModeRepository },
    { type: SourceWarehouse }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUErQixNQUFNLG9CQUFvQixDQUFDO0FBRzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRS9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdEQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBRTlCLFlBQTZCLHFCQUE0QyxFQUNyRCwwQkFBc0QsRUFDdEQsZUFBZ0M7UUFGdkIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUNyRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUNwRCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxXQUF3Qjs7Y0FFakMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDOztjQUNsRSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7Y0FFakQsYUFBYSxHQUFHLEVBQUU7O2NBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtRQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUU3QixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVyQixJQUFJLGVBQWUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRTtnQkFDakYsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDRDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsV0FBd0I7UUFDOUMsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLFdBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFGLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQXdCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSSxDQUNKLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQXdCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7OztZQWhERCxVQUFVOzs7O1lBUkYscUJBQXFCO1lBRXJCLDBCQUEwQjtZQUcxQixlQUFlOzs7Ozs7O0lBTVgsbURBQTZEOzs7OztJQUN0RSx3REFBdUU7Ozs7O0lBQ3ZFLDZDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaGVybWVzTWFwLCBIZXJtZXNPYnNlcnZhYmxlLCBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL21vZGUvcm93LXNlbGVjdGlvbi1tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi9zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGVkUmVwb3NpdG9yeTogUm93U2VsZWN0ZWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5OiBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PFNlbGVjdGVkUm93PiB7XG5cblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuc291cmNlV2FyZWhvdXNlLmdldFByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2VsZWN0ZWRJdGVtSWRzID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW1JZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0bGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbaV07XG5cblx0XHRcdGlmIChzZWxlY3RlZEl0ZW1JZHMuc29tZSgoaXRlbUlkOiBzdHJpbmcpID0+IGl0ZW1JZCA9PT0gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaChuZXcgU2VsZWN0ZWRSb3coaXRlbS5nZXREYXRhKCksIGksIGl0ZW0uZ2V0SWQoKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtcztcblx0fVxuXG5cdG9uUm93U2VsZWN0ZWRSZWFkTW9kZWwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSb3dTZWxlY3RlZFJlYWRNb2RlbD4ge1xuXHRcdHJldHVybiB0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRJdGVtSWRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeS5nZXQoc3RydWN0dXJlSWQpLmdldFZhbHVlT3JOdWxsT3JUaHJvd0Vycm9yKCkuZ2V0QWxsKCk7XG5cdH1cblxuXHRvblNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3RlZFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHJtOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHJtLmdldEFsbCgpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbk1vZGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSb3dTZWxlY3Rpb25Nb2RlPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==