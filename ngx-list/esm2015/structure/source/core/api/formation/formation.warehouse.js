/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { structureGlobalId } from '../../../../core/api/structure.global-id';
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
     * @param {?=} structureId
     * @return {?}
     */
    getSelectedRows(structureId = structureGlobalId) {
        /** @type {?} */
        const items = this.sourceWarehouse.getPreparedEntities(structureId);
        /** @type {?} */
        const selectedItemIds = this.getSelectedItemIds(structureId);
        /** @type {?} */
        let selectedItems = [];
        /** @type {?} */
        let length = items.length;
        for (let i = 0; i < length; i += 1) {
            /** @type {?} */
            let item = items[i];
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
     * @param {?=} structureId
     * @return {?}
     */
    onRowSelectedReadModel(structureId = structureGlobalId) {
        return this.rowSelectedRepository
            .on(structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    getSelectedItemIds(structureId = structureGlobalId) {
        return this.rowSelectedRepository.get(structureId).getAll();
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onSelectedRows(structureId = structureGlobalId) {
        return this.rowSelectedRepository
            .on(structureId)
            .pipe(map((/**
         * @param {?} rm
         * @return {?}
         */
        (rm) => {
            return rm.getAll();
        })));
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onMode(structureId = structureGlobalId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl0RCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFFOUIsWUFBNkIscUJBQTRDLEVBQ3JELDBCQUFzRCxFQUN0RCxlQUFnQztRQUZ2QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3JELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3BELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLGNBQTJCLGlCQUFpQjs7Y0FFckQsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDOztjQUNsRSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7WUFFbkQsYUFBYSxHQUFHLEVBQUU7O1lBQ3JCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtRQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUUvQixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVuQixJQUFJLGVBQWUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRTtnQkFDakYsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDRDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsY0FBMkIsaUJBQWlCO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxjQUEyQixpQkFBaUI7UUFDOUQsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGNBQTJCLGlCQUFpQjtRQUMxRCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxFQUF3QixFQUFFLEVBQUU7WUFDaEMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGNBQTJCLGlCQUFpQjtRQUNsRCxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBaERELFVBQVU7Ozs7WUFSRixxQkFBcUI7WUFFckIsMEJBQTBCO1lBRzFCLGVBQWU7Ozs7Ozs7SUFNWCxtREFBNkQ7Ozs7O0lBQ3RFLHdEQUF1RTs7Ozs7SUFDdkUsNkNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9tb2RlL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vc291cmNlLndhcmVob3VzZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbldhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3RlZFJlcG9zaXRvcnk6IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeTogUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UpIHtcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IEFycmF5PFNlbGVjdGVkUm93PiB7XG5cblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuc291cmNlV2FyZWhvdXNlLmdldFByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2VsZWN0ZWRJdGVtSWRzID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW1JZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0bGV0IHNlbGVjdGVkSXRlbXMgPSBbXSxcblx0XHRcdGxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblxuXHRcdFx0bGV0IGl0ZW0gPSBpdGVtc1tpXTtcblxuXHRcdFx0aWYgKHNlbGVjdGVkSXRlbUlkcy5zb21lKChpdGVtSWQ6IHN0cmluZykgPT4gaXRlbUlkID09PSBpdGVtLmdldElkKCkudG9TdHJpbmcoKSkpIHtcblx0XHRcdFx0c2VsZWN0ZWRJdGVtcy5wdXNoKG5ldyBTZWxlY3RlZFJvdyhpdGVtLmdldERhdGEoKSwgaSwgaXRlbS5nZXRJZCgpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW1zO1xuXHR9XG5cblx0b25Sb3dTZWxlY3RlZFJlYWRNb2RlbChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IE9ic2VydmFibGU8Um93U2VsZWN0ZWRSZWFkTW9kZWw+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3RlZFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGdldFNlbGVjdGVkSXRlbUlkcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeS5nZXQoc3RydWN0dXJlSWQpLmdldEFsbCgpO1xuXHR9XG5cblx0b25TZWxlY3RlZFJvd3Moc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3RlZFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHJtOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHJtLmdldEFsbCgpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbk1vZGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFJvd1NlbGVjdGlvbk1vZGU+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19