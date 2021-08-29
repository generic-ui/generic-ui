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
        return this.rowSelectedRepository.get(structureId).getValueOrNullOrThrowError().getAll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RDtJQUdDLDRCQUE2QixxQkFBNEMsRUFDckQsMEJBQXNELEVBQ3RELGVBQWdDO1FBRnZCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDckQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDcEQsQ0FBQzs7Ozs7SUFFRCw0Q0FBZTs7OztJQUFmLFVBQWdCLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDOztZQUVyRCxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7O1lBQ2xFLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDOztZQUVqRCxhQUFhLEdBQUcsRUFBRTs7WUFDdkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO2dDQUViLENBQUM7O2dCQUVILElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRXJCLElBQUksZUFBZSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQWxDLENBQWtDLEVBQUMsRUFBRTtnQkFDakYsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDckU7O1FBTkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFBekIsQ0FBQztTQU9UO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxtREFBc0I7Ozs7SUFBdEIsVUFBdUIsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbEUsT0FBTyxJQUFJLENBQUMscUJBQXFCO2FBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELCtDQUFrQjs7OztJQUFsQixVQUFtQixXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM5RCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxRixDQUFDOzs7OztJQUVELDJDQUFjOzs7O0lBQWQsVUFBZSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMxRCxPQUFPLElBQUksQ0FBQyxxQkFBcUI7YUFDM0IsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQyxFQUF3QjtZQUM1QixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxtQ0FBTTs7OztJQUFOLFVBQU8sV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbEQsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQWhERCxVQUFVOzs7O2dCQVJGLHFCQUFxQjtnQkFFckIsMEJBQTBCO2dCQUcxQixlQUFlOztJQXFEeEIseUJBQUM7Q0FBQSxBQWxERCxJQWtEQztTQWpEWSxrQkFBa0I7Ozs7OztJQUVsQixtREFBNkQ7Ozs7O0lBQ3RFLHdEQUF1RTs7Ozs7SUFDdkUsNkNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGVkLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9tb2RlL3Jvdy1zZWxlY3Rpb24tbW9kZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vc291cmNlLndhcmVob3VzZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbldhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3RlZFJlcG9zaXRvcnk6IFJvd1NlbGVjdGVkUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeTogUm93U2VsZWN0aW9uTW9kZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UpIHtcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IEFycmF5PFNlbGVjdGVkUm93PiB7XG5cblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuc291cmNlV2FyZWhvdXNlLmdldFByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2VsZWN0ZWRJdGVtSWRzID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW1JZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0bGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbaV07XG5cblx0XHRcdGlmIChzZWxlY3RlZEl0ZW1JZHMuc29tZSgoaXRlbUlkOiBzdHJpbmcpID0+IGl0ZW1JZCA9PT0gaXRlbS5nZXRJZCgpLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRcdHNlbGVjdGVkSXRlbXMucHVzaChuZXcgU2VsZWN0ZWRSb3coaXRlbS5nZXREYXRhKCksIGksIGl0ZW0uZ2V0SWQoKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtcztcblx0fVxuXG5cdG9uUm93U2VsZWN0ZWRSZWFkTW9kZWwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFJvd1NlbGVjdGVkUmVhZE1vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMucm93U2VsZWN0ZWRSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRnZXRTZWxlY3RlZEl0ZW1JZHMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3RlZFJlcG9zaXRvcnkuZ2V0KHN0cnVjdHVyZUlkKS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpLmdldEFsbCgpO1xuXHR9XG5cblx0b25TZWxlY3RlZFJvd3Moc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3RlZFJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBtYXAoKHJtOiBSb3dTZWxlY3RlZFJlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHJtLmdldEFsbCgpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbk1vZGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiBPYnNlcnZhYmxlPFJvd1NlbGVjdGlvbk1vZGU+IHtcblx0XHRyZXR1cm4gdGhpcy5yb3dTZWxlY3Rpb25Nb2RlUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19