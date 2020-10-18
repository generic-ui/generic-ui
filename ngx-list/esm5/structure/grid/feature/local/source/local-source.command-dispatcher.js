/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { StructureId } from '../../../../core/api/structure.id';
import { SourceDispatcher } from '../../../../source/core/domain/source.dispatcher';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
import { StructureEditSourceItemParams } from '../../../../source/core/domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../../../field/core/api/field.warehouse';
import { CommandDispatcher } from '@generic-ui/hermes';
var LocalSourceCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSourceCommandDispatcher, _super);
    function LocalSourceCommandDispatcher(structureId, commandDispatcher, sourceDispatcher, fieldWarehouse, sourceReadModelService) {
        var _this = _super.call(this, commandDispatcher, sourceDispatcher, fieldWarehouse, sourceReadModelService) || this;
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
        { type: CommandDispatcher },
        { type: SourceDispatcher },
        { type: FieldWarehouse },
        { type: SourceWarehouse }
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
}(SourceCommandInvoker));
export { LocalSourceCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZEO0lBQ2tELHdEQUFvQjtJQUVyRSxzQ0FBNkIsV0FBd0IsRUFDbEQsaUJBQW9DLEVBQ3BDLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixzQkFBdUM7UUFKMUMsWUFLQyxrQkFBTSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsc0JBQXNCLENBQUMsU0FDbEY7UUFONEIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBTXJELENBQUM7Ozs7O0lBR0QsZ0RBQVM7Ozs7SUFBVCxVQUFVLEtBQWlCO1FBQzFCLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBR0QsaURBQVU7Ozs7SUFBVixVQUFXLE9BQWdCO1FBQzFCLGlCQUFNLFVBQVUsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0QsK0NBQVE7Ozs7SUFBUixVQUFTLE1BQXFDO1FBQzdDLGlCQUFNLFFBQVEsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7Ozs7SUFHRCxzREFBZTs7Ozs7O0lBQWYsVUFBZ0IsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQVU7UUFDaEUsaUJBQU0sZUFBZSxZQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkE3QkQsVUFBVTs7OztnQkFSRixXQUFXO2dCQUtYLGlCQUFpQjtnQkFKakIsZ0JBQWdCO2dCQUdoQixjQUFjO2dCQUZkLGVBQWU7O0lBa0J2QjtRQURDLFFBQVE7O2lEQUNRLEtBQUs7O2lFQUVyQjtJQUdEO1FBREMsUUFBUTs7OztrRUFHUjtJQUdEO1FBREMsUUFBUTs7aURBQ1EsNkJBQTZCOztnRUFFN0M7SUFHRDtRQURDLFFBQVE7Ozs7dUVBR1I7SUFFRixtQ0FBQztDQUFBLEFBL0JELENBQ2tELG9CQUFvQixHQThCckU7U0E5QlksNEJBQTRCOzs7Ozs7SUFFNUIsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2FwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU291cmNlQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0XHRcdGZpZWxkV2FyZWhvdXNlOiBGaWVsZFdhcmVob3VzZSxcblx0XHRcdFx0c291cmNlUmVhZE1vZGVsU2VydmljZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY29tbWFuZERpc3BhdGNoZXIsIHNvdXJjZURpc3BhdGNoZXIsIGZpZWxkV2FyZWhvdXNlLCBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHN1cGVyLnNldExvYWRpbmcoZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZWRpdEl0ZW0ocGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IHZvaWQge1xuXHRcdHN1cGVyLmVkaXRJdGVtKHBhcmFtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleDogbnVtYmVyLCBmaWVsZEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRzdXBlci5lZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4LCBmaWVsZEluZGV4LCB2YWx1ZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19