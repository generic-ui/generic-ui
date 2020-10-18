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
var FormationWarehouse = /** @class */ (function () {
    function FormationWarehouse(rowSelectedRepository, rowSelectionModeRepository, sourceWarehouse) {
        this.rowSelectedRepository = rowSelectedRepository;
        this.rowSelectionModeRepository = rowSelectionModeRepository;
        this.sourceWarehouse = sourceWarehouse;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.getSelectedRows = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
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
     * @param {?=} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.onRowSelectedReadModel = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.rowSelectedRepository
            .on(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.getSelectedItemIds = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.rowSelectedRepository.get(structureId).getAll();
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.onSelectedRows = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        return this.rowSelectedRepository
            .on(structureId)
            .pipe(map((/**
         * @param {?} rm
         * @return {?}
         */
        function (rm) {
            return rm.getAll();
        })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationWarehouse.prototype.onMode = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RDtJQUdDLDRCQUE2QixxQkFBNEMsRUFDckQsMEJBQXNELEVBQ3RELGVBQWdDO1FBRnZCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDckQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDcEQsQ0FBQzs7Ozs7SUFFRCw0Q0FBZTs7OztJQUFmLFVBQWdCLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDOztZQUVyRCxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7O1lBQ2xFLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDOztZQUVuRCxhQUFhLEdBQUcsRUFBRTs7WUFDckIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO2dDQUViLENBQUM7O2dCQUVMLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRW5CLElBQUksZUFBZSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQWxDLENBQWtDLEVBQUMsRUFBRTtnQkFDakYsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDckU7O1FBTkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFBekIsQ0FBQztTQU9UO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxtREFBc0I7Ozs7SUFBdEIsVUFBdUIsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbEUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELCtDQUFrQjs7OztJQUFsQixVQUFtQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM5RCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCwyQ0FBYzs7OztJQUFkLFVBQWUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDMUQsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsRUFBd0I7WUFDNUIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsbUNBQU07Ozs7SUFBTixVQUFPLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFoREQsVUFBVTs7OztnQkFSRixxQkFBcUI7Z0JBRXJCLDBCQUEwQjtnQkFHMUIsZUFBZTs7SUFxRHhCLHlCQUFDO0NBQUEsQUFsREQsSUFrREM7U0FqRFksa0JBQWtCOzs7Ozs7SUFFbEIsbURBQTZEOzs7OztJQUN0RSx3REFBdUU7Ozs7O0lBQ3ZFLDZDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSB9IGZyb20gJy4vcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3RlZC5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeSB9IGZyb20gJy4vbW9kZS9yb3ctc2VsZWN0aW9uLW1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uL3NvdXJjZS53YXJlaG91c2UnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25XYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0ZWRSZXBvc2l0b3J5OiBSb3dTZWxlY3RlZFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnk6IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFJvd3Moc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBBcnJheTxTZWxlY3RlZFJvdz4ge1xuXG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLnNvdXJjZVdhcmVob3VzZS5nZXRQcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNlbGVjdGVkSXRlbUlkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtSWRzKHN0cnVjdHVyZUlkKTtcblxuXHRcdGxldCBzZWxlY3RlZEl0ZW1zID0gW10sXG5cdFx0XHRsZW5ndGggPSBpdGVtcy5sZW5ndGg7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGxldCBpdGVtID0gaXRlbXNbaV07XG5cblx0XHRcdGlmIChzZWxlY3RlZEl0ZW1JZHMuc29tZSgoaXRlbUlkOiBzdHJpbmcpID0+IGl0ZW1JZCA9PT0gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaChuZXcgU2VsZWN0ZWRSb3coaXRlbS5nZXREYXRhKCksIGksIGl0ZW0uZ2V0SWQoKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtcztcblx0fVxuXG5cdG9uUm93U2VsZWN0ZWRSZWFkTW9kZWwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFJvd1NlbGVjdGVkUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0ZWRSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnZXRTZWxlY3RlZEl0ZW1JZHMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3RlZFJlcG9zaXRvcnkuZ2V0KHN0cnVjdHVyZUlkKS5nZXRBbGwoKTtcblx0fVxuXG5cdG9uU2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxBcnJheTxzdHJpbmc+PiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0ZWRSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgbWFwKChybTogUm93U2VsZWN0ZWRSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBybS5nZXRBbGwoKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25Nb2RlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogT2JzZXJ2YWJsZTxSb3dTZWxlY3Rpb25Nb2RlPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==