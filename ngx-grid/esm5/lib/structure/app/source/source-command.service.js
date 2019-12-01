/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
import { SourceDispatcher } from '../../domain/source/command/source.dispatcher';
import { StructureFieldUiRepository } from '../../ui-api/structure/field/structure.field.ui-repository';
import { SourceQueryService } from './source-query.service';
import { globalStructureId } from '../../domain/global-structure-id';
import { StructureEditSourceItemParams } from '../../domain/source/command/origin/edit/structure.edit-source-item.params';
var SourceCommandService = /** @class */ (function (_super) {
    tslib_1.__extends(SourceCommandService, _super);
    function SourceCommandService(sourceDispatcher, structureFieldUiRepository, sourceQueryService) {
        var _this = _super.call(this) || this;
        _this.sourceDispatcher = sourceDispatcher;
        _this.structureFieldUiRepository = structureFieldUiRepository;
        _this.sourceQueryService = sourceQueryService;
        return _this;
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandService.prototype.setOrigin = /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.sourceDispatcher.setOrigin(structureId, items);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandService.prototype.setLoading = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.sourceDispatcher.setLoading(structureId, enabled);
    };
    /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandService.prototype.editItem = /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    function (params, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.sourceDispatcher.editItem(structureId, params);
    };
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandService.prototype.editItemByIndex = /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    function (itemIndex, fieldIndex, value, structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        /** @type {?} */
        var itemId$ = this.sourceQueryService
            .selectOne()
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        function (entities) {
            return entities[itemIndex].getId();
        })));
        /** @type {?} */
        var fieldId$ = this.structureFieldUiRepository
            .selectFields(structureId);
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
    SourceCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceCommandService.ctorParameters = function () { return [
        { type: SourceDispatcher },
        { type: StructureFieldUiRepository },
        { type: SourceQueryService }
    ]; };
    return SourceCommandService;
}(Reactive));
export { SourceCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.structureFieldUiRepository;
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.sourceQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvc291cmNlL3NvdXJjZS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDeEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFLMUg7SUFDMEMsZ0RBQVE7SUFFakQsOEJBQW9CLGdCQUFrQyxFQUMzQywwQkFBc0QsRUFDdEQsa0JBQXNDO1FBRmpELFlBR0MsaUJBQU8sU0FDUDtRQUptQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjs7SUFFakQsQ0FBQzs7Ozs7O0lBRUQsd0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFpQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELHlDQUFVOzs7OztJQUFWLFVBQVcsT0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCx1Q0FBUTs7Ozs7SUFBUixVQUFTLE1BQXFDLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDM0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCw4Q0FBZTs7Ozs7OztJQUFmLFVBQWdCLFNBQWlCLEVBQUUsVUFBa0IsRUFBRSxLQUFVLEVBQUUsV0FBNEM7UUFBL0csaUJBNEJDO1FBNUJrRSw0QkFBQSxFQUFBLCtCQUE0Qzs7WUFFeEcsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFFBQXVCO1lBQzNCLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUNGOztZQUVBLFFBQVEsR0FBRyxJQUFJLENBQUMsMEJBQTBCO2FBQ3pDLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFFaEMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7YUFDcEIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBaUI7O2dCQUV0QixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3RCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRWxCLEtBQUksQ0FBQyxRQUFRLENBQ1osSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUNwRSxXQUFXLENBQ1gsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBakRELFVBQVU7Ozs7Z0JBVkYsZ0JBQWdCO2dCQUNoQiwwQkFBMEI7Z0JBQzFCLGtCQUFrQjs7SUEyRDNCLDJCQUFDO0NBQUEsQUFuREQsQ0FDMEMsUUFBUSxHQWtEakQ7U0FsRFksb0JBQW9COzs7Ozs7SUFFcEIsZ0RBQTBDOzs7OztJQUNuRCwwREFBOEQ7Ozs7O0lBQzlELGtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHppcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VRdWVyeVNlcnZpY2UgfSBmcm9tICcuL3NvdXJjZS1xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9jb21tYW5kL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2VudGl0eSc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlQ29tbWFuZFNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VRdWVyeVNlcnZpY2U6IFNvdXJjZVF1ZXJ5U2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRMb2FkaW5nKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdGVkaXRJdGVtKHBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLmVkaXRJdGVtKHN0cnVjdHVyZUlkLCBwYXJhbXMpO1xuXHR9XG5cblx0ZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleDogbnVtYmVyLCBmaWVsZEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQkID0gdGhpcy5zb3VyY2VRdWVyeVNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0LnNlbGVjdE9uZSgpXG5cdFx0XHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdG1hcCgoZW50aXRpZXM6IEFycmF5PEVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbnRpdGllc1tpdGVtSW5kZXhdLmdldElkKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdGNvbnN0IGZpZWxkSWQkID0gdGhpcy5zdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeVxuXHRcdFx0XHRcdFx0XHQgLnNlbGVjdEZpZWxkcyhzdHJ1Y3R1cmVJZCk7XG5cblx0XHR6aXAoaXRlbUlkJCwgZmllbGRJZCQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoYXJyYXk6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBpdGVtSWQgPSBhcnJheVswXSxcblx0XHRcdFx0XHRmaWVsZHMgPSBhcnJheVsxXTtcblxuXHRcdFx0XHR0aGlzLmVkaXRJdGVtKFxuXHRcdFx0XHRcdG5ldyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyhpdGVtSWQsIGZpZWxkc1tmaWVsZEluZGV4XSwgdmFsdWUpLFxuXHRcdFx0XHRcdHN0cnVjdHVyZUlkXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=