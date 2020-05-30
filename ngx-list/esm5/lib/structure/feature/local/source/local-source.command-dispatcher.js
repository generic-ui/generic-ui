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
import { FieldUiRepository } from '../../../../../structure/field/domain-api/read/field.ui-repository';
import { StructureSourceWarehouse } from '../../../domain-api/source/structure-source.warehouse';
import { StructureEditSourceItemParams } from '../../../domain/source/origin/edit/structure.edit-source-item.params';
var LocalSourceCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSourceCommandDispatcher, _super);
    function LocalSourceCommandDispatcher(structureId, sourceDispatcher, structureFieldUiRepository, sourceReadModelService) {
        var _this = _super.call(this, sourceDispatcher, structureFieldUiRepository, sourceReadModelService) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    LocalSourceCommandDispatcher.prototype.setOrigin = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        _super.prototype.setOrigin.call(this, items, this.structureId);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    LocalSourceCommandDispatcher.prototype.setLoading = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        _super.prototype.setLoading.call(this, enabled, this.structureId);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    LocalSourceCommandDispatcher.prototype.editItem = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        _super.prototype.editItem.call(this, params, this.structureId);
    };
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @return {?}
     */
    LocalSourceCommandDispatcher.prototype.editItemByIndex = /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @return {?}
     */
    function (itemIndex, fieldIndex, value) {
        _super.prototype.editItemByIndex.call(this, itemIndex, fieldIndex, value, this.structureId);
    };
    LocalSourceCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSourceCommandDispatcher.ctorParameters = function () { return [
        { type: StructureId },
        { type: SourceDispatcher },
        { type: FieldUiRepository },
        { type: StructureSourceWarehouse }
    ]; };
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
    return LocalSourceCommandDispatcher;
}(SourceCommandDispatcher));
export { LocalSourceCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NvdXJjZS9sb2NhbC1zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBR3JIO0lBQ2tELHdEQUF1QjtJQUV4RSxzQ0FBNkIsV0FBd0IsRUFDbEQsZ0JBQWtDLEVBQ2xDLDBCQUE2QyxFQUM3QyxzQkFBZ0Q7UUFIbkQsWUFJQyxrQkFBTSxnQkFBZ0IsRUFBRSwwQkFBMEIsRUFBRSxzQkFBc0IsQ0FBQyxTQUMzRTtRQUw0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFLckQsQ0FBQzs7Ozs7SUFHRCxnREFBUzs7OztJQUFULFVBQVUsS0FBaUI7UUFDMUIsaUJBQU0sU0FBUyxZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFHRCxpREFBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsaUJBQU0sVUFBVSxZQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFHRCwrQ0FBUTs7OztJQUFSLFVBQVMsTUFBcUM7UUFDN0MsaUJBQU0sUUFBUSxZQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7OztJQUdELHNEQUFlOzs7Ozs7SUFBZixVQUFnQixTQUFpQixFQUFFLFVBQWtCLEVBQUUsS0FBVTtRQUNoRSxpQkFBTSxlQUFlLFlBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQTVCRCxVQUFVOzs7O2dCQVBGLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLHdCQUF3Qjs7SUFlaEM7UUFEQyxRQUFROztpREFDUSxLQUFLOztpRUFFckI7SUFHRDtRQURDLFFBQVE7Ozs7a0VBR1I7SUFHRDtRQURDLFFBQVE7O2lEQUNRLDZCQUE2Qjs7Z0VBRTdDO0lBR0Q7UUFEQyxRQUFROzs7O3VFQUdSO0lBRUYsbUNBQUM7Q0FBQSxBQTlCRCxDQUNrRCx1QkFBdUIsR0E2QnhFO1NBN0JZLDRCQUE0Qjs7Ozs7O0lBRTVCLG1EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IEZpZWxkVWlSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi1hcGkvcmVhZC9maWVsZC51aS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NvdXJjZS9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU291cmNlQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeTogRmllbGRVaVJlcG9zaXRvcnksXG5cdFx0XHRcdHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKHNvdXJjZURpc3BhdGNoZXIsIHN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5LCBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHN1cGVyLnNldExvYWRpbmcoZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZWRpdEl0ZW0ocGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IHZvaWQge1xuXHRcdHN1cGVyLmVkaXRJdGVtKHBhcmFtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleDogbnVtYmVyLCBmaWVsZEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRzdXBlci5lZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4LCBmaWVsZEluZGV4LCB2YWx1ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19