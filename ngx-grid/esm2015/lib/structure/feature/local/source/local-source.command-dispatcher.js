/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceCommandDispatcher } from '../../../domain-api/source/source.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SourceDispatcher } from '../../../domain/source/source.dispatcher';
import { StructureFieldUiRepository } from '../../../domain-api/field/structure.field.ui-repository';
import { StructureSourceWarehouse } from '../../../domain-api/source/structure-source.warehouse';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NvdXJjZS9sb2NhbC1zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBSXJILE1BQU0sT0FBTyw0QkFBNkIsU0FBUSx1QkFBdUI7Ozs7Ozs7SUFFeEUsWUFBNkIsV0FBd0IsRUFDbEQsZ0JBQWtDLEVBQ2xDLDBCQUFzRCxFQUN0RCxzQkFBZ0Q7UUFDbEQsS0FBSyxDQUFDLGdCQUFnQixFQUFFLDBCQUEwQixFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFKaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFLckQsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsS0FBaUI7UUFDMUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUdELFFBQVEsQ0FBQyxNQUFxQztRQUM3QyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7OztJQUdELGVBQWUsQ0FBQyxTQUFpQixFQUFFLFVBQWtCLEVBQUUsS0FBVTtRQUNoRSxLQUFLLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7WUE1QkQsVUFBVTs7OztZQVBGLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsMEJBQTBCO1lBQzFCLHdCQUF3Qjs7QUFlaEM7SUFEQyxRQUFROzs2Q0FDUSxLQUFLOzs2REFFckI7QUFHRDtJQURDLFFBQVE7Ozs7OERBR1I7QUFHRDtJQURDLFFBQVE7OzZDQUNRLDZCQUE2Qjs7NERBRTdDO0FBR0Q7SUFEQyxRQUFROzs7O21FQUdSOzs7Ozs7SUF6QlcsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU291cmNlQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeTogU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnksXG5cdFx0XHRcdHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKHNvdXJjZURpc3BhdGNoZXIsIHN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5LCBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHN1cGVyLnNldExvYWRpbmcoZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZWRpdEl0ZW0ocGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IHZvaWQge1xuXHRcdHN1cGVyLmVkaXRJdGVtKHBhcmFtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleDogbnVtYmVyLCBmaWVsZEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRzdXBlci5lZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4LCBmaWVsZEluZGV4LCB2YWx1ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19