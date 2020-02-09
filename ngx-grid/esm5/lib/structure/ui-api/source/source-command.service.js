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
import { StructureFieldUiRepository } from '../structure/field/structure.field.ui-repository';
import { SourceReadModelService } from './source-read-model.service';
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
    SourceCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceCommandService.ctorParameters = function () { return [
        { type: SourceDispatcher },
        { type: StructureFieldUiRepository },
        { type: SourceReadModelService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc291cmNlL3NvdXJjZS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFJMUg7SUFDMEMsZ0RBQVE7SUFFakQsOEJBQW9CLGdCQUFrQyxFQUMzQywwQkFBc0QsRUFDdEQsa0JBQTBDO1FBRnJELFlBR0MsaUJBQU8sU0FDUDtRQUptQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLGdDQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUF3Qjs7SUFFckQsQ0FBQzs7Ozs7O0lBRUQsd0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFpQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELHlDQUFVOzs7OztJQUFWLFVBQVcsT0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCx1Q0FBUTs7Ozs7SUFBUixVQUFTLE1BQXFDLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDM0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCw4Q0FBZTs7Ozs7OztJQUFmLFVBQWdCLFNBQWlCLEVBQUUsVUFBa0IsRUFBRSxLQUFVLEVBQUUsV0FBNEM7UUFBL0csaUJBNEJDO1FBNUJrRSw0QkFBQSxFQUFBLCtCQUE0Qzs7WUFFeEcsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0I7YUFDakMsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFFBQTJCO1lBQy9CLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUNGOztZQUVBLFFBQVEsR0FBRyxJQUFJLENBQUMsMEJBQTBCO2FBQ3pDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFFNUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7YUFDcEIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBaUI7O2dCQUV0QixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3RCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRWxCLEtBQUksQ0FBQyxRQUFRLENBQ1osSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUNwRSxXQUFXLENBQ1gsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBakRELFVBQVU7Ozs7Z0JBVEYsZ0JBQWdCO2dCQUNoQiwwQkFBMEI7Z0JBQzFCLHNCQUFzQjs7SUEwRC9CLDJCQUFDO0NBQUEsQUFuREQsQ0FDMEMsUUFBUSxHQWtEakQ7U0FsRFksb0JBQW9COzs7Ozs7SUFFcEIsZ0RBQTBDOzs7OztJQUNuRCwwREFBOEQ7Ozs7O0lBQzlELGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHppcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9jb21tYW5kL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc3RydWN0dXJlL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuL3NvdXJjZS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IGdsb2JhbFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2dsb2JhbC1zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlQ29tbWFuZFNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VRdWVyeVNlcnZpY2U6IFNvdXJjZVJlYWRNb2RlbFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0TG9hZGluZyhzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5lZGl0SXRlbShzdHJ1Y3R1cmVJZCwgcGFyYW1zKTtcblx0fVxuXG5cdGVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXg6IG51bWJlciwgZmllbGRJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkJCA9IHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdC5vblNpbmdsZUVudGl0aWVzKClcblx0XHRcdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0bWFwKChlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbnRpdGllc1tpdGVtSW5kZXhdLmdldElkKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdGNvbnN0IGZpZWxkSWQkID0gdGhpcy5zdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeVxuXHRcdFx0XHRcdFx0XHQgLm9uRmllbGRzKHN0cnVjdHVyZUlkKTtcblxuXHRcdHppcChpdGVtSWQkLCBmaWVsZElkJClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChhcnJheTogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGl0ZW1JZCA9IGFycmF5WzBdLFxuXHRcdFx0XHRcdGZpZWxkcyA9IGFycmF5WzFdO1xuXG5cdFx0XHRcdHRoaXMuZWRpdEl0ZW0oXG5cdFx0XHRcdFx0bmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRzW2ZpZWxkSW5kZXhdLCB2YWx1ZSksXG5cdFx0XHRcdFx0c3RydWN0dXJlSWRcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==