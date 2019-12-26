/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceCommandService } from '../../../ui-api/source/source-command.service';
import { StructureId } from '../../../domain/structure-id';
import { SourceDispatcher } from '../../../domain/source/command/source.dispatcher';
import { StructureFieldUiRepository } from '../../../ui-api/structure/field/structure.field.ui-repository';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
import { StructureEditSourceItemParams } from '../../../domain/source/command/origin/edit/structure.edit-source-item.params';
export class LocalSourceCommandService extends SourceCommandService {
    /**
     * @param {?} structureId
     * @param {?} sourceDispatcher
     * @param {?} structureFieldUiRepository
     * @param {?} sourceQueryService
     */
    constructor(structureId, sourceDispatcher, structureFieldUiRepository, sourceQueryService) {
        super(sourceDispatcher, structureFieldUiRepository, sourceQueryService);
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
LocalSourceCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceCommandService.ctorParameters = () => [
    { type: StructureId },
    { type: SourceDispatcher },
    { type: StructureFieldUiRepository },
    { type: SourceReadModelService }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSourceCommandService.prototype, "setOrigin", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSourceCommandService.prototype, "setLoading", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [StructureEditSourceItemParams]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSourceCommandService.prototype, "editItem", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSourceCommandService.prototype, "editItemByIndex", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUk3SCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsb0JBQW9COzs7Ozs7O0lBRWxFLFlBQTZCLFdBQXdCLEVBQ2xELGdCQUFrQyxFQUNsQywwQkFBc0QsRUFDdEQsa0JBQTBDO1FBQzVDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSwwQkFBMEIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBSjVDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBS3JELENBQUM7Ozs7O0lBR0QsU0FBUyxDQUFDLEtBQWlCO1FBQzFCLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCxRQUFRLENBQUMsTUFBcUM7UUFDN0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7Ozs7SUFHRCxlQUFlLENBQUMsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQVU7UUFDaEUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBNUJELFVBQVU7Ozs7WUFQRixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLDBCQUEwQjtZQUMxQixzQkFBc0I7O0FBZTlCO0lBREMsUUFBUTs7NkNBQ1EsS0FBSzs7MERBRXJCO0FBR0Q7SUFEQyxRQUFROzs7OzJEQUdSO0FBR0Q7SUFEQyxRQUFROzs2Q0FDUSw2QkFBNkI7O3lEQUU3QztBQUdEO0lBREMsUUFBUTs7OztnRUFHUjs7Ozs7O0lBekJXLGdEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc291cmNlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNvdXJjZUNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgU291cmNlQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeTogU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnksXG5cdFx0XHRcdHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSkge1xuXHRcdHN1cGVyKHNvdXJjZURpc3BhdGNoZXIsIHN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5LCBzb3VyY2VRdWVyeVNlcnZpY2UpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdHN1cGVyLnNldE9yaWdpbihpdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0TG9hZGluZyhlbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKTogdm9pZCB7XG5cdFx0c3VwZXIuZWRpdEl0ZW0ocGFyYW1zLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHN1cGVyLmVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXgsIGZpZWxkSW5kZXgsIHZhbHVlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=