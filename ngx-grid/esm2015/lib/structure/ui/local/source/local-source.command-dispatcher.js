/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceCommandDispatcher } from '../../../ui-api/source/source.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SourceDispatcher } from '../../../domain/source/source.dispatcher';
import { StructureFieldUiRepository } from '../../../ui-api/field/structure.field.ui-repository';
import { StructureSourceWarehouse } from '../../../ui-api/source/structure-source.warehouse';
import { StructureEditSourceItemParams } from '../../../domain/source/origin/edit/structure.edit-source-item.params';
export class LocalSourceCommandDispatcher extends SourceCommandDispatcher {
    /**
     * @param {?} structureId
     * @param {?} sourceDispatcher
     * @param {?} structureFieldUiRepository
     * @param {?} sourceReadModelService
     */
    constructor(structureId, sourceDispatcher, structureFieldUiRepository, sourceReadModelService) {
        super(sourceDispatcher, structureFieldUiRepository, sourceReadModelService);
        this.structureId = structureId;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setOrigin(items) {
        super.setOrigin(items, this.structureId);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setLoading(enabled) {
        super.setLoading(enabled, this.structureId);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    editItem(params) {
        super.editItem(params, this.structureId);
    }
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @return {?}
     */
    editItemByIndex(itemIndex, fieldIndex, value) {
        super.editItemByIndex(itemIndex, fieldIndex, value, this.structureId);
    }
}
LocalSourceCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: SourceDispatcher },
    { type: StructureFieldUiRepository },
    { type: StructureSourceWarehouse }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSourceCommandDispatcher.prototype, "setOrigin", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSourceCommandDispatcher.prototype, "setLoading", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [StructureEditSourceItemParams]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSourceCommandDispatcher.prototype, "editItem", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSourceCommandDispatcher.prototype, "editItemByIndex", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUlySCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsdUJBQXVCOzs7Ozs7O0lBRXhFLFlBQTZCLFdBQXdCLEVBQ2xELGdCQUFrQyxFQUNsQywwQkFBc0QsRUFDdEQsc0JBQWdEO1FBQ2xELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSwwQkFBMEIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBSmhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBS3JELENBQUM7Ozs7O0lBR0QsU0FBUyxDQUFDLEtBQWlCO1FBQzFCLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCxRQUFRLENBQUMsTUFBcUM7UUFDN0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7Ozs7SUFHRCxlQUFlLENBQUMsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQVU7UUFDaEUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBNUJELFVBQVU7Ozs7WUFQRixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLDBCQUEwQjtZQUMxQix3QkFBd0I7O0FBZWhDO0lBREMsUUFBUTs7NkNBQ1EsS0FBSzs7NkRBRXJCO0FBR0Q7SUFEQyxRQUFROzs7OzhEQUdSO0FBR0Q7SUFEQyxRQUFROzs2Q0FDUSw2QkFBNkI7OzREQUU3QztBQUdEO0lBREMsUUFBUTs7OzttRUFHUjs7Ozs7O0lBekJXLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3NvdXJjZS9zdHJ1Y3R1cmUtc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5LFxuXHRcdFx0XHRzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UpIHtcblx0XHRzdXBlcihzb3VyY2VEaXNwYXRjaGVyLCBzdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSwgc291cmNlUmVhZE1vZGVsU2VydmljZSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0T3JpZ2luKGl0ZW1zLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRMb2FkaW5nKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRMb2FkaW5nKGVuYWJsZWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVkaXRJdGVtKHBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMpOiB2b2lkIHtcblx0XHRzdXBlci5lZGl0SXRlbShwYXJhbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXg6IG51bWJlciwgZmllbGRJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0c3VwZXIuZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleCwgZmllbGRJbmRleCwgdmFsdWUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==