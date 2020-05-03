/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
import { SourceDispatcher } from '../../domain/source/source.dispatcher';
import { StructureFieldUiRepository } from '../field/structure.field.ui-repository';
import { StructureSourceWarehouse } from './structure-source.warehouse';
import { structureGlobalId } from '../structure.global-id';
import { StructureEditSourceItemParams } from '../../domain/source/origin/edit/structure.edit-source-item.params';
var SourceCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(SourceCommandDispatcher, _super);
    function SourceCommandDispatcher(sourceDispatcher, structureFieldUiRepository, sourceReadModelService) {
        var _this = _super.call(this) || this;
        _this.sourceDispatcher = sourceDispatcher;
        _this.structureFieldUiRepository = structureFieldUiRepository;
        _this.sourceReadModelService = sourceReadModelService;
        return _this;
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandDispatcher.prototype.setOrigin = /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.sourceDispatcher.setOrigin(structureId, items);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandDispatcher.prototype.setLoading = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.sourceDispatcher.setLoading(structureId, enabled);
    };
    /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandDispatcher.prototype.editItem = /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    function (params, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.sourceDispatcher.editItem(structureId, params);
    };
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandDispatcher.prototype.editItemByIndex = /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    function (itemIndex, fieldIndex, value, structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = structureGlobalId; }
        /** @type {?} */
        var itemId$ = this.sourceReadModelService
            .onSingleEntities()
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        function (entities) {
            return entities[itemIndex].getId();
        })));
        /** @type {?} */
        var fieldId$ = this.structureFieldUiRepository
            .onFields(structureId);
        zip(itemId$, fieldId$)
            .pipe(take(1), this.takeUntil())
            .subscribe((/**
         * @param {?} array
         * @return {?}
         */
        function (array) {
            /** @type {?} */
            var itemId = array[0];
            /** @type {?} */
            var fields = array[1];
            _this.editItem(new StructureEditSourceItemParams(itemId, fields[fieldIndex], value), structureId);
        }));
    };
    SourceCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceCommandDispatcher.ctorParameters = function () { return [
        { type: SourceDispatcher },
        { type: StructureFieldUiRepository },
        { type: StructureSourceWarehouse }
    ]; };
    return SourceCommandDispatcher;
}(Reactive));
export { SourceCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.structureFieldUiRepository;
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.sourceReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUlsSDtJQUM2QyxtREFBUTtJQUVwRCxpQ0FBb0IsZ0JBQWtDLEVBQzNDLDBCQUFzRCxFQUN0RCxzQkFBZ0Q7UUFGM0QsWUFHQyxpQkFBTyxTQUNQO1FBSm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MsZ0NBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCOztJQUUzRCxDQUFDOzs7Ozs7SUFFRCwyQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWlCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBRUQsNENBQVU7Ozs7O0lBQVYsVUFBVyxPQUFnQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVELDBDQUFROzs7OztJQUFSLFVBQVMsTUFBcUMsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUMzRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7OztJQUVELGlEQUFlOzs7Ozs7O0lBQWYsVUFBZ0IsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQVUsRUFBRSxXQUE0QztRQUEvRyxpQkE0QkM7UUE1QmtFLDRCQUFBLEVBQUEsK0JBQTRDOztZQUV4RyxPQUFPLEdBQUcsSUFBSSxDQUFDLHNCQUFzQjthQUNyQyxnQkFBZ0IsRUFBRTthQUNsQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsUUFBMkI7WUFDL0IsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQ0Y7O1lBRUEsUUFBUSxHQUFHLElBQUksQ0FBQywwQkFBMEI7YUFDekMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUU1QixHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQzthQUNwQixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUFpQjs7Z0JBRXRCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztnQkFDdEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFbEIsS0FBSSxDQUFDLFFBQVEsQ0FDWixJQUFJLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQ3BFLFdBQVcsQ0FDWCxDQUFDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqREQsVUFBVTs7OztnQkFURixnQkFBZ0I7Z0JBQ2hCLDBCQUEwQjtnQkFDMUIsd0JBQXdCOztJQTBEakMsOEJBQUM7Q0FBQSxBQW5ERCxDQUM2QyxRQUFRLEdBa0RwRDtTQWxEWSx1QkFBdUI7Ozs7OztJQUV2QixtREFBMEM7Ozs7O0lBQ25ELDZEQUE4RDs7Ozs7SUFDOUQseURBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5cbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5IH0gZnJvbSAnLi4vZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRMb2FkaW5nKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdGVkaXRJdGVtKHBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLmVkaXRJdGVtKHN0cnVjdHVyZUlkLCBwYXJhbXMpO1xuXHR9XG5cblx0ZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleDogbnVtYmVyLCBmaWVsZEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQkID0gdGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdC5vblNpbmdsZUVudGl0aWVzKClcblx0XHRcdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0bWFwKChlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbnRpdGllc1tpdGVtSW5kZXhdLmdldElkKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdGNvbnN0IGZpZWxkSWQkID0gdGhpcy5zdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeVxuXHRcdFx0XHRcdFx0XHQgLm9uRmllbGRzKHN0cnVjdHVyZUlkKTtcblxuXHRcdHppcChpdGVtSWQkLCBmaWVsZElkJClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChhcnJheTogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGl0ZW1JZCA9IGFycmF5WzBdLFxuXHRcdFx0XHRcdGZpZWxkcyA9IGFycmF5WzFdO1xuXG5cdFx0XHRcdHRoaXMuZWRpdEl0ZW0oXG5cdFx0XHRcdFx0bmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRzW2ZpZWxkSW5kZXhdLCB2YWx1ZSksXG5cdFx0XHRcdFx0c3RydWN0dXJlSWRcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==