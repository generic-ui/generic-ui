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
        return this.rowSelectedRepository.get(structureId).getValueOrNullOrThrowError().getAll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl0RCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFFOUIsWUFBNkIscUJBQTRDLEVBQ3JELDBCQUFzRCxFQUN0RCxlQUFnQztRQUZ2QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3JELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3BELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLGNBQTJCLGlCQUFpQjs7Y0FFckQsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDOztjQUNsRSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7WUFFbkQsYUFBYSxHQUFHLEVBQUU7O1lBQ3JCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtRQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUUvQixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVuQixJQUFJLGVBQWUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFBRTtnQkFDakYsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDRDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsY0FBMkIsaUJBQWlCO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxjQUEyQixpQkFBaUI7UUFDOUQsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLDBCQUEwQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUYsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsY0FBMkIsaUJBQWlCO1FBQzFELE9BQU8sSUFBSSxDQUFDLHFCQUFxQjthQUMzQixFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLEVBQXdCLEVBQUUsRUFBRTtZQUNoQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsY0FBMkIsaUJBQWlCO1FBQ2xELE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUFoREQsVUFBVTs7OztZQVJGLHFCQUFxQjtZQUVyQiwwQkFBMEI7WUFHMUIsZUFBZTs7Ozs7OztJQU1YLG1EQUE2RDs7Ozs7SUFDdEUsd0RBQXVFOzs7OztJQUN2RSw2Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlcG9zaXRvcnkgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZFJlYWRNb2RlbCB9IGZyb20gJy4vcm93LXNlbGVjdGVkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuL21vZGUvcm93LXNlbGVjdGlvbi1tb2RlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi9zb3VyY2Uud2FyZWhvdXNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGVkUmVwb3NpdG9yeTogUm93U2VsZWN0ZWRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5OiBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogQXJyYXk8U2VsZWN0ZWRSb3c+IHtcblxuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5zb3VyY2VXYXJlaG91c2UuZ2V0UHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZCksXG5cdFx0XHRzZWxlY3RlZEl0ZW1JZHMgPSB0aGlzLmdldFNlbGVjdGVkSXRlbUlkcyhzdHJ1Y3R1cmVJZCk7XG5cblx0XHRsZXQgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0bGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRsZXQgaXRlbSA9IGl0ZW1zW2ldO1xuXG5cdFx0XHRpZiAoc2VsZWN0ZWRJdGVtSWRzLnNvbWUoKGl0ZW1JZDogc3RyaW5nKSA9PiBpdGVtSWQgPT09IGl0ZW0uZ2V0SWQoKS50b1N0cmluZygpKSkge1xuXHRcdFx0XHRzZWxlY3RlZEl0ZW1zLnB1c2gobmV3IFNlbGVjdGVkUm93KGl0ZW0uZ2V0RGF0YSgpLCBpLCBpdGVtLmdldElkKCkpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbXM7XG5cdH1cblxuXHRvblJvd1NlbGVjdGVkUmVhZE1vZGVsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxSb3dTZWxlY3RlZFJlYWRNb2RlbD4ge1xuXHRcdHJldHVybiB0aGlzLnJvd1NlbGVjdGVkUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRJdGVtSWRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0ZWRSZXBvc2l0b3J5LmdldChzdHJ1Y3R1cmVJZCkuZ2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKS5nZXRBbGwoKTtcblx0fVxuXG5cdG9uU2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxzdHJpbmc+PiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0ZWRSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChybTogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBybS5nZXRBbGwoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Nb2RlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxSb3dTZWxlY3Rpb25Nb2RlPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==